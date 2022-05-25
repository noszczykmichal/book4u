import classes from "./Arrow.module.css";

function Arrow(props) {
  let attachedClasses = [classes["arrow"]];
  if (props.left) {
    attachedClasses = [classes["arrow"], classes["arrow--left"]];
  } else {
    attachedClasses = [classes["arrow"], classes["arrow--right"]];
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={attachedClasses.join(' ')}
    >
      <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
    </svg>
  );
}

export default Arrow;
