import { useEffect, useRef } from "react";
import "../../styles/coreHighlights.css";
import { FaArrowRight } from "react-icons/fa";

import softwareImage from "../../assets/icons/softwaredevelopment.jpg";
import cloudImage from "../../assets/icons/cloud.jpg";
import cadImage from "../../assets/icons/cad.jpg";
import consultingImage from "../../assets/icons/consulting.webp";
import embeddedImage from "../../assets/icons/embedded_Systems.jpg";
import dataImage from "../../assets/icons/dataengineering.webp";
import heavyEngineeringImage from "../../assets/icons/heavy.jpg";
import productImage from "../../assets/icons/product.jpg";

const highlights = [
  {
    imageUrl: cadImage,
    title: "PLM and CAD Engineering",
    description: "Tailored solutions around Windchill, SolidWorks & more.",
    direction: "from-left",
  },
  {
    imageUrl: softwareImage,
    title: "Software Development",
    description:
      "Modern, scalable web & mobile apps built using Angular, React, .NET & cloud-native stacks.",
    direction: "from-left",
  },
  {
    imageUrl: cloudImage,
    title: "Cloud AND DevOps",
    description:
      "CI/CD, containerization, and Azure/AWS/GCP cloud deployments.",
    direction: "from-left",
  },
  {
    imageUrl: dataImage,
    title: "Data Engineering",
    description:
      "Transforming raw data into actionable insights using modern ETL, BI, and analytics tools.",
    direction: "from-left",
  },
  {
    imageUrl: consultingImage,
    title: "Consulting AND Support",
    description:
      "Agile consulting, technical support, and long-term service engagements.",
    direction: "from-right",
  },
  {
    imageUrl: embeddedImage,
    title: "Embedded Systems",
    description:
      "Real-time software, firmware, and hardware integration for intelligent devices.",
    direction: "from-left",
  },

  {
    imageUrl: heavyEngineeringImage,
    title: "Heavy Engineering & Product Development",
    description:
      "Expertise in heavy projects, product development, and value engineering solutions to meet market demands.",
    direction: "from-right",
  },
  {
    imageUrl: productImage,
    title: "Product Engineering & Design Standardization",
    description:
      "Optimizing manufacturing and lifecycle stages ensuring quality, timeliness, and client satisfaction.",
    direction: "from-right",
  },
];

const CoreHighlights: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.4 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    // <div className="core-highlights-container">
    <div className="container-xl">
      <section className="core-highlights-section">
        <h2 className="section-title">
          Core <span className="highlight">Highlights</span>
        </h2>
        <div className="highlights-container">
          <div className="highlight-cards-container">
            {highlights.slice(0, 4).map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`highlight-card animate-on-scroll ${item.direction}`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="highlight-heading">{item.title}</div>
                <div className="highlight-card-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="overlay-arrow-button">
                    <FaArrowRight color="#fff" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-cards-container">
            {highlights.slice(4, 8).map((item, index) => (
              <div
                key={index + 5}
                ref={(el) => (cardRefs.current[index + 5] = el)}
                className={`highlight-card animate-on-scroll ${item.direction}`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="highlight-heading">{item.title}</div>
                <div className="highlight-card-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="overlay-arrow-button">
                    <FaArrowRight color="#fff" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default CoreHighlights;
