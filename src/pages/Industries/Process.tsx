import React from 'react';
import Navbar from '../../layouts/Navbar';
import "../../styles/industries.css";

import { Link } from "react-router-dom";

import pro_eng from "../../assets/industries/PE2.jpg";

const Process : React.FC = () => {
    const productServices = [
    {
      title: "Design & Development",
      desc: "We deliver complete design solutions from concept to detailed models, ensuring precision and innovation. Our expertise spans reverse engineering, CAD migration, and accurate manufacturing drawings with GD&T.",
    },
    {
      title: "Verification & Validation",
      desc: "We validate designs through linear/non-linear analysis, fatigue studies, and hand calculations. Advanced tools like CFD, mold flow, and multi-body dynamics ensure performance and durability",
    },
    {
      title: "Production",
      desc: "Our team streamlines manufacturing with process planning, jigs and fixture design, and NC programming. We also provide prototype support and vendor management for efficient production.",
    },
    {
      title: "After Market Support",
      desc: "We extend lifecycle value with technical authoring, illustrations, and interactive 3D PDFs. Using AR/VR, AI/ML, and rendering, we enhance training, service, and customer support.",
    },
  
  ];
  return (
     <>
         {/* <div className="process-container">
        <Navbar />
      </div>
      <section className="industry-hero heavy-bg text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Industrial Engineering</h1>
          <p className="lead">
            Engineering excellence for large-scale, mission-critical industries
          </p>
        </div>
      </section> */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${pro_eng})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="display-4 fw-bold">Process Engineering</h1>
          <p className="lead">
            Engineering excellence for large-scale, mission-critical industries.
          </p>
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Overview</h2>
          <p>
            We assess and audit current processes to uncover opportunities for improvement and design customized solutions to address them. By leveraging advanced technologies such as process control systems and automation software, we help digitize and enhance operations for greater efficiency. With specialized expertise in design, we deliver cost-effective solutions that ensure desired outcomes and long-term value.
          </p>
        </div>
      </section>

      {/* <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="section-title mb-5"><span className="highlight">Our Engineering Capabilities</span></h2>
          <div className="row g-4">
            {productServices.map((service, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 shadow-sm p-3 ">
                  <div className="card-body">
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-5 bg-light text-center">
  <div className="container">
    <h2 className="section-title mb-5">
      <span className="highlight">Our Engineering Capabilities</span>
    </h2>
    <div className="row g-4">
      {productServices.map((service, idx) => (
        <div className="col-md-6" key={idx}>   {/* 2 columns on md+ screens */}
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


 <section className="py-5 text-white" style={{backgroundColor: "var(--brand-color)"}}>
        <div className="container text-center">
          <h3 className="fw-bold">Looking for a Process Engineering partner?</h3>
          <p className="lead">
            Talk to our experts or explore our other industry solutions.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Link to="/contact" className="btn btn-light btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>


     </>
  );
};

export default Process ;