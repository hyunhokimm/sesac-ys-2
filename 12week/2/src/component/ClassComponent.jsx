import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  plusTwo = () => {
    this.setState((prevState) => ({
      number: prevState.number + 2,
    }));
  };

  minusOne = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  render() {
    return (
      <>
        <div>ClassComponent</div>
        <div>{this.state.number}</div>
        <button onClick={this.plusTwo}>+2</button>
        <button onClick={this.minusOne}>-1</button>
      </>
    );
  }
}
