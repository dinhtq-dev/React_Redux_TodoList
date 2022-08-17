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
    console.log(this.props);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  name: Proptypes.string,
};
