import React, { useState } from "react";
import "../../styles/coreHighlights.css";

import { FaCode, FaCloud } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiGears } from "react-icons/gi";

import softwareImage from "../../assets/icons/softwaredevelopment.jpg";
import cloudImage from "../../assets/icons/cloud.png";
import cadImage from "../../assets/icons/cad.jpg";
import consultingImage from "../../assets/icons/consulting.jpg";
const highlights = [
  {
    icon: FaCode,
    imageUrl: softwareImage,
    alt: "Software Development",
    title: "Software Development",
    description:
      "Modern, scalable web & mobile apps built using Angular, React, .NET & cloud-native stacks.",
  },
  {
    icon: GiGears,
    imageUrl: cadImage,
    alt: "PLM AND CAD Engineering",
    title: "PLM AND CAD Engineering",
    description: "Tailored solutions around Windchill, SolidWorks & more.",
  },
  {
    icon: FaCloud,
    imageUrl: cloudImage,
    alt: "Cloud AND DevOps",
    title: "Cloud AND DevOps",
    description:
      "CI/CD, containerization, and Azure/AWS/GCP cloud deployments.",
  },
  {
    icon: MdSupportAgent,
    imageUrl: consultingImage,
    alt: "Consulting AND Support",
    title: "Consulting AND Support",
    description:
      "Agile consulting, technical support, and long-term service engagements.",
  },
];

const CoreHighlights: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedHighlight = highlights[selectedIndex];
  const SelectedIcon = selectedHighlight.imageUrl;

  return (
    <section className="core-highlights-section">
      <h2 className="section-title-h2">
        Core <span className="brand-name">Highlights</span>
      </h2>

      <div className="core-highlight-card">
        <div className="highlight-sidebar">
          {highlights.map((item, index) => (
            <button
              key={index}
              className={`highlight-icon-button ${
                index === selectedIndex ? "active" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <item.icon size={24} color="#333" />
            </button>
          ))}
        </div>

        <div className="highlight-content">
          <div className="highlight-text">
            <h3>{selectedHighlight.title}</h3>
            <p>{selectedHighlight.description}</p>
          </div>
          <img src={SelectedIcon} alt="Image" className="highlight-image" />
        </div>
      </div>
    </section>
  );
};

export default CoreHighlights;
