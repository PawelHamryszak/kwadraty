import React, { useState, useEffect } from "react";

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colorsArr = [];
    for (let i = 0; i < 4; i++) {
      colorsArr.push(getRandomColor());
    };
    setColors(colorsArr);
  }, []);

  const handleClick = (num) => {
    const colorsArr = colors;
    colorsArr[num] = getRandomColor();
    setColors([...colorsArr]);
  };

  const getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const tileStyle = {
    width: "400px",
    height: "400px",
    display: "inline-block",
    cursor: "pointer",
  }

  return (
    <div id="main-container">
      <div
        onClick={() => handleClick(0)}
        style={{
          ...tileStyle,
          backgroundColor: colors[0],
        }}
      ></div>
      <div
        onClick={() => handleClick(1)}
        style={{
          ...tileStyle,
          backgroundColor: colors[1],
        }}
      ></div>
      <div
        onClick={() => handleClick(2)}
        style={{
          ...tileStyle,
          backgroundColor: colors[2],
        }}
      ></div>
      <div
        onClick={() => handleClick(3)}
        style={{
          ...tileStyle,
          backgroundColor: colors[3],
        }}
      ></div>
    </div>
  );
}

export default App;
