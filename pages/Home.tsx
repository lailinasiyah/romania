import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Users, Briefcase, ChefHat  } from 'lucide-react';
import { IMAGES } from '../constants';


const Home: React.FC = () => {
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

        {/* Gradient Overlay – kuning lebih terang */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#002B7F]/95
            via-[#FCD116]/80
            to-transparent
          "
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
                Membangun Karir di{' '}
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
                Bergabunglah bersama PT. Mitra Sinergi Sukses dan raih peluang
                karir internasional di sektor kuliner & hospitality. Pelatihan
                standar global dan lingkungan kerja dinamis menanti Anda.
              </span>
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontak"
                className="bg-[#CE1126] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all hover:scale-105 shadow-xl"
              >
                Daftar Sekarang <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/tentang-kami"
                className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all"
              >
                Pelajari Lebih Lanjut
              </Link>
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
    </div>
  );
};

export default Home;
