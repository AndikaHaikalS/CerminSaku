import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../style/notification.css";

import {
  TriangleAlert,
  Target,
  Lightbulb,
  X,
  CheckCircle2,
  Inbox
} from "lucide-react";

export default function Notification() {
  const [activeTab, setActiveTab] = useState("Semua");

  const notifications = [
    {
      type: "Budget",
      icon: <TriangleAlert size={16} />,
      title: "Budget Makan Hampir Habis!",
      desc: "Kamu sudah memakai 84% budget makan bulan ini.",
      time: "2 jam lalu",
      isUnread: true,
    },
    {
      type: "Milestone",
      icon: <Target size={16} />,
      title: "Target Tabungan 73%",
      desc: "Tinggal sedikit lagi menuju target liburanmu ✨",
      time: "1 hari lalu",
      isUnread: false,
    },
    {
      type: "Insight",
      icon: <Lightbulb size={16} />,
      title: "Insight Mingguan",
      desc: "Pengeluaran minggu ini turun 15% dari minggu lalu 🎉",
      time: "3 hari lalu",
      isUnread: false,
    },
  ];

  // Logika filter tab
  const filteredNotifications = notifications.filter((item) => {
    if (activeTab === "Semua") return true;
    return item.type === activeTab;
  });

  return (
    <div className="dashboard">
      {/* Kolom 1: Sidebar Utama */}
      <Sidebar activePage="notification" />

      {/* Kolom 2: Area Konten Sebelah Kanan */}
      <div className="viewport-content-wrapper">
        {/* Ambient Blurred Background Dynamic */}
        <div className="ambient-blur-sphere sphere-one"></div>
        <div className="ambient-blur-sphere sphere-two"></div>

        <div className="viewport-container">
          
          {/* TOP HEADER BAR */}
          <header className="glass-action-header">
            <div className="brand-intel">
              <h1>Notifikasi</h1>
              <p>Pantau update penting, limit anggaran, dan pencapaian finansialmu.</p>
            </div>

            <button className="utility-secondary-btn flex-action">
              <CheckCircle2 size={15} />
              <span>Tandai Semua Dibaca</span>
            </button>
          </header>

          {/* SINGLE CORE WORKSPACE (FULL WIDTH MURNI LIST) */}
          <div className="ledger-panel-column full-width-inbox">
            <div className="master-ledger-shell">
              
              {/* iOS Clean Tab Control Selection */}
              <div className="ios-segmented-tabs spacing-tweak">
                {["Semua", "Budget", "Milestone", "Insight"].map((tab) => (
                  <button
                    key={tab}
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Notifications Stream Feed */}
              <div className="premium-stream-list custom-height-tweak">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((item, index) => (
                    <div className={`stream-row-item dynamic-notif-row ${item.isUnread ? "unread" : ""}`} key={index}>
                      <div className="stream-row-left">
                        <div className={`stream-icon-frame type-${item.type.toLowerCase()}`}>
                          {item.icon}
                        </div>
                        <div className="stream-row-info">
                          <div className="notif-title-badge-row">
                            <h4>{item.title}</h4>
                            {item.isUnread && <span className="unread-dot"></span>}
                          </div>
                          <span>{item.desc}</span>
                        </div>
                      </div>

                      <div className="stream-row-right arrange-notif-end">
                        <span className="stream-time">{item.time}</span>
                        <button className="dismiss-row-btn" title="Hapus Notifikasi">
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="stream-empty-state padded-state">
                    <Inbox size={32} strokeWidth={1.5} style={{ marginBottom: "8px", color: "#94A3B8" }} />
                    <p>Tidak ada pemberitahuan di kategori ini.</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}