import React from "react";
import "../styles/Pages/contact.css";
import contactUsBanner from "../assets/banners/contactUsBanner.png";
import Navbar from "../layouts/Navbar";
import OurPresence from "../components/shared/OurPresence";

const Contact: React.FC = () => {
  return (
    <>
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${contactUsBanner})`,
        }}
      >
        <Navbar />
        <div className="overlay">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">Get in Touch — Let's Build the Future Together</p>
        </div>
      </section>
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
      </div>    
      <OurPresence/>
    </>
  );
};

export default Contact;
