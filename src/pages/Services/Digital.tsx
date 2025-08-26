import React, { useEffect, useRef } from "react";

import "../../styles/digital.css";

import digitalHero from "../../assets/services/digital.jpg";
import cloudImage from "../../assets/icons/cloud.png";
import applicationImage from "../../assets/icons/applicationdevelopment.jpg";
import dataAnalyticsImage from "../../assets/icons/dataanalytics.jpg";
import embeddedEngineeringImage from "../../assets/icons/embeddedEngineering.jpg";
import industryImage from "../../assets/icons/industry.jpg";

import Navbar from "../../layouts/Navbar";
import CardCarousel from "../../components/shared/CardCarousel";
import { Link } from "react-router-dom";

const digitalServices = [
  {
    title: "Data and Analytics",
    description:
      "Leverage the power of data with robust ETL pipelines, scalable data lakes, and intuitive Business Intelligence (BI) dashboards to drive insights-driven decisions and optimize performance.",
    icon: dataAnalyticsImage,
  },
  {
    title: "Application Development",
    description:
      "Build modern, high-performance web and mobile applications using cutting-edge frameworks like Angular, React, .NET, and Node.js, tailored to your business needs.",
    icon: applicationImage,
  },
  {
    title: "Cloud Engineering",
    description:
      "Implement cloud-first strategies and optimize your infrastructure across Azure, AWS, and GCP to boost agility, enhance scalability, and significantly reduce operational costs.",
    icon: cloudImage,
  },
  {
    title: "Embedded Engineering",
    description:
      "Design and develop intelligent embedded systems and firmware for IoT devices, real-time applications, and specialized hardware, ensuring seamless integration and robust performance.",
    icon: embeddedEngineeringImage,
  },
  {
    title: "Industry 4.0",
    description:
      "Transform your operations with intelligent automation, IoT integration, predictive analytics, and machine learning, creating smarter, more efficient, and interconnected industrial processes.",
    icon: industryImage,
  },
];

const Digital: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    if (overviewRef.current) observer.observe(overviewRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (overviewRef.current) observer.unobserve(overviewRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

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
            Digital
            <span className="overlay-text">
              TRANSFORMING IDEAS INTO <span className="highlight">IMPACT</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Digital Transformation Overview */}
      <div className="digital-overview-section">
        <div className="container py-5 px-0">
          <section ref={overviewRef} className="fade-in-section">
            <div className="row align-items-center">
              <h2 className="section-title text-center mb-4">
                Digital{" "}
                <span className="highlight">Transformation Overview</span>
              </h2>
              <div className="col-lg-6">
                <p>
                  In today's rapidly evolving digital landscape, businesses must
                  transform to stay competitive. Our digital transformation
                  services empower organizations to innovate, optimize
                  processes, and enhance customer experiences.
                  <hr />
                  We leverage cutting-edge technologies and strategic insights
                  to drive meaningful change, ensuring a seamless transition to
                  a future-ready enterprise.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                {/* Optional: Add an image or illustration related to digital transformation */}
                <img
                  src={digitalHero}
                  alt="Digital Transformation"
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="our-services-section">
        {/* Our Services */}
        <section ref={servicesRef} className="container fade-in-section">
          <div className="container">
            <div className="text-center mb-1">
              <h2 className="section-title text-center mb-4">
                Our <span className="highlight">Digital Services</span>
              </h2>
              <p className="lead text-muted m-0">
                Driving digital outcomes through cloud modernization, data
                intelligence, and agile delivery.
              </p>
            </div>

            <CardCarousel services={digitalServices} />
          </div>
        </section>
      </div>

      {/* Contact Us */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "var(--brand-color)" }}
        ref={contactRef}
      >
        <div className="container text-center">
          <h3 className="fw-bold">Ready to Begin Your Digital Journey?</h3>
          <p className="lead">
            Connect with our experts to discuss your unique needs and how we can
            help you achieve your digital goals.
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

export default Digital;
