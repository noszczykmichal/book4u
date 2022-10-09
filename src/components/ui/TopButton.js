import { useContext } from "react";
import GlobalContext from "../../store/global-context";

import classes from "./TopButton.module.css";

function BubbleAnchor() {
  const globalCtx = useContext(GlobalContext);
  const { takeToTop } = globalCtx;

  return (
    <button
      type="button"
      className={classes.anchor}
      onClick={() => takeToTop("button")}
    >
      Top
    </button>
  );
}

export default BubbleAnchor;
