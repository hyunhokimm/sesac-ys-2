import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/counterReducer";
import { nameAdd, nameMinus } from "./store/nameReduser";

function App() {
  const dispatch = useDispatch();
  const getMoney = useSelector((state) => state.counter.money);
  const names = useSelector((state) => state.name);
  const [money, setMoney] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  const onChange = (e) => {
    if (e.target.name == "money") {
      // Ensure that the input value is a valid number
      const inputValue = e.target.value;
      setMoney(inputValue);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const increment = () => {
    // Dispatch the increase action with the parsed money value
    dispatch(increase(money));
  };

  const decrement = () => {
    // Dispatch the increase action with the parsed money value
    dispatch(decrease(money));
  };

  const onSubmit = () => {
    dispatch(nameAdd(name));
    setName("");
    setId(id + 1);
  };

  const onDelete = (id) => {
    dispatch(nameMinus(id));
  };

  return (
    <div className="text-center">
      <div>
        <div>
          <h3>잔액: {getMoney}</h3>
        </div>
        <input
          name="money"
          placeholder="금액"
          type="number"
          onChange={onChange}
        />
        <button className="border p-2 bg-slate-400" onClick={increment}>
          입금
        </button>
        <button className="border p-2 bg-slate-400" onClick={decrement}>
          출금
        </button>
      </div>
      <div className=" p-10">
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 적어주세요."
          type="text"
        />
        <button onClick={onSubmit}>제출</button>
        {names.map((nam) => (
          <div className=" flex justify-between p-3" key={nam.id}>
            <div>{nam.name}</div>
            <button onClick={() => onDelete(nam.name)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
