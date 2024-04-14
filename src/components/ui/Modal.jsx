import { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import UIContext from "../../store-context/uiContext";
import classes from "./Modal.module.css";
import { booksActions } from "../../store-redux/books";

function Modal() {
  const uiContext = useContext(UIContext);
  const { modalVisible, closeAllModals } = uiContext;
  const { clearFavorites } = booksActions;
  const dispatch = useDispatch();
  const modalRef = useRef();

  const buttonClickHandler = (buttonID) => {
    if (buttonID === "confirm") {
      dispatch(clearFavorites());
      closeAllModals();
    } else {
      closeAllModals();
    }
  };

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={modalVisible}
      timeout={500}
      classNames={{
        enterActive: classes["modal--open"],
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
            onClick={() => buttonClickHandler("confirm")}
          >
            YES
          </button>
          <button
            type="button"
            className={[
              classes.modal__action,
              classes["modal__action--cancel"],
            ].join(" ")}
            onClick={() => buttonClickHandler("cancel")}
          >
            NO
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
