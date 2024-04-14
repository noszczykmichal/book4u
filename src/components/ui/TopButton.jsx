import { useContext } from "react";

import UIContext from "../../store-context/uiContext";
import classes from "./TopButton.module.css";

function BubbleAnchor() {
  const uiContext = useContext(UIContext);
  const { takeToTop } = uiContext;

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
