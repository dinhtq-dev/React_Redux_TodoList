import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const AppContext = React.createContext();

const App = () => {
  const user = {
    name: "Dinh",
    age: 34,
  };
  return (
    <AppContext.provide value={user}>
      <Header></Header>
    </AppContext.provide>
  );
};

export default App;