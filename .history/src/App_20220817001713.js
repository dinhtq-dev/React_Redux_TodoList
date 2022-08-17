import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const Footer = () => {
  return <div>Footer</div>;
};

const connectHOC = (Component) => {
  const data = [1, 2, 3, 4];
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
      <FooterHOC name="dinhtq" />
    </UserContext>
  );
};

export default App;
