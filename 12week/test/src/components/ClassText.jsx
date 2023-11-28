import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ClassText extends Component {
  render() {
    const onClick = () => {
      console.log("콘솔 띄우기 성공!");
    };
    return (
      <div>
        {this.props.text}
        <button onClick={onClick}>버튼</button>
      </div>
    );
  }
}

ClassText.defaultProps = {
  text: "이건 기본 text props입니다.",
};

ClassText.propTypes = {
  text: PropTypes.string.isRequired,
};
