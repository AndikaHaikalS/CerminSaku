import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CreditCard,
  Target,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  AlertTriangle
} from "lucide-react";

import "../components/Sidebar.css";
import logo from "../asset/logo.png";

const NAV_ITEMS = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard"
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transaksi"
  },
];

const FEATURE_ITEMS = [
  {
    id: "savings",
    icon: Target,
    label: "Dream Savings"
  },
];

const ACCOUNT_ITEMS = [
  {
    id: "profile",
    icon: User,
    label: "Profil"
  },
];

export default function Sidebar({
  activePage
}) {

  const [
    collapsed,
    setCollapsed
  ] = useState(false);

  const [
    page,
    setPage
  ] = useState(
    activePage ||
    "dashboard"
  );

  const [
    showLogoutModal,
    setShowLogoutModal
  ] = useState(false);

  const navigate =
    useNavigate();

  // AMBIL USER LOGIN
  const user =
    JSON.parse(
      localStorage.getItem(
        "userData"
      )
    );

  useEffect(() => {
    if (activePage) {
      setPage(activePage);
    }
  }, [activePage]);

  const routes = {
    dashboard:
      "/dashboard",

    transactions:
      "/transactions",

    savings:
      "/savings",

    profile:
      "/profile",
  };

  const handleNav =
    (id) => {

    setPage(id);

    if (routes[id]) {
      navigate(
        routes[id]
      );
    }
  };

  const handleConfirmLogout =
    () => {

    localStorage.removeItem(
      "isLogin"
    );

    localStorage.removeItem(
      "userData"
    );

    setShowLogoutModal(
      false
    );

    navigate("/");
  };

  return (
    <>
      <aside
        className={`
        sidebar-container
        ${
          collapsed
            ? "is-collapsed"
            : ""
        }
        `}
      >

        {/* HEADER */}
        <div className="brand-header">

          <div className="brand-wrapper">

            <div className="brand-logo">
              <img
                src={logo}
                alt="CerminSaku"
              />
            </div>

          </div>

          <button
            className="
            collapse-trigger"
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
          >
            {collapsed ? (
              <ChevronRight
                size={14}
              />
            ) : (
              <ChevronLeft
                size={14}
              />
            )}
          </button>

        </div>

        {/* NAVIGATION */}
        <nav className="nav-workspace">

          {/* UTAMA */}
          <div className="nav-group">

            {!collapsed && (
              <span className="group-label">
                Utama
              </span>
            )}

            {NAV_ITEMS.map(
              (item) => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  page={page}
                  collapsed={
                    collapsed
                  }
                  onClick={
                    handleNav
                  }
                />
              )
            )}
          </div>

          {/* FITUR */}
          <div className="nav-group">

            {!collapsed && (
              <span className="group-label">
                Fitur
              </span>
            )}

            {FEATURE_ITEMS.map(
              (item) => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  page={page}
                  collapsed={
                    collapsed
                  }
                  onClick={
                    handleNav
                  }
                />
              )
            )}
          </div>

          {/* AKUN */}
          <div className="nav-group">

            {!collapsed && (
              <span className="group-label">
                Akun
              </span>
            )}

            {ACCOUNT_ITEMS.map(
              (item) => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  page={page}
                  collapsed={
                    collapsed
                  }
                  onClick={
                    handleNav
                  }
                />
              )
            )}
          </div>

        </nav>

        {/* FOOTER ACCOUNT */}
        <div className="account-footer">

          <div className="account-card">

            <div className="user-avatar">
              {user?.name
                ?.charAt(0)
                ?.toUpperCase() ||
                "U"}
            </div>

            {!collapsed && (
              <div className="account-meta">

                <span className="account-name">
                  {user?.name ||
                    "Pengguna"}
                </span>

                <span className="account-role">
                  {user?.email ||
                    "email@domain.com"}
                </span>

              </div>
            )}

            <button
              className="
              action-logout"
              title="Log Out"
              onClick={() =>
                setShowLogoutModal(
                  true
                )
              }
            >
              <LogOut
                size={15}
              />
            </button>

          </div>

        </div>

      </aside>

      {/* MODAL LOGOUT */}
      {showLogoutModal && (
        <div className="sidebar-popup-backdrop-blur">

          <div className="sidebar-popup-modal-body">

            <div className="popup-icon-warning-wrapper">
              <AlertTriangle
                size={24}
              />
            </div>

            <div className="popup-text-content">

              <h3>
                Konfirmasi
                Keluar Akun
              </h3>

              <p>
                Apakah Anda
                yakin ingin
                keluar dari
                sesi
                CerminSaku?
              </p>

            </div>

            <div className="popup-action-btn-row">

              <button
                className="
                popup-btn-dismiss"
                onClick={() =>
                  setShowLogoutModal(
                    false
                  )
                }
              >
                Batal
              </button>

              <button
                className="
                popup-btn-execute"
                onClick={
                  handleConfirmLogout
                }
              >
                Keluar Akun
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

function NavigationItem({
  item,
  page,
  collapsed,
  onClick
}) {

  const Icon =
    item.icon;

  const isActive =
    page === item.id;

  return (
    <button
      className={`
      nav-link
      ${
        isActive
          ? "is-active"
          : ""
      }
      `}
      onClick={() =>
        onClick(item.id)
      }
    >
      <div className="icon-holder">
        <Icon
          size={18}
          strokeWidth={
            isActive
              ? 2.2
              : 1.8
          }
        />
      </div>

      {!collapsed && (
        <span className="link-text">
          {item.label}
        </span>
      )}
    </button>
  );
}