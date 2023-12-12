import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const UseMemo = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const calc = useMemo(() => {
    console.log("calc....");
    return count * 2;
  }, [count]);

  return (
    <div>
      <div>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>calc :</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseMemo;
