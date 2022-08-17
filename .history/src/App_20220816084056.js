import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
