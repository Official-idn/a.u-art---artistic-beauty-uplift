import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import type { GalleryItem } from '../types';

type Category = 'All' | 'Sulam Alis' | 'Eyelash Extension' | 'Nail Art';

const GalleryImage: React.FC<{ item: GalleryItem }> = ({ item }) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
      {/* Before Image (background, zooms on hover) */}
      <img 
        src={item.beforeUrl} 
        alt={`${item.title} (Before)`} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
      />
      {/* After Image (foreground, fades out on hover) */}
      <img 
        src={item.afterUrl} 
        alt={`${item.title} (After)`} 
        className="relative w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      
      {/* Dynamic Before/After Tag */}
      <div className="absolute top-2 left-2">
         <span className="bg-[#D4AF37] text-white text-xs font-semibold px-2 py-1 rounded-md opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute">After</span>
         <span className="bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Before</span>
      </div>

      {/* Text Info */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h4 className="text-white font-bold text-lg truncate">{item.title}</h4>
        <p className="text-gray-200 text-sm">{item.category}</p>
      </div>
    </div>
  );
};


const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories: Category[] = ['All', 'Sulam Alis', 'Eyelash Extension', 'Nail Art'];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#1a1a1a]">Portofolio</h1>
          <p className="mt-4 text-xl text-gray-600 font-serif-alt">Bukti visual utama dari kualitas kerja A.U Art.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === category 
                  ? 'bg-[#D4AF37] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-[#F5D1D1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;