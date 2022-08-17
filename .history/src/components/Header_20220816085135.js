import React, { memo } from "react";

const Header = memo(
  () => {
    console.log(123123);
    return <div>Header</div>;
  },
  (prevState, nextState) => {
    console.log(prevState);
    console.log(nextState);
  }
);

export default Header;
