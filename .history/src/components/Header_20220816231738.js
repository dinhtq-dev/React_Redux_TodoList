import { memo } from "react";
import { appContext } from "../App";
const Header = memo((props) => {
  return (
    <div>
      <appContext.Consumer></appContext.Consumer>
    </div>
  );
});
export default Header;
