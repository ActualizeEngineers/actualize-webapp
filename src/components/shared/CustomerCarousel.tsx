import React, { useEffect, useState } from 'react';
import '../../styles/customercarousel.css';

const imageModules = import.meta.glob('../../assets/customers/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
});

const GLOW_COLORS = [
  '#3178c6',
  '#ffe600',
  '#ff0000',
  '#008AC2',
  '#ed1c24', 
  '#00a5df',  
  '#ffffff', 
  '#e60000',
  '#c8102e',   
  '#ffe600',  
  '#3178c6',
  '#3178c6',
];


const TOTAL_CELLS = 40;
const LOGO_POSITIONS = [12, 13, 14, 15, 16, 17, 23, 24, 25, 26, 34, 35]; 

const CustomerCarousel: React.FC = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const logoList = Object.values(imageModules) as string[];
    setLogos(logoList.slice(0, LOGO_POSITIONS.length));
  }, []);

  return (
    <section className="frameworks-section">
      <h2 className="frameworks-title">Happy Customers</h2>
      <div className="frameworks-wrapper">
        <div className="frameworks-grid">
          {Array.from({ length: TOTAL_CELLS }).map((_, idx) => {
            const logoIndex = LOGO_POSITIONS.indexOf(idx);
            const isLogo = logoIndex !== -1;
            const glowColor = GLOW_COLORS[logoIndex] || '#ffffff';

            return (
              <div
                key={idx}
                className={`framework-box ${isLogo ? 'active' : 'placeholder'}`}
                style={isLogo ? { '--glow-color': glowColor } as React.CSSProperties : {}}
              >
                {isLogo && logos[logoIndex] && (
                  <img src={logos[logoIndex]} alt={`Framework ${logoIndex + 1}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
