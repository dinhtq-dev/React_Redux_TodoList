import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log(this);
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
