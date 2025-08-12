import { useRef } from "react";

import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/platformInnovationPage.css";

import ideationImage from "../../assets/images/ideation.jpg";
import architectureImage from "../../assets/images/architecture.jpg";
import deploymentImage from "../../assets/images/deployment.jpeg";
import developmentImage from "../../assets/images/development.png";
import testingImage from "../../assets/images/testing.jpg";

const innovationSteps = [
  {
    icon: "fas fa-lightbulb",
    title: "IDEATION",
    color: "text-primary",
    desc: "Our ideation phase ensures alignment with user needs, market gaps, and business goals. We foster creativity and collaboration to generate innovative and feasible solutions.",
    image: ideationImage,
  },
  {
    icon: "fas fa-project-diagram",
    title: "ARCHITECTURE",
    color: "text-success",
    desc: "We architect robust and secure platforms using scalable microservices, event-driven designs. Our designs prioritize flexibility and future-proofing to accommodate evolving technologies.",
    image: architectureImage,
  },
  {
    icon: "fas fa-cogs",
    title: "DEPLOYMENT",
    color: "text-danger",
    desc: "End-to-end CI/CD pipelines, containerized delivery, and seamless multi-cloud deployments.We ensure minimal downtime and quick rollbacks to maintain service availability.",
    image: deploymentImage,
  },
  {
    icon: "fas fa-code",
    title: "DEVELOPMENT",
    color: "text-info",
    desc: "Agile development with clean, testable code and rapid iteration based on user feedback. Continuous integration and peer reviews maintain high code quality throughout the process. ",
    image: developmentImage,
  },
  {
    icon: "fas fa-shield-alt",
    title: "TESTING & QA",
    color: "text-secondary",
    desc: "Comprehensive automated and manual testing to ensure reliability, performance, and security. Real-world scenarios are simulated to catch edge cases and enhance user experience.",
    image: testingImage,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  swipe: true,
  draggable: true,
};

const PlatformInnovationPage = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (

      <div className="container">
        <section className="platform-innovation-section">
          <h2 className="section-title">
            Platform-Based <span className="highlight">Innovation</span>
          </h2>
          <p className="lead">Explore our journey and achievements.</p>
          <div className="container-fluid milestone-bg">
            <Slider ref={sliderRef} {...settings}>
              {innovationSteps.map((step, i) => (
                <div
                  key={i}
                  className="custom-neo-card"
                  onMouseEnter={() => sliderRef.current?.slickPause()}
                  onMouseLeave={() => sliderRef.current?.slickPlay()}
                >
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
                  <div className="custom-neo-card-right d-flex align-items-center justify-content-center bg-white">
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
      </div>
  );
};

export default PlatformInnovationPage;
