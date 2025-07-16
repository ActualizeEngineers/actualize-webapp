// CardCarousel.tsx
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/cardCarousel.css";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  services: ServiceCard[];
}

const CardCarousel: React.FC<Props> = ({ services }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      loop
      className="card-carousel"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index} className="card-slide">
          <div className="card-content">
            <img src={service.icon} alt={service.title} className="carousel-icon" />
            <h5>{service.title}</h5>
            <p>{service.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
