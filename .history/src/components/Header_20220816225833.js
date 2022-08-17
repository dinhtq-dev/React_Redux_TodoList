import React, { memo } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  return (
    <AppContext.Consumer>
      <div>Header {props.name}</div>;
    </AppContext.Consumer>
  );
});
export default Header;
