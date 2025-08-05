import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/customercarousel.css";

const imageModules = import.meta.glob("../../assets/customers/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const testimonials = [
  {
    name: "John Smith",
    location: "USA",
    feedback:
      "Actualize delivered exceptional engineering services on time and with great communication.",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    name: "Lisa Müller",
    location: "Germany",
    feedback:
      "We trust Actualize for their deep domain knowledge and agile execution model.",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    name: "Arjun Patel",
    location: "India",
    feedback:
      "The team’s responsiveness and solutions exceeded our expectations.",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    name: "Chloe Dubois",
    location: "France",
    feedback:
      "Excellent collaboration and great technical prowess from the Actualize team.",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    name: "Satoshi Kato",
    location: "Japan",
    feedback: "Timely project delivery and reliable support at every step.",
    flag: "https://flagcdn.com/jp.svg",
  },
  {
    name: "Maria Rossi",
    location: "Italy",
    feedback: "Remarkable customer service and highly skilled engineers.",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    name: "Lucas Silva",
    location: "Brazil",
    feedback: "Our go-to partner for digital transformation initiatives.",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    name: "Olga Ivanova",
    location: "Russia",
    feedback:
      "Professional approach and transparent communication throughout the project.",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    name: "Emily Wang",
    location: "China",
    feedback: "Their expertise made our project a success story.",
    flag: "https://flagcdn.com/cn.svg",
  },
  {
    name: "James O’Connor",
    location: "Ireland",
    feedback: "Highly recommend for complex software delivery.",
    flag: "https://flagcdn.com/ie.svg",
  },
  {
    name: "Fatima Al-Farsi",
    location: "UAE",
    feedback: "Outstanding local support and international standards.",
    flag: "https://flagcdn.com/ae.svg",
  },
  {
    name: "Charlotte Brown",
    location: "UK",
    feedback: "Actualize continues to impress with every engagement.",
    flag: "https://flagcdn.com/gb.svg",
  },
];

const stats = [
  { end: 20, suffix: "+", label: "Global Clients" },
  { end: 3, suffix: "", label: "Continents Served" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 98, suffix: "%", label: "Client Retention" },
];

const GLOW_COLORS = [
  "#ffffff",
  "#ffe600",
  "#ff0000",
  "#008AC2",
  "#ed1c24",
  "#ffe600",
  "#00a5df",
  "#e60000",
  "#c9c9c9ff",
  "#c8102e",
  "#3178c6",
];

const TOTAL_CELLS_LARGE = 33;
const TOTAL_CELLS_MEDIUM = 30;
const TOTAL_CELLS_SMALL_MEDIUM = 20;
const TOTAL_CELLS_SMALL = 16;

const LOGO_POSITIONS_LARGE = [5, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29];
const LOGO_POSITIONS_MEDIUM = [2, 6, 7, 8, 11, 12, 13, 16, 17, 18, 21, 22];
const LOGO_POSITIONS_SMALL_MEDIUM = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14];
const LOGO_POSITIONS_SMALL = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function useResponsiveLayout() {
  const [layout, setLayout] = React.useState({
    logoPositions: LOGO_POSITIONS_LARGE,
    totalCells: TOTAL_CELLS_LARGE,
  });

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setLayout({
          logoPositions: LOGO_POSITIONS_SMALL,
          totalCells: TOTAL_CELLS_SMALL,
        });
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        setLayout({
          logoPositions: LOGO_POSITIONS_SMALL_MEDIUM,
          totalCells: TOTAL_CELLS_SMALL_MEDIUM,
        });
      } else if (window.innerWidth < 1200) {
        setLayout({
          logoPositions: LOGO_POSITIONS_MEDIUM,
          totalCells: TOTAL_CELLS_MEDIUM,
        });
      } else {
        setLayout({
          logoPositions: LOGO_POSITIONS_LARGE,
          totalCells: TOTAL_CELLS_LARGE,
        });
      }
    }
    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return layout;
}

const CustomerCarousel: React.FC = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const { logoPositions, totalCells } = useResponsiveLayout();
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const maxLogoLength = Math.max(
    LOGO_POSITIONS_LARGE.length,
    LOGO_POSITIONS_MEDIUM.length,
    LOGO_POSITIONS_SMALL.length
  );

  useEffect(() => {
    const logoList = Object.values(imageModules) as string[];
    setLogos(logoList.slice(0, maxLogoLength));
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="frameworks-section">
      <h2 className="frameworks-section-title">
        Trusted by <span>Global Clients</span>
      </h2>
      <p className="lead mb-4">
        From startups to Fortune 500s — Actualize delivers excellence worldwide.
      </p>
      <div className="frameworks-wrapper mb-5">
        <div className="frameworks-grid">
          {Array.from({ length: totalCells }).map((_, idx) => {
            const logoIndex = logoPositions.indexOf(idx);
            const isLogo = logoIndex !== -1;
            const glowColor = GLOW_COLORS[logoIndex] || "#ffffff";

            return (
              <div
                key={idx}
                className={`framework-box ${
                  isLogo ? "active" : "placeholder"
                } ${idx === 5 ? "special-hover" : ""}`}
                style={
                  isLogo
                    ? ({ "--glow-color": glowColor } as React.CSSProperties)
                    : {}
                }
              >
                {isLogo && logos[logoIndex] && (
                  <img
                    src={logos[logoIndex]}
                    alt={`Framework ${logoIndex + 1}`}
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 pt-0 text-center">
        {/* Logo Carousel */}
        <Slider {...sliderSettings} className="testimonial-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide">
              <div className="testimonial-card bg-white p-4 shadow-sm rounded">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={t.flag}
                    alt={t.location}
                    className="me-2"
                    width="24"
                    loading="lazy"
                  />
                  <h6 className="mb-0">{t.name}</h6>
                  <small className="text-muted ms-2">({t.location})</small>
                </div>
                <div className="stars text-warning mb-2">★★★★★</div>
                <p className="small text-muted mb-0">"{t.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Stats */}
      <div
        ref={statsRef}
        className="row g-4 p-5 pt-0 justify-content-center rounded text-white h-100"
      >
        {stats.map((s, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="p-4 bg-dark bg-gradient shadow rounded text-white h-100">
              <h3>
                <CountUp
                  start={0}
                  end={startCount ? s.end : 0}
                  suffix={s.suffix}
                  duration={2}
                />
              </h3>
              <p className="small mb-0">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerCarousel;
