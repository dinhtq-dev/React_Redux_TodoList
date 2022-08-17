import React, { Children } from "react";

const appContext = React.createContext();

const useContext = () => {
  const user = {
    name: "dinh",
    age: 34,
  };
  return <appContext.Provider value={user}>{Children}</appContext.Provider>;
};
