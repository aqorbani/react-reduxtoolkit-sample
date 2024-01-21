import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/number/numberSlice";

const Number = () => {
  const counter = useSelector((store) => store.number.numberValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Number;
