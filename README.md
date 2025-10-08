# A.U Art - Artistic Beauty Uplift

Website resmi untuk A.U Art, salon kecantikan spesialis dalam layanan sulam alis, eyelash extension, dan nail art. Kami menyediakan layanan profesional dengan bahan hypoallergenic dan artist bersertifikasi.

## ✨ Fitur

- **Sulam Alis**: Teknik 6D, powder, dan ombre menggunakan tinta organik
- **Eyelash Extension**: Bulu mata sintetis premium dengan berbagai gaya
- **Nail Art**: Desain kuku custom menggunakan gel polish halal
- **Booking Online**: Sistem pemesanan mudah melalui WhatsApp
- **Galeri**: Portofolio hasil kerja sebelum dan sesudah
- **Kontak & Lokasi**: Informasi lengkap dengan peta lokasi

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Maps**: OpenStreetMap (migrated from Google Maps)
- **Fonts**: Bunny Fonts (migrated from Google Fonts)

## 🚀 Instalasi & Development

### Prerequisites
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Setup
1. Clone repository ini:
   ```bash
   git clone https://github.com/username/a.u-art---artistic-beauty-uplift.git
   cd a.u-art---artistic-beauty-uplift
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka browser dan akses `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📦 Deployment

Proyek ini menggunakan GitHub Actions untuk deployment otomatis ke GitHub Pages.

### Setup GitHub Pages
1. Push kode ke branch `main`
2. Pergi ke Settings > Pages di repository GitHub
3. Pilih "Deploy from a branch"
4. Pilih branch `gh-pages` dan folder `/ (root)`
5. Simpan

Workflow akan otomatis:
- Build aplikasi
- Deploy ke `gh-pages` branch
- Website akan tersedia di `https://username.github.io/a.u-art---artistic-beauty-uplift`

## 📁 Struktur Proyek

```
a.u-art---artistic-beauty-uplift/
├── components/          # Komponen React reusable
├── pages/              # Halaman utama aplikasi
├── constants.tsx       # Data statis (layanan, harga, dll)
├── types.ts           # TypeScript type definitions
├── index.html         # Template HTML utama
├── vite.config.ts     # Konfigurasi Vite
└── .github/
    └── workflows/     # GitHub Actions workflow
```

## 🔄 Migrasi dari Google Services

Proyek ini telah dimigrasikan dari dependensi Google untuk kompatibilitas dengan VSCode dan browser:

- **Google Fonts** → **Bunny Fonts**: Font yang sama tanpa dependensi Google
- **Google Maps** → **OpenStreetMap**: Peta interaktif open-source
- Semua fungsionalitas tetap sama, namun lebih privacy-friendly

## 📞 Kontak

**A.U Art - Artistic Beauty Uplift**
- **Alamat**: Jl. Candi Borobudur No.17, Mojolangu, Lowokwaru, Malang
- **WhatsApp**: +62 857-3825-4999 (Firdi)
- **Instagram**: [@auart_beauty](https://www.instagram.com/auart_beauty)

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

---

*Dibuat dengan ❤️ untuk kecantikan dan kenyamanan Anda*
