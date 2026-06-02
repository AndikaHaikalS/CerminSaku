require('dotenv').config();

const express = require('express');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes); 

app.listen(PORT, () => {
  console.log(`Server Backend Modular menyala di http://localhost:${PORT}`);
});