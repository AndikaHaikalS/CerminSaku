
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator
from typing import Optional, List
import numpy as np, pandas as pd, joblib, os
import tensorflow as tf
import anthropic
from datetime import datetime

app = FastAPI(title="CerminSaku AI API", version="2.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"],
                   allow_methods=["*"], allow_headers=["*"])

# Artifacts dimuat saat startup
tf_model  = tf.keras.models.load_model("best_tf_model.keras")
scaler    = joblib.load("scaler.pkl")
le_cat    = joblib.load("label_encoder.pkl")
ai_client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY",""))

class TxRequest(BaseModel):
    amount: float = Field(..., gt=0)
    type: str
    date: str
    include_ai: bool = False

    @validator("type")
    def check_type(cls, v):
        if v not in ["Income","Expense"]:
            raise ValueError("harus Income atau Expense")
        return v

class PredResponse(BaseModel):
    predicted_category: str
    confidence: float
    top3: List[dict]
    ai_insight: Optional[str] = None

def featurize(amount, tx_type, date_str):
    d = pd.to_datetime(date_str)
    te = 1 if tx_type == "Income" else 0
    la = np.log1p(amount)
    return np.array([[
        amount, la, np.sqrt(amount), min(int(amount/500),9),
        te, amount*te, la*te,
        d.year, d.month, d.day, d.dayofweek, d.quarter,
        int(d.dayofweek in [5,6]), int(d.is_month_end),
        int(d.is_month_start),
        np.sin(2*np.pi*d.month/12), np.cos(2*np.pi*d.month/12)
    ]])

@app.get("/")
def root(): return {"app": "CerminSaku AI", "docs": "/docs"}

@app.get("/health")
def health(): return {"status":"ok","ts": datetime.now().isoformat()}

@app.post("/predict", response_model=PredResponse)
def predict(req: TxRequest):
    feat = featurize(req.amount, req.type, req.date)
    proba = tf_model.predict(scaler.transform(feat).astype("float32"), verbose=0)[0]
    idx = np.argsort(proba)[::-1]
    top3 = [{"category": le_cat.classes_[i], "probability": float(proba[i])} for i in idx[:3]]
    ai = None
    if req.include_ai:
        p = f"Transaksi {req.type} Rp {req.amount:,.0f} kategori {top3[0]['category']}. Tips singkat?"
        ai = ai_client.messages.create(
            model="claude-sonnet-4-20250514", max_tokens=150,
            messages=[{"role":"user","content":p}]).content[0].text
    return PredResponse(predicted_category=top3[0]["category"],
                        confidence=top3[0]["probability"], top3=top3, ai_insight=ai)

@app.get("/categories")
def cats(): return {"categories": list(le_cat.classes_)}

# uvicorn main_api:app --reload --port 8000
