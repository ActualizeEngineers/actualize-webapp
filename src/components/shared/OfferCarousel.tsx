// src/components/OfferCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/OfferCarousel.css"; // your optional styling

const OfferCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2,slideTOScroll:1 },
      },
      {
        breakpoint: 768, // mobiles
        settings: { slidesToShow: 1,slideTOScroll:1},
      },
    ],
  };

  const offerItems = [
    {
      icon: "fas fa-drafting-compass",
      title: "Design & Modeling",
      desc: "Comprehensive 2D/3D CAD support across industries.",
    },
    {
      icon: "fas fa-cogs",
      title: "Simulation",
      desc: "Advanced FEA & CFD to optimize performance and durability.",
    },
    {
      icon: "fas fa-tools",
      title: "Manufacturing Support",
      desc: "Support for prototyping, reverse engineering & documentation.",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Lifecycle Management",
      desc: "PLM customization, integration across Windchill, Teamcenter & more.",
    },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">What We Offer</h2>
        <p className="lead text-muted">
          Empowering product development with cutting-edge engineering, CAD, and PLM expertise.
        </p>
      </div>

      <Slider {...settings}>
        {offerItems.map((item, index) => (
          <div key={index}>
            <div className=" row justify-content-center">
              <div className=" carousel-slide col-md-3 col-sm-6 d-flex">
                <div className=" highlight-card text-center  h-100 w-100">
                  <div className="icon-wrapper mb-3">
                    <i className={`${item.icon} fa-2x text-primary bounce-icon`}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OfferCarousel;
