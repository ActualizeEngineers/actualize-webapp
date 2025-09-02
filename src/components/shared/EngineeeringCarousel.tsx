import mechanical from "../../assets/icons/mechanical.png";
import electrical from "../../assets/icons/electrical.png";
import manufacturing from "../../assets/icons/manufacturing.png";
import analysis from "../../assets/icons/analysis.png";
import technical from "../../assets/icons/technical.png";
import "../../styles/components/EngineeeringCarousel.css";

const services = [
  {
    title: "Mechanical Engineering",
    shortDescription:
      "CAD, design, and product development services across the mechanical lifecycle.",
    fullDescription:
      "CAD, design, and product development services across the mechanical lifecycle. We ensure precision and efficiency in every project. Our expertise spans automotive, aerospace, and consumer products, where we integrate advanced CAD tools with real-world manufacturability considerations.",
    image: mechanical,
    tags: ["Design", "CAD", "Development"],
  },
  {
    title: "Manufacturing Engineering",
    shortDescription:
      "Tooling, fixture design, and process optimization for production.",
    fullDescription:
      "Tooling, fixture design, and process optimization for production. We focus on scalability and lean manufacturing practices. Our engineers design efficient workflows, implement automation strategies, and provide digital twin simulations to minimize costs and maximize throughput.",
    image: manufacturing,
    tags: ["Process", "Fixtures", "Optimization"],
  },
  {
    title: "Electrical Engineering",
    shortDescription:
      "PCB design, harness routing, and electrical system design.",
    fullDescription:
      "PCB design, harness routing, and electrical system design. Our solutions improve reliability and reduce costs. From embedded systems to high-speed board layouts, we provide robust and optimized electrical solutions for diverse applications.",
    image: electrical,
    tags: ["PCB", "Wiring", "Electronics"],
  },
  {
    title: "Technical Publication",
    shortDescription: "Creation of manuals, documentation, and service guides.",
    fullDescription:
      "Creation of manuals, documentation, and service guides. We make technical information clear, user-friendly, and accessible. Our services include interactive 3D manuals, multilingual publishing, and AR/VR-enabled guides for immersive learning.",
    image: technical,
    tags: ["Manuals", "Documentation", "Guides"],
  },
  {
    title: "Analysis",
    shortDescription:
      "FEA, CFD, and simulation to validate and improve product designs.",
    fullDescription:
      "FEA, CFD, and simulation to validate and improve product designs. Our methods minimize risk and accelerate innovation. With advanced solvers, optimization workflows, and design-validation loops, we help clients build reliable and high-performance products.",
    image: analysis,
    tags: ["FEA", "CFD", "Simulation"],
  },
];

const EngineeringScrollCards = () => {
  return (
    <div>
      <section className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Our <span className="highlight">Engineering Expertise</span>
          </h2>
          <p className="lead text-muted">
            We offer a wide range of electrical, mechanical, and plant
            engineering services to help optimize product functioning, improve
            efficiency, and ensure safety and compliance with regulations.
          </p>
        </div>

        <div className="scroll-cards-container">
          {services.map((item, idx) => {
            const collapseId = `collapse-${idx}`;
            return (
              <div className="scroll-card" key={idx}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="service-image"
                />
                <div className="service-info">
                  <h5>{item.title}</h5>
                  <p>{item.shortDescription}</p>

                  <div className="service-tags">
                    {item.tags &&
                      item.tags.map((tag, i) => (
                        <span className="service-tag" key={i}>
                          {tag}
                        </span>
                      ))}
                  </div>

                  <button
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    className="learn-more-link"
                  >
                    Learn More <span className="learn-more-arrow">→</span>
                  </button>

                  <div id={collapseId} className="collapse">
                    <p>{item.fullDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
};

export default EngineeringScrollCards;
