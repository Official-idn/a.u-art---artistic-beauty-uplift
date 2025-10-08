import React from 'react';
import type { Page } from '../types';
import { PRICES, PACKAGES } from '../constants';
import Button from '../components/Button';

interface PricingPageProps {
  onNavigate: (page: Page) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#1a1a1a]">Daftar Harga & Paket</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-serif-alt">
            Harga kami transparan dan sudah termasuk konsultasi, bahan premium, dan aftercare kit. Temukan layanan yang tepat untuk Anda.
          </p>
        </div>

        {/* Price Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-[#fdf8f8]">
              <tr>
                <th className="p-4 md:p-6 text-sm font-bold uppercase text-[#1a1a1a]">Layanan</th>
                <th className="p-4 md:p-6 text-sm font-bold uppercase text-[#1a1a1a]">Deskripsi</th>
                <th className="p-4 md:p-6 text-sm font-bold uppercase text-[#1a1a1a] text-right">Harga (Rp)</th>
                <th className="hidden md:table-cell p-6 text-sm font-bold uppercase text-[#1a1a1a] text-center">Durasi</th>
                <th className="hidden lg:table-cell p-6 text-sm font-bold uppercase text-[#1a1a1a] text-center">Garansi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {PRICES.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 md:p-6 font-bold text-[#1a1a1a]">{item.service}</td>
                  <td className="p-4 md:p-6 text-gray-600">{item.description}</td>
                  <td className="p-4 md:p-6 text-gray-800 font-semibold text-right">{item.price}</td>
                  <td className="hidden md:table-cell p-6 text-gray-600 text-center">{item.duration}</td>
                  <td className="hidden lg:table-cell p-6 text-gray-600 text-center">{item.guarantee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">*Harga bisa disesuaikan berdasarkan kompleksitas desain. Diskon 15% untuk repeat customer.</p>

        {/* Packages Section */}
        <div className="mt-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1a1a1a]">Paket Bundling</h2>
                <p className="mt-4 text-lg text-gray-600 font-serif-alt">Dapatkan lebih banyak dengan harga lebih hemat.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PACKAGES.map((pkg, index) => (
                    <div key={index} className="bg-[#fdf8f8] border border-gray-200 p-8 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#1a1a1a]">{pkg.title}</h3>
                        <p className="mt-2 text-xl font-semibold text-[#D4AF37]">{pkg.saving}</p>
                        <div className="mt-6">
                           <Button onClick={() => onNavigate('contact')} variant="secondary">
                                Pilih Paket
                           </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
