import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/Company/About';
import Team from './pages/Company/Team';
import LifeAt from './pages/Company/LifeAt';

import Engineering from './pages/Services/Engineering';
import Digital from './pages/Services/Digital';

import Heavy from './pages/Industries/Heavy';
import Industrial from './pages/Industries/Industrial';
import Automotive from './pages/Industries/Automotive';
import Process from './pages/Industries/Process';

import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Software from './pages/Services/Software';
import Product from './pages/Services/Product';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* Company */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/team" element={<Team />} />
        <Route path="/company/life-at-actualize" element={<LifeAt />} />

        {/* Services */}

        <Route path="/services/engineering" element={<Engineering />} />
        <Route path="/services/digital-transformation" element={<Digital />} />
        <Route path="/services/software-development" element={<Software />} />
        <Route path="/services/product-development" element={<Product />} />

        {/* Industries */}
        <Route path="/industries/heavy-engineering" element={<Heavy />} />
        <Route path="/industries/industrial-engineering" element={<Industrial />} />
        <Route path="/industries/automotive-engineering" element={<Automotive />} />
        <Route path="/industries/process-engineering" element={<Process />} />

        {/* Other */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
