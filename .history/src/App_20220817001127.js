import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const App = () => {
  const Footer = () => {
    return <div>Footer</div>;
  };
  return (
    <UserContext>
      <Header />
    </UserContext>
  );
};

export default App;
