import React from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="app">
      {/* Navigation Bar dengan Tombol Login */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <button className="login-button">Login</button>
            <div className="logo">SENI NUSANTARA</div>
          </div>
          <ul>
            <li className="active">Home</li>
            <li>
    <Link to="/gallery">Galeri Digital</Link>
  </li>
            <li>Profil Seniman</li>
            <li>Artikel Budaya</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>SENI NUSANTARA</h1>
            <h2>Ruang Digital Pelestarian Budaya</h2>
            <p>
              Menjaga identitas budaya Indonesia lewat karya, menghidupkan tradisi dalam bentuk
              digital yang bisa dijelajahi siapa saja, kapan saja.
            </p>
            <button className="read-more">Baca Selengkapnya</button>
          </div>
          <div className="hero-image">
            <img src="/assets/logo.png" alt="Warisan Budaya Indonesia" />
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">82%</div>
            <p>Pengunjung merasa lebih dekat dengan budaya setelah 3 kali kunjungan</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">93%</div>
            <p>Merasa lebih teredukasi mengenai seni dan tradisi lokal</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">6</div>
            <p>Ragam kategori karya seni yang tersedia di platform</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">1.200+</div>
            <p>Jam interaksi dalam sesi pameran dan edukasi digital</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">75%</div>
            <p>Memilih untuk membagikan kembali karya yang ditemukan</p>
          </div>
        </div>
      </section>

      {/* About Section with Painting Person Image */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Bukan Sekadar Galeri</h2>
            <h3>Digital.</h3>
            <h4>WORLD ART DAY</h4>
            <p>
              Seni Nusantara bukan hanya tempat untuk melihat karya budaya,
              tapi juga ruang hidup untuk menghubungkan seniman,
              penikmat, dan pelestari tradisi.
            </p>
            <p>
              Kami menghadirkan interaksi, kolaborasi, dan edukasi seni
              dalam satu platform digital yang terbuka bagi semua generasi.
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/gambar.png" alt="Seniman Melukis" />
          </div>
        </div>
      </section>

      {/* Gallery Section - Diperbarui dengan keterangan dan pencipta */}
      <section className="gallery">
        <h2>Galeri Karya</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="item-code">O1</div>
            <img src="/assets/Gerabah.jpg" alt="Guci Ukir Jepara" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Guci Ukir Jepara</div>
              <div className="item-artist">Oleh: Budi Santoso</div>
              <div className="item-description">Kerajinan gerabah tradisional dengan ukiran khas Jepara</div>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="item-code">O2</div>
            <img src="/assets/Topeng.jpg" alt="Topeng Panji" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Topeng Panji</div>
              <div className="item-artist">Oleh: Siti Rahayu</div>
              <div className="item-description">Topeng tradisional dari Jawa Timur untuk pertunjukan tari</div>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="item-code">O3</div>
            <img src="/assets/batik.jpg" alt="Batik Mega Mendung" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Batik Mega Mendung</div>
              <div className="item-artist">Oleh: Ahmad Junaedi</div>
              <div className="item-description">Motif batik khas Cirebon dengan awan bergumpal</div>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="item-code">O4</div>
            <img src="/assets/wayang.jpg" alt="Wayang Golek Merak" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Wayang Golek Bunga Merak</div>
              <div className="item-artist">Oleh: Dedi Sutisna</div>
              <div className="item-description">Wayang golek Sunda dengan hiasan merak</div>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="item-code">O5</div>
            <img src="/assets/tas.jpg" alt="Tas Kelapa Lukis" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Tas Songket</div>
              <div className="item-artist">Oleh: Rina Marlina</div>
              <div className="item-description">Tas anyaman dengan hiasan songket khas Palembang</div>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="item-code">O6</div>
            <img src="/assets/ulos.jpg" alt="Ulos Batak" className="gallery-img" />
            <div className="item-details">
              <div className="item-title">Ulos Batak</div>
              <div className="item-artist">Oleh: Togar Siregar</div>
              <div className="item-description">Kain tradisional Batak dengan motif dan warna khas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profiles */}
      <section className="artist-profiles">
        <h2>Profil Seniman Indonesia</h2>
        
        <div className="artist-list">
          <div className="artist-card">
            <img src="/assets/rustam.jpg" alt="Rustam Effendi" className="artist-photo" />
            <div className="artist-info">
              <h3>Rustam Effendi</h3>
              <p>
                RUSTAM MERUPAKAN SENIMAN YANG LAHIR
                DI PADANG, SUMATERA BARAT PADA 13 MEI
                1903
              </p>
              <p>
                Darah seni Rustam sudah mengalir dari
                ayahnya, Sulaiman Effendi yang
                merupakan seorang fotografer..
              </p>
            </div>
          </div>
          
          <div className="artist-card">
            <img src="/assets/arfin.jpg" alt="Arfin C. Noer" className="artist-photo" />
            <div className="artist-info">
              <h3>Arfin C. Noer</h3>
              <p>
                PRIA YANG LAHIR DI JAWA BARAT, 10 MARET
                1941 LALU INI MEMILIKI NAMA LENGKAP
                ARIFIN CHARIN NOER.
              </p>
              <p>
                Adapun karya-karya Arifin ialah Nenek Tercinta
                (1966), Matahari di Sebuah Jalan Kecil (1966),
                Mega-Mega (1966), Sepasang Pengantin (1968),
                Kapai-Kapai (1970), Sumur Tanpa Dasar (1971),
                dan masih banyak karya-karya hebat dari Arifin
                C. Noer.
              </p>
            </div>
          </div>
          
          <div className="artist-card">
            <img src="/assets/putu.jpg" alt="Putu Wijaya" className="artist-photo" />
            <div className="artist-info">
              <h3>Putu Wijaya</h3>
              <p>
                PUTU LAHIR DI PURI ANOM TABANAN,
                TABANAN, BALI, 11 APRIL 1944 DENGAN
                NAMA | GUSTI NGURAH PUTU WIJAYA
              </p>
              <p>
                Putu juga alumni dari Bengkel Teater y:
                oleh W.S Rendra. Karya-karya drama di
                ialah, Dalam Cahaya Bulan (1966), Laut
                Bernyanyi (1967), Bila Malam Bertamba
                (1970), invalid (1974), Tak Sampai Tiga B
                (1974), Anu (1974), Aduh (1975), Dag-Dig
                (1976), Gerr (1986), Edan (1988), Hum-P
                (1992).
              </p>
            </div>
          </div>
        </div>
        
        <button className="join-button">Gabung</button>
      </section>

      {/* Footer - Diperbarui dengan kotak */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Seni Nusantara</h3>
            <ul>
              <li>Beranda</li>
              <li>Galeri Karya</li>
              <li>Profil Seniman</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="culture-box">
              <h4>Mari Lestarikan Budaya</h4>
              <p>
                Bergabunglah bersama kami untuk mendukung pelestarian budaya Indonesia melalui
                platform digital. Dengan kontribusi kecil, kita bisa menjaga warisan besar.
              </p>
              <button className="culture-button">Gabung Sekarang</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Seni Nusantara. Seluruh hak cipta dilindungi</p>
          <p>Menjaga warisan budaya untuk masa depan bangsa</p>
          <p><a href="#">Ketentuan</a></p>
        </div>
      </footer>
    </div>
  );
}