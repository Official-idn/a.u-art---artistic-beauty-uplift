import React from 'react';
import type { Page } from '../types';
import Button from '../components/Button';
import { SERVICES, USPs, TESTIMONIALS, INSTAGRAM_POSTS, GALLERY_ITEMS } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] min-h-[500px] bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Uplift Your Art,
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-serif-alt">Reveal Your True Beauty.</p>
          <div className="mt-8">
            <Button onClick={() => onNavigate('contact')} variant="primary" className="text-lg">
              Booking Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#fdf8f8]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a1a]">Layanan Unggulan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-serif-alt">
            Mengangkat keindahan alami Anda melalui seni yang presisi dan personal.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-md mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <a href="#/services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="font-semibold text-[#D4AF37] hover:text-[#b8982a] transition-colors">
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">Mengapa Memilih Kami?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-serif-alt">
              Komitmen kami pada kualitas, keamanan, dan seni untuk kepuasan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPs.map((usp, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                   <usp.icon className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Snippet */}
      <section className="py-20 bg-[#fdf8f8]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a1a]">Portofolio Karya Seni Kami</h2>
           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-serif-alt">
            Lihat transformasi nyata dan kualitas hasil kerja kami.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
             {GALLERY_ITEMS.slice(0, 6).map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg">
                    <img src={item.afterUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-bold">{item.title}</p>
                    </div>
                </div>
            ))}
          </div>
          <div className="mt-12">
            <Button onClick={() => onNavigate('gallery')} variant="outline">
                Lihat Semua Galeri
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">Apa Kata Mereka</h2>
             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-serif-alt">
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-[#fdf8f8] p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 italic font-serif-alt text-lg mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-right text-[#1a1a1a]">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Feed */}
        <section className="py-20 bg-[#fdf8f8]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold">Follow Us on Instagram</h2>
                <a href="https://www.instagram.com/auart_beauty" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xl text-[#D4AF37] font-serif-alt">@auart_beauty</a>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {INSTAGRAM_POSTS.map(post => (
                        <a key={post.id} href="https://www.instagram.com/auart_beauty" target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                            <img src={post.url} alt="Instagram Post" className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-300" />
                        </a>
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
};

export default HomePage;
