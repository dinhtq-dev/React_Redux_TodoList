import React, { useContext } from "react";

const AppContext = React.createContext();
export const useUser = () => useContext(AppContext);

const UserContext = ({ children }) => {
  const user = {
    name: "dinh",
    age: 18,
  };
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export default UserContext;
