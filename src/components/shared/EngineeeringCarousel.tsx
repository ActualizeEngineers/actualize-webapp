import mechanical from "../../assets/icons/mechanical.png";
import electrical from "../../assets/icons/electrical.png";
import manufacturing from "../../assets/icons/manufacturing.png";
import analysis from "../../assets/icons/analysis.png";
import technical from "../../assets/icons/technical.png";
import "../../styles/EngineeeringCarousel.css";

const services = [
  {
    title: "Mechanical Engineering",
    description:
      "CAD, design, and product development services across the mechanical lifecycle. We ensure precision and efficiency in every project.",
    image: mechanical,
    tags: ["Design", "CAD", "Development"],
  },
  {
    title: "Manufacturing Engineering",
    description:
      "Tooling, fixture design, and process optimization for production. We focus on scalability and lean manufacturing practices.",
    image: manufacturing,
    tags: ["Process", "Fixtures", "Optimization"],
  },
  {
    title: "Electrical Engineering",
    description:
      "PCB design, harness routing, and electrical system design. Our solutions improve reliability and reduce costs.",
    image: electrical,
    tags: ["PCB", "Wiring", "Electronics"],
  },
  {
    title: "Technical Publication",
    description:
      "Creation of manuals, documentation, and service guides. We make technical information clear, user-friendly, and accessible.",
    image: technical,
    tags: ["Manuals", "Documentation", "Guides"],
  },
  {
    title: "Analysis",
    description:
      "FEA, CFD, and simulation to validate and improve product designs. Our methods minimize risk and accelerate innovation.",
    image: analysis,
    tags: ["FEA", "CFD", "Simulation"],
  },
];

const EngineeringScrollCards = () => {
  return (
    <div className="engineering-carousel-container">
      <section className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Our <span className="highlight">Engineering Expertise</span>
          </h2>
          <p className="lead fw-medium">
            We offer a wide range of electrical, mechanical, and plant
            engineering services to help optimize product functioning, improve
            efficiency, and ensure safety and compliance with regulations.
          </p>
        </div>

        <div className="scroll-cards-container">
          {services.map((item, idx) => (
            <div className="scroll-card" key={idx}>
              <img
                src={item.image}
                alt={item.title}
                className="service-image"
              />
              <div className="service-info">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <a href="#" className="learn-more-link">
                    Learn More <span className="learn-more-arrow">→</span>
                  </a>
                </div>
                <div className="service-tags">
                  {item.tags &&
                    item.tags.map((tag, i) => (
                      <span className="service-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EngineeringScrollCards;
