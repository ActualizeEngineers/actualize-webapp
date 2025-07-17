import React from "react";
import "../../styles/digital.css";

import digitalHero from "../../assets/services/software.jpg";

import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";

const Software: React.FC = () => {
  const softwareServices = [
    {
      title: "Custom Web Applications",
      desc: "Robust, scalable, and secure apps tailored to your workflow.",
    },
    {
      title: "Mobile App Development",
      desc: "iOS & Android apps designed for usability, speed, and performance.",
    },
    {
      title: "Enterprise Solutions",
      desc: "CRMs, ERPs, and process automation tailored for enterprise needs.",
    },
    {
      title: "API & Integration",
      desc: "Seamless integration with internal and third-party systems.",
    },
    {
      title: "Cloud Migration",
      desc: "Migrate legacy apps to modern cloud-native platforms.",
    },
    {
      title: "Support & Maintenance",
      desc: "Ongoing support, optimization, and tech upgrades.",
    },
  ];

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
          <h1 className="display-4 fw-bold">Software Solutions</h1>
          <p className="lead">
            Tailored software for your unique business challenges.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Overview</h2>
          <p>
            At Actualize, we build scalable, secure, and performance-driven
            software solutions tailored to your needs — whether it's a web
            portal, enterprise system, or mobile application. Our team
            collaborates closely with stakeholders to align technology with
            business goals and deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Core Offerings</h2>
          <div className="row g-4">
            {softwareServices.map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 shadow-sm p-3">
                  <div className="card-body">
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#00ccd9" }}
      >
        <div className="container text-center">
          <h3 className="fw-bold">Need a custom software solution?</h3>
          <p className="lead">
            Talk to our engineers or explore our case studies.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Link to="/contact" className="btn btn-light btn-lg custom-hover-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;
