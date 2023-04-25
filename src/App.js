import React, { useState } from "react";

function App() {
  const [colors, setColors] = useState([]);
  const [numberOfSquares, setNumberOfSquares] = useState(0);

  const getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addSquare = () => {
    const newColors = [...colors, getRandomColor()];
    setColors(newColors);
    setNumberOfSquares(newColors.length);
  };

  const removeSquare = () => {
    const newColors = [...colors];
    newColors.pop();
    setColors(newColors);
    setNumberOfSquares(newColors.length);
  };

  const squareStyle = {
    width: "100px",
    height: "100px",
    margin: "10px",
    cursor: "pointer",
  };

  const squares = colors
    .slice(0, numberOfSquares)
    .map((color, index) => (
      <div
        key={index}
        style={{ ...squareStyle, backgroundColor: color }}
        onClick={() =>
          setColors([
            ...colors.slice(0, index),
            getRandomColor(),
            ...colors.slice(index + 1),
          ])
        }
      ></div>
    ));

  return (
    <div id="main-container">
      <button onClick={addSquare}>Dodaj kwadrat</button>
      <button onClick={removeSquare}>Usuń kwadrat</button>
      {squares}
    </div>
  );
}

export default App;
