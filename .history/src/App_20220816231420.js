import "./App.css";

import React from "react";
import Header from "./components/Header";

export const appContext = React.createContext();

const App = () => {
  const user = {
    name: "Dinh",
    age: 34,
  };
  return (
    <appContext.provide value={user}>
      <Header></Header>
    </appContext.provide>
  );
};

export default App;
