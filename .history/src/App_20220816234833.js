import "./App.css";

import React from "react";
import Header from "./components/Header";

import userContext from "./composible/useContext";
export const appContext = React.createContext();

const App = () => {
  return (
    <userContext>
      <Header></Header>
    </userContext>
  );
};

export default App;
