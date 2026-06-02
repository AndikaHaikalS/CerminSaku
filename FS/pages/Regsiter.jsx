import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle
} from "lucide-react";

import logo from "../asset/logo.png";
import "../style/login.css";

export default function ForgotPassword() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [
    newPassword,
    setNewPassword
  ] = useState("");

  const [
    showPassword,
    setShowPassword
  ] = useState(false);

  // TOAST STATE
  const [toast, setToast] =
    useState({
      show: false,
      message: "",
      type: "success"
    });

  // TOAST FUNCTION
  const showToast = (
    message,
    type = "success"
  ) => {

    setToast({
      show: true,
      message,
      type
    });

    setTimeout(() => {
      setToast(prev => ({
        ...prev,
        show: false
      }));
    }, 2500);
  };

  // RESET PASSWORD
  const handleReset =
    async () => {

    if (
      !email ||
      !newPassword
    ) {
      showToast(
        "Isi email dan password baru!",
        "error"
      );
      return;
    }

    try {

      const response =
        await fetch(
          "http://localhost:3000/api/auth/reset-password",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                email,
                newPassword
              })
          }
        );

      const data =
        await response.json();

      if (data.success) {

        showToast(
          "Password berhasil diperbarui!",
          "success"
        );

        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } else {

        showToast(
          data.message ||
          "Gagal mengubah password.",
          "error"
        );
      }

    } catch (error) {

      console.error(error);

      showToast(
        "Terjadi kesalahan koneksi ke server.",
        "error"
      );
    }
  };

  return (
    <div className="login-page">

      {/* TOAST */}
      {toast.show && (
        <div
          className={`
          toast-login
          ${toast.type}
          `}
        >
          <div className="toast-content-login">

            <div className="toast-icon-wrapper">

              {toast.type ===
              "success" ? (
                <CheckCircle
                  size={20}
                />
              ) : (
                <AlertCircle
                  size={20}
                />
              )}

            </div>

            <span>
              {toast.message}
            </span>

          </div>
        </div>
      )}

      <div className="login-ambient-glow login-sphere-one"></div>
      <div className="login-ambient-glow login-sphere-two"></div>

      <div className="login-central-shell">

        <div className="login-logo">
          <img
            src={logo}
            alt="CerminSaku Logo"
          />
        </div>

        <div className="login-card">

          <h2>
            Lupa Password
          </h2>

          <p className="sub">
            Masukkan email
            terdaftar dan buat
            password baru
          </p>

          {/* EMAIL */}
          <div className="login-field-group">

            <label>
              Email
            </label>

            <div className="input-box">

              <Mail
                size={16}
              />

              <input
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

            </div>
          </div>

          {/* PASSWORD */}
          <div className="login-field-group">

            <label>
              Password Baru
            </label>

            <div className="input-box">

              <Lock
                size={16}
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Masukkan password baru"
                value={
                  newPassword
                }
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
              />

              {showPassword ? (
                <Eye
                  size={18}
                  className="eye"
                  onClick={() =>
                    setShowPassword(
                      false
                    )
                  }
                />
              ) : (
                <EyeOff
                  size={18}
                  className="eye"
                  onClick={() =>
                    setShowPassword(
                      true
                    )
                  }
                />
              )}

            </div>
          </div>

          <button
            className="login-btn"
            onClick={
              handleReset
            }
          >
            Perbarui Password
          </button>

          <p className="bottom-text">

            Ingat password?

            <span
              onClick={() =>
                navigate(
                  "/login"
                )
              }
            >
              {" "}
              Kembali Masuk
            </span>

          </p>

        </div>
      </div>
    </div>
  );
}