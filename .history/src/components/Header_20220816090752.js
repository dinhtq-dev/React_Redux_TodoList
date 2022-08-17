import React, { memo } from "react";

const Header = memo(({ profile }) => {
  console.log("w34234");
  return <div>Header:{profile.name}</div>;
});
export default Header;
