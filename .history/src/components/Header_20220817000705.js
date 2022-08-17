import { memo } from "react";
import { useUser } from "../composible/useContext";
const Header = memo((props) => {
  const user = useUser();
  return (
    <>
      <div>{user.name} 123</div>
    </>
  );
});
export default Header;
