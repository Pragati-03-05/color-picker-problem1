import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [color, setColor] = useState('lightGrey');

  const colorSet = (col) => {
    setColor(col ? col : 'lightGrey');
  };
  let pixels = [];
  const Pixel = () => {
    const [pixelColor, setPixelColor] = useState('lightGrey');
    return (
      <div
        style={{ width: '20px', height: '20px', backgroundColor: pixelColor }}
        onClick={() => {
          setPixelColor(color);
        }}
      />
    );
  };
  for (let i = 0; i < 100; i++) {
    pixels.push(<Pixel />);
  }
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10,1fr)',
          gridTemplateRows: 'repeat(10,1fr)',
          gridGap: '10px',
          width: '200px',
        }}
      >
        {pixels}
      </div>
      <p>type color</p>
      <input onChange={(e) => colorSet(e.target.value)}></input>
    </div>
  );
}
