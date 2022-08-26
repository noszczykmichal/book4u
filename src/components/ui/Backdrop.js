import { useContext, useRef } from "react";
import GlobalContext from "../../store/global-context";
import { CSSTransition } from "react-transition-group";

import classes from "./Backdrop.module.css";

function Backdrop() {
  const globalCtx = useContext(GlobalContext);
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={globalCtx.backdropVisible}
      timeout={300}
      classNames={{
        enter: '',
        enterActive: classes['backdrop--open'],
        exit: '',
        exitActive: classes['backdrop--closed']
      }}
      mountOnEnter
      unmountOnExit>
      <div
        className={classes['backdrop']}
        onClick={globalCtx.closeAllModals}
        ref={nodeRef}>
      </div>
    </CSSTransition>
  );
}

export default Backdrop;
