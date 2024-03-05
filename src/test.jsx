import React, { useEffect, useState } from "react";
import Header from "./components/header";
function Test() {
  const [x, setX] = useState("Bonjour");
  const [y, setY] = useState("4twin2");
  const [z, setZ] = useState("omaradouli79@gmail.com");
  
  const number = [5, 2, 3, 1];
  let max = number.reduce((a, b) => (a > b ? a : b));

  useEffect(() => {
    console.log("executed");
  }, [x]);

  return (
    <>
      <div>
        <Header />
        <h1 className="text-3xl font-bold text-cyan-600">
          Omar Addouli: {x}, {y},{z}
        </h1>
        <ul className="md:flex md:justify-around p-5">
          {number.map((item) => {
            return <li className="text-black font-bold ">{item}</li>;
          })}
        </ul>
        {max}
      </div>
    </>
  );
}

export default Test;
