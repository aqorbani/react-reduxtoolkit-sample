import { useSelector } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector(selectCounter);
  return <div>{counter}</div>;
};

export default Counter;
