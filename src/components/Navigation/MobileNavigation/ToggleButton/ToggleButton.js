/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from "react";
import GlobalContext from "../../../../store/global-context";

import classes from "./ToggleButton.module.css";

function ToggleButton() {
  const globalCtx = useContext(GlobalContext);

  return (
    <div className={classes.toggle} onClick={globalCtx.openMobileNav}>
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
    </div>
  );
}

export default ToggleButton;
