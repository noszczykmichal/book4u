import classes from "./Modal.module.css";

function Modal(props) {
    let attachedClasses = [classes["modal"]];

    if (props.show) {
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
                        onClick={props.confirmButtonHandler}
                    >
                        YES
                    </button>
                    <button
                        className={[
                            classes["modal__action"],
                            classes["modal__action--cancel"],
                        ].join(" ")}
                        onClick={props.cancelButtonHandler}
                    >
                        NO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;