import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../asset/logo.png";
import "../style/landing.css";
import {
  Wallet,
  BarChart2,
  Bell,
  Repeat,
  Target,
  Flame,
  UserCheck,
  PenLine,
  LineChart,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
  const els = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  els.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo-box" onClick={() => navigate("/")}>
          <img src={logo} alt="CerminSaku Logo" />
        </div>

        <div className="nav-menu">
          <a href="#fitur">Fitur</a>
          <a href="#cara-kerja">Cara Kerja</a>
          <a href="#tabungan">Tabungan</a>
          <a href="#testimoni">Testimoni</a>
        </div>

        <div className="nav-btn">
          <button className="btn-outline" onClick={() => navigate("/login")}>
            Masuk
          </button>
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Daftar Gratis
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="hero reveal"> 
        <h1>
          Kelola Keuangan Jadi <br />
          Lebih Mudah.
        </h1>

        <p className="desc">
          Nikmati fitur keuangan modern yang membantu Anda memahami dan
          mengatur keuangan dengan lebih jelas. Wujudkan masa depan yang lebih
          aman dengan desain yang nyaman dan data yang terstruktur.
        </p>

        <div className="hero-btn">
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Mulai Gratis Sekarang
          </button>
          <button
          className="btn-outline"
          onClick={() => {
            document
              .getElementById("fitur")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          Lihat Fitur →
        </button>
        </div>

        <div className="dashboard-placeholder">
          <p>Dashboard Preview</p>
        </div>
      </section>

      {/* ── FITUR ── */}
    <section
        id="fitur"
        className="fitur reveal"
      >
        <p className="subtitle">
          SEMUA YANG KAMU BUTUHKAN
        </p>

        <h2>
          Fitur Lengkap,
          <br />
          Satu Platform
        </h2>

        <p className="fitur-desc">
          Dari input harian hingga perencanaan impian,
          CerminSaku punya semua tools yang kamu
          butuhkan untuk hidup lebih hemat.
        </p>

        <div className="fitur-grid">

          <div className="card active reveal delay-1">
            <div className="icon-box">
              <Wallet size={22} />
            </div>

            <h4>Pemasukan & Pengeluaran</h4>

            <p>
              Input transaksi dengan cepat,
              kategorikan otomatis, dan lihat
              ringkasan keuanganmu secara
              real-time.
            </p>
          </div>

          <div className="card outline reveal delay-2">
            <div className="icon-box">
              <BarChart2 size={22} />
            </div>

            <h4>Visualisasi Grafik</h4>

            <p>
              Bar chart, pie chart, dan tren
              bulanan yang cantik membantu
              kamu memahami pola pengeluaran
              dengan mudah.
            </p>
          </div>

          <div className="card active reveal delay-3">
            <div className="icon-box">
              <Bell size={22} />
            </div>

            <h4>Notifikasi Pintar</h4>

            <p>
              Dapat peringatan otomatis ketika
              pengeluaran mendekati atau
              melewati batas budget yang kamu
              tetapkan.
            </p>
          </div>

          <div className="card outline reveal delay-1">
            <div className="icon-box">
              <Repeat size={22} />
            </div>

            <h4>Subscription Tracker</h4>

            <p>
              Pantau semua langganan
              berulangmu seperti Netflix,
              Spotify, cloud storage,
              agar tidak ada yang terlewat.
            </p>
          </div>

          <div className="card active reveal delay-2">
            <div className="icon-box">
              <Target size={22} />
            </div>

            <h4>Dream Savings</h4>

            <p>
              Tetapkan target tabungan
              impianmu, lacak progres,
              dan rayakan setiap pencapaian
              menuju impian tersebut.
            </p>
          </div>

          <div className="card outline reveal delay-3">
            <div className="icon-box">
              <Flame size={22} />
            </div>

            <h4>Streak Menabung</h4>

            <p>
              Sistem streak harian
              memotivasimu untuk konsisten
              menabung setiap hari.
            </p>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
      id="cara-kerja"
      className="how-it-works reveal"
    >
      <p className="subtitle">
        MUDAH DALAM 4 LANGKAH
      </p>

      <h2>
        Mulai dalam <br />
        Hitungan Menit
      </h2>

      <p className="how-desc">
        Tidak perlu keahlian khusus.
        CerminSaku dirancang agar siapa pun
        bisa langsung pakai dan merasakan
        manfaatnya hari ini.
      </p>

      <div className="how-grid">

        <div className="how-card reveal delay-1">
          <div className="how-num">01</div>

          <div className="how-icon">
            <UserCheck size={26} />
          </div>

          <h4>Daftar Gratis</h4>

          <p>
            Buat akun dalam 30 detik.
            Tidak perlu kartu kredit,
            tidak ada biaya tersembunyi.
          </p>
        </div>

        <div className="how-arrow reveal delay-1">
          <ArrowRight size={20} />
        </div>

        <div className="how-card reveal delay-2">
          <div className="how-num">02</div>

          <div className="how-icon">
            <PenLine size={26} />
          </div>

          <h4>Catat Transaksi</h4>

          <p>
            Input pemasukan dan pengeluaran
            harian dengan cepat.
            Kategorikan otomatis
            atau manual.
          </p>
        </div>

        <div className="how-arrow reveal delay-2">
          <ArrowRight size={20} />
        </div>

        <div className="how-card reveal delay-3">
          <div className="how-num">03</div>

          <div className="how-icon">
            <LineChart size={26} />
          </div>

          <h4>Pantau Keuangan</h4>

          <p>
            Lihat grafik, insight otomatis,
            dan notifikasi budget yang
            membantu kamu lebih sadar
            finansial.
          </p>
        </div>

        <div className="how-arrow reveal delay-3">
          <ArrowRight size={20} />
        </div>

        <div className="how-card reveal delay-4">
          <div className="how-num">04</div>

          <div className="how-icon">
            <Trophy size={26} />
          </div>

          <h4>Capai Impianmu</h4>

          <p>
            Tetapkan target Dream Savings
            dan rayakan setiap pencapaian
            menuju kebebasan finansialmu.
          </p>
        </div>

      </div>
    </section>

      {/* ── DREAM SAVINGS ── */}
      <section
      id="tabungan"
      className="dream reveal"
    >
      <div className="dream-container">

    <div className="dream-cards reveal-left">

      <div className="dream-card reveal delay-1">
        <div className="dream-header">
          <div>
            <p className="label">
              Target Impian
            </p>

            <h3>Liburan ke Bali</h3>
          </div>

          <div className="right">
            <span className="percent">
              63%
            </span>

            <p className="amount">
              Rp 10 jt / 15 jt
            </p>
          </div>
        </div>

        <div className="dream-bar">
          <div className="dream-fill"></div>
        </div>
      </div>

      <div className="dream-card reveal delay-2">
        <div className="dream-header">
          <div>
            <p className="label">
              Target Impian
            </p>

            <h3>Laptop Baru</h3>
          </div>

          <div className="right">
            <span className="percent">
              41%
            </span>

            <p className="amount">
              Rp 8,2 jt / 20 jt
            </p>
          </div>
        </div>

        <div className="dream-bar">
          <div
            className="dream-fill"
            style={{ width: "41%" }}
          />
        </div>
      </div>

      <div className="dream-card reveal delay-3">
        <div className="dream-header">
          <div>
            <p className="label">
              Target Impian
            </p>

            <h3>Dana Darurat</h3>
          </div>

          <div className="right">
            <span className="percent">
              80%
            </span>

            <p className="amount">
              Rp 24 jt / 30 jt
            </p>
          </div>
        </div>

        <div className="dream-bar">
          <div
            className="dream-fill"
            style={{ width: "80%" }}
          />
        </div>
      </div>

    </div>

    <div className="dream-text reveal-right">
      <p className="subtitle">
        Dream Saving
      </p>

      <h2>
        Wujudkan Impianmu
        <br />
        Sekarang
      </h2>

      <p>
        Tetapkan target keuangan,
        atur kontribusi bulanan,
        dan pantau progres tabunganmu
        secara berkala.Dengan fitur ini, kamu bisa
        merencanakan masa depan dengan
        lebih terarah, mulai dari
        impian kecil hingga tujuan
        besar seperti liburan,
        pendidikan, atau membeli
        barang impian.
      </p>

      <p>
        Buat impian yang kamu mau
        sekarang dan mulai langkah
        pertamamu untuk mencapainya
        dengan lebih mudah dan
        terstruktur!
      </p>

      <button
        className="btn-primary dream-cta"
        onClick={() => navigate("/register")}
      >
        Mulai Nabung Sekarang
      </button>
    </div>
  </div>
</section>

{/* TESTIMONIAL */}

<section
  id="testimoni"
  className="testimoni reveal"
>
  <p className="subtitle">
    KATA MEREKA
  </p>

  <h2>
    Ribuan Pengguna
    <br />
    Sudah Merasakan
    Manfaatnya
  </h2>

  <div className="testi-grid">

    <div className="testi-card reveal delay-1">
      <div className="testi-stars">
        ★★★★★
      </div>

      <p className="testi-quote">
        "Sejak pakai CerminSaku,
        aku akhirnya tahu ke mana
        uang gajiku pergi.
        Fitur grafiknya bikin sadar
        banget pola pengeluaran aku."
      </p>

      <div className="testi-author">
        <div className="testi-avatar">
          AR
        </div>

        <div>
          <p className="testi-name">
            Arinda R.
          </p>

          <span className="testi-city">
            Jakarta
          </span>
        </div>
      </div>
    </div>

    <div className="testi-card testi-card--featured reveal-scale delay-2">
      <div className="testi-stars">
        ★★★★★
      </div>

      <p className="testi-quote">
        "Dream Savings itu fitur
        favorit aku! Dalam 6 bulan
        aku berhasil kumpulkan
        Rp 15jt buat liburan ke Jepang.
        Nggak nyangka bisa secepat itu."
      </p>

      <div className="testi-author">
        <div className="testi-avatar">
          BW
        </div>

        <div>
          <p className="testi-name">
            Bagas W.
          </p>

          <span className="testi-city">
            Surabaya
          </span>
        </div>
      </div>
    </div>

    <div className="testi-card reveal delay-3">
      <div className="testi-stars">
        ★★★★★
      </div>

      <p className="testi-quote">
        "Notifikasi budget-nya
        beneran bantu aku nahan diri
        pas belanja. Sekarang
        pengeluaran bulanan turun
        sampai 30%!"
      </p>

      <div className="testi-author">
        <div className="testi-avatar">
          DP
        </div>

        <div>
          <p className="testi-name">
            Dinda P.
          </p>

          <span className="testi-city">
            Bandung
          </span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* ── CTA ── */}
      <section className="cta-final reveal-scale">
        <div className="cta-box reveal delay-1">

          <h2>
            Mulai Perjalanan
            <br />
            Keuanganmu Sekarang
          </h2>

          <p>
            Daftar dalam 30 detik.
            Tidak perlu kartu kredit.
            Mulai kendalikan
            keuanganmu sekarang juga.
          </p>

          <button
            className="cta-btn"
            onClick={() => navigate("/register")}
          >
            Daftar Gratis
          </button>

        </div>
      </section>

      <footer className="simple-footer">
      <div className="footer-content">
        <img src={logo} alt="CerminSaku" />

        <p>Surabaya, Indonesia</p>
      </div>

      <span>
        © 2026 CerminSaku
      </span>
    </footer>

    </>
  );
}