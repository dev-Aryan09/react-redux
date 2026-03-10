import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const [num, setNum] = useState(5);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value); // counter = slice name

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment()); // sending action to redux store
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement()); // sending action to redux store
        }}
      >
        Decrement
      </button>

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
           // sending action to redux store
        }}
      >
        Increment by Amount
      </button>
    </div>
  );
};

export default App;
