import React from "react";
// import logo from "../assets/images/logo.png";
import "../styles/custom.css";

// import { useNavigate } from "react-router-dom";

import CustomerCarousel from "../components/shared/CustomerCarousel";
import WhyChoose from "../components/shared/WhyChoose";
import CoreHighlights from "../components/shared/CoreHighlights";
import Navbar from "../layouts/Navbar";

import mining_truck from "../assets/images/mining_truck.png";
import industrial from "../assets/industries/industrial2.jpg";
import automotive from "../assets/industries/automotive2.jpg";
import process from "../assets/industries/process.jpg";
import PlatformInnovationPage from "../components/shared/PlatformInnovationPage";
import MegaTrends from "../components/shared/MegaTrends";
import GlobalClients from "../components/shared/GlobalClients";

const Home: React.FC = () => {
  // const navigate = useNavigate();

  // const industries = [
  //   {
  //     title: "Heavy Engineering",
  //     image: mining_truck,
  //     short: "Heavy",
  //   },
  //   {
  //     title: "Industrial Engineering",
  //     image: industrial,
  //     short: "Industrial",
  //   },
  //   {
  //     title: "Automotive Engineering",
  //     image: automotive,
  //     short: "Automotive",
  //   },
  //   {
  //     title: "Process Engineering",
  //     image: process,
  //     short: "Process",
  //   },
  // ];

  // let navigateT0 = (state: string) => {
  //   if (state == "Heavy") navigate("/industries/heavy-engineering");
  //   if (state == "Industrial") navigate("/industries/industrial-engineering");
  //   if (state == "Automotive") navigate("/industries/automotive-engineering");
  //   if (state == "Process") navigate("/industries/process-engineering");
  // };

  return (
    <>
      <div className="video-banner">
        <video autoPlay loop muted playsInline>
          <source
            src="https://res.cloudinary.com/dcyuick4m/video/upload/v1752494954/homebanner_d5iiqk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Navbar />

        {/* <div className="banner-overlay">
          <div className="hero-card">
            <h4 className="hero-title">
              <img src={logo} alt="Actualize Logo" className="hero-logo" />
              About <span className="brand-name">Actualize</span>
            </h4>
            <p className="hero-text">
              We are a global technology company offering engineering and
              digital transformation services to enterprises across various
              industries.
            </p>
            <a href="/company/about" className="hero-button">
              Learn More
            </a>
          </div>
        </div> */}
      </div>

      <div>
        <WhyChoose />
        <CoreHighlights />
        {/* <section className="services-showcase">
          <h2 className="section-title">
            Our <span className="highlight">Services</span>
          </h2>
          <div className="services-grid">
            <div className="service-tile engineering">
              <div className="overlay">
                <div className="icon">🛠️</div>
                <h3>Engineering Services</h3>
                <p>
                  Design, simulation, and validation across the product
                  lifecycle.
                </p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/services/engineering")}
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="service-tile digital">
              <div className="overlay">
                <div className="icon">💡</div>
                <h3>Digital Transformation</h3>
                <p>AI, cloud, and automation-driven process improvements.</p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/services/digital-transformation")}
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="service-tile software">
              <div className="overlay">
                <div className="icon">💻</div>
                <h3>Software Solutions</h3>
                <p>Enterprise-grade applications for diverse industries.</p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/services/software-development")}
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="service-tile product">
              <div className="overlay">
                <div className="icon">🚀</div>
                <h3>Product Development</h3>
                <p>From idea to market with full-cycle innovation.</p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/services/product-development")}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="industries-section"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <h2 className="industries-heading">
            20 Years of Engineering Excellence
            <br />
            <span className="highlight">Across Industries</span>
          </h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div className="industry-card" key={index}>
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="industry-image"
                />
                <div className="industry-overlay">
                  <h3>{industry.title}</h3>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => navigateT0(industry.short)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

    {/* Platform-Based Innovation Section */}
    <PlatformInnovationPage/>

{/* Mega Trends Section */}
<MegaTrends />

        <CustomerCarousel />
        {/* Global Clients Section */}
<GlobalClients/>
      </div>
    </>
  );
};

export default Home;
