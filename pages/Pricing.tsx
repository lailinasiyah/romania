import React from 'react';
import { IMAGES } from '../constants';
import {
  ShieldCheck,
  Info,
  Ticket,
  Plane,
  CreditCard,
  CheckCircle2
} from 'lucide-react';

const Pricing: React.FC = () => {
  const packages = [
    {
      title: 'Biaya Proses',
      roles: 'Bartender / Waiter / Cook / Floor Supervisor',
      price: 'Rp 20 Juta',
      image: IMAGES.bgservice,
      popular: false,
      paymentSteps: [
      '1 Juta – Admin Fee',
      '9 Juta – Menerima kontrak kerja',
      '10 Juta – Menerima visa kerja Romania'
    ]
    },
    {
      title: 'Biaya Proses',
      roles: 'Floor Manager',
      price: 'Rp 25 Juta',
      image: IMAGES.bgmanajer,
      popular: false,
      paymentSteps: [
      '2 Juta – Admin Fee',
      '11.5 Juta – Menerima kontrak kerja',
      '12.5 Juta – Menerima visa kerja Romania'
    ]
    },
    {
      title: 'Biaya Proses',
      roles: 'Head Chef',
      price: 'Rp 30 Juta',
      image: IMAGES.bgheadchef,
      popular: false,
      paymentSteps: [
      '1 Juta – Admin Fee',
      '14 Juta – Menerima kontrak kerja',
      '15 Juta – Menerima visa kerja Romania'
    ]
    }
  ];

  return (
    <div className="pt-24">
      {/* ================= HERO ================= */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bgbiaya})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B7F]/70 via-[#FCD116]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="inline-block text-4xl sm:text-5xl md:text-7xl font-black tracking-tight px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl text-white mb-6">
            Skema Biaya Program Romania
          </h1>
          <p className="inline-block text-lg sm:text-xl text-white/95 max-w-3xl px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md">
            Investasi masa depan yang terjangkau dengan transparansi pembayaran
            penuh di setiap tahapan proses.
          </p>
        </div>
      </section>

      {/* ================= PACKAGE SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative pt-24 rounded-3xl border transition-all ${
                  pkg.popular
                    ? 'border-romania-blue shadow-2xl scale-105'
                    : 'border-slate-200 shadow-xl'
                }`}
              >
                {/* FLOATING IMAGE */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-44 rounded-2xl overflow-hidden shadow-xl ring-4 ring-romania-blue/10 bg-romania-blue">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-col p-8 bg-white rounded-3xl h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              {pkg.title}
            </h3>

            <p className="text-sm text-slate-500 mb-6 font-medium text-center">
              {pkg.roles}
            </p>

            <div className="mt-auto">

              <p className="text-4xl font-black text-romania-blue mb-4 text-center">
                {pkg.price}
              </p>

              {/* TAHAPAN PEMBAYARAN */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-700 mb-3 text-center">
                  Dengan Tahapan Pembayaran
                </p>

                <ul className="space-y-2">
                  {pkg.paymentSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-romania-blue mr-2 mt-0.5 shrink-0"
                      />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/6282271674145?text=Halo%20Ibu%20Rani%2C%20saya%20ingin%20bertanya%20mengenai%20skema%20biaya%20proses%20ke%20Romania.%20Boleh%20minta%20info%20lebih%20lanjut%3F"
                target="_blank"
                rel="noreferrer"
                className="
                  block w-full text-center py-4 rounded-xl font-bold
                  text-blue-900
                  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                  hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-600
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                "
              >
                Hubungi Untuk Detail
              </a>

            </div>
          </div>
              </div>
            ))}
          </div>

          {/* ================= DETAIL BIAYA ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-romania-blue mb-8 flex items-center">
                <CheckCircle2 className="mr-3" /> Biaya Sudah Termasuk
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center"><Info size={18} className="mr-3 text-romania-blue" /> Pengurusan Visa</li>
                <li className="flex items-center"><ShieldCheck size={18} className="mr-3 text-romania-blue" /> Asuransi</li>
                <li className="flex items-center"><Ticket size={18} className="mr-3 text-romania-blue" /> eKTKLN</li>
                <li className="flex items-center"><CreditCard size={18} className="mr-3 text-romania-blue" /> Handling di Romania</li>
                <li className="flex items-center"><Plane size={18} className="mr-3 text-romania-blue" /> Tiket pesawat Jakarta – Romania</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <CreditCard className="mr-3" /> Ditanggung Peserta
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li>✓ Paspor</li>
                <li>✓ MCU (Medical Check-Up)</li>
                <li>✓ SKCK dari POLRI</li>
                <li>✓ Transport Kedutaan</li>
                <li>✓ Transport pengurusan visa awal Kedutaan Romania di Jakarta</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pricing;