import classes from "./ToggleButton.module.css";

function ToggleButton(props) {
  return (
    <div className={classes["toggle"]} onClick={props.clickHandler}>
      <div className={classes["toggle__bar"]}></div>
      <div className={classes["toggle__bar"]}></div>
      <div className={classes["toggle__bar"]}></div>
    </div>
  );
}

export default ToggleButton;
