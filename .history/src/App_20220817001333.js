import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const Footer = () => {
  return <div>Footer</div>;
};

const connectHOC = (Component) => {
  const NewComponent = () => {
    return <Component></Component>;
  };
};

const App = () => {
  return (
    <UserContext>
      <Header />
      <Footer />
    </UserContext>
  );
};

export default App;
