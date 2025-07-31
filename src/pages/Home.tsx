import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/custom.css";
import { useNavigate } from "react-router-dom";

import CustomerCarousel from "../components/shared/CustomerCarousel";
import WhyChoose from "../components/shared/WhyChoose";
import CoreHighlights from "../components/shared/CoreHighlights";
import Navbar from "../layouts/Navbar";

import mining_truck from "../assets/images/mining_truck.png";
import industrial from "../assets/industries/industrial2.jpg";
import automotive from "../assets/industries/automotive2.jpg";
import process from "../assets/industries/process.jpg";
import PlatformInnovationPage from "../components/shared/PlatformInnovationPage";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const industries = [
    {
      title: "Heavy Engineering",
      image: mining_truck,
      short: "Heavy",
    },
    {
      title: "Industrial Engineering",
      image: industrial,
      short: "Industrial",
    },
    {
      title: "Automotive Engineering",
      image: automotive,
      short: "Automotive",
    },
    {
      title: "Process Engineering",
      image: process,
      short: "Process",
    },
  ];

  let navigateT0 = (state: string) => {
    if (state == "Heavy") navigate("/industries/heavy-engineering");
    if (state == "Industrial") navigate("/industries/industrial-engineering");
    if (state == "Automotive") navigate("/industries/automotive-engineering");
    if (state == "Process") navigate("/industries/process-engineering");
  };

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
<section className="mega-trends-section py-5 text-center bg-white">
  <div className="container">
    <h2 className="section-title">We Align With <span className="highlight">Mega Trends</span></h2>
    <p className="mb-5 lead">We innovate in areas that shape the future of engineering and technology.</p>
    <div className="row g-4 justify-content-center">
      <div className="col-6 col-md-3 animate__animated animate__zoomIn">
        <div className="trend-card bg-light p-4 rounded shadow-sm hover-animate">
          <img src="/icons/smart-factory.svg" alt="Smart Manufacturing" width="50" className="mb-3" />
          <h6>Smart Manufacturing</h6>
          <span className="badge bg-secondary mt-2">2025 Ready</span>
          <p className="small mt-2">End-to-end automation and digital twin solutions.</p>
        </div>
      </div>
      <div className="col-6 col-md-3 animate__animated animate__zoomIn animate__delay-1s">
        <div className="trend-card bg-light p-4 rounded shadow-sm hover-animate">
          <img src="/icons/ai.svg" alt="AI Integration" width="50" className="mb-3" />
          <h6>AI & ML</h6>
          <span className="badge bg-warning text-dark mt-2">Industry 4.0</span>
          <p className="small mt-2">Embedded intelligence and data-driven insights.</p>
        </div>
      </div>
      <div className="col-6 col-md-3 animate__animated animate__zoomIn animate__delay-2s">
        <div className="trend-card bg-light p-4 rounded shadow-sm hover-animate">
          <img src="/icons/sustainability.svg" alt="Sustainability" width="50" className="mb-3" />
          <h6>Sustainability</h6>
          <span className="badge bg-success mt-2">Eco Focus</span>
          <p className="small mt-2">Green tech, energy efficiency, and circular design.</p>
        </div>
      </div>
      <div className="col-6 col-md-3 animate__animated animate__zoomIn animate__delay-3s">
        <div className="trend-card bg-light p-4 rounded shadow-sm hover-animate">
          <img src="/icons/ev.svg" alt="EV and Mobility" width="50" className="mb-3" />
          <h6>EV & Mobility</h6>
          <span className="badge bg-info text-dark mt-2">Smart Future</span>
          <p className="small mt-2">EV platforms, battery optimization, and ADAS solutions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Global Clients Section */}
<section className="global-clients-section py-5 text-white" style={{ background: "linear-gradient(to right, #0b2239, #1a3c61)" }}>
  <div className="container text-center">
    <h2 className="section-title text-white">Trusted by <span className="text-warning">Global Clients</span></h2>
    <p className="mb-5 lead">From startups to Fortune 500s — Actualize delivers excellence worldwide.</p>
    <div className="row g-4 justify-content-center">
      <div className="col-6 col-md-3">
        <div className="p-4 bg-dark rounded-4 shadow hover-grow">
          <h3 className="text-warning">20+</h3>
          <p className="mb-0 small">Global Clients</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="p-4 bg-dark rounded-4 shadow hover-grow">
          <h3 className="text-warning">3</h3>
          <p className="mb-0 small">Continents Served</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="p-4 bg-dark rounded-4 shadow hover-grow">
          <h3 className="text-warning">50+</h3>
          <p className="mb-0 small">Projects Delivered</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="p-4 bg-dark rounded-4 shadow hover-grow">
          <h3 className="text-warning">98%</h3>
          <p className="mb-0 small">Client Retention</p>
        </div>
      </div>
    </div>
  </div>
</section>


        <CustomerCarousel />
      </div>
    </>
  );
};

export default Home;
