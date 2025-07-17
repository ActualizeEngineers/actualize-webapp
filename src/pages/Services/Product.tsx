import React from "react";
import "../../styles/digital.css";

import digitalHero from "../../assets/icons/innovation.png";

import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";

const Product: React.FC = () => {

    const productServices = [
  {
    title: "MVP Development",
    desc: "Rapid prototyping and MVP creation to test your product in the market.",
  },
  {
    title: "End-to-End Product Engineering",
    desc: "Full-cycle development from architecture to deployment and scaling.",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric interface and experience design aligned with product goals.",
  },
  {
    title: "Mobile & Web App Development",
    desc: "Cross-platform development for modern digital experiences.",
  },
  {
    title: "Product Re-engineering",
    desc: "Modernize legacy systems into high-performing, modern solutions.",
  },
  {
    title: "Product Strategy & Consulting",
    desc: "Refine product ideas, go-to-market strategy, and feature roadmap.",
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
          <h1 className="display-4 fw-bold">Product Development</h1>
          <p className="lead">
            From concept to launch — we build scalable, impactful digital
            products.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Overview</h2>
          <p>
            At Actualize, we bring your ideas to life by building full-fledged
            digital products — from MVPs to large-scale platforms. Our team
            combines design thinking, agile development, and scalable
            architecture to launch products that are reliable, user-centric, and
            market-ready.
          </p>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Product Development Capabilities</h2>
          <div className="row g-4">
            {productServices.map((service, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 shadow-sm p-3">
                  <div className="card-body">
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (Optional) */}
      <section className="py-5">
  <div className="container">
    <h2 className="mb-4">Our Process</h2>
    <div className="row text-center">
      {[
        { step: "Idea Validation", color: "bg-primary" },
        { step: "UI/UX Design", color: "bg-info" },
        { step: "Agile Development", color: "bg-success" },
        { step: "Testing & QA", color: "bg-warning" },
        { step: "Deployment", color: "bg-secondary" },
        { step: "Support & Iteration", color: "bg-dark" },
      ].map((item, index) => (
        <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
          <div
            className={`process-step text-white py-3 px-2 rounded shadow-sm ${item.color}`}
          >
            <strong>{item.step}</strong>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-5 text-white" style={{backgroundColor: '#00ccd9'}}>
        <div className="container text-center">
          <h3 className="fw-bold">Have a product idea?</h3>
          <p className="lead">
            Let’s build it together — from MVP to market launch.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Link to="/contact" className="btn btn-light btn-lg custom-hover-btn">
              Start a Conversation
            </Link>           
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
