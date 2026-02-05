import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSubmenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    {
      name: 'Bidang Kerja',
      path: '#',
      submenu: [
        { name: 'Chef', path: '/chef' },
        { name: 'F&B Services', path: '/fb-service' },
        { name: 'Restaurant Manager', path: '/restaurant-management' }
      ]
    },
    { name: 'Skema Biaya', path: '/skema-biaya' },
    { name: 'Kontak', path: '/kontak' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
<div className="h-[56px] w-[56px] rounded flex items-center justify-center">
  <img
    src={IMAGES.iconweb}
    alt="Logo PT. Mitra Sinergi Sukses"
    className="h-[48px] w-[48px] object-contain"
  />
</div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-romania-blue">
                PT. Mitra Sinergi Sukses</span>
              <span className="text-xs text-slate-500">
                Professional Recruitment Agency
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    {/* Parent */}
                    <div className="flex items-center cursor-pointer py-2">
                      <span className="font-medium text-black group-hover:text-romania-blue transition-colors">
                        {link.name}
                      </span>
                      <ChevronDown
                        size={16}
                        className="ml-1 text-black group-hover:text-romania-blue transition-colors"
                      />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2 border border-slate-100">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="
                              block px-4 py-2 text-sm
                              text-black
                              hover:bg-romania-blue/10
                              hover:!text-black
                              transition-colors
                            "
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="font-medium text-black hover:text-romania-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden bg-white fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-romania-blue rounded flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-romania-blue">
                Mitra Sinergi Sukses
              </span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-black">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-xl">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                      className="flex items-center justify-between w-full font-medium text-black"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          isSubmenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isSubmenuOpen && (
                      <div className="mt-4 ml-4 flex flex-col space-y-4">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="text-black text-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.path} className="font-medium text-black">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pb-8">
            <Link
              to="/kontak"
              className="block w-full bg-romania-blue text-white text-center py-4 rounded-xl font-bold shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
