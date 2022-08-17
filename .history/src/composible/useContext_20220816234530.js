import React from "react";

const AppContext = React.createContext();

const useContext = ({ children }) => {
  const user = {
    name: "dinh",
    age: 34,
  };
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export default useContext;
