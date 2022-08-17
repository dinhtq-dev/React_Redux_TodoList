import { memo } from "react";
import { appContext } from "../App";
const Header = memo((props) => {
  return (
    <>
      <appContext.Consumer>
        {(value) => <div>{value.name}</div>}
      </appContext.Consumer>
    </>
  );
});
export default Header;
