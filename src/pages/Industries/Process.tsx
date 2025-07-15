import React from 'react';
import Navbar from '../../layouts/Navbar';
import './industries.css'

const Process : React.FC = () => {
  return (
     <>
         <div className="process-container">
        <Navbar />
      </div>
      <section className="industry-hero heavy-bg text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Industrial Engineering</h1>
          <p className="lead">
            Engineering excellence for large-scale, mission-critical industries
          </p>
        </div>
      </section>
     </>
  );
};

export default Process ;