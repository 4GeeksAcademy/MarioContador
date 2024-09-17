import React, { useState, useEffect } from "react";


const Contador = () => {
  const [time, setTime] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000); // 

    return () => clearInterval(interval);
  }, []);

 
  const formatTime = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  return (
    <div className="contador-container">
      {formatTime(time).map((digit, index) => (
        <div key={index} className="digit-box">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Contador;