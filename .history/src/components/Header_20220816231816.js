import { memo } from "react";
import { appContext } from "../App";
const Header = memo((props) => {
  return (
    <div>
      <appContext.Consumer>
        {(value) => <div>{value.name}</div>}
      </appContext.Consumer>
    </div>
  );
});
export default Header;
