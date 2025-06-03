import { useState } from "react";

export default function UseState_Example() {
  const colors = ["#FF0000", "#0000FF", "#FF00FF"];
  const [color, setColor] = useState("#FF0000");

    const handdleChangeColor = (index) =>{
        setColor(colors[index]);
    }


  return (
    <>
      <div
        style={{
          background: color,
          width: "80px",
          height: "50px",
          marginBottom: "20px",
        }}
      ></div>

      <div>
        <button onClick={() => handdleChangeColor(0)}>Red</button>
        <button onClick={() => handdleChangeColor(1)}>Blue</button>
        <button onClick={() => handdleChangeColor(2)}>Pink</button>
      </div>
    </>
  );
}
