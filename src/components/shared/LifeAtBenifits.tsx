import { useRef } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/components/OurExpert.css";

// Import your 4 expert images
import expert1 from "../../assets/images/benefit-wfh.jpg";
import expert2 from "../../assets/images/benefit-health.jpg";
import expert3 from "../../assets/images/benefit-accident1.jpg";
import expert4 from "../../assets/images/benefit-onsite.jpg";
import expert5 from "../../assets/images/benefit-cafeteria.jpg";

import "../../styles/components/LifeBenifits.css";

// Data for experts
const experts = [
  {
    name: "Need Based WFH",
   
    image: expert1,
    desc: "Flexibility to work from home when needed.",
  },
  {
    name: "Health Insurance",
    role: "Cloud Engineer",
    image: expert2,
    desc: "Comprehensive coverage for employees and families.",
  },
  {
    name: "Accidental Insurance",
    role: "Full Stack Developer",
    image: expert3,
    desc: "Financial protection against unexpected events.",
  },
  {
    name: "On-site exposure Benefits",
    role: "QA Lead",
    image: expert4,
    desc: "Work with global teams and gain hands-on international experience.",
  },
   {
    name: "Cafeteria",
    role: "QA Lead",
    image: expert5,
    desc: "Enjoy a comfortable space at work to relax, dine, and recharge with colleagues.",
  },
];

const settings = {
  dots: true,
 
  infinite: true,
  speed: 500,
  slidesToShow: 3,   // Show 4 images at once
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipe: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600, // Mobile
      settings: { slidesToShow: 1 },
    },
  ],
};

const OurExpert = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="our-expert-container">
      <div className="container">
        <section className="our-expert-section">
          {/* <h2 className="section-title">
            <span className="highlight">  Our Expertise</span>
          </h2> */}
          <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">
              Employment Benefits <span className="highlight"> At Actualize</span>
            </h2>
            <p className="lead text-muted">
              Supporting our employees with benefits that matter.
            </p>
          </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {experts.map((exp, i) => (
              <div key={i} className="expert-card">
                <div className="expert-img">
                  <img src={exp.image} alt={exp.name} />
                </div>
                <div className="expert-info text-center">
                  <h5 className="expert-name">{exp.name}</h5>
                  {/* <p className="expert-role">{exp.role}</p> */}
                  <p className="expert-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default OurExpert;
