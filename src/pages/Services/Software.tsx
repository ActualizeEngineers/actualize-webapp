import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { FiGlobe, FiSmartphone, FiCloud, FiTool } from "react-icons/fi";
import { FaNetworkWired, FaBuilding } from "react-icons/fa";

import digitalHero from "../../assets/services/software.jpg";
import Navbar from "../../layouts/Navbar";

import "../../styles/pages/services/software.css";

const services = [
  {
    title: "Custom Web Applications",
    icon: <FiGlobe size={50} />,
    desc: "We design and build robust, scalable, and secure web applications tailored to your unique workflows. From dashboards to customer portals, we ensure your solution is intuitive, performant, and easy to maintain.",
  },
  {
    title: "Mobile App Development",
    icon: <FiSmartphone size={50} />,
    desc: "We craft high-performance mobile apps for iOS and Android, focusing on speed, usability, and engaging user experiences. Whether native or cross-platform, we build apps that scale with your business.",
  },
  {
    title: "Enterprise Solutions",
    icon: <FaBuilding size={50} />,
    desc: "Our team delivers enterprise-grade software such as CRMs, ERPs, and automation systems. We streamline complex processes and align with your internal workflows for maximum efficiency and control.",
  },
  {
    title: "API & Integration",
    icon: <FaNetworkWired size={50} />,
    desc: "We develop and integrate APIs that connect your internal systems or external services seamlessly. From payment gateways to internal tools, we ensure data flows securely and reliably across platforms.",
  },
  {
    title: "Cloud Migration",
    icon: <FiCloud size={50} />,
    desc: "We help migrate your legacy systems to modern cloud-native environments. With minimal downtime and maximum security, we future-proof your infrastructure for scalability and cost-efficiency.",
  },
  {
    title: "Support & Maintenance",
    icon: <FiTool size={50} />,
    desc: "Our team provides continuous support, updates, and optimization to keep your software secure, fast, and reliable. We proactively monitor performance and offer enhancements as your needs evolve.",
  },
];

const Software: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{ backgroundImage: `url(${digitalHero})` }}
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

      <div className="software-bg-container">
        {/* Overview */}
        <div className="container py-5">
          <section className="text-center">
            <h2 className="section-title">Overview</h2>
            <p className="m-0">
              At Actualize, we build scalable, secure, and performance-driven
              software solutions tailored to your needs — whether it's a web
              portal, enterprise system, or mobile application. Our team
              collaborates closely with stakeholders to align technology with
              business goals and deliver measurable impact.
            </p>
          </section>
        </div>

        {/* Core Offerings Carousel */}
        <div className="container py-5">
          <section className="text-white text-center">
            <h2 className="section-title mb-0">
              Our <span className="highlight">Core Offerings</span>
            </h2>

            <div className="carousel-wrapper">
              {/* Left Arrow */}
              <button className="carousel-btn side left" onClick={handlePrev}>
                &#8592;
              </button>

              {/* Animated Card */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 150 : -150,
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{
                    x: direction > 0 ? -150 : 150,
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="offer-card"
                >
                  <div className="service-icon">{services[index].icon}</div>
                  <h4>{services[index].title}</h4>
                  <p>{services[index].desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow */}
              <button className="carousel-btn side right" onClick={handleNext}>
                &#8594;
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section text-white">
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
