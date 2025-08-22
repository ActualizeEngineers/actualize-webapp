import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import heavy_eng from "../../assets/industries/heavy.jpg";
import { Link } from "react-router-dom";
import "../../styles/industries.css";

const Heavy: React.FC = () => {
  const [showConstruction, setShowConstruction] = useState<boolean>(true);
  const [showMining, setShowMining] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [showAgriculture, setShowAgriculture] = useState<boolean>(false);

  const services = [
    {
      title: "Construction Equipment",
      short: "CE",
      desc: "Designing efficient plant systems for optimal productivity.",
    },
    {
      title: "Mining",
      short: "MIN",
      desc: "3D CAD modeling and assembly validation of large machinery.",
    },
    {
      title: "Material Handling",
      short: "MH",
      desc: "Detailed drawing creation and standards compliance.",
    },
    {
      title: "Agriculture",
      short: "AGRI",
      desc: "We provide smart engineering solutions that improve farm machinery efficiency and flexibility.",
    },
  ];
  const equipmentList = [
    {
      name: "Cranes & Lifting Equipment",
      shortDesc: "Support for hydraulic, mechanical, and telescopic cranes.",
      fullDesc:
        "We provide 3D modeling, structural analysis, and control system design for cranes used in construction and heavy industry, ensuring safety and load efficiency.",
    },
    {
      name: "Mining & Earthmoving Equipment",
      shortDesc: "Engineering support for excavators, bulldozers, and dumpers.",
      fullDesc:
        "From component modeling to fatigue analysis and lifecycle estimation, we support the complete design cycle for mining equipment used in harsh environments.",
    },
    {
      name: "Pressure Vessels & Boilers",
      shortDesc: "ASME-compliant design and validation services.",
      fullDesc:
        "We assist with thermal/stress analysis, fabrication drawings, and compliance documentation for high-pressure equipment across energy and manufacturing sectors.",
    },
    // Add more
  ];

  let showDetails = (showDetails: string) => {
    if (showDetails == "CE" && !showConstruction) setShowConstruction(true);
    else setShowConstruction(false);
    if (showDetails == "MIN" && !showMining) setShowMining(true);
    else setShowMining(false);
    if (showDetails == "MH" && !showMaterial) setShowMaterial(true);
    else setShowMaterial(false);
    if (showDetails == "AGRI" && !showAgriculture) setShowAgriculture(true);
    else setShowAgriculture(false);
  };
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${heavy_eng})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="display-4 fw-bold">Heavy Engineering</h1>
          <p className="lead">
            Engineering excellence for large-scale, mission-critical industries.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Overview</h2>
          <p>
            At Actualize, we provide comprehensive support for the Heavy
            Engineering sector—from plant design and automation to product
            lifecycle management. Our team brings domain expertise and hands-on
            experience to ensure our clients meet safety, quality, and delivery
            standards.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Expertise</h2>
          <div className="row g-4">
            {services.map((service, idx) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                key={idx}
              >
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fw-semibold mb-2">{service.title}</h5>
                    <p className="text-muted small flex-grow-1">
                      {service.desc}
                    </p>
                    <button
                      className="btn mt-3"
                      onClick={() => showDetails(service.short)}
                      style={{ backgroundColor: "var(--brand-color)"}}
                    >
                      View More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showConstruction && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4"  style={{ color: "var(--brand-color)" }}>Construction Equipment We Support</h2>
            <p className="mb-4 text-muted">
              Actualize provides design, simulation, and lifecycle engineering
              support for a wide range of heavy equipment. Below are some of the
              major equipment types we specialize in.
            </p>

            <div className="row g-4">
              {equipmentList.map((item, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-muted small">{item.shortDesc}</p>
                      <div className="mt-3">
                        <p className="small">{item.fullDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showMining && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4">Mining Equipment We Support</h2>
            <p className="mb-4 text-muted">
              Actualize provides design, simulation, and lifecycle engineering
              support for a wide range of heavy equipment. Below are some of the
              major equipment types we specialize in.
            </p>

            <div className="row g-4">
              {equipmentList.map((item, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-muted small">{item.shortDesc}</p>
                      <div className="mt-3">
                        <p className="small">{item.fullDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showMaterial && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4">Material Handling We Support</h2>
            <p className="mb-4 text-muted">
              Actualize provides design, simulation, and lifecycle engineering
              support for a wide range of heavy equipment. Below are some of the
              major equipment types we specialize in.
            </p>

            <div className="row g-4">
              {equipmentList.map((item, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-muted small">{item.shortDesc}</p>
                      <div className="mt-3">
                        <p className="small">{item.fullDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showAgriculture && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4">Agriculture Equipment We Support</h2>
            <p className="mb-4 text-muted">
              Actualize provides design, simulation, and lifecycle engineering
              support for a wide range of heavy equipment. Below are some of the
              major equipment types we specialize in.
            </p>

            <div className="row g-4">
              {equipmentList.map((item, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-muted small">{item.shortDesc}</p>
                      <div className="mt-3">
                        <p className="small">{item.fullDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-5 text-white" style={{backgroundColor: "var(--brand-color)"}}>
        <div className="container text-center">
          <h3 className="fw-bold">Looking for a Heavy Engineering partner?</h3>
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

export default Heavy;
