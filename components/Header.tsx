import React, { useState } from 'react';
import type { Page } from '../types';
import Button from './Button';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, onNavigate, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const activeClass = isMobile ? 'bg-[#F5D1D1] text-[#1a1a1a]' : 'text-[#D4AF37] after:w-full';
  const baseClasses = isMobile 
    ? 'block text-left px-4 py-3 text-lg' 
    : 'relative text-sm uppercase tracking-wider transition-colors duration-300 after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#D4AF37] after:w-0 after:transition-all after:duration-300 hover:text-[#D4AF37] hover:after:w-full';
  
  return (
    <a
      href={`#/${page}`}
      className={`${baseClasses} ${isActive ? activeClass : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(page);
      }}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'services', label: 'Layanan' },
    { page: 'gallery', label: 'Galeri' },
    { page: 'pricing', label: 'Daftar Harga' },
    { page: 'about', label: 'Tentang Kami' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#/home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="text-2xl font-bold font-serif text-[#1a1a1a]">
          A.U <span className="text-[#D4AF37]">Art</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <NavLink key={item.page} page={item.page} currentPage={currentPage} onNavigate={onNavigate}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => onNavigate('contact')} variant="primary">
            Booking Sekarang
          </Button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1a1a1a] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-lg">
           <nav className="flex flex-col py-4">
             {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} onNavigate={() => { onNavigate(item.page); setIsMenuOpen(false); }} isMobile>
                  {item.label}
                </NavLink>
              ))}
              <div className="px-4 py-3">
                 <Button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} variant="primary" className="w-full">
                    Booking Sekarang
                 </Button>
              </div>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
