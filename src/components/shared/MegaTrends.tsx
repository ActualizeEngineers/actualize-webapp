import { useEffect, useRef } from "react";
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
    direction: "from-top",
  },
  {
    imageUrl: aiDriven,
    title: "AI-Driven Dev",
    desc: "ML-assisted coding, automation, and predictive analytics in dev lifecycle.",
    className: "",
    direction: "from-right",
  },
  {
    imageUrl: cybersecurityImage,
    title: "Cybersecurity",
    desc: "Security-first design with compliance, encryption, and monitoring.",
    className: "",
    direction: "from-left",
  },
  {
    imageUrl: lowCodeImage,
    title: "Low-Code/No-Code",
    desc: "Accelerated app development using visual workflow-based platforms.",
    className: "tall",
    direction: "from-top",
  },
  {
    imageUrl: conversationImage,
    title: "Conversational AI Agents",
    desc: "Unified voice, chat & WhatsApp agents that can execute tasks across channels.",
    className: "",
    direction: "from-bottom",
  },
  {
    imageUrl: aiAutomation,
    title: "AI-Powered Workflow Automation",
    desc: "Agentic workflows automate business logic from intent to execution.",
    className: "",
    direction: "from-right",
  },
];

const MegaTrends = () => {
  const trendRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      {
        threshold: 0.4, // trigger when ~40% is visible
      }
    );

    trendRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      trendRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="mega-trends-section-dark">
      <div className="container">
        <div className="mb-5 text-center">
          <h2 className="section-title-dark">
            Mega <span className="accent">Trends</span>
          </h2>
        </div>
        <div className="trends-mosaic-grid">
          {trends.map((trend, i) => (
            <div
              key={i}
              ref={(el) => (trendRefs.current[i] = el)}
              className={`trend-card-mosaic ${trend.className} animate-on-scroll ${trend.direction}`}
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
};
export default MegaTrends;
