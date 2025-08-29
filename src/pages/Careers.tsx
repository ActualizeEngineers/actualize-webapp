import React from "react";
import "../../src/styles/Pages/careers.css";
import Navbar from "../layouts/Navbar";
import carrers from "../assets/images/careers.jpg";

const Careers: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${carrers})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="display-4 fw-bold">Join Our Team</h1>
          <p className="lead">Build the future with Actualize</p>
          <a href="#openings" className="btn btn-light mt-3">
            Explore Openings
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">Why Work With Us?</h2>
          <p className="mb-0">
            We are a team of passionate innovators and problem-solvers. At
            Actualize, you'll grow your skills, work on impactful projects, and
            enjoy a collaborative environment that values creativity and
            purpose.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">🚀 Current Openings</h2>
          <div className="row g-4">
            {/* Job Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-1 h-100">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                    Frontend Developer
                    <span className="badge bg-success">Full-Time</span>
                  </h5>
                  <p className="text-muted mb-1">
                    <i className="bi bi-geo-alt"></i> Bangalore, India
                  </p>
                  <p className="card-text mt-2">
                    We're looking for a React developer with experience in
                    TypeScript, Bootstrap, and modern UI design.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-primary fw-semibold">
                      2+ Years Exp
                    </span>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-1 h-100">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                    Backend Developer
                    <span className="badge bg-primary">Full-Time</span>
                  </h5>
                  <p className="text-muted mb-1">
                    <i className="bi bi-geo-alt"></i> Remote
                  </p>
                  <p className="card-text mt-2">
                    We need a .NET Core developer with solid SQL and API
                    experience to work on scalable microservices.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-primary fw-semibold">
                      3+ Years Exp
                    </span>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-1 h-100">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                    UI/UX Designer
                    <span className="badge bg-warning text-dark">Contract</span>
                  </h5>
                  <p className="text-muted mb-1">
                    <i className="bi bi-geo-alt"></i> Hybrid (Bangalore)
                  </p>
                  <p className="card-text mt-2">
                    Creative designer with experience in Figma, Adobe XD, and
                    mobile-first designs.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-primary fw-semibold">
                      1+ Year Exp
                    </span>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Perks & Benefits</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-laptop benefit-icon"></i>
              <h5 className="mt-2">Remote Friendly</h5>
              <p>We are in hybrid mode.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-person-heart benefit-icon"></i>
              <h5 className="mt-2">Health Insurance</h5>
              <p>Comprehensive plans for you and your family.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-mortarboard benefit-icon"></i>
              <h5 className="mt-2">Up Skilling</h5>
              <p>Access to courses, certifications, and mentoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-white text-center"
        style={{ backgroundColor: 'var(--brand-color)' }}
      >
        <div className="container">
          <h2 className="mb-3">Your Future Starts Here</h2>
          <p className="mb-4">
            Be a part of our journey. Let’s build something amazing together.
          </p>
          {/* <a href="#openings" className="btn btn-light">View Openings</a> */}
        </div>
      </section>
    </>
  );
};

export default Careers;
