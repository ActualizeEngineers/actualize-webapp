import React from 'react';
import '../../styles/whyChoose.css';
import innovationIcon from '../../assets/icons/innovation.png';
import teamIcon from '../../assets/icons/team.png';
import globalIcon from '../../assets/icons/global.png';
import customer_support from '../../assets/icons/customer-support.png';

const WhyChoose: React.FC = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose <span className="brand-name">Actualize?</span></h2>
      <div className="why-choose-grid">
        <div className="why-card">
          <div className="why-icon-wrapper">
            <img src={innovationIcon} alt="Innovation" className="why-icon" />
          </div>
          <h3>Innovation at Core</h3>
          <p>Modern solutions with a problem-solving mindset.</p>
        </div>
        <div className="why-card">
          <div className="why-icon-wrapper">
            <img src={teamIcon} alt="Team" className="why-icon" />
          </div>
          <h3>Experienced Team</h3>
          <p>Passionate engineers, consultants, and developers.</p>
        </div>
        <div className="why-card">
          <div className="why-icon-wrapper">
            <img src={customer_support} alt="Customer-Support" className="why-icon" />
          </div>
          <h3>Customer-Centric Approach</h3>
          <p>We prioritize client success with tailored, collaborative solutions.</p>
        </div>
        <div className="why-card">
          <div className="why-icon-wrapper">
            <img src={globalIcon} alt="Global" className="why-icon" />
          </div>
          <h3>Global Delivery</h3>
          <p>Based in US, Germany, and India with global agility.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
