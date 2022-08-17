import React, { memo, useContext } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  const value = useContext(AppContext);
  return <div> {value.name}</div>;
});
export default Header;
