import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

function Counter() {
  const favorites = useSelector((state) => state.books.favorites);

  return <p className={classes.counter}>{favorites.length}</p>;
}

export default Counter;
