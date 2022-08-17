import React from "react";

const appContext = React.createContext();

const useContext = () => {
  return <appContext.Provider></appContext.Provider>;
};
