import React from "react";
import "../../styles/about.css";
import visionImage from "../../assets/images/vision.jpg";
import missionImage from "../../assets/images/mission.jpg";
import aboutImage from "../../assets/what_is_actualize.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faHandshake,
  faTools,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../layouts/Navbar";

const About: React.FC = () => {
  return (
    <>
      <div className="about-container">
        <Navbar />
      </div>
      <div className="container py-5">
        <section className="py-5 fade-in pt-navbar-offset">
          <div className="container text-center">
            <h1 className="display-5 fw-bold text-primary mb-3">
              About Actualize
            </h1>
            <p className="lead text-muted mx-auto heading">
              Empowering <span className="fw-semibold">Engineering</span> +{" "}
              <span className="fw-semibold">Digital Innovation</span>
            </p>
          </div>
        </section>
      </div>

      <div className="container py-5">
        {/* Company Introduction */}
        <div className="row align-items-center mb-5 fade-in delay-1">
          <div className="col-md-6">
            <img
              src={aboutImage}
              className="img-fluid rounded shadow"
              alt="About Actualize"
            />
          </div>
          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              Actualize is a global engineering and digital transformation
              company delivering next-gen product lifecycle and software
              solutions. We work with clients across industries, helping them
              innovate, scale, and transform.
            </p>
            <p>
              With expertise in heavy engineering, automotive, process
              industries, and digital modernization, we provide unmatched value
              through deep domain knowledge and agile execution.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="row align-items-center my-5 fade-in delay-2">
          <div className="col-md-6">
            <img
              src={visionImage}
              alt="Our Vision"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Our Vision</h3>
            <p>
              At Actualize, our vision is to empower our customers with deep
              domain expertise and the skills needed to accelerate complex
              manufacturing processes. By fostering a culture rooted in
              collaboration, agility, and transparency, we enable rapid and
              reliable innovation that drives competitive advantage.
            </p>
            <p>
              We are committed to delivering high-quality, innovative services
              that meet speed-to-market goals. Our team of experienced
              professionals works closely with clients across every stage of
              product development—from design to implementation—building
              long-lasting partnerships that ensure ongoing success and
              satisfaction.
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5 fade-in delay-3">
          <div className="col-md-6">
            <h3 className="mb-3">Our Mission</h3>
            <p>
              To drive innovation and deliver exceptional value by harnessing
              the power of advanced engineering, intelligent software, and
              transformative digital solutions that empower our clients to lead
              in their industries.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={missionImage}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="container my-5 core-values-section">
          <h3 className="text-center mb-4">Our Core Values</h3>
          <div className="row text-center g-4">
            <div className="col-md-3 col-sm-6">
              <div className="core-value-card">
                <div className="icon text-primary">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h5>Innovation</h5>
                <p className="small">
                  We foster creativity and continuous improvement to stay ahead
                  in a rapidly evolving world.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="core-value-card">
                <div className="icon text-primary">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h5>Integrity</h5>
                <p className="small">
                  We uphold transparency, trust, and honesty in all our client
                  relationships and internal practices.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="core-value-card">
                <div className="icon text-primary">
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <h5>Excellence</h5>
                <p className="small">
                  We are committed to delivering high-quality results that
                  exceed expectations — every time.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="core-value-card">
                <div className="icon text-primary">
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <h5>Customer Focus</h5>
                <p className="small">
                  We align our success with yours by deeply understanding and
                  addressing your unique challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team CTA */}
        <section className="bg-light py-5 fade-in delay-4">
          <div className="container text-center">
            <h2 className="mb-3">Meet the People Behind Actualize</h2>
            <p className="lead text-muted text-center">
              Discover the passionate minds driving innovation and excellence at
              Actualize.
            </p>
            <a
              href="/company/team"
              className="btn btn-outline-primary btn-lg mt-3"
            >
              <i className="fas fa-users me-2"></i> Meet Our Team
            </a>
          </div>
        </section>
      </div>
      {/* Services/Contact CTA */}
      <section
        className="text-white py-5 fade-in delay-5"
        style={{ backgroundColor: "#00ccd9" }}
      >
        <div className="container-fluid text-center">
          <h2 className="mb-3">Want to Know How We Work?</h2>
          <p className="lead text-center">
            Explore our services or reach out — we’d love to partner with you.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
            <a
              href="/services/engineering"
              className="btn btn-outline-light btn-lg"
            >
              <i className="fas fa-cogs me-2"></i> View Services
            </a>
            <a href="/contact" className="btn btn-light btn-lg text-primary">
              <i className="fas fa-envelope me-2"></i> Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
