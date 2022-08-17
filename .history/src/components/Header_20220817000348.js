import { memo } from "react";
import { useUser } from "../composible/useContext";
const Header = memo((props) => {
  return <>{useUser.name}</>;
});
export default Header;
