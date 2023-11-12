// App.jsx
import React, { useState } from 'react';
import './App.css';

function TrafficLight() {
  const [activeColor, setActiveColor] = useState(null);

  const handleLightClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div id="traffic-light">
      <div
        className={`light ${activeColor === 'color1' ? 'active-color1' : ''}`}
        onClick={() => handleLightClick('color1')}
      />
      <div
        className={`light ${activeColor === 'color2' ? 'active-color2' : ''}`}
        onClick={() => handleLightClick('color2')}
      />
      <div
        className={`light ${activeColor === 'color3' ? 'active-color3' : ''}`}
        onClick={() => handleLightClick('color3')}
      />
    </div>
  );
}

export default TrafficLight;

















