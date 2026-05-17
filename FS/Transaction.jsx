import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../style/transaction.css";

import {
  Search,
  ChevronDown,
  Utensils,
  Bus,
  Clapperboard,
  ShoppingBag,
  FileText,
  Heart,
  GraduationCap,
  MoreHorizontal,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Plus,
  X,
  TrendingUp,
  SlidersHorizontal,
  PieChart,
  Download,
  AlertCircle,
  Settings2
} from "lucide-react";

export default function Transaction() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [openModal, setOpenModal] = useState(false);
  const [openLimitModal, setOpenLimitModal] = useState(false); 
  const [type, setType] = useState("expense");
  const [activeTab, setActiveTab] = useState("all");

  // State Manajemen Limit
  const [monthlyLimit, setMonthlyLimit] = useState(5000000); 
  const [tempLimit, setTempLimit] = useState(5000000); 
  const totalExpense = 2827500; 

  const budgetPercentage = Math.min(Math.round((totalExpense / monthlyLimit) * 100), 100);
  const remainingBudget = monthlyLimit - totalExpense;

  const categories = [
    { name: "Semua Kategori", icon: <MoreHorizontal size={14} /> },
    { name: "Makan dan Minuman", icon: <Utensils size={14} /> },
    { name: "Transportasi", icon: <Bus size={14} /> },
    { name: "Hiburan", icon: <Clapperboard size={14} /> },
    { name: "Belanja", icon: <ShoppingBag size={14} /> },
    { name: "Gaji/ Pemasukan", icon: <FileText size={14} /> },
    { name: "Kesehatan", icon: <Heart size={14} /> },
    { name: "Pendidikan", icon: <GraduationCap size={14} /> },
  ];

  const transactions = [
    {
      title: "Mie Ayam + Es Teh",
      category: "Makan dan Minuman",
      amount: "Rp 25.000",
      date: "Hari ini, 12:30",
      type: "expense",
      icon: <Utensils size={16} />,
    },
    {
      title: "Freelance Design",
      category: "Gaji/ Pemasukan",
      amount: "Rp 1.500.000",
      date: "Hari ini, 09:15",
      type: "income",
      icon: <Wallet size={16} />,
    },
    {
      title: "Grab ke Kantor",
      category: "Transportasi",
      amount: "Rp 35.000",
      date: "Kemarin",
      type: "expense",
      icon: <Bus size={16} />,
    },
    {
      title: "Netflix Premium",
      category: "Hiburan",
      amount: "Rp 186.000",
      date: "25 Apr",
      type: "expense",
      icon: <Clapperboard size={16} />,
    },
  ];

  const filteredTransactions = transactions.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <div className="dashboard">
      
      <Sidebar activePage="transactions" />
      <div className="viewport-content-wrapper">
        <div className="ambient-blur-sphere sphere-one"></div>
        <div className="ambient-blur-sphere sphere-two"></div>

        <div className="viewport-container">
          
          {/* TOP HEADER BAR */}
          <header className="glass-action-header">
            <div className="brand-intel">
              <h1>Arus Kas</h1>
              <p>Intelligence financial ledger & automated tracking.</p>
            </div>

            <div className="header-utilities">
              <button className="utility-secondary-btn" title="Unduh Laporan">
                <Download size={16} />
                <span>Ekspor</span>
              </button>
              <button className="neon-emerald-btn" onClick={() => setOpenModal(true)}>
                <Plus size={16} strokeWidth={2.5} />
                <span>Catat Transaksi</span>
              </button>
            </div>
          </header>

          {/* BENTO ASYMMETRIC */}
          <div className="bento-asymmetric-workspace">
            
            {/* KOLOM KIRI: ANALYTICS CORE */}
            <div className="intel-core-column">
                            <div className="aurora-mesh-card">
                <div className="mesh-overlay-glow"></div>
                <div className="card-inner-content">
                  <div className="card-top-meta">
                    <span className="system-tag">NET SURPLUS PORTFOLIO</span>
                    <div className="badge-trend">
                      <TrendingUp size={12} />
                      <span>+12.4%</span>
                    </div>
                  </div>
                  <h2>Rp 4.172.500</h2>
                  <div className="card-bottom-meta">
                    <p>Dana bersih aktif yang siap dialokasikan ke rencana masa depanmu.</p>
                  </div>
                </div>
              </div>

              {/* 2. TWIN INFLOW/OUTFLOW CARDS */}
              <div className="twin-bento-grid">
                <div className="bento-subcard inflow">
                  <div className="subcard-header">
                    <div className="icon-circle"><ArrowDownLeft size={16} /></div>
                    <span className="subcard-title">Inflow</span>
                  </div>
                  <h3>Rp 7.000.000</h3>
                  <span className="subcard-footer">3 Aliran masuk</span>
                </div>

                <div className="bento-subcard outflow">
                  <div className="subcard-header">
                    <div className="icon-circle"><ArrowUpRight size={16} /></div>
                    <span className="subcard-title">Outflow</span>
                  </div>
                  <h3>Rp 2.827.500</h3>
                  <span className="subcard-footer">18 Transaksi keluar</span>
                </div>
              </div>

              {/* 3. BUDGET LIMIT PROGRESS TRACKER */}
              <div className="budget-limit-panel">
                <div className="budget-panel-header">
                  <div className="budget-label">
                    <PieChart size={16} className="budget-icon" />
                    <h5>Limit Pengeluaran Bulanan</h5>
                  </div>
                  <div className="budget-actions-hub">
                    <span className="budget-percentage">{budgetPercentage}% Terpakai</span>
                    <button 
                      className="adjust-budget-trigger" 
                      title="Atur Batas Anggaran"
                      onClick={() => {
                        setTempLimit(monthlyLimit); 
                        setOpenLimitModal(true);
                      }}
                    >
                      <Settings2 size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${budgetPercentage}%` }}></div>
                </div>

                <div className="budget-panel-footer">
                  <span>
                    {remainingBudget >= 0 ? "Sisa kuota aman: " : "Anggaran Defisit: "}
                    <strong>Rp {Math.abs(remainingBudget).toLocaleString("id-ID")}</strong>
                  </span>
                  <span>Batas: Rp {monthlyLimit.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* 4. SMART AI RECOMMENDATION */}
              <div className="smart-advisor-panel">
                <div className="advisor-spark"></div>
                <div className="advisor-body">
                  <div className="advisor-title-row">
                    <AlertCircle size={14} />
                    <h5>Insight Finansial</h5>
                  </div>
                  <p>Pengeluaran untuk <strong>Hiburan</strong> meningkat dari minggu lalu. Amankan sisa surplus dengan memindahkannya ke instrumen tabungan hari ini.</p>
                </div>
              </div>

            </div>

            {/*  TRANSACTION LEDGER STREAM */}
            <div className="ledger-panel-column">
              <div className="master-ledger-shell">
                
                {/* Filter Hub & Search Bar */}
                <div className="ledger-control-center">
                  <div className="minimal-search-input-box">
                    <Search size={15} />
                    <input type="text" placeholder="Cari entitas transaksi..." />
                  </div>

                  <div className="context-dropdown-anchor">
                    <button className="glass-filter-btn" onClick={() => setOpenDropdown(!openDropdown)}>
                      <SlidersHorizontal size={13} />
                      <span>{selectedCategory === "Semua Kategori" ? "Filter" : selectedCategory}</span>
                      <ChevronDown size={14} />
                    </button>

                    {openDropdown && (
                      <div className="context-blur-dropdown">
                        {categories.map((item, index) => (
                          <div
                            key={index}
                            className={`blur-dropdown-item ${selectedCategory === item.name ? "selected" : ""}`}
                            onClick={() => {
                              setSelectedCategory(item.name);
                              setOpenDropdown(false);
                            }}
                          >
                            <div className="item-core">
                              {item.icon}
                              <span>{item.name}</span>
                            </div>
                            {selectedCategory === item.name && <span className="dot-marker"></span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/*  Segmented Tabs */}
                <div className="ios-segmented-tabs">
                  <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>Semua</button>
                  <button className={activeTab === "income" ? "active" : ""} onClick={() => setActiveTab("income")}>Pemasukan</button>
                  <button className={activeTab === "expense" ? "active" : ""} onClick={() => setActiveTab("expense")}>Pengeluaran</button>
                </div>

                {/* Transaction Rows Stream */}
                <div className="premium-stream-list">
                  {filteredTransactions.map((item, index) => (
                    <div className="stream-row-item" key={index}>
                      <div className="stream-row-left">
                        <div className={`stream-icon-frame ${item.type}`}>
                          {item.icon}
                        </div>
                        <div className="stream-row-info">
                          <h4>{item.title}</h4>
                          <span>{item.category}</span>
                        </div>
                      </div>

                      <div className="stream-row-right">
                        <span className="stream-time">{item.date}</span>
                        <h3 className={`stream-amount ${item.type}`}>
                          {item.type === "expense" ? `-${item.amount}` : `+${item.amount}`}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div> 

      {/* MODAL 1: TAMBAH TRANSAKSI BARU */}
      {openModal && (
        <div className="sheet-backdrop-blur">
          <div className="sheet-modal-body">
            <div className="sheet-header">
              <h2>New Transaction</h2>
              <button className="sheet-close-circle" onClick={() => setOpenModal(false)}>
                <X size={15} />
              </button>
            </div>

            <div className="ios-segmented-tabs sheet-toggle-margin">
              <button className={type === "expense" ? "active" : ""} onClick={() => setType("expense")}>Pengeluaran</button>
              <button className={type === "income" ? "active" : ""} onClick={() => setType("income")}>Pemasukan</button>
            </div>

            <div className="sheet-form-inputs">
              <div className="sheet-input-field">
                <label>Deskripsi Transaksi</label>
                <input type="text" placeholder="e.g., Kopi Sore, Gaji Project" />
              </div>

              <div className="sheet-input-row">
                <div className="sheet-input-field">
                  <label>Nominal (Rp)</label>
                  <input type="number" placeholder="0" />
                </div>
                <div className="sheet-input-field">
                  <label>Tanggal</label>
                  <input type="date" />
                </div>
              </div>

              <div className="sheet-input-field">
                <label>Kategori</label>
                <select>
                  <option value="">Pilih klasifikasi...</option>
                  <option value="makan">Makan & Minuman</option>
                  <option value="transport">Transportasi</option>
                  <option value="hiburan">Hiburan & Media</option>
                  <option value="belanja">Belanja Bulanan</option>
                </select>
              </div>

              <div className="sheet-input-field">
                <label>Catatan Singkat</label>
                <textarea rows="2" placeholder="Tambahkan keterangan tambahan..."></textarea>
              </div>
            </div>

            <div className="sheet-action-footer">
              <button className="sheet-btn-cancel" onClick={() => setOpenModal(false)}>Batal</button>
              <button className="sheet-btn-commit" onClick={() => setOpenModal(false)}>Commit Log</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ATUR ULANG LIMIT BULANAN */}
      {openLimitModal && (
        <div className="sheet-backdrop-blur">
          <div className="sheet-modal-body limit-modal-size">
            <div className="sheet-header">
              <h2>Atur Batas Anggaran</h2>
              <button className="sheet-close-circle" onClick={() => setOpenLimitModal(false)}>
                <X size={15} />
              </button>
            </div>
            
            <p className="modal-description-text">
              Tentukan batas maksimal alokasi pengeluaran bulananmu agar kondisi finansial tetap sehat dan terkontrol.
            </p>

            <div className="sheet-form-inputs">
              <div className="sheet-input-field">
                <label>Batas Pengeluaran Bulan Ini (Rp)</label>
                <input 
                  type="number" 
                  value={tempLimit} 
                  onChange={(e) => setTempLimit(Number(e.target.value))}
                  placeholder="e.g. 5000000" 
                />
              </div>
            </div>

            <div className="sheet-action-footer" style={{ marginTop: "24px" }}>
              <button className="sheet-btn-cancel" onClick={() => setOpenLimitModal(false)}>Batal</button>
              <button 
                className="sheet-btn-commit"
                onClick={() => {
                  setMonthlyLimit(tempLimit);
                  setOpenLimitModal(false);
                }}
              >
                Simpan Batasan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}