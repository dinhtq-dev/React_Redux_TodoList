import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this);
  }
  handleClick() {
    this.setState({ count: 2 });
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.count}</div>;
  }
}
