import React from 'react';
import { Award, ShieldCheck, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* ================= HEADER SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bgMenu})` }}
        />
        
        {/* Dark transparent overlay (opsional tapi recommended) */}
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
              px-6 py-3
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(0,0,0,0.55)]
              text-white
              mb-6
            "
          >
            Tentang Kami
          </h1>
          <p
            className="
              inline-block
              text-lg sm:text-xl
              text-white/95
              max-w-3xl
              leading-relaxed
              px-4 py-3
              rounded-xl
              bg-slate-900/50
              backdrop-blur-md
              shadow-[0_10px_30px_rgba(0,0,0,0.55)]
            "
          >
            PT. Mitra Sinergi Sukses merupakan lembaga penempatan pekerja migran
            Indonesia ke luar negeri yang telah berpengalaman sejak tahun 2005.
          </p>

        </div>
      </section>


      {/* ================= DETAILED INFO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Tentang Grup Perusahaan Kami​
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                PT. Mitra Sinergi Sukses adalah perusahaan penempatan pekerja migran
                Indonesia (P3MI) swasta yang berpusat di Malang, Jawa Timur. Kami
                merupakan salah satu P3MI terbaik di Indonesia, telah beroperasi
                sejak tahun 2005 dalam pengembangan sumber daya manusia Indonesia
                dan penempatan PMI ke luar negeri, baik sektor informal maupun
                profesional.
              </p>

              <div className="bg-[#002B7F] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
                  Grup Perusahaan Kami
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-[#FCD116] mr-2" size={18} />
                    PT. Mitra Sinergi Sukses (P3MI)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-[#FCD116] mr-2" size={18} />
                    PT. Mitra Sarana Sejahtera Malang
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-[#FCD116] mr-2" size={18} />
                    PT. Mitra Bina Bangsa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-[#FCD116] mr-2" size={18} />
                    PT. Mitra Sinergi Anugrah
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-[#FCD116] mr-2" size={18} />
                    PT. Universal Hospitality Training Centre
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">Legalitas</h4>
                  <p className="text-sm text-slate-600">
                    NIB: 8120214191493
                  </p>
                  <p className="text-sm text-slate-600">
                    Izin: Kepmenaker RI No. 272/2017
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">Lokasi Utama</h4>
                  <p className="text-sm text-slate-600">
                    Malang (Pusat) & Surabaya (Marketing)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={IMAGES.directorOffice}
                alt="Director Office"
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-[#002B7F] font-bold text-lg mb-2">
                  Kualitas & Integritas
                </p>
                <p className="text-slate-500 text-sm">
                  Kami berkomitmen penuh pada perlindungan dan kesuksesan setiap
                  pekerja migran kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GREETING SECTION ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Quote size={300} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <img
                src={IMAGES.viceDirector}
                alt="Wakil Director"
                className="rounded-2xl border-4 border-[#FCD116] shadow-2xl"
              />
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Sambutan Director –{' '}
                <span className="text-[#FCD116]">Mitra Group</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 font-light italic leading-relaxed">
                <p>
                  "Dengan rahmat Tuhan yang Maha Esa, Indonesia akan dianugerahkan bonus demograﬁ di tahun 2030 hingga 2040 mendatang dan akan mencapai puncak keemasannya pada tahun 2045. Usia produktif yang akan mendominasi wajah bangsa dan negara ini perlu diimbangi dengan pendidikan keterampilan yang berkualitas, berdedikasi , dan bertekat untuk berkeinginan maju dan sukses yang kuat serta bahasa & budaya global."
                </p>
                <p>
                  "Guna mengurangi pengangguran dan mensukseskan angkatan muda Indonesia menjadi wirausahawan, grup perusahaan kami hadir untuk menjembatani dunia vokasi Indonesia dengan peluang skill upgrading, peningkatan kualitas hidup dan penambahan wawasan serta pengalaman internasional di luar negeri, melalui berbagai kesempatan kerja serta pendidikan vokasi di luar negeri."
                </p>
                <p>
                  "Rumania merupakan salah satu negara maju di benua Eropa yang memberikan peluang untuk pengembangan karir dan kualitas hidup yang lebih baik bagi pencari kerja dari Indonesia. Dengan berbagai kesempatan yang tersedia di berbagai bidang bagi pekerja di luar negeri, besar harapan kami banyak masyarakat Indonesia yang dapat berkarir di Rumania dan mengumpulkan modal yang besar untuk kelak kembali ke Indonesia, menjadi wirausaha muda dan menciptakan lapangan kerja di Indonesia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-16 text-center">
            Mitra Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Global Hospitality Network',
                region: 'Europe & Asia',
                img: IMAGES.partners[0]
              },
              {
                name: 'Romanian Culinary Union',
                region: 'Bucharest, Romania',
                img: IMAGES.partners[1]
              },
              {
                name: 'Elite Gastro Services',
                region: 'Transylvania, Romania',
                img: IMAGES.partners[2]
              }
            ].map((mitra, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-lg transition-all"
              >
                <img
                  src={mitra.img}
                  alt={mitra.name}
                   className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 text-lg">
                    {mitra.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {mitra.region}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
