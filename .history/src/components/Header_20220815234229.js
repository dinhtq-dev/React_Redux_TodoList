import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    console.log(this);
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    console.log("w3ewr");
  }
  render() {
    return <div onClick={this.handleClick}>213123</div>;
  }
}
