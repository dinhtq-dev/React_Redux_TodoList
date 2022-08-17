import "./App.css";

import React, { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const inputRef = () => <div>lskdfkds</div>;
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({ name: "234234" });
  const data = useMemo(
    () => ({
      name: "dinthq",
      age: 34,
    }),
    []
  );
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <Header profile={profile} data={data}></Header>
      <label>Count: {count}</label>
      <inputRef />
    </div>
  );
}

export default App;
