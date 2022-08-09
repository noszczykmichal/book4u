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
                    <p>This will delete all your favorite books!</p>
                    <p>Do you want to continue?</p>
                </div>
                <div className={classes["modal__actions"]}>
                    <button
                        className={[
                            classes["modal__action"],
                            classes["modal__action--confirm"],
                        ].join(" ")}
                        onClick={()=>globalCtx.actionButtonOnClick('confirm')}
                    >
                        YES
                    </button>
                    <button
                        className={[
                            classes["modal__action"],
                            classes["modal__action--cancel"],
                        ].join(" ")}
                        onClick={()=>globalCtx.actionButtonOnClick('cancel')}
                    >
                        NO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;