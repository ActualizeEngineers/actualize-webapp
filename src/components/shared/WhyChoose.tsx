import React from "react";
import "../../styles/whyChoose.css";

const WhyChoose: React.FC = () => {
  return (
    <div className="why-choose-container">
      <div className="container">
        <section className="why-choose-section">
          <h2 className="section-title">
            Why Choose <span className="highlight">Actualize?</span>
          </h2>
          <div className="why-carousel">
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation at Core</h3>
              <p>Modern solutions with a problem-solving mindset.</p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-users"></i>
              </div>
              <h3>Experienced Team</h3>
              <p>Passionate engineers, consultants, and developers.</p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Customer-Centric</h3>
              <p>
                Client-first approach with tailored collaborative solutions.
              </p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Delivery</h3>
              <p>US, Germany, and India presence with global agility.</p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation at Core</h3>
              <p>Modern solutions with a problem-solving mindset.</p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-users"></i>
              </div>
              <h3>Experienced Team</h3>
              <p>Passionate engineers, consultants, and developers.</p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Customer-Centric</h3>
              <p>
                Client-first approach with tailored collaborative solutions.
              </p>
            </div>
            <div className="why-card slide">
              <div className="icon-circle">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Delivery</h3>
              <p>US, Germany, and India presence with global agility.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChoose;
