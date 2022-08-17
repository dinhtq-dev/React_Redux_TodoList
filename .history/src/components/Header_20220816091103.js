import React, { memo } from "react";

const Header = memo(({ profile, data }) => {
  console.log("w34234", profile);
  return <div>Header:{profile.name}</div>;
});
export default Header;
