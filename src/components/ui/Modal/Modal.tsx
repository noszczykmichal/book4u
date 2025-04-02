import { useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";

import { useAppDispatch } from "@/hooks/useReduxHooks";
import UIContext from "@/store-context/uiContext";
import { booksActions } from "@/store-redux/books";
import { ActionButtonId } from "@/utils/types";
import classes from "@/components/ui/Modal/Modal.module.css";

const Modal = () => {
  const uiContext = useContext(UIContext);
  const { isModalVisible, onCloseAllModals } = uiContext;
  const { clearFavorites } = booksActions;
  const dispatch = useAppDispatch();
  const modalRef = useRef(null);

  const buttonClickHandler = (buttonID: ActionButtonId) => () => {
    if (buttonID === "confirm") {
      dispatch(clearFavorites());
      onCloseAllModals();
    } else {
      onCloseAllModals();
    }
  };

  const confirmButtonClasses = [
    classes.modal__action,
    classes["modal__action--confirm"],
  ].join(" ");

  const declineButtonClasses = [
    classes.modal__action,
    classes["modal__action--cancel"],
  ].join(" ");

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={isModalVisible}
      timeout={500}
      classNames={{
        enterActive: classes["modal--open"],
        exitActive: classes["modal--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.modal} ref={modalRef}>
        <div>
          <p>This will delete all your favorite books!</p>
          <p>Do you want to continue?</p>
        </div>
        <div className={classes.modal__actions}>
          <button
            type="button"
            className={confirmButtonClasses}
            onClick={buttonClickHandler("confirm")}
          >
            YES
          </button>
          <button
            type="button"
            className={declineButtonClasses}
            onClick={buttonClickHandler("cancel")}
          >
            NO
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
