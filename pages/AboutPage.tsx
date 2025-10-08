import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Brand Story */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl font-extrabold text-[#1a1a1a] mb-6">Tentang A.U Art</h1>
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 font-serif-alt">"Uplift Your Art, Reveal Your True Beauty."</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                A.U Art adalah brand kecantikan premium yang mengusung konsep Artistic Uplift – mengangkat keindahan alami Anda melalui seni sulam alis, eyelash extension, dan nail art yang presisi dan personal.
              </p>
              <p>
                Kami percaya setiap wajah dan tangan adalah kanvas unik yang layak dihiasi dengan sentuhan artistik yang aman, tahan lama, dan penuh percaya diri. Fokus kami adalah pada kualitas bahan hypoallergenic, keahlian artist bersertifikasi, dan proses steril untuk hasil yang aman dan natural.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src="https://picsum.photos/seed/about1/600/700" alt="A.U Art Brand" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
          </div>
        </section>

        {/* Team / Artist */}
        <section className="grid lg:grid-cols-2 gap-12 items-center bg-[#fdf8f8] p-12 rounded-lg mb-20">
          <div>
            <img src="https://picsum.photos/seed/artist/600/700" alt="Artist Firdi" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Tim Kami</h2>
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">Firdi, Certified Beauty Artist</h3>
            <p className="text-lg text-gray-700 mb-4 font-serif-alt">
                Dengan passion mendalam di dunia seni dan kecantikan, Firdi adalah founder sekaligus lead artist di A.U Art. Memiliki sertifikasi profesional di bidang sulam alis dan eyelash extension, Firdi berkomitmen untuk memberikan hasil terbaik yang disesuaikan secara personal untuk setiap klien.
            </p>
            <p className="text-gray-600">
                "Kecantikan sejati adalah saat kita merasa percaya diri dengan versi terbaik dari diri kita. Tugas saya adalah membantu Anda menemukannya melalui sentuhan seni yang detail dan personal."
            </p>
          </div>
        </section>
        
        {/* Location / Studio */}
        <section className="text-center">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Lokasi Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-serif-alt">
                Kunjungi studio kami yang bersih, nyaman, dan estetis untuk pengalaman treatment yang menenangkan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src="https://picsum.photos/seed/studio1/600/400" alt="Studio Interior 1" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                <img src="https://picsum.photos/seed/studio2/600/400" alt="Studio Interior 2" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                <img src="https://picsum.photos/seed/studio3/600/400" alt="Studio Interior 3" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
