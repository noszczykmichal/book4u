import { useContext } from "react";

import GlobalContext from "../../store/global-context";
import classes from "./Modal.module.css";

function Modal() {
    const globalCtx = useContext(GlobalContext);
    let attachedClasses = [classes["modal"]];

    if (globalCtx.modalVisible) {
        attachedClasses = [classes["modal"], classes["modal--active"]];
    }

    return (
        <div className={classes["modal-container"]}>
            <div className={attachedClasses.join(" ")}>
                <div className={classes["modal__text"]}>
                    <p>This will delete all you favorite meetups!</p>
                    <p>Do you want to continue?</p>
                </div>
                <div className={classes["modal__actions"]}>
                    <button
                        className={[
                            classes["modal__action"],
                            classes["modal__action--confirm"],
                        ].join(" ")}
                        onClick={globalCtx.confirmButtonOnClick}
                    >
                        YES
                    </button>
                    <button
                        className={[
                            classes["modal__action"],
                            classes["modal__action--cancel"],
                        ].join(" ")}
                        onClick={globalCtx.cancelButtonOnClick}
                    >
                        NO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;