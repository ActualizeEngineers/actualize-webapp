import React from "react";
import "../../styles/life.css";
import life1 from "../../assets/images/life-1.jpg";
import life2 from "../../assets/images/life-2.jpg";
import life3 from "../../assets/images/life-3.jpg";

const LifeAt: React.FC = () => {
  return (
    <>
    <div className="life-container">

    </div>
      <section className="life-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title text-primary">
              Life at <span className="brand-name">Actualize</span>
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
                <p>
                  We foster an inclusive environment where every idea matters.
                </p>
              </div>
            </div>

            <div className="life-card">
              <img src={life2} alt="Work-Life Balance" className="life-img" />
              <div className="life-content">
                <h5>Work-Life Balance</h5>
                <p>
                  Flexible schedules, wellness programs, and meaningful work.
                </p>
              </div>
            </div>

            <div className="life-card">
              <img src={life3} alt="Innovation at Work" className="life-img" />
              <div className="life-content">
                <h5>Innovation-Driven</h5>
                <p>
                  We empower employees to solve real-world challenges
                  creatively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeAt;
