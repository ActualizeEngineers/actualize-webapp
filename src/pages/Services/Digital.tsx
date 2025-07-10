import React from 'react';
import '../../styles/digital.css';
import digitalHero from '../../assets/services/digital.jpg';
import cloudIcon from '../../assets/icons/cloud.png';
import appDevIcon from '../../assets/icons/appdev.png';
import dataIcon from '../../assets/icons/data.png';
import devopsIcon from '../../assets/icons/devops.png';
import aiIcon from '../../assets/icons/ai.png';

const digitalServices = [
  {
    title: 'Cloud Enablement',
    description: 'Cloud-first strategies across Azure, AWS, and GCP to boost agility and reduce infra cost.',
    icon: cloudIcon,
  },
  {
    title: 'Application Development',
    description: 'Modern web & mobile apps with Angular, React, .NET, and Node.js.',
    icon: appDevIcon,
  },
  {
    title: 'Data Engineering',
    description: 'ETL pipelines, data lakes, and BI dashboards for insights-driven decisions.',
    icon: dataIcon,
  },
  {
    title: 'DevSecOps',
    description: 'CI/CD, containerization, IaC, and integrated security for faster, safer releases.',
    icon: devopsIcon,
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent automation, predictive analytics, and machine learning for smarter processes.',
    icon: aiIcon,
  },
];

const Digital: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${digitalHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
        }}
      >
        <div className="overlay">
          <h1 className="display-4 fw-bold">Digital Transformation</h1>
          <p className="lead">Transforming ideas into intelligent, scalable solutions.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">What We Deliver</h2>
            <p className="lead text-muted">
              Driving digital outcomes through cloud modernization, data intelligence, and agile delivery.
            </p>
          </div>

          <div className="team-grid">
            {digitalServices.map((service, index) => (
              <div className="team-card" key={index}>
                <img src={service.icon} alt={service.title} className="team-photo" />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center text-white py-5 custom-highlight-section">
        <h4 className="mb-3">Ready to Accelerate Your Digital Journey?</h4>
        <a href="/contact" className="btn btn-light btn-lg">
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default Digital;
