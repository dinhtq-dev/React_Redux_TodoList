import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    console.log(this);
    console.log();
  }
  render() {
    return <div>213123</div>;
  }
}
