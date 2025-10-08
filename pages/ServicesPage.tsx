import React from 'react';
import { SERVICES, GALLERY_ITEMS } from '../constants';
import type { Service } from '../types';

const ServiceSection: React.FC<{ service: Service }> = ({ service }) => {
    const serviceGallery = GALLERY_ITEMS.filter(item => item.category === service.title).slice(0, 3);

    return (
        <section id={service.id} className="py-16 first:pt-0 last:pb-0">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-6 font-serif-alt">{service.longDescription}</p>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-[#1a1a1a]">Proses Pengerjaan</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {service.process.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-[#1a1a1a]">Panduan Aftercare</h4>
                                <p className="text-gray-700">{service.aftercare}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                         <img src={service.imageUrl} alt={service.title} className="rounded-lg shadow-xl w-full h-auto object-cover mb-4" />
                         <div className="grid grid-cols-3 gap-2">
                            {serviceGallery.map(item => (
                                <img key={item.id} src={item.afterUrl} alt={item.title} className="rounded-md shadow-md w-full aspect-square object-cover" />
                            ))}
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-cover bg-center py-24" style={{ backgroundImage: `url('https://picsum.photos/seed/service-header/1920/600')` }}>
        <div className="container mx-auto px-6 text-center bg-black/50 py-10 rounded-lg">
          <h1 className="text-5xl font-extrabold text-white">Layanan Kami</h1>
          <p className="mt-4 text-xl text-white font-serif-alt">Kualitas dan seni untuk kecantikan sejati Anda.</p>
        </div>
      </header>
      
      <main className="divide-y divide-gray-200">
        {SERVICES.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </main>
    </div>
  );
};

export default ServicesPage;
