import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <Header></Header>
    </div>
  );
}

export default App;