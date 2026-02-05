import React from 'react';
import { Phone, MapPin, Clock, MousePointerClick } from 'lucide-react';
import { IMAGES } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">

      {/* ================= HEADER ================= */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bgcontact})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B7F]/70 via-[#FCD116]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="inline-block text-4xl sm:text-5xl md:text-7xl font-black px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="inline-block text-lg sm:text-xl text-white/95 max-w-3xl px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md">
            Tim kami siap membantu menjawab pertanyaan Anda seputar karir di luar negeri.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 18px)',
          }}
        />

        <div className="relative z-10 flex justify-center">
          <div className="w-full max-w-3xl px-4 space-y-8">

             {/* Informasi Kantor */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Informasi Kantor
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-4 bg-blue-50 text-blue-700 rounded-2xl mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">
                      Kantor Pusat Malang
                    </h4>
                    <p className="text-slate-600">PT. Mitra Sinergi Sukses</p>
                    <p className="text-slate-600">
                      Jl. Mayjen Sungkono No.77, Wonokoyo, Kedungkandang, Kota Malang
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-4 bg-red-50 text-red-600 rounded-2xl mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">
                      Kantor Marketing Surabaya
                    </h4>
                    <p className="text-slate-600">
                      Ruko Grand Sungkono 2D No.10-11, Surabaya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informasi Kontak */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Informasi Kontak
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Rani */}
                <a
                  href="https://wa.me/6282271674145?text=Halo%20Bapak%2FIbu%20Rani%2C%20saya%20tertarik%20dengan%20kerja%20di%20Romania.%20Boleh%20minta%20info%20lebih%20lanjut%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition"
                >
                  <div className="p-3 bg-blue-700 text-white rounded-xl mr-4">
                    <Phone size={20} />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Rani
                    </p>
                    <p className="font-bold text-slate-800">
                      +62 822-7167-4145
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-red-600 font-semibold text-sm">
                      <span>Klik di sini</span>
                      <MousePointerClick
                        size={18}
                        className="group-hover:animate-bounce"
                      />
                    </div>
                  </div>
                </a>

                {/* Victor */}
                <a
                  href="https://wa.me/6282230184888?text=Halo%20Bapak%2FIbu%20Victor%2C%20saya%20tertarik%20dengan%20kerja%20di%20Romania.%20Boleh%20minta%20info%20lebih%20lanjut%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition"
                >
                  <div className="p-3 bg-blue-700 text-white rounded-xl mr-4">
                    <Phone size={20} />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Victor
                    </p>
                    <p className="font-bold text-slate-800">
                      +62 822-3018-4888
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-red-600 font-semibold text-sm">
                      <span>Klik di sini</span>
                      <MousePointerClick
                        size={18}
                        className="group-hover:animate-bounce"
                      />
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* Jam Operasional */}
            <div className="flex items-center p-6 bg-slate-900 text-white rounded-3xl shadow-xl">
              <div className="p-4 bg-yellow-400 text-blue-900 rounded-2xl mr-6">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Jam Operasional</h4>
                <p className="text-slate-400">
                  Senin - Jumat: 08:00 - 17:00 WIB
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
