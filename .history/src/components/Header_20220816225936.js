import React, { memo } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  return (
    <AppContext.Consumer>
      {(value) => <div>Header {value.name}</div>}
    </AppContext.Consumer>
  );
});
export default Header;
