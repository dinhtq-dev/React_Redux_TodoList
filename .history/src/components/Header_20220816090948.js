import React, { memo } from "react";

const Header = memo(({ profile, data }) => {
  console.log("w34234", data);
  return <div>Header:{profile.name}</div>;
});
export default Header;
