import React from "react";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/platformInnovationPage.css'

const PlatformInnovationPage = () => {
  const innovationSteps = [
    {
      icon: "fas fa-lightbulb",
      title: "Ideation",
      color: "text-primary",
      desc: "We start with design thinking and co-creation. Our ideation phase ensures alignment with user needs, market gaps, and business goals.",
    },
    {
      icon: "fas fa-project-diagram",
      title: "Architecture",
      color: "text-success",
      desc: "We architect robust and secure platforms using scalable microservices, event-driven design, and multi-tenant capabilities.",
    },
    {
      icon: "fas fa-cogs",
      title: "Deployment",
      color: "text-danger",
      desc: "End-to-end CI/CD pipelines, containerized delivery, and seamless multi-cloud deployments via Azure, AWS, or GCP.",
    },
  ];

  return (
    <section
      className="platform-innovation-section py-5 text-center"
      style={{ background: "linear-gradient(to right, #f9fbff, #eaf2fb)" }}
    >
      <div className="container">
        <h2 className="section-title mb-4">
          Platform-Based <span className="text-primary">Innovation</span>
        </h2>
        <p className="lead mb-5 px-md-5">
          At Actualize, we build reusable and scalable platforms from scratch—
          transforming disruptive ideas into future-ready, high-impact digital ecosystems.
        </p>

        <div className="row g-4 justify-content-center">
          {innovationSteps.map((step, i) => (
            <div
              key={i}
              className={`col-md-4 animate__animated animate__fadeInUp animate__delay-${i}s`}
            >
              <div className="card border-0 shadow-lg p-5 bg-white rounded h-100">
                <div className="icon-circle mb-4">
                  <i className={`${step.icon} fa-3x ${step.color}`}></i>
                </div>
                <h4 className="fw-bold">{step.title}</h4>
                <p className="text-muted mt-3">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformInnovationPage;
