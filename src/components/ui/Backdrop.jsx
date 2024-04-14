/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import UIContext from "../../store-context/uiContext";
import classes from "./Backdrop.module.css";

function Backdrop() {
  const uiContext = useContext(UIContext);
  const { backdropVisible, closeAllModals } = uiContext;
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={backdropVisible}
      timeout={300}
      classNames={{
        enterActive: classes["backdrop--open"],
        exitActive: classes["backdrop--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={classes.backdrop}
        onClick={closeAllModals}
        ref={nodeRef}
      />
    </CSSTransition>
  );
}

export default Backdrop;
