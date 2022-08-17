import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const AppContext = React.createContext();

const App = () => {
  return <AppContext.provide></AppContext.provide>;
};

export default App;
