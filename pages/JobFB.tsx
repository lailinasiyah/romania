import React from 'react';
import { GlassWater,Utensils, Award, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const JobFB: React.FC = () => {
  return (
    <div className="pt-24 pb-20">

      <section className="relative py-32 text-white overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-[center_10%] "
    style={{ backgroundImage: `url(${IMAGES.bgrestaurant})` }}
  />  

  {/* Gradient Background */}

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1
      className="
        inline-block
        text-4xl sm:text-5xl md:text-7xl
        font-black
        tracking-tight
        px-6 py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.55)]
        text-white
        mb-6
      "
    >
      Waiter
    </h1>
    <br></br>
              <p className="inline-block text-lg sm:text-xl font-bold text-[#FCD116] max-w-3xl leading-relaxed px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
            Gaji : IDR 15,8 Juta
          </p>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Position Details */}
              <div className="prose prose-lg max-w-none text-slate-600 text-justify">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Deskripsi Pekerjaan</h2>
                <p>
                 <strong> Waiter </strong> profesi yang bertugas melayani tamu di restoran, hotel, atau cafe dengan ramah dan profesional. Seorang waiter bertanggung jawab menyambut tamu, mencatat pesanan, menyajikan makanan dan minuman, serta memastikan kenyamanan dan kepuasan pelanggan selama berada di area pelayanan. Selain itu, waiter juga menjaga kebersihan area kerja dan bekerja sama dengan tim dapur untuk memberikan pelayanan terbaik.
                </p>
                <br></br>
                <p>
                  Rumania sebagai bagian dari Eropa Timur sedang mengalami perkembangan pesat di sektor pariwisata dan hospitality. Hal ini menciptakan banyak peluang kerja bagi tenaga profesional di bidang waiter, khususnya di restoran, hotel, dan resort kelas internasional yang membutuhkan staf pelayanan dari luar negeri, termasuk Indonesia.
                </p>
                <br></br>
                <p>
                  Program ini menawarkan kesempatan kerja resmi sebagai waiter di Rumania dengan fasilitas lengkap, lingkungan kerja multinasional, serta pengalaman kerja internasional yang sangat berharga. Posisi ini juga menjadi peluang untuk mengembangkan karier jangka panjang di industri hospitality global.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Prospek Kerja</h3>
                <ul className="space-y-4">
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Naik jabatan</strong> Head Waiter seiring dengan peningkatan pengalaman dan kinerja di dapur.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Melamar pekerjaan di negara Eropa lainnya</strong> dengan peluang lebih besar berkat pengalaman kerja internasional dan standar Eropa.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Bekerja di restoran, hotel, atau kapal pesiar (cruise ship) </strong> yang menawarkan gaji lebih tinggi, fasilitas lengkap, serta lingkungan kerja multinasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Membuka usaha kuliner sendiri,</strong> seperti restoran atau kafe, dengan bekal pengalaman manajemen dapur dan standar internasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Menjadi staf pelatih atau  instruktur hospitality</strong> di lembaga pelatihan kerja</span></li>
                </ul>


                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Syarat Penerimaan:</h3>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <ul className="space-y-3">
                    <li>✓ Pria/Wanita Usia 19 - 40 tahun</li>
                    <li>✓ Min. Lulusan SMA/SMK</li>
                    <li>✓ Kemampuan Bahasa Inggris Dasar</li>
                    <li>✓ Sudah mengikuti pelatihan Waiter/ess di LKP/LPK perhotelan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Salary Highlight Sidebar */}
            <div>
              <div className="sticky top-28 space-y-8">
                <div className="bg-romania-yellow p-8 rounded-3xl shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-romania-blue rounded-lg mr-3"><DollarSign className="text-white" size={24} /></div>
                        <h3 className="text-2xl font-bold text-romania-blue">Estimasi Gaji</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="border-b border-romania-blue/20 pb-4">
                            <p className="text-2xl font-black text-romania-blue">RON 4,000</p>
                            <p className="text-sm font-medium">± Rp 15,8 Juta / Bulan</p>
                        </div>
                    </div>
                    <p className="text-xs mt-6 italic text-romania-blue/70">* Nilai konversi dapat berubah sewaktu-waktu sesuai kurs berlaku.</p>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                    <h4 className="text-xl font-bold mb-4">Tertarik?</h4>
                    <p className="text-slate-400 mb-6">Segera hubungi tim kami untuk proses konsultasi dan cek biaya program.</p>
                    <Link to="/skema-biaya" className="block w-full bg-romania-red hover:bg-red-700 text-center py-4 rounded-xl font-bold transition-all shadow-lg">
                        Lihat Skema Biaya
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 diagonal-bg relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-black mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Siap Mewujudkan Mimpimu?</h2>
              <p className="text-black/90 text-lg">Jangan ragu bertanya. Konsultasi awal 100% gratis dan tanpa komitmen.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="grid sm:grid-cols-2 gap-4 text-center">

  <a 
    href="https://wa.me/6281259602251"
    target="_blank"
    className="bg-gradient-to-r from-[#C8102E] to-red-700
               text-white px-6 py-6 rounded-xl
               shadow-2xl hover:scale-110
               transition-all duration-300 group"
  >
    <p className="font-bold text-lg">🔥 Chat WA Admin 1</p>
    <p className="text-sm opacity-90">Respon Cepat & Konsultasi Gratis</p>
    <p className="mt-2 font-semibold animate-pulse">
      Klik di sini
    </p>
  </a>

  <a 
    href="https://wa.me/6282230184888"
    target="_blank"
    className="bg-gradient-to-r from-[#C8102E] to-red-700
               text-white px-6 py-6 rounded-xl
               shadow-2xl hover:scale-110
               transition-all duration-300 group"
  >
    <p className="font-bold text-lg">🔥 Chat WA Admin 2</p>
    <p className="text-sm opacity-90">Respon Cepat & Konsultasi Gratis</p>
    <p className="mt-2 font-semibold animate-pulse">
      Klik di sini
    </p>
  </a>

</div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobFB;
