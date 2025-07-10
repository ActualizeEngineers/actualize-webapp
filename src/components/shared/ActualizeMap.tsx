import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

<LoadScript googleMapsApiKey="AIzaSyCOM1jRReDs29BsnmJIWSKgMWzSvZjOwN8"></LoadScript>

const locations = [
 {
    label: "P",
    name: "PUNE, India",
    address: `Actualize Consulting Engineers (India) Pvt Ltd,
1125, 1st Floor, JK Infotech 2, Rajiv Gandhi Infotech Park, Phase I, Hinjewadi, Pune – 411057`,
    lat: 18.5927,
    lng: 73.7386,
  },
  {
    label: "B",
    name: "BENGALURU, India",
    address: `91 Springboard, 6th Floor, Trifecta Adatto, ITPL Main Road, Mahadevapura, Bengaluru – 560048`,
    lat: 12.9859,
    lng: 77.6974,
  },
  {
    label: "O",
    name: "OHIO, USA",
    address: `3100 East 45th Street, Suite 234#162, Cleveland, Ohio – 44127`,
    lat: 41.4946,
    lng: -81.6591,
  },
  {
    label: "M",
    name: "MUNICH, Germany",
    address: `Weidenweg 6, 85764 Oberschleißheim, Munich`,
    lat: 48.2481,
    lng: 11.5742,
  },
];

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "8px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const ActualizeMap: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const markers = locations
    .map(
      (loc) =>
        `markers=color:pink%7Clabel:${loc.label}%7C${loc.lat},${loc.lng}`
    )
    .join("&");

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=20.5937,78.9629&zoom=1.5&size=800x400&${markers}&key=AIzaSyCOM1jRReDs29BsnmJIWSKgMWzSvZjOwN8`;

  return (
    <div className="text-center">
      <h2 className="text-primary mb-4">Our Global Offices</h2>
      <img
        src={mapUrl}
        alt="Static Map of Office Locations"
        className="img-fluid rounded shadow"
      />

      <div className="d-flex flex-wrap justify-content-center mt-4 gap-3">
        {locations.map((loc, index) => (
          <button
            key={index}
            className="btn btn-outline-primary"
            onClick={() => setSelectedIndex(index)}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="mt-4 p-3 border rounded bg-light mx-auto" style={{ maxWidth: "600px" }}>
          <h5 className="text-primary">{locations[selectedIndex].name}</h5>
          <p className="mb-0" style={{ whiteSpace: "pre-line" }}>
            {locations[selectedIndex].address}
          </p>
        </div>
      )}
    </div>
  );
};

export default ActualizeMap;


//AIzaSyCOM1jRReDs29BsnmJIWSKgMWzSvZjOwN8
