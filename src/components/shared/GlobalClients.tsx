import React from "react";
import "../../styles/globalClients.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

const clientLogos = [
  { src: "/clients/logo1.png", alt: "Client 1" },
  { src: "/clients/logo2.png", alt: "Client 2" },
  { src: "/clients/logo3.png", alt: "Client 3" },
  { src: "/clients/logo4.png", alt: "Client 4" },
  { src: "/clients/logo5.png", alt: "Client 5" },
];

const testimonials = [
  {
    name: "John Smith",
    location: "USA",
    feedback: "Actualize delivered exceptional engineering services on time and with great communication.",
    flag: "/flags/us.png",
  },
  {
    name: "Lisa Müller",
    location: "Germany",
    feedback: "We trust Actualize for their deep domain knowledge and agile execution model.",
    flag: "/flags/de.png",
  },
];

const stats = [
  { end: 20, suffix: "+", label: "Global Clients" },
  { end: 3, suffix: "", label: "Continents Served" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 98, suffix: "%", label: "Client Retention" },
];

const GlobalClients = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="global-clients-section py-5 text-white" style={{ background: "linear-gradient(to right, #0b2239, #1a3c61)" }}>
      <div className="container text-center">
        <h2 className="section-title">Trusted by <span className="text-warning">Global Clients</span></h2>
        <p className="lead mb-5">From startups to Fortune 500s — Actualize delivers excellence worldwide.</p>

        {/* Logo Carousel */}
        <Slider {...sliderSettings} className="client-logo-slider mb-5">
          {clientLogos.map((logo, i) => (
            <div key={i} className="logo-slide">
              <img src={logo.src} alt={logo.alt} className="img-fluid client-logo" />
            </div>
          ))}
        </Slider>

        {/* Testimonials */}
        <div className="row g-4 justify-content-center mb-5">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={i}>
              <div className="testimonial-card bg-white p-4 shadow-sm rounded h-100">
                <div className="d-flex align-items-center mb-2">
                  <img src={t.flag} alt={t.location} className="me-2" width="24" />
                  <h6 className="mb-0">{t.name}</h6>
                  <small className="text-muted ms-2">({t.location})</small>
                </div>
                <div className="stars text-warning mb-2">★★★★★</div>
                <p className="small text-muted mb-0">"{t.feedback}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center">
          {stats.map((s, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="stat-card p-4 bg-gradient shadow rounded text-white h-100">
                <h3>
                  <CountUp end={s.end} suffix={s.suffix} duration={5} />
                </h3>
                <p className="small mb-0">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalClients;
