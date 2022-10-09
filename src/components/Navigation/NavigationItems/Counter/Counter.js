import { useContext } from "react";
import GlobalContext from "../../../../store/global-context";

import classes from "./Counter.module.css";

function Counter() {
  const globalCtx = useContext(GlobalContext);
  const { totalFavorites } = globalCtx;

  return <p className={classes.counter}>{totalFavorites}</p>;
}

export default Counter;
