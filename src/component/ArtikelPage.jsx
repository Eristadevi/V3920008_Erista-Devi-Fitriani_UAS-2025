import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Artikel.css';

const ArtArticles = () => {
  // State untuk kategori artikel
  const [category, setCategory] = useState('all');
  
  // Daftar artikel seni rupa Nusantara
  const articles = [
    {
      id: 1,
      title: "Evolusi Seni Lukis Bali: Dari Tradisional Hingga Kontemporer",
      category: "lukisan",
      date: "20 Juni 2025",
      author: "I Made Budiana",
      authorAvatar: "/assets/penulis1.jpg",
      image: "/assets/lukisan-bali.jpg",
      summary: "Seni lukis Bali telah mengalami transformasi dramatis dari gaya tradisional Kamasan hingga ekspresi kontemporer yang mendunia...",
      content: `<p>Seni lukis Bali memiliki sejarah panjang yang bermula dari tradisi lukisan wayang gaya Kamasan. Gaya klasik ini ditandai dengan:</p>
      
      <ul>
        <li>Penggunaan warna alamiah dari mineral dan tumbuhan</li>
        <li>Komposisi bidang tanpa perspektif</li>
        <li>Narasi epik Ramayana dan Mahabharata</li>
        <li>Figur manusia dengan mata besar dan proporsi khusus</li>
      </ul>
      
      <h3>Revolusi Seni Lukis Bali</h3>
      <p>Pada tahun 1930-an, kedatangan seniman Barat seperti Walter Spies dan Rudolf Bonnet membawa angin perubahan:</p>
      
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Periode</th>
              <th>Gaya</th>
              <th>Ciri Khas</th>
              <th>Tokoh Penting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1930-1940</td>
              <td>Ubud Style</td>
              <td>Pengenalan perspektif, warna baru</td>
              <td>I Gusti Nyoman Lempad</td>
            </tr>
            <tr>
              <td>1950-1970</td>
              <td>Young Artist</td>
              <td>Warna cerah, tema kehidupan sehari-hari</td>
              <td>I Nyoman Cakra</td>
            </tr>
            <tr>
              <td>1980-sekarang</td>
              <td>Kontemporer</td>
              <td>Eksperimen teknik, tema global</td>
              <td>Made Djata</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>Seniman Bali Modern</h3>
      <p>Beberapa seniman Bali kontemporer yang mendunia:</p>
      
      <div className="artist-grid">
        <div className="artist-card">
          <img src="/assets/seniman-bali1.jpg" alt="I Nyoman Masriadi" />
          <h4>I Nyoman Masriadi</h4>
          <p>Dikenal dengan figur atletis dan kritik sosial, karyanya terjual hingga miliaran rupiah di balai lelang internasional.</p>
        </div>
        
        <div className="artist-card">
          <img src="/assets/seniman-bali2.jpg" alt="Made Wianta" />
          <h4>Made Wianta</h4>
          <p>Pelopor seni instalasi Bali, menggabungkan tradisi dengan konsep kontemporer.</p>
        </div>
        
        <div className="artist-card">
          <img src="/assets/seniman-bali3.jpg" alt="Mangu Putra" />
          <h4>Mangu Putra</h4>
          <p>Ahli teknik lukis realis dengan tema mitologi Bali modern.</p>
        </div>
      </div>
      
      <h3>Teknik dan Material</h3>
      <p>Transformasi material seni lukis Bali:</p>
      
      <div className="tech-evolution">
        <div className="tech-item">
          <h4>Tradisional</h4>
          <ul>
            <li>Kain katun kasar</li>
            <li>Pewarna alami: tanah, daun, bunga</li>
            <li>Kuasa dari bulu ayam</li>
          </ul>
        </div>
        
        <div className="tech-item">
          <h4>Modern</h4>
          <ul>
            <li>Kanvas linen impor</li>
            <li>Cat akrilik dan minyak</li>
            <li>Kuasa sintetis berbagai ukuran</li>
          </ul>
        </div>
        
        <div className="tech-item">
          <h4>Kontemporer</h4>
          <ul>
            <li>Mixed media</li>
            <li>Digital art</li>
            <li>Instalasi interaktif</li>
          </ul>
        </div>
      </div>
      
      <h3>Pengaruh Global</h3>
      <p>Seni lukis Bali kini menjadi fenomena global dengan:</p>
      <ul>
        <li>Pameran di galeri internasional</li>
        <li>Kolaborasi dengan seniman global</li>
        <li>Pengakuan di biennale seni dunia</li>
        <li>Karya masuk koleksi museum ternama</li>
      </ul>`,
      views: 3421,
      likes: 287,
      comments: 56
    },
    {
      id: 2,
      title: "Patung Tradisional Nusantara: Simbolisme dan Makna Spiritual",
      category: "patung",
      date: "12 Juni 2025",
      author: "Agus Lee",
      authorAvatar: "/assets/penulis2.jpg",
      image: "/assets/patung-nusantara.jpg",
      summary: "Patung tradisional di Nusantara bukan sekadar karya estetis, tetapi merupakan manifestasi keyakinan spiritual dan kosmologi masyarakat...",
      content: `<p>Patung tradisional di berbagai wilayah Nusantara memiliki karakteristik unik yang mencerminkan kepercayaan dan nilai budaya setempat. Berbagai jenis patung tradisional:</p>
      
      <div className="sculpture-types">
        <div className="type-card">
          <img src="/assets/patung-dayak.jpg" alt="Patung Dayak" />
          <h4>Patung Hampatong (Dayak)</h4>
          <p>Patung penjaga dari kayu ulin, melindungi desa dari roh jahat.</p>
        </div>
        
        <div className="type-card">
          <img src="/assets/patung-toraja.jpg" alt="Patung Toraja" />
          <h4>Tau-tau (Toraja)</h4>
          <p>Patung kayu yang mewakili arwah leluhur dalam upacara Rambu Solo.</p>
        </div>
        
        <div className="type-card">
          <img src="/assets/patung-asmat.jpg" alt="Patung Asmat" />
          <h4>Patung Bis (Asmat)</h4>
          <p>Patung leluhur yang menjadi media komunikasi dengan dunia roh.</p>
        </div>
      </div>
      
      <h3>Makna Simbolis</h3>
      <p>Setiap elemen patung tradisional mengandung makna mendalam:</p>
      
      <div className="symbol-meaning">
        <div className="symbol-item">
          <div className="symbol-icon">👁️</div>
          <h4>Mata Besar</h4>
          <p>Kewaspadaan terhadap bahaya gaib</p>
        </div>
        
        <div className="symbol-item">
          <div className="symbol-icon">✋</div>
          <h4>Tangan Terangkat</h4>
          <p>Penyambutan arwah leluhur</p>
        </div>
        
        <div className="symbol-item">
          <div className="symbol-icon">🐍</div>
          <h4>Ular</h4>
          <p>Simbol kesuburan dan kekuatan alam</p>
        </div>
        
        <div className="symbol-item">
          <div className="symbol-icon">🌞</div>
          <h4>Matahari</h4>
          <p>Sumber kehidupan dan kejayaan</p>
        </div>
      </div>
      
      <h3>Proses Pembuatan</h3>
      <p>Pembuatan patung tradisional sarat dengan ritual khusus:</p>
      <ol>
        <li><strong>Pemilihan bahan</strong>: Kayu dipilih berdasarkan petunjuk mimpi atau tanda alam</li>
        <li><strong>Ritual permulaan</strong>: Sesaji untuk memohon izin roh penunggu pohon</li>
        <li><strong>Proses pahat</strong>: Dilakukan dalam keadaan ritual khusus</li>
        <li><strong>Pemberian warna</strong>: Menggunakan pigmen alami dengan makna simbolis</li>
        <li><strong>Ritual penyempurnaan</strong>: Pemberian kekuatan spiritual pada patung</li>
      </ol>
      
      <h3>Pelestarian di Era Modern</h3>
      <p>Upaya pelestarian patung tradisional Nusantara:</p>
      <ul>
        <li>Pendokumentasian motif dan makna oleh antropolog</li>
        <li>Pendirian sanggar seni tradisi di daerah</li>
        <li>Pengenalan melalui kurikulum seni sekolah</li>
        <li>Pameran khusus di museum nasional dan internasional</li>
      </ul>`,
      views: 2895,
      likes: 213,
      comments: 38
    },
    {
      id: 3,
      title: "Keramik Plered: Warisan Seni Gerabah yang Tetap Bertahan",
      category: "keramik",
      date: "5 Juni 2025",
      author: "Siti Rahayu",
      authorAvatar: "/assets/penulis3.jpg",
      image: "/assets/keramik-plered.jpg",
      summary: "Sejak abad ke-16, Plered di Jawa Barat dikenal sebagai pusat gerabah tradisional. Teknik turun-temurun ini tetap bertahan di tengah gempuran industri modern...",
      content: `<p>Plered, sebuah kecamatan di Purwakarta, Jawa Barat, telah menjadi pusat produksi gerabah tradisional selama lebih dari 4 abad. Keunikan keramik Plered:</p>
      
      <div className="plered-features">
        <div className="feature-item">
          <h4>Material</h4>
          <p>Tanah liat vulkanik dari Gunung Burangrang</p>
        </div>
        
        <div className="feature-item">
          <h4>Teknik</h4>
          <p>Pembentukan manual tanpa alat putar</p>
        </div>
        
        <div className="feature-item">
          <h4>Pembakaran</h4>
          <p>Dengan kayu bakar suhu 700-900°C</p>
        </div>
      </div>
      
      <h3>Jenis Produk Keramik Plered</h3>
      
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Jenis Produk</th>
              <th>Fungsi Tradisional</th>
              <th>Pengembangan Modern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kendi</td>
              <td>Penyimpan air minum</td>
              <td>Elemen dekorasi, pot tanaman</td>
            </tr>
            <tr>
              <td>Anglo</td>
              <td>Alat memasak tradisional</td>
              <td>Barang koleksi, pemanas ruangan dekoratif</td>
            </tr>
            <tr>
              <td>Gentong</td>
              <td>Penyimpan beras dan air</td>
              <td>Aksesori taman, pot besar</td>
            </tr>
            <tr>
              <td>Cobek</td>
              <td>Alat masak tradisional</td>
              <td>Barang seni, souvenir</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>Proses Pembuatan</h3>
      <p>Pembuatan keramik Plered tetap mempertahankan cara tradisional:</p>
      
      <div className="making-process">
        <div className="process-step">
          <div className="step-number">1</div>
          <h4>Pengambilan Tanah Liat</h4>
          <p>Tanah diambil dari kedalaman 2 meter, diendapkan 2 minggu</p>
        </div>
        
        <div className="process-step">
          <div className="step-number">2</div>
          <h4>Pengulian</h4>
          <p>Tanah diuleni hingga lentur dan bebas gelembung udara</p>
        </div>
        
        <div className="process-step">
          <div className="step-number">3</div>
          <h4>Pembentukan</h4>
          <p>Dibentuk manual dengan tangan dan alat sederhana</p>
        </div>
        
        <div className="process-step">
          <div className="step-number">4</div>
          <h4>Pengeringan</h4>
          <p>Diangin-anginkan 3-7 hari tergantung ukuran</p>
        </div>
        
        <div className="process-step">
          <div className="step-number">5</div>
          <h4>Pembakaran</h4>
          <p>Dibakar dengan kayu selama 8-12 jam</p>
        </div>
      </div>
      
      <h3>Revitalisasi Seni Keramik Plered</h3>
      <p>Berbagai upaya dilakukan untuk mempertahankan keramik Plered:</p>
      <ul>
        <li>Pelatihan desain modern untuk perajin</li>
        <li>Pemasaran melalui platform e-commerce</li>
        <li>Kolaborasi dengan desainer produk ternama</li>
        <li>Festival keramik tahunan</li>
        <li>Pengembangan sentra wisata kerajinan</li>
      </ul>`,
      views: 1987,
      likes: 156,
      comments: 29
    }
  ];

  // Filter artikel berdasarkan kategori
  const filteredArticles = category === 'all' 
    ? articles 
    : articles.filter(article => article.category === category);

  return (
    <div className="art-articles-page">
      {/* Header */}
      <header className="article-header">
        <div className="header-content">
          <h1>Seni Rupa Nusantara</h1>
          <p>Menjelajahi Keindahan dan Makna Karya Seni Tradisional hingga Kontemporer Indonesia</p>
        </div>
      </header>

      {/* Navigasi Kategori */}
      <div className="category-nav">
        <button 
          className={category === 'all' ? 'active' : ''}
          onClick={() => setCategory('all')}
        >
          Semua Artikel
        </button>
        <button 
          className={category === 'lukisan' ? 'active' : ''}
          onClick={() => setCategory('lukisan')}
        >
          Lukisan
        </button>
        <button 
          className={category === 'patung' ? 'active' : ''}
          onClick={() => setCategory('patung')}
        >
          Patung
        </button>
        <button 
          className={category === 'keramik' ? 'active' : ''}
          onClick={() => setCategory('keramik')}
        >
          Keramik
        </button>
        <button 
          className={category === 'kaligrafi' ? 'active' : ''}
          onClick={() => setCategory('kaligrafi')}
        >
          Kaligrafi
        </button>
      </div>

      {/* Artikel Utama */}
      <div className="featured-article">
        <div className="featured-image">
          <img src="/assets/featured-art.jpg" alt="Featured Art" />
        </div>
        <div className="featured-content">
          <span className="category-tag">Lukisan</span>
          <h2>Transformasi Seni Lukis Klasik Bali dalam Dunia Kontemporer</h2>
          <p>Eksplorasi bagaimana seniman Bali mengadaptasi teknik tradisional untuk menciptakan karya yang relevan dengan konteks global saat ini, sambil mempertahankan nilai-nilai budaya asli.</p>
          <div className="article-meta">
            <div className="author">
              <img src="/assets/author1.jpg" alt="Author" />
              <span>Dian Sastrowardoyo</span>
            </div>
            <div className="date">18 Juni 2025</div>
          </div>
          <button className="read-more">Baca Artikel</button>
        </div>
      </div>

      {/* Daftar Artikel */}
      <div className="articles-container">
        <h2 className="section-title">Artikel Terbaru</h2>
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div className="article-card" key={article.id}>
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <span className="category-label">{article.category}</span>
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="article-meta">
                  <div className="author-info">
                    <img src={article.authorAvatar} alt={article.author} />
                    <span>{article.author}</span>
                  </div>
                  <div className="article-stats">
                    <span>{article.date}</span>
                    <div className="stat-item">
                      <i className="fas fa-eye"></i> {article.views}
                    </div>
                    <div className="stat-item">
                      <i className="fas fa-heart"></i> {article.likes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Ikuti Perkembangan Seni Rupa Nusantara</h2>
          <p>Dapatkan artikel terbaru, pameran, dan acara seni langsung di email Anda</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Alamat email Anda" />
            <button>Berlangganan</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="articles-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>SENI NUSANTARA</h3>
            <p>Melestarikan Keindahan Seni Indonesia</p>
          </div>
          <div className="footer-links">
            <h4>Kategori</h4>
            <ul>
              <li><Link to="#">Lukisan</Link></li>
              <li><Link to="#">Patung</Link></li>
              <li><Link to="#">Keramik</Link></li>
              <li><Link to="#">Tekstil</Link></li>
              <li><Link to="#">Kaligrafi</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Sumber Daya</h4>
            <ul>
              <li><Link to="#">Galeri Seni</Link></li>
              <li><Link to="#">Seniman</Link></li>
              <li><Link to="#">Pameran</Link></li>
              <li><Link to="#">Workshop</Link></li>
              <li><Link to="#">Buku Seni</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Kontak</h4>
            <p>Jl. Seni Raya No. 123, Jakarta</p>
            <p>info@seninusantara.id</p>
            <p>+62 21 1234 5678</p>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-tiktok"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Seni Nusantara. Hak Cipta Dilindungi. | Menjaga Warisan Budaya Indonesia</p>
        </div>
      </footer>
    </div>
  );
};

export default ArtArticles;