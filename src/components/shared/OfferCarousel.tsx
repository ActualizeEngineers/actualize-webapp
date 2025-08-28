import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/OfferCarousel.css";

const offerItems = [
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

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: false,
  centerPadding: "0px",
  arrows: false,
  swipe: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true },
    },
  ],
};

const OfferCarousel = () => {
  return (
    <div className="offer-carousel-container">
      <div className="container" style={{background: 'transparent'}}>
        <section style={{background: 'transparent'}}>
          <div className="text-center mb-5">
            <h2 className="section-title">
              What <span className="highlight">We Offer</span>
            </h2>
            <p className="lead text-muted">
              Empowering product development with cutting-edge engineering, CAD,
              and PLM expertise.
            </p>
          </div>

          <Slider {...settings}>
            {offerItems.map((item, index) => (
              <div key={index} className="carousel-slide">
                <div className="timeline-card">
                  <div className="timeline-icon">
                    <i className={`${item.icon} fa-lg`}></i>
                  </div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default OfferCarousel;
