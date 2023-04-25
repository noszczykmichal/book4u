import { useContext } from "react";
import UIContext from "../../../../store-context/uiContext";

import classes from "./Counter.module.css";

function Counter() {
  const uiContext = useContext(UIContext);
  const { totalFavorites } = uiContext;

  return <p className={classes.counter}>{totalFavorites}</p>;
}

export default Counter;
