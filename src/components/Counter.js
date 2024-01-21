import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
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
    </div>
  );
};

export default Counter;
