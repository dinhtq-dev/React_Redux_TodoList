import { memo } from "react";
import { useUser } from "../composible/useContext";
const Header = memo((props) => {
  return (
    <>
      <div>{useUser.value} 123</div>
    </>
  );
});
export default Header;
