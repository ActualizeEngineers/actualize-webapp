import React from "react";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/megaTrends.css";

const trends = [
  {
    icon: "/icons/cloud-native.svg",
    title: "Cloud-Native",
    badge: "Kubernetes Ready",
    badgeColor: "primary",
    desc: "Microservices, containerization, and scalable cloud infrastructure.",
  },
  {
    icon: "/icons/ai-dev.svg",
    title: "AI-Driven Dev",
    badge: "Next Gen",
    badgeColor: "warning",
    desc: "ML-assisted coding, automation, and predictive analytics in dev lifecycle.",
  },
  {
    icon: "/icons/cybersecurity.svg",
    title: "Cybersecurity",
    badge: "Zero Trust",
    badgeColor: "danger",
    desc: "Security-first design with compliance, encryption, and monitoring.",
  },
  {
    icon: "/icons/lowcode.svg",
    title: "Low-Code/No-Code",
    badge: "Citizen Dev",
    badgeColor: "success",
    desc: "Accelerated app development using visual workflow-based platforms.",
  },
];

const MegaTrends = () => {
  return (
    <section className="mega-trends-section py-5 text-center bg-white">
      <div className="container">
        <h2 className="section-title mb-4">
          We Align With <span className="highlight">Software Mega Trends</span>
        </h2>
        <p className="mb-5 lead">
          Embracing the technologies that redefine the future of software engineering and digital ecosystems.
        </p>
        <div className="row g-4 justify-content-center">
          {trends.map((trend, i) => (
            <div
              className={`col-12 col-sm-6 col-md-3 animate__animated animate__zoomIn animate__delay-${i}s`}
              key={i}
            >
              <div className="trend-card bg-light p-4 rounded shadow-sm hover-animate h-100">
                {/* <img src={trend.icon} alt={trend.title} width="50" className="mb-3" /> */}
                <h6>{trend.title}</h6>
                <span className={`badge bg-${trend.badgeColor} mt-2`}>{trend.badge}</span>
                <p className="small mt-2">{trend.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MegaTrends;
