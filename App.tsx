
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe, ExternalLink, Award, Users, Briefcase, DollarSign } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import JobChef from './pages/JobChef';
import JobFB from './pages/JobFB';
import JobManager from './pages/JobManager';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/chef" element={<JobChef />} />
            <Route path="/fb-service" element={<JobFB />} />
            <Route path="/restaurant-management" element={<JobManager />} />
            <Route path="/skema-biaya" element={<Pricing />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
