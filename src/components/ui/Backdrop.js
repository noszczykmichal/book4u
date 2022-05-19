import classes from "./Backdrop.module.css";

function Backdrop(props) {
  let attachedClasses = [classes["backdrop"]];
  if (props.show) {
    attachedClasses = [classes["backdrop"], classes["active"]];
  }

  return (
    <div className={classes["container"]}>
      <div className={attachedClasses.join(" ")} onClick={props.clicked}></div>
    </div>
  );
}

export default Backdrop;
