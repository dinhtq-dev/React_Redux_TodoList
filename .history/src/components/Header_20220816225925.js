import React, { memo } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  return (
    <AppContext.Consumer>
      {
        (value) => (
          <div>Header {props.name}</div>;
        )
      }
    </AppContext.Consumer>
  );
});
export default Header;
