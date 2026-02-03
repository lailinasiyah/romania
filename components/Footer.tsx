
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Desc */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded flex items-center justify-center">
              <img
                src={IMAGES.iconweb} // atau CONSTANTS.iconweb
                alt="Logo PT. Mitra Sinergi Sukses"
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="font-bold text-xl">PT. Mitra Sinergi Sukses</span>
          </Link>

          <p className="text-slate-400 text-sm leading-relaxed">
            Lembaga penempatan pekerja migran Indonesia ke luar negeri yang telah
            berpengalaman sejak tahun 2005. Berfokus pada sektor kuliner dan hospitality
            di Romania.
          </p>
        </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-romania-yellow">Quick Menu</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-romania-yellow transition-colors flex items-center"><span className="mr-2">›</span> Home</Link></li>
              <li><Link to="/tentang-kami" className="hover:text-romania-yellow transition-colors flex items-center"><span className="mr-2">›</span> Tentang Kami</Link></li>
              <li><Link to="/chef" className="hover:text-romania-yellow transition-colors flex items-center"><span className="mr-2">›</span> Peluang Karir</Link></li>
              <li><Link to="/skema-biaya" className="hover:text-romania-yellow transition-colors flex items-center"><span className="mr-2">›</span> Skema Biaya</Link></li>
            
            </ul>
          </div>

          {/* Legalitas */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-romania-yellow">Legalitas</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <p><span className="text-white font-medium">NIB:</span> 8120214191493</p>
              <p><span className="text-white font-medium">Izin P3MI:</span> Kepmenaker RI No. 272 Tahun 2017</p>
              <div className="pt-2">
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 PT. Mitra Sinergi Sukses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
