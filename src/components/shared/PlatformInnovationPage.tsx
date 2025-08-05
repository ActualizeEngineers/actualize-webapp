import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/platformInnovationPage.css";

import ideationImage from "../../assets/images/ideation.jpg";
import architectureImage from "../../assets/images/architecture.jpg";
import deploymentImage from "../../assets/images/deployment.jpeg";

const innovationSteps = [
  {
    icon: "fas fa-lightbulb",
    title: "Ideation",
    color: "text-primary",
    desc: "Our ideation phase ensures alignment with user needs, market gaps, and business goals.",
    image: ideationImage,
  },
  {
    icon: "fas fa-project-diagram",
    title: "Architecture",
    color: "text-success",
    desc: "We architect robust and secure platforms using scalable microservices, event-driven designs.",
    image: architectureImage,
  },
  {
    icon: "fas fa-cogs",
    title: "Deployment",
    color: "text-danger",
    desc: "End-to-end CI/CD pipelines, containerized delivery, and seamless multi-cloud deployments.",
    image: deploymentImage,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const PlatformInnovationPage = () => {
  return (
    <section className="platform-innovation-section">
      <h2 className="section-title-platform-innovation">
        Platform-Based <span className="highlight">Innovation</span>
      </h2>
      <p className="lead">Explore our journey and achievements.</p>
      <div className="container-fluid milestone-bg">
        <Slider {...settings}>
          {innovationSteps.map((step, i) => (
            <div key={i} className="custom-neo-card">
              <div className="custom-neo-card-left">
                <div className={`milestone-icon ${step.color}`}>
                  <i className={`${step.icon}`}></i>
                </div>
                <div className="milestone-item">
                  <div className="milestone-text">
                    <div className={`milestone-title ${step.color}`}>
                      {step.title}
                    </div>
                    <div className="milestone-desc">{step.desc}</div>
                  </div>
                </div>
              </div>
              <div className="custom-neo-card-right d-flex align-items-center justify-content-center">
                <img
                  className="milestone-image"
                  src={step.image}
                  alt={step.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PlatformInnovationPage;
