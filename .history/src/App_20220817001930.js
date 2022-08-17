import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const Footer = (props) => {
  return <div>Footer : {props.data}</div>;
};

const connectHOC = (Component) => {
  const data = [1, 2, 3, 4];
  return (props) => <Component {...props} data={data}></Component>;
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
