import React from 'react';
import '../../styles/coreHighlights.css';
import softwareIcon from '../../assets/icons/software.png';
import cadIcon from '../../assets/icons/cad.png';
import cloudIcon from '../../assets/icons/cloud.png';
import consultIcon from '../../assets/icons/consulting.png';

const CoreHighlights: React.FC = () => {
  return (
    <section className="core-highlights-section">
      <h2 className="section-title">Core <span className="brand-name">Highlights</span></h2>
      <div className="highlights-grid">
        <div className="highlight-card" style={{backgroundColor: '#f1efef'}}>
          <img src={softwareIcon} alt="Software Development" className="highlight-icon" />
          <h3>Software Development</h3>
          <p>
            Modern, scalable web & mobile apps built using Angular, React, .NET & cloud-native stacks.
          </p>
        </div>
        <div className="highlight-card" style={{backgroundColor: '#f1efef'}}>
          <img src={cadIcon} alt="PLM & CAD Engineering" className="highlight-icon" />
          <h3>PLM & CAD Engineering</h3>
          <p>
            Tailored solutions around Windchill, SolidWorks & more.
          </p>
        </div>
        <div className="highlight-card" style={{backgroundColor: '#f1efef'}}>
          <img src={cloudIcon} alt="Cloud & DevOps" className="highlight-icon" />
          <h3>Cloud & DevOps</h3>
          <p>
            CI/CD, containerization, and Azure/AWS/GCP cloud deployments.
          </p>
        </div>
        <div className="highlight-card" style={{backgroundColor: '#f1efef'}}>
          <img src={consultIcon} alt="Consulting & Support" className="highlight-icon" />
          <h3>Consulting & Support</h3>
          <p>
            Agile consulting, technical support, and long-term service engagements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreHighlights;
