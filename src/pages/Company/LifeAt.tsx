import React from "react";
import "../../styles/Pages/company/life.css";
import life1 from "../../assets/images/life-1.jpg";
import life2 from "../../assets/images/life-2.jpg";
import life3 from "../../assets/images/life-3.jpg";
 

import Benefits from "../../components/shared/LifeAtBenifits";

import Navbar from "../../layouts/Navbar";

const LifeAt: React.FC = () => {
  return (
    <>
      <div className="life-container">
        <Navbar />
      </div>

      {/* Life at Actualize */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">
              Life at <span className="highlight">Actualize</span>
            </h2>
            <p className="lead text-muted">
              Where innovation, collaboration, and growth thrive together.
            </p>
          </div>

          <div className="life-grid">
            <div className="life-card">
              <img src={life1} alt="Team Collaboration" className="life-img" />
              <div className="life-content">
                <h5>Collaborative Culture</h5>
                <p>A workplace where teamwork and shared ideas drive success..</p>
              </div>
            </div>

            <div className="life-card">
              <img src={life2} alt="Work-Life Balance" className="life-img" />
              <div className="life-content">
                <h5>Work-Life Balance</h5>
                <p>Flexibility that helps you balance work and life seamlessly.</p>
              </div>
            </div>

            <div className="life-card">
              <img src={life3} alt="Innovation at Work" className="life-img" />
              <div className="life-content">
                <h5>Innovation-Driven</h5>
                <p>
                 Driving progress through fresh ideas and bold solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Employment Benefits */}
      
      <Benefits/>

       {/* <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">
              Life is too short to do <span className="highlight">mediocre work</span>
            </h2>
            <p className="lead text-muted">
              Most people die never realizing they lived a life doing mediocre work. If you aren’t one among them 
              and need a purpose and meaning to what you do, you will find company at Keka. We do our best, to make your job 
              feel inspired, enthused and something that you would look forward to doing every day, something that would 
              push you out of your bed.
            </p>
          </div>

          <div className="life-grid">
            <div className="life-card">
              <img src={life1} alt="Team Celebration" className="life-img" />
            </div>
            <div className="life-card">
              <img src={life2} alt="Team Fun" className="life-img" />
            </div>
            <div className="life-card">
              <img src={life3} alt="Team Discussion" className="life-img" />
            </div>
            <div className="life-card">
              <img src={life4} alt="Outdoor Fun" className="life-img" />
            </div>
            <div className="life-card">
              <img src={life5} alt="Team Photo" className="life-img" />
            </div>
            <div className="life-card">
              <img src={life6} alt="Team Spirit" className="life-img" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default LifeAt;
