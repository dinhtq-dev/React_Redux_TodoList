import "./App.css";

import React from "react";
import Header from "./components/Header";

import useContext from "./composible/useContext";
export const appContext = React.createContext();

const App = () => {
  const user = {
    name: "Dinh",
    age: 34,
  };
  return (
    <useContext>
      <Header></Header>
    </useContext>
  );
};

export default App;
