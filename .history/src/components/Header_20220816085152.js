import React, { memo } from "react";

const Header = memo(
  () => {
    console.log(123123);
    return <div>Header</div>;
  },
  (prevState, nextState) => {
    return true;
  }
);

export default Header;
