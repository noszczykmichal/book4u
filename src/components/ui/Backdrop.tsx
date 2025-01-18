/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import UIContext from "../../store-context/uiContext";
import classes from "./Backdrop.module.css";

const Backdrop = () => {
  const uiContext = useContext(UIContext);
  const { isBackdropVisible, onCloseAllModals } = uiContext;
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isBackdropVisible}
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
        onClick={onCloseAllModals}
        ref={nodeRef}
      />
    </CSSTransition>
  );
};

export default Backdrop;
