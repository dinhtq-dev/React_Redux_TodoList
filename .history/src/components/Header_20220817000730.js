import { memo } from "react";
import { useUser } from "../composible/useContext";
const Header = memo((props) => {
  const user = useUser();
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </>
  );
});
export default Header;
