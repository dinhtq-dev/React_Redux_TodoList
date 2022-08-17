import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const Footer = () => {
  return <div>Footer</div>;
};

const connectHOC = (Component) => {
  const NewComponent = (props) => {
    return <Component {...props}></Component>;
  };

  return NewComponent;
};

const FooterHOC = connectHOC(Footer);

const App = () => {
  return (
    <UserContext>
      <Header />
      <FooterHOC />
    </UserContext>
  );
};

export default App;
