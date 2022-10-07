import { useContext } from "react";
import GlobalContext from "../../../../store/global-context";

import classes from "./ToggleButton.module.css";

function ToggleButton() {
  const globalCtx = useContext(GlobalContext);

  return (
    <button
      type="button"
      className={classes.toggle}
      onClick={globalCtx.openMobileNav}
    >
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
    </button>
  );
}

export default ToggleButton;
