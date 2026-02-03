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
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${IMAGES.bgrestaurant})` }}
  />  

  {/* Dark transparent overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Gradient Background */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-[#002B7F]/70
      via-[#FCD116]/50
      to-transparent
    "
  />

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
      Karir di Bidang F&B Services
    </h1>

    <p
      className="
        max-w-3xl
        text-lg sm:text-xl
        leading-relaxed
        px-6 py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        text-slate-100
      "
    >
      Kesempatan Emas Bekerja di Rumania Sebagai Ahli yang Terampil dan Terbaik di Bidang F&B Service
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
                 <strong> F&B (Food and Beverage) Service </strong> adalah tugas yang berkaitan dengan pelayanan makanan dan minuman kepada tamu di restoran, hotel, atau kafe. Seorang staf F&B Service bertanggung jawab untuk menyambut tamu, mencatat pesanan, menyajikan makanan dan minuman dengan sopan, serta memastikan kenyamanan dan kepuasan tamu selama makan. Selain itu, mereka juga menjaga kebersihan area kerja dan bekerja sama dengan tim dapur untuk memberikan pelayanan terbaik.
                </p>
                <br></br>
                <p>
                  Rumania sebagai bagian dari Eropa Timur, sedang mengalami perkembangan pesat di sektor pariwisata dan kuliner. Hal ini menciptakan banyak peluang kerja di bidang F&B Service, khususnya restoran, hotel, dan resort kelas internasional yang memerlukan staf pelayanan profesional dari luar negeri, termasuk Indonesia.
                </p>
                <br></br>
                <p>
                  Program ini menawarkan kesempatan kerja resmi dalam bidang F&B Service di Rumania, dengan fasilitas lengkap, lingkungan kerja multinasional, serta pengalaman internasional yang sangat berharga. Posisi ini juga menjadi gerbang awal untuk pengembangan karier jangka panjang di industri hospitality global.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Prospek Kerja</h3>
                <ul className="space-y-4">
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Naik jabatan</strong> Head Waiter, Floor Captain, atau Supervisor seiring dengan peningkatan pengalaman dan kinerja di dapur.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Melamar pekerjaan di negara Eropa lainnya</strong> dengan peluang lebih besar berkat pengalaman kerja internasional dan standar Eropa.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Bekerja di restoran, hotel, atau kapal pesiar (cruise ship) </strong> yang menawarkan gaji lebih tinggi, fasilitas lengkap, serta lingkungan kerja multinasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Membuka usaha kuliner sendiri,</strong> seperti restoran atau kafe, dengan bekal pengalaman manajemen dapur dan standar internasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Menjadi staf pelatih atau  instruktur hospitality</strong> di lembaga pelatihan kerja</span></li>
                </ul>
         
                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Posisi yang Dibutuhkan:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none p-0">
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Waiter </li>
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Bartender </li>
              
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Syarat Penerimaan:</h3>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <ul className="space-y-3">
                    <li>✓ Pria/Wanita Usia 19 - 40 tahun</li>
                    <li>✓ Min. Lulusan SMA/SMK</li>
                    <li>✓ Kemampuan Bahasa Inggris Dasar</li>
                    <li>✓ Sudah mengikuti pelatihan F&B Service (untuk Waiter/ess) atau Bartending (untuk Bartender) di LKP/LPK perhotelan</li>
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
                            <p className="text-sm font-medium">± Rp 14,8 Juta / Bulan</p>
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
    </div>
  );
};

export default JobFB;
