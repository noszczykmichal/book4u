import { useRef, useContext, useEffect } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./PaginationArrow.module.css";

function Arrow(props) {
  const globalCtx = useContext(GlobalContext);
  const buttonRef = useRef();
  let attachedClasses = [classes["arrow"]];
  const totalPagesCount = Math.ceil(globalCtx.totalBooksAvail / 10);
  const currentPage = globalCtx.displayedPage;
  // let isLeftDisabled = true;
  // let isRightDisabled = false;


  if (props.type === "left") {
    attachedClasses = [classes["arrow"], classes["arrow--left"]];
  }

  const clickHandler = () => {
    if (props.type === "left") {
      return globalCtx.changeDisplayedPage(prevState =>
        prevState === 1 ? 1 : prevState - 1);
    } else {
      return globalCtx.changeDisplayedPage(prevState =>
        prevState < totalPagesCount ? prevState + 1 : totalPagesCount);
    }
  };

  useEffect(() => {
    if (props.type === "left" && currentPage === 1) {
      buttonRef.current.setAttribute("disabled", "true");
    }else if(props.type==="left" && currentPage !==1){
      buttonRef.current.removeAttribute("disabled");
    }

    if (props.type === "right" && currentPage === totalPagesCount) {
      buttonRef.current.setAttribute("disabled", "true");
    }else if(props.type==="right" && currentPage !==totalPagesCount){
      buttonRef.current.removeAttribute("disabled");
    }
  }, [currentPage, props.type, totalPagesCount])

  return (
    <button className={classes["container"]} ref={buttonRef}>
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
    </button>
  );
}

export default Arrow;
