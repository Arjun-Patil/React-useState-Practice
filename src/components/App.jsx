import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  let time = new Date().toLocaleTimeString();

  const [currentTime, updateTime] = useState(time);

  function update() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
