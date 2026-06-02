import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import ForgotPassword from "./pages/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import VerifyOtp from "./pages/VerifyOtp";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transaction />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />
      <Route path="/tentang-kami" element={<AboutUs />} />
      <Route
        path="/verify-otp"
        element={<VerifyOtp />}
      />
    </Routes>
    
  );
}

export default App;