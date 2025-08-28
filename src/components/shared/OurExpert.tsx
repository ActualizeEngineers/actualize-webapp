import { useRef } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/components/OurExpert.css";

// Import your 4 expert images
import expert1 from "../../assets/images/construction1.jpg";
import expert2 from "../../assets/images/mining1.jpg";
import expert3 from "../../assets/images/material1.jpg";
import expert4 from "../../assets/images/agriculture1.jpg";

// Data for experts
const experts = [
  {
    name: "Construction Equipment",
   
    image: expert1,
    desc: "With 20+ years of expertise, we help OEMs cut costs, improve safety, and boost uptime through innovative digital and engineering solutions.",
  },
  {
    name: "Mining",
    role: "Cloud Engineer",
    image: expert2,
    desc: "With 10+ years of expertise, we deliver end-to-end solutions from equipment design to productivity improvements, ensuring efficient and cost-effective operations.",
  },
  {
    name: "Material Handling",
    role: "Full Stack Developer",
    image: expert3,
    desc: "We help OEMs build smart, safe, and ROI-driven material handling solutions by integrating IoT and engineering expertise for faster, more agile operations.",
  },
  {
    name: "Agriculture",
    role: "QA Lead",
    image: expert4,
    desc: "We empower the agriculture sector with innovative engineering solutions that make machinery more efficient, flexible, and easier to operate for higher productivity.",
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
          <h2 className="section-title">
            <span className="highlight">  Our Expertise</span>
          </h2>
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
