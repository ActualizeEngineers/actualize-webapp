import { useEffect, useState } from "react";
import WorldMap from "../../assets/images/world-map.png";
import "../../styles/ourPresence.css";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}


const OurPresence = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const locations = [
        {
        name: 'Bengaluru',
        address: '91 Springboard 6th Floor, Trifecta Adatto, 21, ITPL Main Road, Mahadevapura, Bengaluru - 560048',
        top: '57%',
        left: '70.5%',
        image: '/src/assets/Cities/bengaluru.jpg',
        },
        {
        name: 'Pune',
        address: 'Actualize Consulting Engineers (India) Pvt Ltd 1125, 1st Floor, JK Infotech 2 Rajiv Gandhi Infotech Park, Phase I Hinjewadi Pune - 411057',
        top: '52%',
        left: '69%',
        image: '/src/assets/Cities/pune.jpg',
        },
        {
        name: 'Ohio',
        address: 'Actualize Consulting Engineers LLC, 3100 East 45th Street, Suite 234# 162, Cleveland, Ohio - 44127',
        top: '33%',
        left: '23%',
        image: '/src/assets/Cities/ohio.jpg',
        },
        {
        name: 'Munich',
        address: 'Actualize Consulting Engineers GmbH Weidenweg 6, 85764 Oberschleißheim, Munich',
        top: '35%',
        left: '53%',
        image: '/src/assets/Cities/munich.jpg',
        },
    ];
  
  const { width } = useWindowSize();

  return (
    <div className="our-presence-container">
        <h2 className="our-offices-text">Our Offices Around the World</h2>
        <p className="our-motto">We have a great work environment and try to make it better and better</p>
        <div className="office-name-container">
            {locations.map((location, index) => {
                return (
                    <div 
                        key={`${location.name}+${index}`} 
                        onMouseEnter={() => setHovered(index)} 
                        onMouseLeave={() => setHovered(null)}
                    >
                        <p className="office-location-name">{location.name}</p>
                    </div>
                )
            })}
        </div>
        <div className="map-container">
            <img src={WorldMap} alt="world-map" className="world-map"/>
            {locations.map((loc, index) => (
                <>
                    {/* Dot */}
                    <div
                        key={`dot-${index}`}
                        style={{
                            position: 'absolute',
                            top: loc.top,
                            left: loc.left,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            cursor: 'pointer',
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div
                            style={{
                            width: hovered === index ? '16px' : '8px',
                            height: hovered === index ? '16px' : '8px',
                            backgroundColor: 'yellow',
                            borderRadius: '50%',
                            transition: 'all 0.2s ease',
                            }}
                        />
                    </div>

                    {/* Tooltip */}
                    {hovered === index && (
                        <>
                            <div
                                key={`tooltip-${index}`}
                                style={{
                                    top: width > 767 ? `calc(${loc.top} - 88px)` : width <= 767 && width > 539 ? `calc(${loc.top} - 75px)` : `calc(${loc.top} - 67px)`,
                                    left: loc.left
                                }}
                                className="tooltip-container"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="hover-card-image-container" style={{ flex: '0 0 45%', backgroundImage: `url(${loc.image})` }} />
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8px' }}>
                                    <h2 className="tooltip-office-name">{loc.name}</h2>
                                    <p className="tooltip-office-address">{loc.address}</p>
                                </div>
                            </div>
                            {/* Triangle */}
                            <div
                                style={{
                                    top: `calc(${loc.top} - 12px)`,
                                    left: `calc(${loc.left} - 6px)`,
                                }}
                                className="tooltip-tip"
                            />
                        </>
                    )}
                </>
            ))}
        </div>
    </div>
  )
}

export default OurPresence