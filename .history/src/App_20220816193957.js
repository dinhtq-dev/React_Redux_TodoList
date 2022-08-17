import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const connect = (Component) => (props) => {
  const data = [1, 2, 3, 4];
  return <Component {...props} data={data} name="sf"></Component>;
};

const WrapComponent = connect(Header);

function App() {
  return (
    <div className="App">
      <WrapComponent />
    </div>
  );
}

export default App;
