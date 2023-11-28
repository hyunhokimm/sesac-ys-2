import React from "react";

const Food = (props) => {
  return <div className="props">{props.food}는 맛있어요</div>;
};

Food.defaultProps = {
  food: "배",
};

export default Food;
