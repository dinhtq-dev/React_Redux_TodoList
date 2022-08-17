import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

export const AppContext = React.createContext();

const connect = (Component) => (props) => {
  const data = [1, 2, 3, 4];
  return <Component {...props} data={data} name="sf"></Component>;
};

const WrapComponent = connect(Header);

function App() {
  const user = {
    name: "dinh",
    age: "28",
  };
  return (
    <div className="App">
      <AppContext.Provider value={user}>
        <Header />
        {/* <WrapComponent /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
