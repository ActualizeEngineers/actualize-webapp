// src/components/OfferCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/OfferCarousel.css"; // your optional styling
import mechanical from '../../assets/icons/mechanical.png'
import electrical from '../../assets/icons/electrical.png'
import manufacturing from '../../assets/icons/manufacturing.png'
import analysis from '../../assets/icons/analysis.png'
import technical from '../../assets/icons/technical.png'
import '../../styles/EngineeeringCarousel.css'
const EngineeringCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2,slideTOScroll:1 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1,slideTOScroll:1},
      },
    ],
  };

  const services = [
     {
                title: 'Mechanical Engineering',
                description: 'CAD, design, and product development services across the mechanical lifecycle.',
                icon: mechanical,
              },
              {
                title: 'Electrical Engineering',
                description: 'PCB design, harness routing, and electrical system design.',
                icon: electrical,
              },
              {
                title: 'Manufacturing Engineering',
                description: 'Tooling, fixture design, and process optimization for production.',
                icon: manufacturing,
              },
              {
                title: 'Analysis',
                description: 'FEA, CFD, and simulation to validate and improve product designs.',
                icon: analysis,
              },
              {
                title: 'Technical Publication',
                description: 'Creation of manuals, documentation, and service guides.',
                icon: technical,
              },
   
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Our Engineering Expertise</h2>
        <p className="lead text-muted">
         We offer a wide range of electrical, mechanical, and plant engineering services to help optimize product functioning, improve efficiency, and ensure safety and compliance with regulations.


        </p>
      </div>

      <Slider {...settings}>
        {services.map((item, index) => (
          <div key={index}>
            <div className="row justify-content-center h-20">
              <div className=" carousel-slide col-md-3 col-sm-6  d-flex justify-content-center align-center h-20 ">
                <div className=" highlight-card text-center d-flex flex-column align-items-stretch w-100 ">
                  <img src={item.icon} style={{width:'100%' ,height:'200px',marginBottom:'40px',objectFit:'cover'}}/>
                  <h5 style={{fontWeight:'500',fontSize:'1.5rem'}}>{item.title}</h5>
                  <p style={{fontWeight:'500',fontSize:'1.0rem'}}>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default EngineeringCarousel;
