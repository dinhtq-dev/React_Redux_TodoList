import { memo, useContext } from "react";
import { appContext } from "../App";
const Header = memo((props) => {
  const user = useContext(appContext);
  return (
    <>
      <div>{user.name}</div>
    </>
  );
});
export default Header;
