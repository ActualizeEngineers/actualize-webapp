import React, { type JSX } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import bengaluru from '../../assets/Cities/bengaluru.jpg'
import pune from '../../assets/Cities/pune.jpg'
import munich from '../../assets/Cities/munich.jpg'
import ohio from '../../assets/Cities/ohio.jpg'
import '../../styles/WorldMap.css'

type Location = {
  name:  JSX.Element;
  nameText: string;
  coords: [number, number];
  image: string;
  description: JSX.Element;
  tooltipClass:string;
};

const locations: Location[] = [
  {
    name: <h2>Ohio, USA</h2>,
    nameText:"Ohio, USA",
    coords: [40.367474, -82.996216],
    image: ohio,
    description: <div className='map'>
    <p >Actualize Consulting Engineers </p>
      <p>LLC 3100 East 45th Street,.
    Suite 234# 162, </p>
    <p>Cleveland, Ohio – 44127</p>
    </div>,
    tooltipClass:'ohio',
  },
  {
    name: <h2>Munich, Germany</h2>,
    nameText:"Munich, Germany",
    coords: [48.14, 11.58],
    image: munich,
    description: <div className='map'>
      <p>Actualize Consulting Engineers </p>
    <p>GmbH Weidenweg 6,</p>
       <p>85764 Oberschleißheim, Munich</p>
       </div> ,
      tooltipClass:'germany',

  },
  {
    name: <h2>Bengaluru, India</h2>,
    nameText:"Bengaluru, India",
    coords: [12.9716, 77.5946],
    image: bengaluru,
    description: <div className='map'>
    <p>91 Springboard 6th Floor, Trifecta Adatto,</p>
    <p>21, ITPL Main Road, Mahadevapura, </p>
    <p>Springboard 6th Floor,Trifecta Adatto, </p>
    <p> 21, ITPL Main Road, Mahadevapura, </p>
    <p>Bengaluru – 560048</p>
    </div>,
    tooltipClass:'bengaluru',
  },
  {
    name: <h2>Pune, India</h2>,
    nameText:"Pune, India",
    coords: [18.5204, 73.8567],
    image: pune,
    description: <div className='map'>
    <p>Actualize Consulting Engineers (India)</p>
    <p>  Pvt Ltd 1125, 1st Floor,</p>
       <p>JK Infotech 2 Rajiv Gandhi Infotech Park,</p>
       <p> Phase I Hinjewadi Pune – 411057</p>
       </div>,
       tooltipClass:'pune'

       ,
  },
];

const WorldMap: React.FC = () => {
  return (
    <div className='map-wrapper'>
    <MapContainer center={[20, 0] as [number, number]} zoom={3} style={{ height: '100%', width: '100%' }}  zoomControl={false}
  dragging={false}
  scrollWheelZoom={false}
  doubleClickZoom={false}
  attributionControl={false}>
      <TileLayer
        
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
        bounds={[[-180, -180], [180, 180]]}
      />

      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Tooltip
             direction="auto"
          offset={[0, 0]}
            sticky={true}
            opacity={1}
            interactive={true}
          >
            <div className={loc.tooltipClass}  style={{  width: '300px' ,backgroundColor:'white'}}>
  <img src={loc.image} style={{ width: '100%', borderRadius: '6px' ,height:'30%'}} />
  <h6 style={{ margin: '5px 0' ,fontSize:'1px' }}>{loc.name}</h6>
  <p style={{ fontSize: '0.8rem', margin: 0 }}>{loc.description}</p>
</div>

          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default WorldMap;
