import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const AppContext = React.createContext();

const App = () => {
  return (
    <AppContext.provide>
      <Header></Header>
    </AppContext.provide>
  );
};

export default App;
