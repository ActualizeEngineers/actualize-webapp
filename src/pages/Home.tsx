import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../styles/custom.css";

import Industrial from "./Industries/Industrial";
import CustomerCarousel from "../components/shared/CustomerCarousel";
import WhyChoose from "../components/shared/WhyChoose";
import CoreHighlights from "../components/shared/CoreHighlights";

import navbg1video from "../assets/banners/navbg1video.mp4";
import navbg2video from "../assets/banners/navbg2video.mp4";
import navbg3video from "../assets/banners/navbg3video.mp4";
import navbg4video from "../assets/banners/navbg4video.mp4";

const Home: React.FC = () => {
  const videos = [navbg3video, navbg2video, navbg1video, navbg4video];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <>
      <section className="video-banner">
        <div className="video-container">
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              autoPlay
              loop
              muted
              playsInline
              className={`bg-video ${
                index === currentVideoIndex ? "active" : ""
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ))}
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

      <div className="home-content-offset">
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
                  Design, simulation, and validation across the product
                  lifecycle.
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
                <p>From idea to market with full-cycle innovation.</p>!
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
        <CustomerCarousel />
      </div>
    </>
  );
};

export default Home;
