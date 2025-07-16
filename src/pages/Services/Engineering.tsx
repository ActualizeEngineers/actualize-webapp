import React from 'react';
import '../../styles/engineering.css';
import EngineeringCarousel from '../../components/shared/EngineeeringCarousel';
import OfferCarousel from '../../components/shared/OfferCarousel';



const Engineering: React.FC = () => {
  return (
    <>
    
    
    <div className='engineering1'>
      {/* Hero Section */}
      
      <section
        className=" box text-white text-center d-flex align-items-center justify-content-center ">
            
        <div className="overlay-text">
          <h1 ><span className='bouncer'>Engineering</span>  Services</h1>
          <p>Delivering comprehensive and customized engineering design solutions to meet your unique needs, ensuring quality, innovation, and sustainability.</p>
        </div>
      
      </section>

      {/* Intro */}
      
   

      
      <OfferCarousel/>
      <EngineeringCarousel/>
      

      {/* Engineering Categories as Cards */}
      

     

      {/* Call to Action */}
      <section className="text-center text-white py-5 custom-highlight-section">
        <h4 className="mb-3">Ready to Build Better Products?</h4>
        <a href="/contact" className="btn btn-light btn-lg">
          Get in Touch
        </a>
      </section>
    </div>
    </>
  );
};

export default Engineering;
