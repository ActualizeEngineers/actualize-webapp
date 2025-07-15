import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaCogs, FaIndustry } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "../../styles/floatingActions.css";

const FloatingActions: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-actions-container">
      {isOpen && (
        <div className="floating-actions-menu">
          <button title="Contact Us" onClick={() => navigate("/contact")}>
            <FaEnvelope />
          </button>
          <button
            title="Services"
            onClick={() => navigate("/services/engineering")}
          >
            <FaCogs />
          </button>
          <button
            title="Industries"
            onClick={() => navigate("/industries/Industrial-engineering")}
          >
            <FaIndustry />
          </button>
        </div>
      )}
      <button
        className="main-action-button"
        onClick={toggleOpen}
        title={isOpen ? "Close Actions" : "Open Actions"}
      >
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </div>
  );
};

export default FloatingActions;
