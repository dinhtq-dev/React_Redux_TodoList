import { memo } from "react";
import { appContext } from "../composible/useContext";
const Header = memo((props) => {
  return (
    <>
      <div>{user.name}</div>
    </>
  );
});
export default Header;
