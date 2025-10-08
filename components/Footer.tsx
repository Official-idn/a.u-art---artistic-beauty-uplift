import React from 'react';
import type { Page } from '../types';
import { WHATSAPP_NUMBER, INSTAGRAM_PROFILE_URL } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20A.U%20Art,%20saya%20tertarik%20dengan%20layanan%20Anda.`;

  const footerLinks: { page: Page; label: string }[] = [
      { page: 'services', label: 'Layanan' },
      { page: 'gallery', label: 'Galeri' },
      { page: 'pricing', label: 'Harga' },
      { page: 'about', label: 'Tentang Kami' },
      { page: 'terms', label: 'Syarat & Ketentuan' },
      { page: 'contact', label: 'Kontak' },
  ];
    
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif text-white">
              A.U <span className="text-[#D4AF37]">Art</span>
            </h3>
            <p className="text-gray-400 font-serif-alt">Uplift Your Art, Reveal Your True Beauty.</p>
            <p className="text-gray-400">Jl Candi Borobudur 17, Malang</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(link => (
                 <li key={link.page}>
                   <a 
                     href={`#/${link.page}`} 
                     onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}
                     className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                   >
                     {link.label}
                   </a>
                 </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-white">Hubungi Kami</h4>
            <div className="mt-4 space-y-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                {/* WhatsApp Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.803 6.12l-1.34 4.889 4.956-1.303z"/></svg>
                <span>+62 857-3825-4999</span>
              </a>
              <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                <span>@auart_beauty</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} A.U Art. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
