import React, { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <main>
      <h1>Window size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </main>
  );
}

export default App;
