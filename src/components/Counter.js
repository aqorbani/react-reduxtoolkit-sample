import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.counter.counterValue);
  return <div>{counter}</div>;
};

export default Counter;
