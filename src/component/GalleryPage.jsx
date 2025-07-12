import React, { useState } from 'react';
import './galeri-digital.css';

export default function GalleryPage() {
  // State untuk filter dan sorting
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data karya seni rupa dalam ruangan
  const artworks = [
    {
      id: 1,
      code: "RP01",
      image: "/assets/lukisan.jpg",
      title: "Harmoni Warna",
      artist: "Dian Sastrowardoyo",
      artistBio: "Lulusan Institut Seni Indonesia Yogyakarta, spesialis lukisan abstrak kontemporer. Karyanya telah dipamerkan di galeri-galeri ternama di Jakarta dan Bali.",
      description: "Lukisan abstrak dengan palet warna pastel yang lembut, menciptakan suasana tenang dan elegan. Cocok untuk ruang tamu atau ruang kerja.",
      rating: 4.7,
      reviews: 38,
      price: "Rp 3.500.000",
      category: "lukisan",
      materials: "Cat akrilik di atas kanvas",
      dimensions: "80cm x 120cm",
      weight: "5kg",
      style: "Modern Minimalis"
    },
    {
      id: 2,
      code: "RP02",
      image: "/assets/patungkayu.jpg",
      title: "Elegansi Kayu",
      artist: "Bambang Sutrisno",
      artistBio: "Pematung tradisional dari Jepara dengan sentuhan modern. Mengolah kayu jati tua menjadi karya seni bernilai tinggi selama lebih dari 15 tahun.",
      description: "Patung kayu abstrak yang menampilkan alur natural kayu dengan polesan finishing yang halus. Menjadi focal point menarik di ruang keluarga.",
      rating: 4.9,
      reviews: 24,
      price: "Rp 2.800.000",
      category: "patung",
      materials: "Kayu jati tua",
      dimensions: "40cm x 60cm x 25cm",
      weight: "8kg",
      style: "Organic Modern"
    },
    {
      id: 3,
      code: "RP03",
      image: "/assets/keramik.jpg",
      title: "Formasi Keramik",
      artist: "Ratna Sarumpaet",
      artistBio: "Perajin keramik dari Bandung dengan pendekatan kontemporer. Menggabungkan teknik tradisional dengan desain modern.",
      description: "Set tiga vas keramik dengan tekstur unik dan glaze warna earth tone. Sempurna untuk menghias rak buku atau meja konsul.",
      rating: 4.5,
      reviews: 31,
      price: "Rp 1.750.000",
      category: "keramik",
      materials: "Tanah liat stoneware, glaze",
      dimensions: "Set: 20-35cm",
      weight: "4kg",
      style: "Scandinavian"
    },
    {
      id: 4,
      code: "RP04",
      image: "/assets/kaligrafi.jpg",
      title: "Aksara Keindahan",
      artist: "Ahmad Sadali",
      artistBio: "Seniman kaligrafi kontemporer lulusan ITB. Menggabungkan seni tulisan Arab dengan estetika modern dalam karyanya.",
      description: "Kaligrafi modern dengan teks filosofi Jawa dalam gaya tipografi kontemporer. Bingkai kayu hitam menambah kesan elegan.",
      rating: 4.8,
      reviews: 29,
      price: "Rp 2.200.000",
      category: "kaligrafi",
      materials: "Tinta di atas kertas archival, bingkai kayu",
      dimensions: "60cm x 90cm",
      weight: "3kg",
      style: "Contemporary"
    },
    {
      id: 5,
      code: "RP05",
      image: "/assets/fotografi.jpg",
      title: "Pesona Borobudur",
      artist: "Rio Helmi",
      artistBio: "Fotografer seni yang mengkhususkan diri pada warisan budaya Indonesia. Karyanya telah dipublikasikan di berbagai majalah internasional.",
      description: "Foto seni hitam putih Candi Borobudur dengan komposisi dramatis. Dicetak dengan teknik fine art printing pada kertas museum quality.",
      rating: 4.6,
      reviews: 42,
      price: "Rp 1.950.000",
      category: "fotografi",
      materials: "Cetak fine art di atas kertas Hahnemühle",
      dimensions: "50cm x 75cm",
      weight: "2kg",
      style: "Monochrome"
    },
    {
      id: 6,
      code: "RP06",
      image: "/assets/geometri.jpg",
      title: "Geometri Ruang",
      artist: "Eko Nugroho",
      artistBio: "Seniman instalasi kontemporer dari Yogyakarta. Karyanya dikenal dengan pendekatan multidisiplin dan bermain dengan ruang.",
      description: "Instalasi dinding tiga dimensi dari kayu lapis dengan bentuk geometris yang dinamis. Menciptakan permainan bayangan yang menarik.",
      rating: 4.4,
      reviews: 19,
      price: "Rp 4.250.000",
      category: "instalasi",
      materials: "Kayu lapis, cat akrilik",
      dimensions: "100cm x 150cm",
      weight: "12kg",
      style: "Geometric Abstract"
    }
  ];

  // Fungsi untuk filter karya
  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = filter === 'all' || artwork.category === filter;
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Fungsi untuk sorting karya
  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortBy === 'popular') return b.reviews - a.reviews;
    if (sortBy === 'price-high') return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    if (sortBy === 'price-low') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="hero-content">
          <h1>SENI NUSANTARA</h1>
          <h2>Ruang Digital Pelestarian Budaya</h2>
          <p>
            Menjaga identitas budaya Indonesia lewat karya, menghidupkan tradisi dalam bentuk
            digital yang bisa dijelajahi siapa saja, kapan saja.
          </p>
          <button className="read-more">Baca Selengkapnya</button>
        </div>
      </div>

      {/* Filter dan Sorting */}
      <div className="gallery-controls">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Cari karya seni atau seniman..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button><i className="fas fa-search"></i></button>
        </div>
        
        <div className="filter-sort">
          <div className="filter-options">
            <span>Kategori:</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Semua Kategori</option>
              <option value="lukisan">Lukisan</option>
              <option value="patung">Patung</option>
              <option value="keramik">Keramik</option>
              <option value="kaligrafi">Kaligrafi</option>
              <option value="fotografi">Fotografi</option>
              <option value="instalasi">Instalasi</option>
            </select>
          </div>
          
          <div className="sort-options">
            <span>Urutkan:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">Paling Populer</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="price-high">Harga Tertinggi</option>
              <option value="price-low">Harga Terendah</option>
            </select>
          </div>
        </div>
      </div>

      {/* Karya Seni */}
      <div className="artwork-grid">
        {sortedArtworks.map(artwork => (
          <div className="artwork-card" key={artwork.id}>
            <div className="artwork-image">
              <img src={artwork.image} alt={artwork.title} />
              <div className="artwork-code">{artwork.code}</div>
              <div className="quick-view">Lihat Detail</div>
            </div>
            
            <div className="artwork-details">
              <h3>{artwork.title}</h3>
              <div className="artist-info">
                <span>Oleh:</span> {artwork.artist}
              </div>
              
              <div className="artwork-meta">
                <div className="rating">
                  <div className="stars">
                    {'★'.repeat(Math.floor(artwork.rating))}
                    {'☆'.repeat(5 - Math.floor(artwork.rating))}
                  </div>
                  <span>{artwork.rating} ({artwork.reviews} ulasan)</span>
                </div>
                
                <div className="artwork-price">{artwork.price}</div>
              </div>
              
              <p className="description">{artwork.description}</p>
              
              <div className="specs">
                <div><strong>Gaya:</strong> {artwork.style}</div>
                <div><strong>Material:</strong> {artwork.materials}</div>
                <div><strong>Dimensi:</strong> {artwork.dimensions}</div>
              </div>
              
              <div className="artwork-actions">
                <button className="add-to-cart">+ Keranjang</button>
                <button className="view-details">Detail Karya</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Artist Spotlight */}
      <div className="artist-spotlight">
        <h2>Seniman Unggulan</h2>
        <div className="spotlight-container">
          <div className="artist-feature">
            <img src="/assets/seniman1.jpg" alt="Dian Sastrowardoyo" />
            <div className="artist-details">
              <h3>Dian Sastrowardoyo</h3>
              <p>Spesialis seni abstrak kontemporer dengan pendekatan minimalis. Karyanya mengeksplorasi hubungan antara warna dan emosi.</p>
              <div className="artist-stats">
                <div>12 Tahun Berkarya</div>
                <div>45 Karya Terjual</div>
                <div>4.8 Rating</div>
              </div>
              <button>Lihat Profil</button>
            </div>
          </div>
          
          <div className="artist-quote">
            <blockquote>
              "Seni dalam ruangan adalah dialog antara ruang fisik dan jiwa penghuninya. Setiap karya harus mampu bercerita pada yang memandangnya."
            </blockquote>
            <p>- Dian Sastrowardoyo</p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Dapatkan Update Karya Terbaru</h2>
          <p>Berlangganan newsletter kami untuk informasi karya baru, pameran, dan penawaran khusus</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Anda" />
            <button>Berlangganan</button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="gallery-footer">
        <div className="footer-top">
          <h1 className="footer-title">Seni Nusantara</h1>
          
          <div className="culture-box">
            <h3>Mari Lestarikan Budaya</h3>
            <p>
              Bergabunglah bersama kami untuk mendukung pelestarian budaya Indonesia melalui platform digital. 
              Dengan kontribusi kecil, kita bisa menjaga warisan besar.
            </p>
            <button className="culture-button">Gabung Sekarang</button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 Seni Nusantara. Seluruh hak cipta dilindungi</p>
            <p>Menjaga warisan budaya untuk masa depan bangsa</p>
          </div>
          <div className="terms">
            <a href="#">Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}