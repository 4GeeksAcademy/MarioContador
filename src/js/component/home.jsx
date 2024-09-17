import React, { useState, useEffect } from "react";


// Componente principal
const Contador = () => {
  const [time, setTime] = useState(0);

  // useEffect para actualizar el contador cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000); // Actualizar cada 1 segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Función para obtener los dígitos individuales del tiempo
  const formatTime = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  return (
    <div className="contador-container">
      {/* Renderizamos los dígitos */}
      {formatTime(time).map((digit, index) => (
        <div key={index} className="digit-box">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Contador;