import React, { useEffect, useState } from 'react';
import '../../styles/customercarousel.css';

// Dynamically import all customer logos from assets folder
// const customerLogos = [
//   require('../../assets/customers/OIP-1.jpg'),
//   require('../../assets/customers/download-1-1.jpg'),
//   require('../../assets/customers/hal-1.png'),
//   require('../../assets/customers/hartgel-1.png'),
//   require('../../assets/customers/hpc-1.png'),
//   require('../../assets/customers/satrous-1.png'),
//   require('../../assets/customers/tata-marcopolo-1.png'),
//   require('../../assets/customers/tata-motors-1.png'),
// ];

// Import all customer logos from assets/customers
const imageModules = import.meta.glob('../../assets/customers/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
});

const CustomerCarousel: React.FC = () => {
const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const logoList = Object.values(imageModules) as string[];
    setLogos(logoList);
  }, []);
  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Happy Customers</h2>
      <div className="carousel-track">
        <div className="carousel-slide">
          {logos.map((logo, index) => (
            <div className="carousel-logo" key={index}>
              <img src={logo} alt={`Customer ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
