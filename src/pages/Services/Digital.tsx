import Slider from "react-slick";
import { Link } from "react-router-dom";

import "../../styles/pages/services/digital.css";

import digitalHero from "../../assets/services/digital.jpg";
import cloudImage from "../../assets/icons/cloud.png";
import applicationImage from "../../assets/icons/applicationdevelopment.jpg";
import dataAnalyticsImage from "../../assets/icons/dataanalytics.jpg";
import embeddedEngineeringImage from "../../assets/icons/embeddedEngineering.jpg";
import industryImage from "../../assets/icons/industry.jpg";

import Navbar from "../../layouts/Navbar";

const digitalServices = [
  {
    title: "Data and Analytics",
    description:
      "Leverage the power of data with robust ETL pipelines, scalable data lakes, and intuitive BI dashboards to drive insights-driven decisions and optimize performance.",
    icon: dataAnalyticsImage,
    preview: dataAnalyticsImage,
  },
  {
    title: "Application Development",
    description:
      "Build modern, high-performance web and mobile applications using Angular, React, .NET, and Node.js, tailored to your business needs.",
    icon: applicationImage,
    preview: applicationImage,
  },
  {
    title: "Cloud Engineering",
    description:
      "Implement cloud-first strategies and optimize infrastructure across Azure, AWS, and GCP to boost agility, scalability, and reduce costs.",
    icon: cloudImage,
    preview: cloudImage,
  },
  {
    title: "Embedded Engineering",
    description:
      "Design and develop embedded systems and firmware for IoT devices, real-time applications, and specialized hardware, ensuring seamless integration and robust performance.",
    icon: embeddedEngineeringImage,
    preview: embeddedEngineeringImage,
  },
  {
    title: "Industry 4.0",
    description:
      "Transform operations with intelligent automation, IoT integration, predictive analytics, and machine learning for smarter, more efficient industrial processes.",
    icon: industryImage,
    preview: industryImage,
  },
];

const sliderSettings = {
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

const Digital: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{ backgroundImage: `url(${digitalHero})` }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="hero-heading">
            Digital{" "}
            <span className="overlay-text">
              TRANSFORMING IDEAS INTO <span className="highlight">IMPACT</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Digital Transformation Overview */}
      <section className="digital-overview-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            Digital <span className="highlight">Transformation Overview</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>
                In today's rapidly evolving digital landscape, businesses must
                transform to stay competitive. Our digital transformation
                services empower organizations to innovate, optimize processes,
                and enhance customer experiences.
              </p>
              <hr />
              <p>
                We leverage cutting-edge technologies and strategic insights to
                drive meaningful change, ensuring a seamless transition to a
                future-ready enterprise.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={digitalHero}
                alt="Digital Transformation"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="our-services-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">
              Our <span className="highlight">Digital Services</span>
            </h2>
            <p className="lead text-muted">
              Driving digital outcomes through cloud modernization, data
              intelligence, and agile delivery.
            </p>
          </div>

          <div className="digital-services-container">
            <Slider {...sliderSettings}>
              {digitalServices.map((service, idx) => (
                <div key={idx} className="digital-services-card">
                  {/* Left */}
                  <div className="digital-services-left">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.description}</p>
                  </div>

                  {/* Right */}
                  <div className="digital-services-right">
                    <img
                      className="service-preview"
                      src={service.preview}
                      alt={service.title}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        className="py-5 text-white "
        style={{ backgroundColor: "var(--brand-color)" }}
      >
        <div className="container text-center">
          <h3 className="fw-bold">Ready to Begin Your Digital Journey?</h3>
          <p className="lead">
            Connect with our experts to discuss your unique needs and how we can
            help you achieve your digital goals.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg custom-hover-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Digital;
