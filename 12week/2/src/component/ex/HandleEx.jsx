import React, { useState } from "react";

const HandleEx = () => {
  const [content, setContent] = useState("");
  const [fru, setFru] = useState("");
  const [col, setCol] = useState("");
  const [back, setBackg] = useState("");
  const [img, setImg] = useState(
    "C:/Users/SBA/Desktop/github/sesac-ys-2/4week/practice/img/"
  );

  const fruits = [{ name: "peach" }, { name: "apple" }, { name: "banana" }];

  const backgrounds = [{ name: "red" }, { name: "black" }, { name: "blue" }];

  const colors = [{ name: "red" }, { name: "black" }, { name: "blue" }];

  const onFruit = (e) => {
    setFru(e.target.value);
  };

  const onBackground = (e) => {
    console.log(e);
    setBackg(e.target.value);
  };
  const onColor = (e) => {
    setCol(e.target.value);
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <div>
        <span>과일 :</span>
        <select onChange={onFruit}>
          {fruits.map((fruit, index) => (
            <option key={index}>{fruit.name}</option>
          ))}
        </select>
      </div>
      <div>
        <span>배경색 :</span>
        <select onChange={onBackground}>
          {backgrounds.map((background, index) => (
            <option key={index}>{background.name}</option>
          ))}
        </select>
      </div>
      <div>
        <span>글자색 :</span>
        <select onChange={onColor}>
          {colors.map((color, index) => (
            <option key={index}>{color.name}</option>
          ))}
        </select>
      </div>
      <div>
        <span>내용 :</span>
        <input onChange={onChange} placeholder="내용을 입력하세요." />
      </div>
      <div>
        <img
          src={`C:/Users/SBA/Desktop/github/sesac-ys-2/4week/practice/img/${fru}.jpg`}
          alt=""
        />
        <div style={{ backgroundColor: back, color: col }}>{content}</div>
      </div>
    </div>
  );
};

export default HandleEx;
