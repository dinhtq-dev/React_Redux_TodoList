import React, { memo } from "react";
import { AppContext } from "../App";
const Header = memo((props) => {
  return (
    <AppContext>
      <div>Header {props.name}</div>;
    </AppContext>
  );
});
export default Header;
