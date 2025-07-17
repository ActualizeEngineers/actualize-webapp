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
      desc: "The global trends in the automotive market demand interiors that are designed by balancing style and performance to deliver a superior cockpit experience to the users. At Actualize, we use research, cultural insights, and modern technology to design interiors that deliver on both style and performance fronts.",
      image: "/src/assets/industries/automotive/Interior.png"
    },
    {
      title: "Exterior",
      short: "EXT",
      desc: "Tough, practical, and functional are the words we associate with automobile exteriors. With our product development expertise and end-to-end engineering capabilities, we build exteriors like that.",
      image: "/src/assets/industries/automotive/Exterior.png"
    },
    {
      title: "Seating",
      short: "SET",
      desc: "We provide automotive seats from concept to production using CAD, simulations, and reverse engineering. Our experience in combining different approaches and technologies help us exceed the standards of comfort and safety and provide full support to OEMs in building better seating for automobile application.",
      image: "/src/assets/industries/automotive/Seating.png"
    },
    {
      title: "BIW",
      short: "BIW",
      desc: "The increased performance of vehicles and the dynamic conditions they operate in today demand lightweight BIW structures. We design BIWs that ensure the vehicle's rigidity without compromising performance or safety. Our designs are made precisely using the best hardware material available and the most advanced design and engineering tools.",
      image: "/src/assets/industries/automotive/Biw.png"
    },
    {
      title: "Power Trains",
      short: "PWT",
      desc: "The world is moving towards a carbon-neutral future, and automotive powertrains play a major role. Our effort is to constantly innovate and play our part in developing environment-conscious and future-ready powertrains for our customers.",
      image: "/src/assets/industries/automotive/Powertrain.png"
    },
  ];
  const [activeTab, setActiveTab] = useState(services[0].short);


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
              <li className="nav-item" key={service.short}>
                <button
                  className={`nav-link ${
                    activeTab === service.short ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(service.short)}
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {services.map((service) =>
              activeTab === service.short ? (
                <div key={service.short} className="tab-pane fade show active">
                  <div className="card shadow-sm border-0" style={{width: '100%'}}>  
                    <div className="card-body automotive-card-body"> 
                      <div className="automotive-card-content">
                        <h5 className="fw-semibold mb-3">{service.title}</h5>
                        <p className="text-muted">{service.desc}</p>
                      </div>
                      <div className="automotive-card-image-container">
                        <img src={service.image} alt={service.title}/> 
                      </div>
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
