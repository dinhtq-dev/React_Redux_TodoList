import { memo } from "react";
import { useUser } from "../composible/useContext";
const Header = memo((props) => {
  return <>
  <div>
    {{useUser.name}}
  </div>
  </>;
});
export default Header;
