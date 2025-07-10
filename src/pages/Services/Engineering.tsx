import React from 'react';
import '../../styles/engineering.css';
import engineeringHero from '../../assets/services/engineering.jpg';
import mechanical from '../../assets/icons/mechanical.png'
import electrical from '../../assets/icons/electrical.png'
import manufacturing from '../../assets/icons/manufacturing.png'
import analysis from '../../assets/icons/analysis.png'
import technical from '../../assets/icons/technical.png'
type EngineeringCategory = {
  title: string;
  description: string;
  icon: string;
};
const engineeringCategories: EngineeringCategory[] =[ 
              {
                title: 'Mechanical Engineering',
                description: 'CAD, design, and product development services across the mechanical lifecycle.',
                icon: mechanical,
              },
              {
                title: 'Electrical Engineering',
                description: 'PCB design, harness routing, and electrical system design.',
                icon: electrical,
              },
              {
                title: 'Manufacturing Engineering',
                description: 'Tooling, fixture design, and process optimization for production.',
                icon: manufacturing,
              },
              {
                title: 'Analysis',
                description: 'FEA, CFD, and simulation to validate and improve product designs.',
                icon: analysis,
              },
              {
                title: 'Technical Publication',
                description: 'Creation of manuals, documentation, and service guides.',
                icon: technical,
              },
            ];

const Engineering: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${engineeringHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
        }}
      >
        <div className="overlay">
          <h1 className="display-4 fw-bold">Engineering Services</h1>
          <p className="lead">Innovate. Simulate. Deliver.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">What We Offer</h2>
          <p className="lead text-muted">
            Empowering product development with cutting-edge engineering, CAD, and PLM expertise.
          </p>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-3 col-sm-6 d-flex">
            <div className="highlight-card h-100 w-100">
              <i className="fas fa-drafting-compass fa-2x text-primary mb-3"></i>
              <h5>Design & Modeling</h5>
              <p>Comprehensive 2D/3D CAD support across industries.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 d-flex">
            <div className="highlight-card h-100 w-100">
              <i className="fas fa-cogs fa-2x text-primary mb-3"></i>
              <h5>Simulation</h5>
              <p>Advanced FEA & CFD to optimize performance and durability.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 d-flex">
            <div className="highlight-card h-100 w-100">
              <i className="fas fa-tools fa-2x text-primary mb-3"></i>
              <h5>Manufacturing Support</h5>
              <p>Support for prototyping, reverse engineering & shop-floor documentation.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 d-flex">
            <div className="highlight-card h-100 w-100">
              <i className="fas fa-sync-alt fa-2x text-primary mb-3"></i>
              <h5>Lifecycle Management</h5>
              <p>PLM customization, integration, and support across Windchill, Teamcenter & more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Categories as Cards */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <h2 className="team-title text-center mb-5">Our Engineering Experts</h2>
          <div className="team-grid team-grid-five">
            {engineeringCategories.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.icon} alt={member.title} className="team-photo" />
                <h5>{member.title}</h5>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center text-white py-5 custom-highlight-section">
        <h4 className="mb-3">Ready to Build Better Products?</h4>
        <a href="/contact" className="btn btn-light btn-lg">
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default Engineering;
