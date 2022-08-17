import React, { memo } from "react";

const Header = memo(
  ({ profile }) => {
    return <div>Header</div>;
  },
  (prevState, nextState) => {
    return true;
  }
);

export default Header;
