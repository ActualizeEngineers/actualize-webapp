import React from 'react';
import '../../styles/whyChoose.css';
import innovationIcon from '../../assets/icons/innovation.png';
import teamIcon from '../../assets/icons/team.png';
import globalIcon from '../../assets/icons/global.png';
import customer_support from '../../assets/icons/customer-support.png';
import Card from './Card.tsx'

const WhyChoose: React.FC = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose <span className="brand-name">Actualize?</span></h2>
       <div className="why-choose-grid"> 
        <Card img={innovationIcon} title="Innovation at Core" desc="Modern solutions with a problem-solving mindset."/>
       <Card img={teamIcon} title="Experienced Team" desc="Passionate engineers, consultants, and developers."/> 
      <Card img={customer_support} title="Customer-Centric Approach" desc="We prioritize client success with tailored, collaborative solutions."/>
      <Card img={globalIcon} title="Global Delivery" desc="Based in US, Germany, and India with global agility."/>
       </div> 
    </section>
  );
};

export default WhyChoose;
