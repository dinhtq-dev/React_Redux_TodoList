import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    console.log(123);
  }
  render() {
    return <div onClick={this.handleClick}>213123</div>;
  }
}
