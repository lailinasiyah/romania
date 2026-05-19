import { IMAGES } from '../constants';
import React from 'react';
import { Utensils, Award, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const JobChef: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-32 text-white overflow-hidden">
  {/* Background Image */}
  <div

     className="absolute inset-0 bg-cover bg-[center_10%] "
    style={{ backgroundImage: `url(${IMAGES.bgChef})` }}
  />

  {/* Dark transparent overlay */}


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
      Chef{' '}
      <span className="text-romania-yellow"></span> 
    </h1>
    <br></br>
              <p className="inline-block text-lg sm:text-xl font-bold text-[#FCD116] max-w-3xl leading-relaxed px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
            Gaji : IDR 15,8 - 19,8 Juta
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
                  Menjadi seorang Chef bukan hanya tentang memasak ini adalah seni, dedikasi, dan panggilan jiwa untuk menciptakan cita rasa yang mengesankan. Seorang Chef memainkan peran penting dalam dapur, mulai dari menyiapkan hidangan berkualitas tinggi, mengatur bahan baku, menjaga kebersihan area kerja, hingga memastikan setiap piring yang keluar mencerminkan standar profesional dan kreativitas kuliner terbaik.
                </p>
                <br></br>
                <p>
                  Rumania, sebagai negara Eropa Timur yang tengah berkembang pesat di sektor pariwisata dan kuliner, membuka peluang besar bagi Chef profesional dari seluruh dunia. Banyak hotel, restoran, dan resort bertaraf internasional kini mencari tenaga kerja terampil dan berpengalaman, termasuk dari Indonesia, untuk bergabung dan mengangkat kualitas dapur mereka.
                </p>
                <br></br>
                <p>
                  Program ini memberikan kesempatan kerja resmi sebagai Chef di Rumania, lengkap dengan kontrak legal, lingkungan kerja multinasional, fasilitas memadai, serta peluang untuk mengembangkan karier ke tingkat internasional. Cocok bagi kalian yang memiliki pengalaman atau keahlian di dapur, dan ingin membawa keterampilan kuliner ke panggung global.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Prospek Kerja</h3>
                <ul className="space-y-4">
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span> <strong>Naik jabatan</strong> menjadi Head Cook, Sous Chef, atau Executive Chef seiring dengan peningkatan pengalaman dan kinerja di dapur.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Melamar pekerjaan di negara Eropa lainnya</strong> dengan peluang lebih besar berkat pengalaman kerja internasional dan standar Eropa.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Bekerja di restoran, hotel, atau kapal pesiar (cruise ship) </strong> yang menawarkan gaji lebih tinggi, fasilitas lengkap, serta lingkungan kerja multinasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Membuka usaha kuliner sendiri,</strong> seperti restoran atau kafe, dengan bekal pengalaman manajemen dapur dan standar internasional.</span></li>
                  <li  className="flex items-start"> <span className="mr-3 mt-2 text-romania-blue text-xl">•</span><span><strong>Menjadi instruktur atau pelatih kuliner</strong> di lembaga pelatihan kerja, sekolah perhotelan, atau program pelatihan chef lokal.</span></li>
                </ul>
         
                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Posisi yang Dibutuhkan:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none p-0">
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Head Chef</li>
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Experienced Cook</li>
                  <li className="flex items-center"><CheckCircle className="text-romania-blue mr-2 shrink-0" size={20} /> Junior Cook</li>
                  
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Syarat Penerimaan:</h3>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <ul className="space-y-3">
                    <li>✓ Pria/Wanita Usia 20-40 tahun</li>
                    <li>✓ D3/D4/S1 Seni Kuliner/Tata Boga</li>
                    <li>✓ Kemampuan Bahasa English for Culinary Industry</li>
                    <li>✓ Khusus Experienced Cook, diutamakan memiliki pengalaman kerja sebagai Cook min. 3 tahun</li>
                    <li>✓ Khusus Head Chef, diutamakan memiliki pengalaman kerja sebagai Head Chef min. 3 Tahun</li>
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
                            <p className="text-sm font-bold text-romania-blue/60 uppercase">Junior Cook</p>
                            <p className="text-2xl font-black text-romania-blue">RON 4,000</p>
                            <p className="text-sm font-medium">± Rp 15,8 Juta / Bulan</p>
                        </div>
                        <div className="border-b border-romania-blue/20 pb-4">
                            <p className="text-sm font-bold text-romania-blue/60 uppercase">Experienced Cook</p>
                            <p className="text-2xl font-black text-romania-blue">RON 5,000</p>
                            <p className="text-sm font-medium">± Rp 19,8 Juta / Bulan</p>
                        </div>
                        {/* <div>
                            <p className="text-sm font-bold text-romania-blue/60 uppercase">Head Chef</p>
                            <p className="text-2xl font-black text-romania-blue">RON 8,500</p>
                            <p className="text-sm font-medium">± Rp 32 Juta / Bulan</p>
                        </div> */}
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

export default JobChef;
