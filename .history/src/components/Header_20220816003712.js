import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Header extends Component {
  click() {}
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.count}</div>;
  }
}

Header.Proptypes = {
  name: Proptypes.string,
};
