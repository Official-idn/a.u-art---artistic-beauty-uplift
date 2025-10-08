import React, { useState } from 'react';
import Button from '../components/Button';
import { SERVICES, WHATSAPP_NUMBER, INSTAGRAM_PROFILE_URL } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmBooking = () => {
    setShowConfirmation(false);
    setIsSubmitted(true);
    const message = `Halo A.U Art, saya ingin booking jadwal:%0A%0A*Nama:* ${formData.name}%0A*No. WhatsApp:* ${formData.phone}%0A*Layanan:* ${formData.service}%0A*Tanggal:* ${formData.date}%0A*Jam:* ${formData.time}%0A%0ATerima kasih.`;
    const whatsappBookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappBookingUrl, '_blank');
  };

  const handleCancelBooking = () => {
    setShowConfirmation(false);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20A.U%20Art,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda.`;
  
  const focusClasses = "transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#fdf8f8] focus:ring-[#D4AF37]";
  const inputClasses = `mt-1 block w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-300 ${focusClasses}`;

  return (
    <div className="bg-white py-16">
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="confirmation-dialog-title">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h3 id="confirmation-dialog-title" className="text-2xl font-bold mb-4 text-[#1a1a1a]">Konfirmasi Booking</h3>
            <p className="text-gray-700 mb-8 font-serif-alt">
              Anda akan dialihkan ke WhatsApp untuk mengirim detail booking Anda. Lanjutkan?
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleCancelBooking} variant="secondary">
                Batal
              </Button>
              <Button onClick={handleConfirmBooking} variant="primary">
                Lanjutkan
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#1a1a1a]">Kontak & Booking</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-serif-alt">
            Siap untuk transformasi Anda? Jadwalkan sesi Anda atau hubungi kami untuk konsultasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-3 bg-[#fdf8f8] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">Formulir Booking Online</h2>
            {isSubmitted ? (
              <div role="status" aria-live="polite">
                <div className="text-center bg-green-100 text-green-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold">Terima Kasih!</h3>
                  <p className="mt-2">Pesan booking Anda sedang dialihkan ke WhatsApp. Silakan lanjutkan di sana untuk mengirimkan detail booking Anda kepada tim kami. Sampai jumpa di A.U Art!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <input type="text" name="name" id="name" required aria-required="true" value={formData.name} onChange={handleChange} className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">No. WhatsApp</label>
                    <input type="tel" name="phone" id="phone" required aria-required="true" value={formData.phone} onChange={handleChange} className={inputClasses} aria-describedby="phone-description"/>
                    <p id="phone-description" className="text-xs text-gray-500 mt-1">Contoh: 081234567890</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Pilih Layanan</label>
                  <select 
                    id="service" 
                    name="service" 
                    required 
                    aria-required="true"
                    value={formData.service} 
                    onChange={handleChange} 
                    className={`mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm ${focusClasses} ${formData.service ? 'text-white' : 'text-gray-300'}`}
                  >
                    <option value="" disabled>Pilih salah satu...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.title} className="bg-gray-800 text-white">{s.title}</option>)}
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Pilih Tanggal</label>
                    <input type="date" name="date" id="date" required aria-required="true" value={formData.date} onChange={handleChange} className={inputClasses} style={{ colorScheme: 'dark' }} />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Pilih Jam</label>
                    <input type="time" name="time" id="time" required aria-required="true" value={formData.time} onChange={handleChange} className={inputClasses} style={{ colorScheme: 'dark' }}/>
                  </div>
                </div>
                <div>
                  <Button type="submit" variant="primary" className="w-full text-lg">
                    Kirim Jadwal Booking
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Info Kontak</h3>
              <div className="space-y-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.803 6.12l-1.34 4.889 4.956-1.303z"/></svg>
                  <span>+62 857-3825-4999 (Firdi)</span>
                </a>
                <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919 4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                  <span>@auart_beauty</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span>Jl Candi Borobudur 17, Malang</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
            <h3 className="text-center text-3xl font-bold mb-6">Temukan Kami</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                 <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=112.632%2C-7.958%2C112.652%2C-7.938&layer=mapnik&marker=-7.94833%2C112.64214"
                    width="100%"
                    height="450"
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="A.U Art Location on OpenStreetMap"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;