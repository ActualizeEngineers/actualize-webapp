import React from "react";
import logo from "../assets/images/logo.png";
import banner from "../assets/banners/banner1.png";
import "../styles/custom.css";
import Industrial from "./Industries/Industrial";
import CustomerCarousel from "../components/shared/CustomerCarousel";
import WhyChoose from "../components/shared/WhyChoose";
import CoreHighlights from "../components/shared/CoreHighlights";

const Home: React.FC = () => {
  return (
    <>
      <section className="video-banner">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QfrX5UMeMp8?autoplay=1&mute=1&loop=1&playlist=aNcHXDuc4gU&controls=0&modestbranding=1&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Actualize Video Banner"
          />
        </div>

        <div className="banner-overlay">
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
        </div>
      </section>
      <WhyChoose />
      <CoreHighlights />
      <section className="services-showcase">
        <h2 className="section-title">
          Our <span className="highlight">Services</span>
        </h2>
        <div className="services-grid">
          <div className="service-tile engineering">
            <div className="overlay">
              <div className="icon">🛠️</div>
              <h3>Engineering Services</h3>
              <p>
                Design, simulation, and validation across the product lifecycle.
              </p>
            </div>
          </div>
          <div className="service-tile digital">
            <div className="overlay">
              <div className="icon">💡</div>
              <h3>Digital Transformation</h3>
              <p>AI, cloud, and automation-driven process improvements.</p>
            </div>
          </div>
          <div className="service-tile product">
            <div className="overlay">
              <div className="icon">🚀</div>
              <h3>Product Development</h3>
              <p>From idea to market with full-cycle innovation.</p>
            </div>
          </div>
          <div className="service-tile software">
            <div className="overlay">
              <div className="icon">💻</div>
              <h3>Software Solutions</h3>
              <p>Enterprise-grade applications for diverse industries.</p>
            </div>
          </div>
        </div>
      </section>
      <Industrial />
      <CustomerCarousel/>
    </>
  );
};

export default Home;
