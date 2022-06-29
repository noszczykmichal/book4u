import { useContext } from "react";
import GlobalContext from "../../store/global-context";

import classes from "./Backdrop.module.css";

function Backdrop() {
  const globalCtx = useContext(GlobalContext);


  let attachedClasses = [classes["backdrop"]];
  if (globalCtx.backdropVisible) {
    attachedClasses = [classes["backdrop"], classes["active"]];
  }

  return (
    <div className={classes["container"]}>
      <div className={attachedClasses.join(" ")} onClick={globalCtx.closeAllModals}></div>
    </div>
  );
}

export default Backdrop;
