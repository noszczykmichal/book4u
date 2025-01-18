import { useAppSelector } from "../../../../hooks/useReduxHooks";
import classes from "./Counter.module.css";

const Counter = () => {
  const favorites = useAppSelector((state) => state.books.favorites);

  return <p className={classes.counter}>{favorites.length}</p>;
};

export default Counter;
