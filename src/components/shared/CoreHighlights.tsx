import "../../styles/coreHighlights.css";

import softwareImage from "../../assets/icons/softwaredevelopment.jpg";
import cloudImage from "../../assets/icons/cloud.jpg";
import cadImage from "../../assets/icons/cad.jpg";
import consultingImage from "../../assets/icons/consulting.webp";
import embeddedImage from "../../assets/icons/embedded_Systems.jpg";
import dataImage from "../../assets/icons/dataengineering.webp";

import { FaArrowRight } from "react-icons/fa";

const highlights = [
  {
    imageUrl: cadImage,
    title: "PLM and CAD Engineering",
    description: "Tailored solutions around Windchill, SolidWorks & more.",
  },
  {
    imageUrl: softwareImage,
    title: "Software Development",
    description:
      "Modern, scalable web & mobile apps built using Angular, React, .NET & cloud-native stacks.",
  },
  {
    imageUrl: cloudImage,
    title: "Cloud AND DevOps",
    description:
      "CI/CD, containerization, and Azure/AWS/GCP cloud deployments.",
  },
  {
    imageUrl: dataImage,
    title: "Data Engineering",
    description:
      "Transforming raw data into actionable insights using modern ETL, BI, and analytics tools.",
  },
  {
    imageUrl: embeddedImage,
    title: "Embedded Systems",
    description:
      "Real-time software, firmware, and hardware integration for intelligent devices.",
  },
  {
    imageUrl: consultingImage,

    title: "Consulting AND Support",
    description:
      "Agile consulting, technical support, and long-term service engagements.",
  },
];

const CoreHighlights: React.FC = () => {
  return (
    <section className="core-highlights-section">
      <h2 className="core-highlights-section-title">Core <span className="highlights">Highlights</span></h2>

      <div className="highlight-cards-container">
        {highlights.map((item, index) => {
          return (
            <div
              key={index}
              className="highlight-card"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="highlight-heading">{item.title}</div>

              <div className="highlight-card-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="overlay-arrow-button">
                  <FaArrowRight color="#fff"/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreHighlights;
