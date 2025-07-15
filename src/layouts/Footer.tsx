import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand + Tagline Section */}
        <div className="footer-brand">
          <div className="footer-brand-content">
            <img src={logo} alt="Actualize Logo" className="footer-logo" style={{ margin: '5px' }}/>
            <div className="footer-brand-text">
              <h2>Actualize</h2>
              <p>
                Engineering ideas into impactful realities.<br />
                Partner with innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <NavLink to="/company/about">About</NavLink>
          <NavLink to="/company/team">Team</NavLink>
          <NavLink to="/company/life-at-actualize">Life at Actualize</NavLink>
        </div>

        {/* Services Links */}
        <div className="footer-links">
          <h4>Services</h4>
          <NavLink to="/services/engineering">Engineering</NavLink>
          <NavLink to="/services/digital-transformation">Digital</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 contact@actualize.com</p>
          <p>📞 +91-9876543210</p>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="footer-bottom">
        <p className="m-0">© {new Date().getFullYear()} Actualize. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
