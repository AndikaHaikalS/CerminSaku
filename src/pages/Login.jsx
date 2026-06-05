import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import logo from "../asset/logo.png";
import "../style/login.css";

export default function Login() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Akun belum terdaftar!");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login berhasil!");
      localStorage.setItem("isLogin", "true");
      navigate("/dashboard"); 
    } else {
      alert("Email atau password salah!");
    }
  };
 
  return (
    <div className="login-page">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="login-ambient-glow login-sphere-one"></div>
      <div className="login-ambient-glow login-sphere-two"></div>

      <div className="login-central-shell">
        {/* LOGO AREA */}
        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* PREMIUM GLASS CARD */}
        <div className="login-card">
          <h2>Masuk</h2>
          <p className="sub">
            Masukkan email dan password untuk mengakses CerminSaku
          </p>

          {/* EMAIL */}
          <div className="login-field-group">
            <label>Email</label>
            <div className="input-box">
              <Mail size={18} />
              <input 
                type="email" 
                placeholder="email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="login-field-group">
            <div className="label-row">
              <label>Password</label>
              <span
                className="forgot"
                onClick={() => navigate("/forgot-password")}
              >
                Lupa Password?
              </span>
            </div>

            <div className="input-box">
              <Lock size={18} />
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <Eye 
                  size={18} 
                  className="eye"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff 
                  size={18} 
                  className="eye"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button className="login-btn" onClick={handleLogin}>
            Masuk
          </button>

          <p className="bottom-text">
            Belum punya akun?{" "}
            <span onClick={() => navigate("/register")}>
              Daftar sekarang
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}