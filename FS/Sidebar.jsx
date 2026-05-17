import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CreditCard,
  BarChart2,
  Bell,
  RefreshCw,
  Target,
  Flame,
  User,
  LogOut,
  History,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import "./Sidebar.css";
import logo from "../asset/logo.png";


const NAV_ITEMS = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "transactions", icon: CreditCard, label: "Transaksi" },
  { id: "notification", icon: Bell, label: "Notifikasi", badge: 3 },
];

const FEATURE_ITEMS = [
  { id: "savings", icon: Target, label: "Dream Savings" },
   { id: "riwayat", icon: History, label: "Riwayat" },
];

const ACCOUNT_ITEMS = [
  { id: "profile", icon: User, label: "Profil" },
];

export default function Sidebar({ activePage, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState(activePage || "dashboard");
  const navigate = useNavigate();

  const routes = {
    dashboard: "/dashboard",
    transactions: "/Transactions",
    analytics: "/analytics",
    notification: "/notification",
    subscriptions: "/Subscription", 
    savings: "/savings",
    streak: "/streak",
    riwayat: "/history",
    profile: "/profile",
  };

  const handleNav = (id) => {
    setPage(id);
    if (routes[id]) {
    navigate(routes[id]);
  }
};
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <div className="logo-box">
          <img src={logo} alt="CerminSaku" />
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <p className="section">Menu Utama</p>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} item={item} page={page} collapsed={collapsed} onClick={handleNav} />
        ))}

        <p className="section">Fitur</p>
        {FEATURE_ITEMS.map((item) => (
          <NavItem key={item.id} item={item} page={page} collapsed={collapsed} onClick={handleNav} />
        ))}

        <p className="section">Akun</p>
        {ACCOUNT_ITEMS.map((item) => (
          <NavItem key={item.id} item={item} page={page} collapsed={collapsed} onClick={handleNav} />
        ))}
      </div>

      {/* User */}
      <div className="user">
        <div className="avatar">BS</div>
        {!collapsed && (
          <div className="user-info">
            <p>Budi Santoso</p>
            <span>budi@email.com</span>
          </div>
        )}
        {!collapsed && <LogOut size={16} className="logout" />}
      </div>

      {/* Toggle */}
      <button className="toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
}

function NavItem({ item, page, collapsed, onClick }) {
  const Icon = item.icon;
  const active = page === item.id;

  return (
    <div className={`item ${active ? "active" : ""}`} onClick={() => onClick(item.id)}>
      <Icon size={18} />
      {!collapsed && <span>{item.label}</span>}
      {item.badge && !collapsed && <div className="badge">{item.badge}</div>}
    </div>
  );
}
