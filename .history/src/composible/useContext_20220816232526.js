import React from "react";

const appContext = React.createContext();

const useContext = () => {
  const user = {
    name: "dinh",
    age: 34,
  };
  return <appContext.Provider></appContext.Provider>;
};
