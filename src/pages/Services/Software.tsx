import React, { useState } from "react";
import "../../styles/pages/services/software.css";

import digitalHero from "../../assets/services/software.jpg";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";

import { FiGlobe, FiSmartphone, FiCloud, FiTool } from "react-icons/fi";
import { FaNetworkWired, FaBuilding } from "react-icons/fa";

const softwareServices = [
  {
    title: "Custom Web Applications",
    icon: <FiGlobe size={28} />,
    desc: "We design and build robust, scalable, and secure web applications tailored to your unique workflows. From dashboards to customer portals, we ensure your solution is intuitive, performant, and easy to maintain.",
  },
  {
    title: "Mobile App Development",
    icon: <FiSmartphone size={28} />,
    desc: "We craft high-performance mobile apps for iOS and Android, focusing on speed, usability, and engaging user experiences. Whether native or cross-platform, we build apps that scale with your business.",
  },
  {
    title: "Enterprise Solutions",
    icon: <FaBuilding size={28} />,
    desc: "Our team delivers enterprise-grade software such as CRMs, ERPs, and automation systems. We streamline complex processes and align with your internal workflows for maximum efficiency and control.",
  },
  {
    title: "API & Integration",
    icon: <FaNetworkWired size={28} />,
    desc: "We develop and integrate APIs that connect your internal systems or external services seamlessly. From payment gateways to internal tools, we ensure data flows securely and reliably across platforms.",
  },
  {
    title: "Cloud Migration",
    icon: <FiCloud size={28} />,
    desc: "We help migrate your legacy systems to modern cloud-native environments. With minimal downtime and maximum security, we future-proof your infrastructure for scalability and cost-efficiency.",
  },
  {
    title: "Support & Maintenance",
    icon: <FiTool size={28} />,
    desc: "Our team provides continuous support, updates, and optimization to keep your software secure, fast, and reliable. We proactively monitor performance and offer enhancements as your needs evolve.",
  },
];

const Software: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${digitalHero})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="hero-heading">
            Software
            <span className="overlay-text">
              INNOVATION DRIVEN BY <span className="highlight">TECHNOLOGY</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="section-title mb-2">Overview</h2>
          <p>
            At Actualize, we build scalable, secure, and performance-driven
            software solutions tailored to your needs — whether it's a web
            portal, enterprise system, or mobile application. Our team
            collaborates closely with stakeholders to align technology with
            business goals and deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Core Offerings Carousel */}
      <div className="container py-5">
        <section className="text-white text-center">
          <h2 className="section-title mb-5">
            Our <span className="highlight">Core Offerings</span>
          </h2>

          <div className="offerings-carousel">
            {/* Side avatars LEFT */}
            <div className="side-avatars left">
              {softwareServices.slice(0, 3).map((item, idx) => {
                const actualIndex = idx;
                return (
                  <div
                    key={idx}
                    className={`avatar-circle ${
                      activeIndex === actualIndex ? "active" : ""
                    } ${idx === 1 ? "translate-left" : ""}`} // <-- custom shift
                    onClick={() => setActiveIndex(actualIndex)}
                  >
                    <span className="service-icon">{item.icon}</span>
                  </div>
                );
              })}
            </div>

            {/* Main card */}
            <div className="offer-card">
              <h4>{softwareServices[activeIndex].title}</h4>
              <p>{softwareServices[activeIndex].desc}</p>
            </div>

            {/* Side avatars RIGHT */}
            <div className="side-avatars right">
              {softwareServices.slice(3, 6).map((item, idx) => {
                const actualIndex = idx + 3;
                return (
                  <div
                    key={idx}
                    className={`avatar-circle ${
                      activeIndex === actualIndex ? "active" : ""
                    } ${idx === 1 ? "translate-right" : ""}`} // <-- custom shift
                    onClick={() => setActiveIndex(actualIndex)}
                  >
                    <span className="service-icon">{item.icon}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows at bottom */}
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? softwareServices.length - 1
                    : activeIndex - 1
                )
              }
            >
              &#8592;
            </button>
            <button
              className="carousel-btn"
              onClick={() =>
                setActiveIndex(
                  activeIndex === softwareServices.length - 1
                    ? 0
                    : activeIndex + 1
                )
              }
            >
              &#8594;
            </button>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "var(--brand-color)" }}
      >
        <div className="container text-center">
          <h3 className="fw-bold">Need a custom software solution?</h3>
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

export default Software;
