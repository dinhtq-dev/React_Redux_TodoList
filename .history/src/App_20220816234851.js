import "./App.css";

import React from "react";
import Header from "./components/Header";

import UserContext from "./composible/useContext";
export const appContext = React.createContext();

const App = () => {
  return (
    <UserContext>
      <Header></Header>
    </UserContext>
  );
};

export default App;
