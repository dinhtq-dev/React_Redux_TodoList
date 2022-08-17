import React from "react";

const appContext = React.createContext();

const useContext = ({ children }) => {
  const user = {
    name: "dinh",
    age: 34,
  };
  return <appContext.Provider value={user}>{children}</appContext.Provider>;
};
