import React from "react";
import "../../styles/pages/services/engineering.css";

import EngineeringServicesHero from "../../assets/images/services1.jpg";
import EngineeringCarousel from "../../components/shared/EngineeeringCarousel";
import OfferCarousel from "../../components/shared/OfferCarousel";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";

const Engineering: React.FC = () => {
  return (
    <>
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${EngineeringServicesHero})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="hero-heading">
            ENGINEERING
            <span className="overlay-text">
              CUSTOMIZED SERVICES FOR YOUR
              <span className="highlight"> SUCCESS</span>
            </span>
          </h1>
        </div>
      </section>

      <div className="engineering-carousel">
        <OfferCarousel />
        <EngineeringCarousel />
      </div>

      <section
        className="py-5 text-white"
        style={{ backgroundColor: "var(--brand-color)" }}
      >
        <div className="container text-center">
          <h3 className="fw-bold">
            Need help in building Better Engineering Products?
          </h3>
          <p className="lead">
            Talk to our engineers or explore our case studies.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Link
              to="/contact"
              className="btn btn-light btn-lg custom-hover-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Engineering;
