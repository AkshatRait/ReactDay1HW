import React, { useState } from 'react';

const ColorChanger = () => {
  const colorArray = ["red", "blue", "green", "yellow"];
  const [backgroundColor, setBackgroundColor] = useState("white"); // Initial background color

  const changeColor = () => {
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div className='colorContainer' style={{ backgroundColor }}>
      <div>ColorChanger</div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
