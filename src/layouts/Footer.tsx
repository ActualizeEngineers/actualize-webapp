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
            <img src={logo} alt="Actualize Logo" className="footer-logo" style={{ margin: '5px' }} />
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
          <NavLink to="/company/about" target="_top">About</NavLink>
          <NavLink to="/company/team" target="_top">Team</NavLink>
          <NavLink to="/company/life-at-actualize" target="_top">Life at Actualize</NavLink>
        </div>
        {/* Services Links */}
        <div className="footer-links">
          <h4>Services</h4>
          <NavLink to="/services/engineering" target="_top">Engineering Services</NavLink>
          <NavLink to="/services/digital-transformation" target="_top">Digital Transformation</NavLink>
          <NavLink to="/services/software-development" target="_top"> Software Development</NavLink>
          <NavLink to="/services/product-development" target="_top">  Product Development</NavLink>

        </div>

        {/* Services Links */}
        <div className="footer-links">
          <h4>Industries</h4>
          <NavLink to="/industries/heavy-engineering" target="_top"> Heavy Engineering</NavLink>
          <NavLink to="/industries/automotive-engineering" target="_top"> Automotive Engineering</NavLink>
          <NavLink to="/industries/industrial-engineering" target="_top"> Industrial Engineering</NavLink>
          <NavLink to="/industries/process-engineering" target="_top"> Process Engineering</NavLink>

        </div>

        {/* Contact Info */}
        <div className="footer-links">
          <h4>Contact</h4>
          <NavLink to="" style={{ margin: 0, fontWeight: 0 }}>📧 contact@actualize.com</NavLink>
          <NavLink to="" style={{ margin: 0 }}>📞 +91-9XX-XXX-XXXX</NavLink>
          <NavLink to="/contact" target="_top"> ➡️ Contact-US</NavLink>
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
