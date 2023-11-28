import React from "react";

const BestSeller = (props) => {
  return (
    <div className="book">
      <h3>이번주 베스트 셀러</h3>
      <img
        src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7KD/image/Twc6gpoHWkc7XDaoU_pZ3opJcWk.jpg"
        alt="책"
      />
      <h3>{props.title}</h3>
      <div>저자:{props.author}</div>
      <div>판매가:{props.price} </div>
      <div>구분: {props.type}</div>
    </div>
  );
};

export default BestSeller;
