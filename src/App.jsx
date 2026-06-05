import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./FS/Register";
import Dashboard from "./pages/Dashboard";
import Subscription from "./pages/Subscription";
import Transaction from "./pages/Transaction";
import Notification from "./pages/Notification";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/transactions" element={<Transaction />} />
      <Route path="/notification" element={<Notification />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />
    </Routes>
  );
}

export default App;