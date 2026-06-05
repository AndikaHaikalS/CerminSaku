import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../style/subs.css";

import {
  Music2,
  MonitorPlay,
  Cloud,
  GraduationCap,
  ShoppingBag,
  Tv
} from "lucide-react";

export default function DashboardLayout({
  activePage,
  onNavigate,
  collapsed,
  setCollapsed
}) {

  const subscriptions = [
    {
      name: "Netflix",
      plan: "Standard 2 Layar",
      billing: "Bulanan",
      price: "Rp 186.000",
      due: "1 Mei 2026",
      badge: "3 hari",
      icon: <MonitorPlay size={22} />,
      active: true
    },
    {
      name: "Spotify Premium",
      plan: "Individual",
      billing: "Bulanan",
      price: "Rp 54.990",
      due: "5 Mei 2026",
      badge: "7 hari",
      icon: <Music2 size={22} />,
      active: false
    },
    {
      name: "Google One 200GB",
      plan: "200 GB",
      billing: "Bulanan",
      price: "Rp 38.990",
      due: "10 Mei 2026",
      badge: "12 hari",
      icon: <Cloud size={22} />,
      active: false
    },
    {
      name: "Disney+ Hotstar",
      plan: "Premium",
      billing: "Bulanan",
      price: "Rp 49.000",
      due: "15 Mei 2026",
      badge: "17 hari",
      icon: <Tv size={22} />,
      active: false
    },
    {
      name: "Tokopedia Gold",
      plan: "Tahunan",
      billing: "Tahunan",
      price: "Rp 79.000",
      due: "1 Jul 2026",
      badge: "64 hari",
      icon: <ShoppingBag size={22} />,
      active: true
    },
    {
      name: "Duolingo Plus",
      plan: "Tahunan",
      billing: "Tahunan",
      price: "Rp 439.000",
      due: "15 Des 2026",
      badge: "231 hari",
      icon: <GraduationCap size={22} />,
      active: false
    }
  ];

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* CONTENT */}
      <div className={`content ${collapsed ? "expanded" : ""}`}>

        {/* HEADER */}
        <div className="subs-header">

          <div>
            <h2>Langganan</h2>
            <p>Pantau semua langganan berulang</p>
          </div>

          <button className="btn-add">
            + Tambah Langganan
          </button>

        </div>

        {/* SUMMARY */}
        <div className="subs-summary">

          <div className="summary-card red">
            <p>TOTAL / BULAN</p>
            <h3>Rp 847rb</h3>
            <span>6 aktif</span>
          </div>

          <div className="summary-card orange">
            <p>TAGIHAN MINGGU INI</p>
            <h3>Rp 241rb</h3>
            <span>3 tagihan</span>
          </div>

          <div className="summary-card green">
            <p>AKTIF SAAT INI</p>
            <h3>6</h3>
            <span>Langganan</span>
          </div>

        </div>

        {/* GRID */}
        <div className="subs-grid">

          {subscriptions.map((item, i) => (

            <div className="subs-card" key={i}>

              {/* TOP */}
              <div className="subs-card-header">

                <div className="subs-top">

                  <div className="icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.name}</h4>

                    <p>
                      {item.plan} • {item.billing}
                    </p>
                  </div>

                </div>

                <div className="status active">
                  Aktif
                </div>

              </div>

              {/* PRICE */}
              <h3 className="price">
                {item.price}

                <span>
                  /{item.billing === "Tahunan" ? "thn" : "bln"}
                </span>
              </h3>

              {/* DUE */}
              <p className="due">
                Tagihan: {item.due}

                <span className="badge">
                  {item.badge}
                </span>
              </p>

              {/* BUTTON */}
              <div className="subs-btn">

                <button className="btn-manage">
                  Kelola
                </button>

                <button className="btn-cancel">
                  Cancel
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}