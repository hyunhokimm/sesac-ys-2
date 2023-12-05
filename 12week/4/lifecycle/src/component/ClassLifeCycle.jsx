import React, { Component } from "react";

export default class ClassLifeCycle extends Component {
  state = { text: "" };

  componentDidMount() {
    console.log("Class Component Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("Class component update");
  }

  render() {
    return (
      <div>
        <h2>함수형 컴포넌트 LifeCycle 공부</h2>
        <div>number: {this.props.number}</div>
        <input
          type="text"
          value={this.text}
          onChange={(e) => this.setText(e.target.value)}
        />
      </div>
    );
  }
}
