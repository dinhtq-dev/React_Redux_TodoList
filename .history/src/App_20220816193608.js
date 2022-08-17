import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const connect = (Component) => (props) => {
  return <Component></Component>;
};

function App() {
  return <div className="App">123123</div>;
}

export default App;
