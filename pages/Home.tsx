import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Users, Briefcase, ChefHat, Quote  } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { IMAGES, TESTIMONIALS } from '../constants';


const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  useEffect(() => {
    if (totalPages <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  useEffect(() => {
    if (activeIndex >= totalPages && totalPages > 0) {
      setActiveIndex(totalPages - 1);
    }
  }, [itemsPerPage, totalPages, activeIndex]);
  const featuredJobs = [
    {
      title: 'Cook',
      description:
        'Tidak hanya berkarir di dalam negeri, seorang Cook juga memiliki peluang besar untuk bekerja di luar negeri. Saat ini, kebutuhan tenaga kerja di bidang kuliner terus meningkat di berbagai negara, termasuk Rumania, untuk memenuhi industri perhotelan dan restoran yang berkembang pesat.',
      link: '/chef',
      icon: IMAGES.iconcook,
    },
    {
      title: 'F&B Services',
      description:
        'Profesi di bidang F&B Service kini semakin diminati di pasar kerja internasional. Rumania menjadi salah satu negara yang membutuhkan tenaga profesional di bidang layanan makanan dan minuman untuk menunjang pertumbuhan industri hospitality mereka.',
      link: '/fb-service',
      icon: IMAGES.iconwaiter,
    },
    {
      title: 'Restaurant Manager',
      description:
        'Seorang Restaurant Manager di Rumania bertanggung jawab mengelola operasional restoran sesuai standar layanan dan regulasi lokal. Ia mengawasi staf, memastikan kualitas makanan dan pelayanan, serta menjaga kepuasan pelanggan domestik maupun wisatawan.',
      link: '/restaurant-management',
      icon: IMAGES.iconteam,
    },
  ];

  const styles = {
    container: {
      padding: '40px',
    },
    jobList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    jobCard: {
      background: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
    jobIcon: {
      width: '60px',
      marginBottom: '16px',
    },
    jobTitle: {
      fontSize: '20px',
      marginBottom: '12px',
    },
    jobDescription: {
      textAlign: 'justify' as const,
      lineHeight: 1.6,
      color: '#555',
      marginBottom: '16px',
    },
    jobLink: {
      textDecoration: 'none',
      color: '#007bff',
      fontWeight: 600,
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center">
        {/* Background Image */}
        <img
          src={IMAGES.hero}
          alt="Romania Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />



        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20">
          <div className="max-w-2xl text-left text-white">
            {/* TITLE */}
            <h1 className="mb-6 leading-tight">
              <br />
              <br />
              <span
                className="
                  inline-block
                  text-4xl sm:text-5xl md:text-7xl
                  font-extrabold
                  px-4 py-2
                  rounded-xl
                  bg-slate-800/70
                  backdrop-blur-md
                  drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]
                "
              >
                Meraih Kesempatan Emas Sukses Di {' '}
                <span className="text-[#FCD116]">Romania</span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-8">
              <span
                className="
                  inline-block
                  text-lg sm:text-xl md:text-2xl
                  px-4 py-3
                  rounded-xl
                  bg-slate-800/60
                  backdrop-blur-md
                  text-slate-100
                  font-light
                  leading-relaxed
                  drop-shadow-md
                "
              >
                Job : Bartender, Chef (Experienced Cook, Junior Cook)
                Gaji : Dengan gaji rata - rata 15 Juta lebih
              </span>
            </p>

            {/* BUTTONS */}
          </div>
        </div>
      </section>

            {/* ================= STATS ================= */}
      <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* ITEM 1 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">
                20+
              </h3>
              <p className="mt-2 text-slate-600 font-semibold tracking-wide">
                TAHUN PENGALAMAN
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">
                500+
              </h3>
              <p className="mt-2 text-slate-600 font-semibold tracking-wide">
                ALUMNI SUKSES
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">
                98%
              </h3>
              <p className="mt-2 text-slate-600 font-semibold tracking-wide">
                SUCCESS RATE
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">
                25+
              </h3>
              <p className="mt-2 text-slate-600 font-semibold tracking-wide">
                PARTNER INSTITUSI
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURED JOBS ================= */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B7F] mb-4">
              Bidang Kerja Unggulan
            </h2>
            <p className="text-slate-600 text-lg">
              Kami bekerja sama dengan berbagai restoran dan hotel ternama di
              Romania.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {featuredJobs.map((job) => (
    <div
      key={job.title}
      className="relative
                  bg-white
                  pt-24
                  p-8
                  mt-20 md:mt-0
                  rounded-2xl
                  border border-slate-100
                  shadow-xl
                  hover:shadow-2xl
                  transition-all"
    >
      {/* ICON IMAGE (BUNDAR & DI ATAS) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center overflow-hidden">
          <img
            src={job.icon}
            alt={job.title}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* CONTENT */}
      <h3 className="text-2xl font-bold mb-4 text-slate-800 text-center">
        {job.title}
      </h3>

      <p className="text-slate-600 mb-8 leading-relaxed text-justify">
        {job.description}
      </p>

      <div className="flex justify-center">
        <Link
          to={job.link}
          className="inline-flex items-center font-bold text-[#002B7F]"
        >
          Detail Peluang <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

         <section id="about" className="py-24 bg-gradient-to-b from-white turkiye-pattern to-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">

      {/* IMAGE */}
      <div className="lg:w-1/2">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3]">
           <img 
              src="https://images.unsplash.com/photo-1649137809081-b73ee9a5e03b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students studying"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="lg:w-1/2">
      <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
        Mengapa Memilih <br />
        <span className="text-[#D4A017] relative">
          PT. Mitra Sinergi Sukses?
          <span className="absolute left-0 bottom-1 w-full h-3 bg-[#D4A017]/20 -z-10"></span>
        </span>
      </h2>

        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Kami Perusahaan yang <span className="font-semibold text-gray-900">
          berpengalaman lebih dari 20 tahun
          </span> dalam mendidik, melatih pekerja migran yang profesional di bidangnya dan mendampingi perjalanan karir anda hingga sukses.
        </p>

        <ul className="space-y-5">
          {[
            "Sangat Berpengalaman dan Terpercaya",
            "Jaringan Partner Luas di Seluruh Romania",
            "Rekrutmen dan Pelatihan Profesional",
            "Konsultasi Komprehensif (Akademik & Mental)",
            "Bimbingan Birokrasi Visa & Tempat Tinggal"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 group">

              {/* BULAT KUNING */}
              <div className="w-8 h-8 min-w-[32px] rounded-full bg-[#FFD84D] flex items-center justify-center shadow-md group-hover:scale-110 transition">
                <span className="text-[#E31E24] font-bold text-sm">✓</span>
              </div>

              <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition">
                {item}
              </span>

            </li>
          ))}
        </ul>

      </div>
    </div>
  </div>
</section>
{/* ================= TESTIMONIALS ================= */}
<section className="py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4 md:px-6">

    <div className="text-center mb-16">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Kata <span className="text-[#D4A017]">Alumni</span>
      </h2>
      <p className="text-gray-600">
        Mereka yang telah sukses mewujudkan mimpi berkarir di Romania.
      </p>
    </div>

    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => {
          const startIndex = pageIndex * itemsPerPage;
          const pageItems = TESTIMONIALS.slice(
            startIndex,
            startIndex + itemsPerPage
          );

          return (
            <div
              key={pageIndex}
              className="min-w-full flex justify-center gap-8 px-2 md:px-4"
            >
              {pageItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full bg-gray-50 p-8 rounded-2xl relative flex flex-col h-full hover:shadow-xl transition"
                >
                  <Quote
                    className="text-[#D4A017]/20 absolute top-4 right-4"
                    size={64}
                  />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#D4A017]"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-red-600 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic leading-relaxed flex-grow">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>

    {totalPages > 1 && (
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? 'w-10 h-3 bg-[#D4A017]'
                : 'w-3 h-3 bg-gray-300 hover:bg-[#D4A017]/50'
            }`}
          />
        ))}
      </div>
    )}
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
    href="https://wa.me/6285185995935"
    target="_blank"
    className="bg-gradient-to-r from-[#C8102E] to-red-700
               text-white px-6 py-6 rounded-xl
               shadow-2xl hover:scale-110
               transition-all duration-300 group"
  >
    <p className="font-bold text-lg">🔥 Chat Nova Sekarang</p>
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
    <p className="font-bold text-lg">🔥 Chat Victor Sekarang</p>
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

export default Home;
