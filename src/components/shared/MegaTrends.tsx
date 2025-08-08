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
import devopsImage from "../../assets/icons/devops.avif";
import metaverseImage from "../../assets/icons/metaverse.jpg";
import dataEcosystemsImage from "../../assets/icons/data-ecosystem.jpg";

const trends = [
  {
    imageUrl: cloudImage,
    title: "Cloud 2.0 / Edge & Hybrid Cloud ",
    desc: "Decentralized cloud with edge computing. Real-time processing at edge (e.g., autonomous vehicles, IoT)",
    className: "wide",
    direction: "from-top",
  },
  {
    imageUrl: aiDriven,
    title: "AI-Driven Dev",
    desc: "ML-assisted coding, automation, and predictive analytics in dev lifecycle.",
    className: "",
    direction: "from-top",
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
    direction: "",
  },
  {
    imageUrl: aiAutomation,
    title: "AI-Powered Workflow Automation",
    desc: "Agentic workflows automate business logic from intent to execution.",
    className: "workflow-automation",
    direction: "from-left",
  },
  {
    imageUrl: devopsImage,
    title: " DevOps Evolution",
    desc: "Focus on IDPs and self-service environments. Tools like Kubernetes, GitOps, Backstage, Terraform, ArgoCD.",
    className: "platform-engineering", 
    direction: "from-bottom",
  },
  {
    imageUrl: metaverseImage,
    title: "XR & Metaverse for Enterprise",
    desc: "Enterprise shift to XR: virtual training, remote assistance, digital collaboration.",
    className: "",
    direction: "from-right",
  },
  {
    imageUrl: dataEcosystemsImage,
    title: "Data Analytics",
    desc: "Trends include data mesh, real-time analytics, synthetic data.",
    className: "data-analytics",
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
        threshold: 0.8,
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
