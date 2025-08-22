import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/EngineeeringCarousel.css";

import mechanical from "../../assets/icons/mechanical.png";
import electrical from "../../assets/icons/electrical.png";
import manufacturing from "../../assets/icons/manufacturing.png";
import analysis from "../../assets/icons/analysis.png";
import technical from "../../assets/icons/technical.png";

const EngineeringCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const services = [
    {
      title: "Mechanical Engineering",
      description:
        "CAD, design, and product development services across the mechanical lifecycle.",
      image: mechanical,
    },
    {
      title: "Electrical Engineering",
      description: "PCB design, harness routing, and electrical system design.",
      image: electrical,
    },
    {
      title: "Manufacturing Engineering",
      description:
        "Tooling, fixture design, and process optimization for production.",
      image: manufacturing,
    },
    {
      title: "Analysis",
      description:
        "FEA, CFD, and simulation to validate and improve product designs.",
      image: analysis,
    },
    {
      title: "Technical Publication",
      description: "Creation of manuals, documentation, and service guides.",
      image: technical,
    },
  ];

  return (
        <section className="container py-5 ">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Our <span className="highlight">Engineering Expertise</span>
            </h2>
            <p className="lead text-muted">
              We offer a wide range of electrical, mechanical, and plant
              engineering services to help optimize product functioning, improve
              efficiency, and ensure safety and compliance with regulations.
            </p>
          </div>

          <Slider {...settings}>
            {services.map((item, index) => (
              <div key={index} className="carousel-slide">
                <div className="service-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-image"
                  />

                  <div className="service-info">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
  );
};

export default EngineeringCarousel;
