import React from "react";
import "../styles/contact.css";
import ActualizeMap from "../components/shared/ActualizeMap";

const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-intro">
        <h2>
          Get in Touch with <span className="brand-name">Actualize</span>
        </h2>
        <p className="contact-subtext">
          We’d love to hear from you. Whether you have a question about
          services, careers, or anything else, our team is ready to answer all
          your questions.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-form-section">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <h3 className="info-title">📍 General Contact</h3>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <span className="info-label">Phone:</span>
              <span className="info-text">+91-XXXXXXXXXX</span>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <span className="info-label">Email:</span>
              <span className="info-text">contact@actualize.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <span className="info-label">Business Hours:</span>
              <span className="info-text">
                Mon – Fri, 9:00 AM – 6:00 PM IST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-locations">
        <h3 className="location-title">🌍 Our Global Offices</h3>
        <div className="location-grid">
          <div className="location-card">
            <h4>🇺🇸 OHIO, USA</h4>
            <p>
              <strong>Actualize Consulting Engineers</strong>
            </p>
            <p>
              LLC 3100 East 45th Street, Suite 234#162,
              <br />
              Cleveland, Ohio – 44127
            </p>
          </div>

          <div className="location-card">
            <h4>🇩🇪 MUNICH, Germany</h4>
            <p>
              <strong>Actualize Consulting Engineers GmbH</strong>
            </p>
            <p>Weidenweg 6, 85764 Oberschleißheim, Munich</p>
          </div>

          <div className="location-card">
            <h4>🇮🇳 BENGALURU, India</h4>
            <p>
              <strong>Actualize Consulting Engineers</strong>
            </p>
            <p>
              91 Springboard, 6th Floor, Trifecta Adatto,
              <br />
              ITPL Main Road, Mahadevapura, Bengaluru – 560048
            </p>
          </div>

          <div className="location-card">
            <h4>🇮🇳 PUNE, India</h4>
            <p>
              <strong>Actualize Consulting Engineers (India) Pvt Ltd</strong>
            </p>
            <p>
              1125, 1st Floor, JK Infotech 2,
              <br />
              Rajiv Gandhi Infotech Park, Phase I,
              <br />
              Hinjewadi, Pune – 411057
            </p>
          </div>
        </div>
      </section> */}
      <ActualizeMap />
    </div>
  );
};

export default Contact;
