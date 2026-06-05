import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import logo from "../asset/logo.png";
import "../style/login.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Akun tidak ditemukan");
      return;
    }

    if (savedUser.email !== email) {
      alert("Email tidak cocok");
      return;
    }

    savedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(savedUser));

    alert("Password berhasil diubah!");
    navigate("/login");
  };

  return (
    <div className="login-page">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="login-ambient-glow login-sphere-one"></div>
      <div className="login-ambient-glow login-sphere-two"></div>

      <div className="login-central-shell">
        {/* LOGO AREA */}
        <div className="login-logo">
          <img src={logo} alt="CerminSaku Logo" />
        </div>

        {/* PREMIUM GLASS CARD */}
        <div className="login-card">
          <h2>Lupa Password</h2>
          <p className="sub">Masukkan email terdaftar dan buat password barumu</p>

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

          {/* NEW PASSWORD INPUT */}
          <div className="login-field-group">
            <label>Password Baru</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type="password"
                placeholder="Masukkan Password baru"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          {/* SUBMIT BUTTON WITH INTRO EFFECT */}
          <button className="login-btn" onClick={handleReset}>
            Perbarui Password
          </button>

          {/* BOTTOM LINK */}
          <p className="bottom-text">
            Ingat password-mu?{" "}
            <span onClick={() => navigate("/login")}>Kembali Masuk</span>
          </p>
        </div>
      </div>
    </div>
  );
}