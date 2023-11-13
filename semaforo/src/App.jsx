// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function TrafficLight() {
  const [activeColor, setActiveColor] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);
  const [purpleActive, setPurpleActive] = useState(false);

  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
  };

  const handleLightClick = (color) => {
    if (!buttonActive) {
      changeColor(color);
    }
  };

  useEffect(() => {
    let intervalId;

    if (buttonActive) {
      intervalId = setInterval(autoChangeColor, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [buttonActive, activeColor]);

  const autoChangeColor = () => {
    const colors = ['color1', 'color2', 'color3'];
    let currentIndex = colors.indexOf(activeColor);
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];
    changeColor(newColor);
  };

  const changeColor = (color) => {
    setActiveColor(color);
  };

  const handlePurpleClick = () => {
    setPurpleActive(!purpleActive);
    if (purpleActive) {
      autoChangeColor();
    } else {
      changeColor('purple');
    }
  };

  return (
    <div id="container">
      <div id="traffic-light" className={purpleActive ? 'dynamic-height' : ''}>
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
        {purpleActive && (
          <div className={`light active-color-purple`} />
        )}
      </div>
      <button onClick={handleButtonClick}>Alternar Colores</button>
      <button onClick={handlePurpleClick}>Color Extra</button>
    </div>
  );
}

export default TrafficLight;
































