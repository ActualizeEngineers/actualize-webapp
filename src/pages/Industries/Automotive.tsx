import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import "./industries.css";
import "../../styles/digital.css";
import automotive from "../../assets/industries/automotive.jpg";

const Automotive: React.FC = () => {
    


  const services = [
    {
      title: "Interior",
      short: "INT",
      desc: "Designing stylish, functional, and user-focused interiors using modern tech and cultural insights.",
    },
    {
      title: "Exterior",
      short: "EXT",
      desc: "Robust and functional exterior designs that reflect durability, performance, and aesthetics.",
    },
    {
      title: "Seating",
      short: "SET",
      desc: "End-to-end seating solutions focused on safety, comfort, and ergonomic excellence for OEMs.",
    },
    {
      title: "BIW",
      short: "BIW",
      desc: "Engineering lightweight, rigid BIW structures using advanced tools and high-strength materials.",
    },
    {
      title: "Power Trains",
      short: "PWT",
      desc: "Developing sustainable, high-performance power trains that support a carbon-neutral future.",
    },
  ];
  const [activeTab, setActiveTab] = useState(services[0].short);

  //   let showCardDetails = (showDetails: string) => {
  //   if (showDetails == "CE" && !showConstruction) setShowConstruction(true);
  //   else setShowConstruction(false);
  //   if (showDetails == "MIN" && !showMining) setShowMining(true);
  //   else setShowMining(false);
  //   if (showDetails == "MH" && !showMaterial) setShowMaterial(true);
  //   else setShowMaterial(false);
  //   if (showDetails == "AGRI" && !showAgriculture) setShowAgriculture(true);
  //   else setShowAgriculture(false);
  // };

  return (
    <>
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${automotive})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="display-4 fw-bold">Automotive Engineering</h1>
          <p className="lead">
            Innovative solutions for vehicle design, development, and
            performance optimization.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Overview</h2>
          <p>
            At Actualize, we deliver data-driven and embedded engineering
            solutions that empower automotive manufacturers to build cleaner,
            more powerful, and efficient mobility systems. By blending research,
            cultural insights, and advanced technologies, our designs strike the
            perfect balance between performance, safety, and aesthetics. From
            concept to production, we focus on reliability, cost-effectiveness,
            and compliance to drive the future of intelligent transportation.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Expertise</h2>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs mb-3">
            {services.map((service) => (
              <li className="nav-item" key={service.title}>
                <button
                  className={`nav-link ${
                    activeTab === service.short ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(service.title)}
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {services.map((service) =>
              activeTab === service.title ? (
                <div key={service.short} className="tab-pane fade show active">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <h5 className="fw-semibold mb-3">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                      {/* <button
                  className="btn blue mt-3"
                  onClick={() => showCardDetails(service.short)}
                >
                  View More Details
                </button> */}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Automotive;
