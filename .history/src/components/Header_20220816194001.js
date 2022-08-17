import React, { memo } from "react";

const Header = memo((props) => {
  return <div>Header {props.name}</div>;
});
export default Header;
