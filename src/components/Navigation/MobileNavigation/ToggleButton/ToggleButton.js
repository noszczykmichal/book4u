import { useContext } from "react";
import UIContext from "../../../../store-context/uiContext";

import classes from "./ToggleButton.module.css";

function ToggleButton() {
  const uiContext = useContext(UIContext);
  const { openMobileNav } = uiContext;
  return (
    <button type="button" className={classes.toggle} onClick={openMobileNav}>
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
    </button>
  );
}

export default ToggleButton;
