import "./App.css";

import React from "react";
import Header from "./components/Header";

import useContext from "./composible/userContext";
export const appContext = React.createContext();

const App = () => {
  return (
    <userContext>
      <Header></Header>
    </userContext>
  );
};

export default App;
