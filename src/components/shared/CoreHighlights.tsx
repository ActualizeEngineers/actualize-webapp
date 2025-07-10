import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "../../styles/coreHighlights.css";

import softwareIcon from "../../assets/icons/software.png";
import cadIcon from "../../assets/icons/cad.png";
import cloudIcon from "../../assets/icons/cloud.png";
import consultIcon from "../../assets/icons/consulting.png";

const highlights = [
  {
    icon: softwareIcon,
    alt: "Software Development",
    title: "Software Development",
    description:
      "Modern, scalable web & mobile apps built using Angular, React, .NET & cloud-native stacks.",
  },
  {
    icon: cadIcon,
    alt: "PLM & CAD Engineering",
    title: "PLM & CAD Engineering",
    description: "Tailored solutions around Windchill, SolidWorks & more.",
  },
  {
    icon: cloudIcon,
    alt: "Cloud & DevOps",
    title: "Cloud & DevOps",
    description:
      "CI/CD, containerization, and Azure/AWS/GCP cloud deployments.",
  },
  {
    icon: consultIcon,
    alt: "Consulting & Support",
    title: "Consulting & Support",
    description:
      "Agile consulting, technical support, and long-term service engagements.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const CoreHighlights: React.FC = () => {
  return (
    <section className="core-highlights-section">
      <h2 className="section-title">
        Core <span className="brand-name">Highlights</span>
      </h2>
      <Slider {...sliderSettings}>
        {highlights.map((item, index) => (
          <div key={index} className="slick-slide-inner">
            <div className="core-highlight-card">
              <img src={item.icon} alt={item.alt} className="highlight-icon" />
              <div className="core-description-container">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CoreHighlights;
