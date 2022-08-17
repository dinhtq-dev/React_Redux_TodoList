import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";

const [name, setName] = useState('')
function App() {
  const handleChange = (event) => {
    setName(event.target.value)''
  };
  return (
    <div className="App">
      <Header
        name="hih"
        age="33"
        email="dinh@aifmirst.com"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
