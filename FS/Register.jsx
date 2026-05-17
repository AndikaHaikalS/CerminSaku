import { useState } from "react";
import { User, Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../asset/logo.png";
import "../style/login.css"; 

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirm) {
      alert("Isi semua data dulu!");
      return;
    }

    if (password !== confirm) {
      alert("Password tidak sama!");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Berhasil daftar!");
    navigate("/login"); 
  };

  return (
    <div className="login-page">
      <div className="login-ambient-glow login-sphere-one"></div>
      <div className="login-ambient-glow login-sphere-two"></div>

      <div className="login-central-shell">
        {/* LOGO AREA */}
        <div className="login-logo">
          <img src={logo} alt="CerminSaku Logo" />
        </div>

        <div className="login-card">
          <h2>Daftar Akun</h2>
          <p className="sub">Mulai kelola finansialmu lebih pintar bersama CerminSaku</p>

          {/* NAME INPUT */}
          <div className="login-field-group">
            <label>Nama Lengkap</label>
            <div className="input-box">
              <User size={16} />
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* EMAIL INPUT */}
          <div className="login-field-group">
            <label>Email</label>
            <div className="input-box">
              <Mail size={16} />
              <input
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD INPUT */}
          <div className="login-field-group">
            <label>Password</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Buat Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <Eye size={16} className="eye" onClick={() => setShowPassword(false)} />
              ) : (
                <EyeOff size={16} className="eye" onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>

          {/* CONFIRM PASSWORD INPUT */}
          <div className="login-field-group">
            <label>Konfirmasi Password</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Ulangi Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              {showConfirm ? (
                <Eye size={16} className="eye" onClick={() => setShowConfirm(false)} />
              ) : (
                <EyeOff size={16} className="eye" onClick={() => setShowConfirm(true)} />
              )}
            </div>
            {confirm && password !== confirm && (
              <p style={{ color: "#EF4444", fontSize: "11px", marginTop: "4px", fontWeight: "500" }}>
                * Password tidak sama
              </p>
            )}
          </div>
    
          <button className="login-btn" onClick={handleRegister}>
            Daftar Sekarang
          </button>

          {/* BOTTOM LINK */}
          <p className="bottom-text">
            Sudah punya akun?{" "}
            <span onClick={() => navigate("/login")}>Masuk</span>
          </p>
        </div>
      </div>
    </div>
  );
}