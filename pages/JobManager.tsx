
import React from 'react';
import { GlassWater,Utensils, Award, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const JobManager: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
       <section className="relative py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bgfnb})` }}
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
            Restaurant Manager & Management
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
            Mulai Perjalanan Terhebatmu dalam bidang Restaurant Management di  Rumania
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
                 <strong>Restaurant Management </strong>adalah bidang kerja yang mencakup seluruh aspek pengelolaan operasional sebuah restoran, mulai dari perencanaan menu, pengelolaan staf, pelayanan pelanggan, pengendalian kualitas makanan dan minuman, hingga pengelolaan keuangan dan strategi pemasaran. Seorang manajer restoran bertanggung jawab memastikan operasional berjalan efisien dan sesuai standar, menjaga kepuasan pelanggan, serta mengoptimalkan profitabilitas bisnis.
                </p>
                <br></br>
                <p>
                  Rumania, sebagai salah satu negara di Eropa yang sedang berkembang dalam sektor pariwisata dan kuliner, memiliki banyak restoran, hotel, dan resort yang terus mencari tenaga kerja profesional dan terlatih. Hal ini membuka peluang besar untuk menjadi bagian dari Restaurant Management di Rumania, dan mengembangkan karier di lingkungan kerja internasional.
                </p>
                <br></br>
                <p>
                  Bekerja dalam bidang Restaurant Management di Rumania bukan hanya soal penghasilan, tetapi juga kesempatan memperluas pengalaman, meningkatkan skill, serta menjadi bagian dari industri hospitality global. Dengan gaji dan fasilitas yang kompetitif, program kerja di bidang Restaurant Management di Rumania menjadi salah satu pilihan menjanjikan bagi Anda yang siap menapaki dunia kuliner/F&B dengan skala internasional.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Prospek Kerja</h3>
                <ul className="space-y-4">
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Perpanjangan kontrak kerja</strong> di tempat yang sama</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Kesempatan Naik jabatan</strong> ke posisi Kitchen Supervisor atau sejenisnya</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Pindah kerja ke negara Eropa lainnya</strong> dengan jalur legal yang lebih mudah</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Mendirikan usaha kuliner sendiri</strong> di Indonesia dengan bekal pengalaman internasional</span></li>
                  
                </ul>
         
                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Posisi yang Dibutuhkan:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none p-0">
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Floor Supervisor </li>
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Floor Manager </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Syarat Penerimaan:</h3>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
  <ul className="space-y-3">
    <li className="flex items-start">
      <span className="mr-3 mt-1 text-green-600 font-bold">✓</span>
      <span>Pria/Wanita Usia 22 - 40 tahun</span>
    </li>

    <li className="flex items-start">
      <span className="mr-3 mt-1 text-green-600 font-bold">✓</span>
      <span>Min. D3/S1 Seni Kuliner / Bisnis Kuliner / Manajemen Bisnis Kuliner</span>
    </li>

    <li className="flex items-start">
      <span className="mr-3 mt-1 text-green-600 font-bold">✓</span>
      <span>Kemampuan Bahasa Inggris Profesional</span>
    </li>

    <li className="flex items-start">
      <span className="mr-3 mt-1 text-green-600 font-bold">✓</span>
      <span>
        Khusus Floor Supervisor, Diutamakan Memiliki Pengalaman Min. 2 Tahun
        Sebagai Floor Supervisor
      </span>
    </li>

    <li className="flex items-start">
      <span className="mr-3 mt-1 text-green-600 font-bold">✓</span>
      <span>
        Khusus Floor Manager, Diutamakan Memiliki Pengalaman Min. 5 tahun sebagai
        Floor Supervisor, atau 2 tahun sebagai Floor Manager
      </span>
    </li>
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
                            <p className="text-sm font-bold text-romania-blue/60 uppercase">Floor Supervisor</p>
                            <p className="text-2xl font-black text-romania-blue">RON 5,000</p>
                            <p className="text-sm font-medium">± Rp 18,8 Juta / Bulan</p>
                        </div>
                        <div className="border-b border-romania-blue/20 pb-4">
                            <p className="text-sm font-bold text-romania-blue/60 uppercase">Floor Manager</p>
                            <p className="text-2xl font-black text-romania-blue">RON 6,750</p>
                            <p className="text-sm font-medium">± Rp 25 Juta / Bulan</p>
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

export default JobManager;
