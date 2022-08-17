import "./App.css";

import React from "react";
import Header from "./components/Header";

import useContext from "./composible/useContext";
export const appContext = React.createContext();

const App = () => {
  return (
    <useContext>
      <Header></Header>
    </useContext>
  );
};

export default App;
