import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <Header></Header>
    </div>
  );
}

export default App;
