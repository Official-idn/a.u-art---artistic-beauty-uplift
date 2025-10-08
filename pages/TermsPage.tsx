import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#D4AF37] pb-2">{title}</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#fdf8f8] py-16">
      <div className="container mx-auto px-6 bg-white p-8 md:p-12 rounded-lg shadow-xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#1a1a1a]">Syarat & Ketentuan</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-serif-alt">
            Untuk melindungi hasil optimal dan kesehatan Anda, kami membuat ketentuan ini jelas dan transparan. Mohon dibaca sebelum melakukan booking.
          </p>
        </div>

        <Section title="Garansi">
          <ul>
            <li><strong>Sulam Alis:</strong> Garansi warna & bentuk 1-2 tahun. Touch-up gratis jika pudar lebih dari 30% dalam 3 bulan pertama. Syarat: Hindari paparan sinar matahari langsung, gunakan sunscreen, dan ikuti panduan aftercare.</li>
            <li><strong>Eyelash Extension:</strong> Garansi 1 minggu untuk rontok prematur. Perbaikan gratis jika kurang dari 20% bulu mata jatuh. Syarat: Hindari air/makeup 24 jam pertama dan sisir harian.</li>
            <li><strong>Nail Art:</strong> Garansi 1 minggu untuk chip atau peeling. Touch-up gratis jika disebabkan oleh bahan kami. Syarat: Hindari air panas atau bahan kimia 48 jam pertama.</li>
            <li><strong>Umum:</strong> Garansi hangus jika ada modifikasi dari pihak lain, infeksi karena kelalaian customer, atau pelanggaran aftercare. Klaim garansi maksimal 1x per layanan, dalam 7 hari setelah pengerjaan.</li>
          </ul>
        </Section>
        
        <Section title="Kesehatan & Kontraindikasi">
          <p>
            Layanan kami tidak cocok untuk individu dengan kulit sangat sensitif/eksema, sedang hamil (trimester 1), atau mengonsumsi obat pengencer darah. Konsultasi medis wajib jika Anda memiliki riwayat alergi. Kami menyediakan tes patch gratis 24 jam sebelum pengerjaan untuk memastikan keamanan.
          </p>
        </Section>

        <Section title="Booking & Pembatalan">
          <ul>
            <li>Booking wajib dilakukan melalui WhatsApp atau Website minimal 48 jam sebelum jadwal yang diinginkan.</li>
            <li>Diperlukan Down Payment (DP) sebesar 50% untuk mengamankan slot Anda.</li>
            <li>Pembatalan kurang dari 24 jam sebelum jadwal akan dikenai biaya 50% dari DP.</li>
            <li>Jika tidak hadir tanpa konfirmasi (no-show), maka DP akan hangus.</li>
          </ul>
        </Section>
        
        <Section title="Risiko Potensial">
          <p>
            Kami memprioritaskan keamanan Anda, namun setiap prosedur kecantikan memiliki risiko minimal.
          </p>
          <ul>
            <li><strong>Sulam Alis:</strong> Bengkak ringan selama 1-2 hari adalah normal. Risiko infeksi sangat rendah (&lt;1%) dan dapat dihindari dengan mengikuti panduan aftercare.</li>
            <li><strong>Eyelash Extension:</strong> Iritasi mata sementara dapat terjadi. Hindari menggosok mata.</li>
            <li><strong>Nail Art:</strong> Alergi terhadap lem atau gel polish dapat terjadi (lakukan tes patch).</li>
            <li><strong>Umum:</strong> Warna bisa pudar lebih cepat pada kulit berminyak atau yang sering beraktivitas di luar ruangan.</li>
          </ul>
        </Section>

        <div className="mt-12 text-center text-gray-700 bg-gray-100 p-6 rounded-lg">
            <p className="font-bold">Dengan memilih layanan A.U Art, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.</p>
            <p>Tim kami akan dengan senang hati menjawab pertanyaan apa pun saat sesi konsultasi Anda.</p>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;
