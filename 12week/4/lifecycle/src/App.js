import LifeCycle from "./component/LifeCycle";
import "./App.css";
import { useState } from "react";
import ClassLifeCycle from "./component/ClassLifeCycle";
import Practice01 from "./component/Practice01";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      {/* {isShow && <LifeCycle number={number} />} */}
      {/* <button onClick={() => setNumber(number + 1)}>plus</button>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "off" : "on"}
      </button>
      <ClassLifeCycle number={number} /> */}

      <Practice01 />
    </div>
  );
}

export default App;
