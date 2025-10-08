import React from 'react';
import type { Service, PriceItem, PackageItem, Testimonial, GalleryItem, USP } from './types';

// SVG Icons as React Components
export const CertificateIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const QualityIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export const SterileIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export const ConsultationIcon: React.FC<{className?: string}> = ({ className }) => (
 <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

// Data
export const USPs: USP[] = [
  { icon: QualityIcon, title: 'Kualitas Bahan Hypoallergenic', description: 'Kami hanya menggunakan produk premium yang bebas alergi, memastikan keamanan dan kenyamanan untuk kulit Anda.' },
  { icon: CertificateIcon, title: 'Artist Bersertifikasi', description: 'Keahlian artist kami terjamin dengan sertifikasi profesional, memberikan hasil yang presisi dan sesuai harapan.' },
  { icon: SterileIcon, title: 'Proses Steril', description: 'Setiap alat yang digunakan disterilkan sesuai standar medis untuk menjamin kebersihan dan kesehatan Anda.' },
  { icon: ConsultationIcon, title: 'Konsultasi Gratis 15 Menit', description: 'Diskusikan keinginan Anda dengan ahli kami untuk mendapatkan rekomendasi terbaik sesuai bentuk wajah dan gaya Anda.' },
];

export const SERVICES: Service[] = [
  {
    id: 'sulam-alis',
    title: 'Sulam Alis',
    shortDescription: 'Membentuk alis natural dan simetris dengan teknik 6D, powder, atau ombre menggunakan tinta organik.',
    longDescription: 'Prosedur semi-permanen menggunakan tinta organik untuk membentuk alis natural (6D, 3D powder/ombre). Sangat cocok untuk Anda yang memiliki alis tipis atau tidak simetris. Proses pengerjaan nyaman dengan anestesi lokal.',
    process: [
        'Konsultasi desain bentuk alis.',
        'Pengaplikasian krim anestesi.',
        'Proses penyulaman dengan alat steril.',
        'Finishing dan pemberian aftercare kit.'
    ],
    aftercare: 'Hindari air selama 24 jam pertama, oleskan salep yang diberikan, dan jangan mengelupas kulit yang mengering.',
    imageUrl: 'https://picsum.photos/seed/eyebrow/600/400',
  },
  {
    id: 'eyelash-extension',
    title: 'Eyelash Extension',
    shortDescription: 'Memanjangkan dan menebalkan bulu mata dengan helai sintetis premium untuk tampilan natural atau dramatis.',
     longDescription: 'Penyambungan bulu mata sintetis premium (mink/silk) satu per satu pada bulu mata asli Anda. Tersedia berbagai pilihan gaya, dari classic yang natural hingga volume yang dramatis, disesuaikan dengan bentuk mata Anda.',
    process: [
        'Pembersihan area mata.',
        'Pemilihan jenis dan panjang bulu mata.',
        'Pemasangan helai per helai dengan lem khusus.',
        'Proses pengeringan dan penyisiran akhir.'
    ],
    aftercare: 'Hindari air dan uap selama 24 jam, jangan mengucek mata, dan sikat bulu mata setiap hari dengan spoolie.',
    imageUrl: 'https://picsum.photos/seed/eyelash/600/400',
  },
  {
    id: 'nail-art',
    title: 'Nail Art',
    shortDescription: 'Menghias kuku dengan desain custom menggunakan gel polish halal, dari warna polos hingga seni 3D yang rumit.',
    longDescription: 'Ekspresikan diri Anda melalui desain kuku custom dengan gel polish halal, stiker, atau 3D elements. Kami menyediakan opsi dari Basic (plain color), Medium (simple pattern), hingga Premium (full art dengan gems/charms).',
    process: [
        'Manicure dasar (pembersihan dan pembentukan kuku).',
        'Pemilihan desain dan warna.',
        'Aplikasi base coat, warna, dan seni kuku.',
        'Finishing dengan top coat dan pengeringan UV.'
    ],
    aftercare: 'Gunakan sarung tangan saat melakukan pekerjaan rumah tangga, hindari bahan kimia keras, dan gunakan cuticle oil secara teratur.',
    imageUrl: 'https://picsum.photos/seed/nailart/600/400',
  },
];

export const PRICES: PriceItem[] = [
    { service: 'Sulam Alis Baru', description: '6D Natural / Ombre Powder', price: '1.800.000 - 2.500.000', duration: '1.5 jam', guarantee: '1-2 tahun' },
    { service: 'Perbaikan Sulam Alis', description: 'Koreksi dari pihak lain', price: '1.000.000 - 1.500.000', duration: '1 jam', guarantee: '1 tahun' },
    { service: 'Eyelash Extension', description: 'Classic (Natural)', price: '150.000 - 250.000', duration: '1 jam', guarantee: '1 minggu' },
    { service: 'Eyelash Extension', description: 'Volume (Dramatis)', price: '250.000 - 350.000', duration: '1.5 jam', guarantee: '1 minggu' },
    { service: 'Nail Art', description: 'Basic (Plain Color + Manicure)', price: '50.000 - 100.000', duration: '45 menit', guarantee: '1 minggu' },
    { service: 'Nail Art', description: 'Medium (Simple Pattern)', price: '100.000 - 150.000', duration: '1 jam', guarantee: '1 minggu' },
    { service: 'Nail Art', description: 'Premium (Full Custom Art)', price: '150.000 - 250.000', duration: '1.5 jam', guarantee: '1 minggu' },
    { service: 'Tambahan Panggilan', description: 'Home Service (min. 10 km)', price: '+150.000', duration: '-', guarantee: '-' },
];

export const PACKAGES: PackageItem[] = [
    { title: 'Sulam Alis + Eyelash', saving: 'Hemat Rp 300.000' },
    { title: 'Eyelash + Nail Art', saving: 'Hemat Rp 150.000' },
    { title: 'Full Face & Hands (Sulam + Eyelash + Nail)', saving: 'Hemat Rp 500.000' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'Hasil sulam alisnya natural banget, suka! Artist-nya juga detail dan sabar. Tempatnya bersih dan nyaman. Highly recommended!', name: 'Amanda S.' },
  { quote: 'Eyelash extension di A.U Art paling awet dibanding tempat lain. Ringan dan gak ganjel sama sekali. Pasti balik lagi.', name: 'Bella P.' },
  { quote: 'Nail art-nya super gemes dan rapi. Banyak pilihan warna dan desainnya unik-unik. Thank you A.U Art!', name: 'Citra L.' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, category: 'Sulam Alis', beforeUrl: 'https://picsum.photos/seed/b1/600/600', afterUrl: 'https://picsum.photos/seed/a1/600/600', title: '6D Natural Brow' },
    { id: 2, category: 'Eyelash Extension', beforeUrl: 'https://picsum.photos/seed/b2/600/600', afterUrl: 'https://picsum.photos/seed/a2/600/600', title: 'Classic Lash Set' },
    { id: 3, category: 'Nail Art', beforeUrl: 'https://picsum.photos/seed/b3/600/600', afterUrl: 'https://picsum.photos/seed/a3/600/600', title: 'Premium Gel Art' },
    { id: 4, category: 'Sulam Alis', beforeUrl: 'https://picsum.photos/seed/b4/600/600', afterUrl: 'https://picsum.photos/seed/a4/600/600', title: 'Ombre Powder Brow' },
    { id: 5, category: 'Nail Art', beforeUrl: 'https://picsum.photos/seed/b5/600/600', afterUrl: 'https://picsum.photos/seed/a5/600/600', title: 'Minimalist Nail Design' },
    { id: 6, category: 'Eyelash Extension', beforeUrl: 'https://picsum.photos/seed/b6/600/600', afterUrl: 'https://picsum.photos/seed/a6/600/600', title: 'Volume Lash Full Set' },
    { id: 7, category: 'Nail Art', beforeUrl: 'https://picsum.photos/seed/b7/600/600', afterUrl: 'https://picsum.photos/seed/a7/600/600', title: 'French Manicure Modern' },
    { id: 8, category: 'Sulam Alis', beforeUrl: 'https://picsum.photos/seed/b8/600/600', afterUrl: 'https://picsum.photos/seed/a8/600/600', title: 'Brow Correction' },
    { id: 9, category: 'Eyelash Extension', beforeUrl: 'https://picsum.photos/seed/b9/600/600', afterUrl: 'https://picsum.photos/seed/a9/600/600', title: 'Hybrid Lash Set' },
];

export const INSTAGRAM_POSTS = [
    { id: 1, url: 'https://picsum.photos/seed/ig1/500/500' },
    { id: 2, url: 'https://picsum.photos/seed/ig2/500/500' },
    { id: 3, url: 'https://picsum.photos/seed/ig3/500/500' },
    { id: 4, url: 'https://picsum.photos/seed/ig4/500/500' },
    { id: 5, url: 'https://picsum.photos/seed/ig5/500/500' },
    { id: 6, url: 'https://picsum.photos/seed/ig6/500/500' },
];

export const WHATSAPP_NUMBER = "6285738254999";
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/auart_beauty";
