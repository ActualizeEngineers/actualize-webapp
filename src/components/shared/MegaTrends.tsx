import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/megaTrends.css";

import cloudImage from "../../assets/icons/cloud.jpg";
import aiDriven from "../../assets/icons/ai-driven.jpg";
import cybersecurityImage from "../../assets/icons/cybersecurity.jpg";
import lowCodeImage from "../../assets/icons/lowcode.jpg";
import conversationImage from "../../assets/icons/conversation-ai.jpg";
import aiAutomation from "../../assets/icons/ai-automation.jpg";

const trends = [
  {
    imageUrl: cloudImage,
    title: "Cloud-Native",
    desc: "Microservices, containerization, and scalable cloud infrastructure.",
    className: "wide",
  },
  {
    imageUrl: aiDriven,
    title: "AI-Driven Dev",
    desc: "ML-assisted coding, automation, and predictive analytics in dev lifecycle.",
    className: "",
  },
  {
    imageUrl: cybersecurityImage,
    title: "Cybersecurity",
    desc: "Security-first design with compliance, encryption, and monitoring.",
    className: "",
  },
  {
    imageUrl: lowCodeImage,
    title: "Low-Code/No-Code",
    desc: "Accelerated app development using visual workflow-based platforms.",
    className: "tall",
  },
  {
    imageUrl: conversationImage,
    title: "Conversational AI Agents",
    desc: "Unified voice, chat & WhatsApp agents that can execute tasks across channels.",
    className: "",
  },
  {
    imageUrl: aiAutomation,
    title: "AI-Powered Workflow Automation",
    desc: "Agentic workflows automate business logic from intent to execution.",
    className: "",
  },
];

const MegaTrends = () => (
  <section className="mega-trends-section-dark">
    <div className="container">
      <div className="mb-5 text-center">
        <h2 className="section-title-dark">
          Our Expert Rate And Custom <br />
          Furnishing <span className="accent">For Every Room</span>
        </h2>
      </div>
      <div className="trends-mosaic-grid">
        {trends.map((trend, i) => (
          <div
            className={`trend-card-mosaic ${trend.className}`}
            key={i}
            style={{ backgroundImage: `url(${trend.imageUrl})` }}
          >
            <div className="card-overlay">
              <h5>{trend.title}</h5>

              {trend.desc && <p className="small mt-1">{trend.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MegaTrends;
