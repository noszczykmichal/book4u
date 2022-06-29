import classes from "./Arrow.module.css";

function Arrow(props) {
  let attachedClasses = [classes["arrow"]];
  if (props.left) {
    attachedClasses = [classes["arrow"], classes["arrow--left"]];
  }

  const clickHandler = (event) => {
    const elementsClasses = event.currentTarget.getAttribute("class");
    const regexRight = /left/;
    const whichArrow=elementsClasses.match(regexRight)? 'left' : 'right'
    return props.paginationHandler(whichArrow);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={attachedClasses.join(" ")}
      onClick={clickHandler}
    >
      <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
    </svg>
  );
}

export default Arrow;
