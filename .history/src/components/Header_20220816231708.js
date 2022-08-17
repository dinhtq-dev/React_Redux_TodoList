import { memo } from "react";
import { appContext } from "../App";
const Header = memo((props) => {
  return <appContext.Consumer>234234</appContext.Consumer>;
});
export default Header;
