import React, { memo } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  return (
    <AppContext.Consumer>
      {(value) => <div> {value.name}</div>
      <div> {value.name}</div>}
    </AppContext.Consumer>
  );
});
export default Header;
