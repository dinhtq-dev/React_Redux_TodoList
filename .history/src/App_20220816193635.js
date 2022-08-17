import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const connect = (Component) => (props) => {
  const data = [1, 2, 3, 4];
  return <Component {...props}></Component>;
};

function App() {
  return <div className="App">123123</div>;
}

export default App;
