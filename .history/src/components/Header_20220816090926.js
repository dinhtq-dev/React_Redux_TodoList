import React, { memo } from "react";

const Header = memo(({ profile }) => {
  console.log("w34234", profile.data);
  return <div>Header:{profile.name}</div>;
});
export default Header;
