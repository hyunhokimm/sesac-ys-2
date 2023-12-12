import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const UseCallback = () => {
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h3>useCallback</h3>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
};

export default UseCallback;
