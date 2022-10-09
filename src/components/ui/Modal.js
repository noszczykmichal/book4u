import { useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";

import GlobalContext from "../../store/global-context";
import classes from "./Modal.module.css";

function Modal() {
  const globalCtx = useContext(GlobalContext);
  const { modalVisible, actionButtonOnClick } = globalCtx;
  const modalRef = useRef();

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={modalVisible}
      timeout={500}
      classNames={{
        enter: "",
        enterActive: classes["modal--open"],
        exit: "",
        exitActive: classes["modal--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.modal} ref={modalRef}>
        <div className={classes.modal__text}>
          <p>This will delete all your favorite books!</p>
          <p>Do you want to continue?</p>
        </div>
        <div className={classes.modal__actions}>
          <button
            type="button"
            className={[
              classes.modal__action,
              classes["modal__action--confirm"],
            ].join(" ")}
            onClick={() => actionButtonOnClick("confirm")}
          >
            YES
          </button>
          <button
            type="button"
            className={[
              classes.modal__action,
              classes["modal__action--cancel"],
            ].join(" ")}
            onClick={() => actionButtonOnClick("cancel")}
          >
            NO
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
