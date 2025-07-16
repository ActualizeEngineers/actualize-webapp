import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/custom.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActiveRoot = (paths: string[]) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container navbar-inside">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img src={logo} alt="Actualize Logo" height="30" />
          <span style={{ fontWeight: 700, fontSize: "1.5rem", color: "white" }}>
            Actualize
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:'#00ccd9'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto" style={{}}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li
              className={`nav-item dropdown ${
                isActiveRoot(["/company"]) ? "active-root" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Company
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/company/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/company/team">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/company/life-at-actualize"
                  >
                    Life at Actualize
                  </NavLink>
                </li>
              </ul>
            </li>

            <li
              className={`nav-item dropdown ${
                isActiveRoot(["/services"]) ? "active-root" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/services/engineering">
                    Engineering Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/digital-transformation" > Digital Transformation </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/software-development" > Software Development </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/product-development" > Product Development </NavLink>
                </li>
              </ul>
            </li>

            <li
              className={`nav-item dropdown ${
                isActiveRoot(["/industries"]) ? "active-root" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Industries
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industries/heavy-engineering"
                  >
                    Heavy Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industries/automotive-engineering"
                  >
                    Automotive Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industries/Industrial-engineering"
                  >
                    Industrial Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industries/process-engineering"
                  >
                    Process Engineering
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/careers" className="nav-link">
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
