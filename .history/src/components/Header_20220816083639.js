import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Header extends Component {
  click() {}
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>123123</div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  name: Proptypes.string,
};
