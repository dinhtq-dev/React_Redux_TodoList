import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserContext from "./composible/useContext";

const Footer = (props) => {
  return <div>Footer : {props.data}</div>;
};

const connectHOC = (Component) => (props) => {
  const data = [1, 3, 4, 5];
  return <Component {...props} data={data}></Component>;
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
