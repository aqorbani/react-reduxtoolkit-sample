import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>inc By Amount 2</button>
    </div>
  );
};

export default Counter;
