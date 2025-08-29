import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import CountUp from "react-countup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/Pages/home/customercarousel.css";

import projectBg from "../../assets/banners/project-bg3.png";
// import customerImage from "../../assets/icons/customer.webp";

const imageModules = import.meta.glob("../../assets/customers/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

// const testimonials = [
//   {
//     name: "John Smith",
//     location: "USA",
//     feedback:
//       "Actualize delivered exceptional engineering services on time and with great communication.",
//     flag: "https://flagcdn.com/us.svg",
//   },
//   {
//     name: "Lisa Müller",
//     location: "Germany",
//     feedback:
//       "We trust Actualize for their deep domain knowledge and agile execution model.",
//     flag: "https://flagcdn.com/de.svg",
//   },
//   {
//     name: "Arjun Patel",
//     location: "India",
//     feedback:
//       "The team’s responsiveness and solutions exceeded our expectations.",
//     flag: "https://flagcdn.com/in.svg",
//   },
//   {
//     name: "Chloe Dubois",
//     location: "France",
//     feedback:
//       "Excellent collaboration and great technical prowess from the Actualize team.",
//     flag: "https://flagcdn.com/fr.svg",
//   },
//   {
//     name: "Satoshi Kato",
//     location: "Japan",
//     feedback: "Timely project delivery and reliable support at every step.",
//     flag: "https://flagcdn.com/jp.svg",
//   },
//   {
//     name: "Maria Rossi",
//     location: "Italy",
//     feedback: "Remarkable customer service and highly skilled engineers.",
//     flag: "https://flagcdn.com/it.svg",
//   },
//   {
//     name: "Lucas Silva",
//     location: "Brazil",
//     feedback: "Our go-to partner for digital transformation initiatives.",
//     flag: "https://flagcdn.com/br.svg",
//   },
//   {
//     name: "Olga Ivanova",
//     location: "Russia",
//     feedback:
//       "Professional approach and transparent communication throughout the project.",
//     flag: "https://flagcdn.com/ru.svg",
//   },
//   {
//     name: "Emily Wang",
//     location: "China",
//     feedback: "Their expertise made our project a success story.",
//     flag: "https://flagcdn.com/cn.svg",
//   },
//   {
//     name: "James O’Connor",
//     location: "Ireland",
//     feedback: "Highly recommend for complex software delivery.",
//     flag: "https://flagcdn.com/ie.svg",
//   },
//   {
//     name: "Fatima Al-Farsi",
//     location: "UAE",
//     feedback: "Outstanding local support and international standards.",
//     flag: "https://flagcdn.com/ae.svg",
//   },
//   {
//     name: "Charlotte Brown",
//     location: "UK",
//     feedback: "Actualize continues to impress with every engagement.",
//     flag: "https://flagcdn.com/gb.svg",
//   },
// ];

const stats = [
  { end: 20, suffix: "+", label: "Global Clients" },
  { end: 3, suffix: "", label: "Continents Served" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 98, suffix: "%", label: "Client Retention" },
];

const GLOW_COLORS = [
  "#008AC2",
  "#ffe600",
  "#ff0000",
  "#4450f5ff",
  "#ed1c24",
  "#ffe600",
  "#00a5df",
  "#e60000",
  "#424141ff",
  "#c8102e",
  "#3178c6",
];

const TOTAL_CELLS_LARGE = 33;
const TOTAL_CELLS_MEDIUM = 25;
const TOTAL_CELLS_SMALL_MEDIUM = 20;
const TOTAL_CELLS_SMALL = 16;

const LOGO_POSITIONS_LARGE = [5, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29];
const LOGO_POSITIONS_MEDIUM = [2, 6, 7, 8, 11, 12, 13, 16, 17, 18, 21, 22];
const LOGO_POSITIONS_SMALL_MEDIUM = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14];
const LOGO_POSITIONS_SMALL = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function useResponsiveLayout() {
  const [layout, setLayout] = useState({
    logoPositions: LOGO_POSITIONS_LARGE,
    totalCells: TOTAL_CELLS_LARGE,
  });

  useEffect(() => {
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return layout;
}

const CustomerCarousel: React.FC = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const { logoPositions, totalCells } = useResponsiveLayout();
  const maxLogoLength = Math.max(
    LOGO_POSITIONS_LARGE.length,
    LOGO_POSITIONS_MEDIUM.length,
    LOGO_POSITIONS_SMALL.length
  );

  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    const logoList = Object.values(imageModules) as string[];
    setLogos(logoList.slice(0, maxLogoLength));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetTrigger((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   pauseOnHover: true,
  //   responsive: [
  //     { breakpoint: 992, settings: { slidesToShow: 3 } },
  //     { breakpoint: 768, settings: { slidesToShow: 2 } },
  //     { breakpoint: 576, settings: { slidesToShow: 1 } },
  //   ],
  // };

  return (
    <div className="customer-carousel-container" style={{backgroundImage : `url(${projectBg})`}}>
      <div className="container">
        <section className="frameworks-section">
          <h2 className="section-title">
            Trusted by <span className="highlight">Global Clients</span>
          </h2>
          <p className="lead mb-4">
            From startups to Fortune 500s — Actualize delivers excellence
            worldwide.
          </p>

          <div className="frameworks-wrapper mb-5">
            <div className="frameworks-grid">
              {Array.from({ length: totalCells }).map((_, idx) => {
                const logoIndex = logoPositions.indexOf(idx);
                const isLogo = logoIndex !== -1;
                const glowColor = GLOW_COLORS[logoIndex] || "#000";

                return (
                  <div
                    key={idx}
                    className={`framework-box ${
                      isLogo ? "active" : "placeholder"
                    }`}
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

          {/* Testimonial Carousel */}
          {/* <div className="p-5 text-center d-flex">
            <Slider {...sliderSettings} className="testimonial-slider">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-slide">
                  <div className="testimonial-card rounded">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          src={t.flag}
                          alt={t.location}
                          className="me-2"
                          width="24"
                          loading="lazy"
                        />
                        <h6 className="mb-0">{t.name}</h6>
                      </div>
                      <img
                        src={customerImage}
                        alt={t.location}
                        className="review-image"
                        width="40"
                        height="40"
                        loading="lazy"
                      />
                    </div>
                    <small style={{ color: "#000" }}>{t.location}</small>
                    <div className="stars text-warning mb-2">★★★★★</div>
                    <p className="small" style={{ color: "#000" }}>
                      "{t.feedback}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div> */}

          {/* CountUp Stats */}
          <div className="row g-4 p-5 pt-0 justify-content-center rounded text-white h-100">
            {stats.map((s, i) => (
              <div className="col-6 col-md-3" key={i} >
                <div className="p-4 rounded text-dark h-100 custom-shadow">
                  <h3>
                    <CountUp
                      key={`${resetTrigger}-${i}`}
                      start={0}
                      end={s.end}
                      suffix={s.suffix}
                      duration={1}
                    />
                  </h3>
                  <p className="small mb-0">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerCarousel;
