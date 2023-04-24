import React, { useState } from "react";

function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("green");
  const [color3, setColor3] = useState("blue");
  const [color4, setColor4] = useState("yellow");

  const handleClick1 = () => {
    setColor1(getRandomColor());
  };

  const handleClick2 = () => {
    setColor2(getRandomColor());
  };

  const handleClick3 = () => {
    setColor3(getRandomColor());
  };

  const handleClick4 = () => {
    setColor4(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div
        onClick={handleClick1}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color1,
          margin: "2rem",
        }}
      ></div>
      <div
        onClick={handleClick2}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color2,
          margin: "2rem",
        }}
      ></div>
      <div
        onClick={handleClick3}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color3,
          margin: "2rem",
        }}
      ></div>
      <div
        onClick={handleClick4}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color4,
          margin: "2rem",
        }}
      ></div>
    </div>
  );
}

export default App;
