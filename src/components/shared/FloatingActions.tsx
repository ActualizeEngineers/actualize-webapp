// FloatingActions.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCogs, FaIndustry } from 'react-icons/fa';
import '../../styles/floatingActions.css';

const FloatingActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-actions">
      <button title="Contact Us" onClick={() => navigate('/contact')}>
        <FaEnvelope />
      </button>
      <button title="Services" onClick={() => navigate('/services/engineering')}>
        <FaCogs />
      </button>
      <button title="Industries" onClick={() => navigate('/industries/Industrial-engineering')}>
        <FaIndustry />
      </button>
    </div>
  );
};

export default FloatingActions;
