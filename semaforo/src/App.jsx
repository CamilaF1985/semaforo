// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function TrafficLight() {
  // Variables de estado y estados iniciales
  const [activeColor, setActiveColor] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);
  const [colors, setColors] = useState(['color1', 'color2', 'color3']);

  // Manejador de clic en el botón de alternar colores
  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
    // Si el botón se activa, establecer el color activo como el primer color
    if (!buttonActive) {
      setActiveColor(colors[0]);
    }
  };

  // Manejador de clic en una luz del semáforo
  const handleLightClick = (color) => {
    // Cambiar el color solo si el modo automático está desactivado
    if (!buttonActive) {
      changeColor(color);
    }
  };

  // Efecto secundario para alternar automáticamente los colores del semáforo
  useEffect(() => {
    let intervalId;

    if (buttonActive) {
      intervalId = setInterval(autoChangeColor, 1000);
    } else {
      clearInterval(intervalId);
    }

    // Limpiar el intervalo cuando el componente se desmonta o cambian las dependencias
    return () => {
      clearInterval(intervalId);
    };
  }, [buttonActive, activeColor, colors]);

  // Función para cambiar automáticamente el color del semáforo
  const autoChangeColor = () => {
    let currentIndex = colors.indexOf(activeColor);
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];
    changeColor(newColor);
  };

  // Función para cambiar el color del semáforo
  const changeColor = (color) => {
    setActiveColor(color);
  };

  // Función para alternar la presencia del púrpura en el semáforo
  const togglePurpleColor = () => {
    // Agregar color púrpura si el modo automático está desactivado y no hay más de 3 colores
    if (!buttonActive && colors.length < 4) {
      setColors((prevColors) => [...prevColors, 'color4']);
      setActiveColor('color4');
    } else {
      // Restablecer a los 3 colores originales y apagar el color activo
      setColors(['color1', 'color2', 'color3']);
      setActiveColor(null);
    }
  };

  return (
    <div id="container">
      <div id="traffic-light">
        {/* Mapear los colores para renderizar las luces del semáforo */}
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${activeColor === color ? `active-${color}` : ''}`}
            onClick={() => handleLightClick(color)}
          />
        ))}
      </div>
      {/* Botón para alternar/quitar el púrpura */}
      <button onClick={togglePurpleColor}>Toggle Color Púrpura</button>
      {/* Botón para alternar colores automáticamente */}
      <button onClick={handleButtonClick}>Alternar Colores</button>
    </div>
  );
}

export default TrafficLight;















































