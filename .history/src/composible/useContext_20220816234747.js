import React, { useContext } from "react";

const AppContext = React.createContext();
export const useUser = () => useContext(AppContext);

const userContext = ({ children }) => {
  const user = {
    name: "dinh",
    age: 34,
  };
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export default userContext;