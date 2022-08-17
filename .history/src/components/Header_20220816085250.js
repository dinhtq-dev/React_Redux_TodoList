import React, { memo } from "react";

const Header = memo(
  () => {
    return <div>Header</div>;
  },
  (prevState, nextState) => {
    return true;
  }
);

export default Header;
