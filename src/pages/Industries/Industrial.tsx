import React from 'react';
import Navbar from '../../layouts/Navbar';

import mining_truck from '../../assets/images/mining_truck.png'
import energy_fuel from '../../assets/images/energy_fuel.png'
import electricity_grid from '../../assets/images/electricity_grid.png'
import satellite_dish from '../../assets/images/satellite_dish.png'

import '../../styles/industrial.css';

const industries = [
  {
    title: 'Mining',
    image: mining_truck,
  },
  {
    title: 'Energy',
    image: energy_fuel,
  },
  {
    title: 'Utilities & Spatial Intelligence',
    image: electricity_grid,
  },
  {
    title: 'Communications',
    image: satellite_dish,
  },
];

const Industrial: React.FC = () => {
  return (
    <>
    <div className="indus-container">
        <Navbar />
      </div>
      <section className="industry-hero heavy-bg text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Industrial Engineering</h1>
          <p className="lead">
            Engineering excellence for large-scale, mission-critical industries
          </p>
        </div>
      </section>
    <section className="industries-section">
      <h2 className="industries-heading">
        20 Years of Engineering Excellence<br />
        <span className="highlight">Across Industries</span>
      </h2>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <img src={industry.image} alt={industry.title} className="industry-image" />
            <div className="industry-overlay">
              <h3>{industry.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Industrial;
