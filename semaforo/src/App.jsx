// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function TrafficLight() {
  const [activeColor, setActiveColor] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);
  const [colors, setColors] = useState(['color1', 'color2', 'color3']);

  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
    if (!buttonActive) {
      setActiveColor(colors[0]);
    }
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
  }, [buttonActive, activeColor, colors]);

  const autoChangeColor = () => {
    let currentIndex = colors.indexOf(activeColor);
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];
    changeColor(newColor);
  };

  const changeColor = (color) => {
    setActiveColor(color);
  };

  const togglePurpleColor = () => {
    if (!buttonActive && colors.length < 4) {
      setColors((prevColors) => [...prevColors, 'color4']);
      setActiveColor('color4');
    } else {
      setColors(['color1', 'color2', 'color3']);
      setActiveColor(null);
    }
  };

  return (
    <div id="container">
      <div id="traffic-light">
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${activeColor === color ? `active-${color}` : ''}`}
            onClick={() => handleLightClick(color)}
          />
        ))}
      </div>
      <button onClick={togglePurpleColor}>Toggle Color Púrpura</button>
      <button onClick={handleButtonClick}>Alternar Colores</button>
    </div>
  );
}

export default TrafficLight;














































