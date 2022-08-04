import { useRef, useContext, useEffect } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./PaginationArrow.module.css";

function Arrow(props) {
  const globalCtx = useContext(GlobalContext);
  const arrowRef = useRef();
  let attachedClasses = [classes["arrow"]];
  const totalPagesCount = Math.ceil(globalCtx.totalBooksAvail / 10);
  let currentPage = globalCtx.displayedPage;
  let isLeftDisabled = false;
  let isRightDisabled = false;


  if (props.left) {
    attachedClasses = [classes["arrow"], classes["arrow--left"]];
  }

  const clickHandler = () => {
    const elementsClasses = arrowRef.current.getAttribute("class");
    const regexRight = /left/;
    const whichArrow = elementsClasses.match(regexRight) ? 'left' : 'right';

    if (whichArrow === "right") {
      return globalCtx.changeDisplayedPage(prevState =>
        prevState < totalPagesCount ? prevState + 1 : totalPagesCount);
    } else {
      return globalCtx.changeDisplayedPage(prevState =>
        prevState <= 1 ? 1 : prevState - 1);
    }
  };

  useEffect(() => {
    const elementsClasses = arrowRef.current.getAttribute("class");
    const regexRight = /left/;
    const whichArrow = elementsClasses.match(regexRight) ? 'left' : 'right';

    if (whichArrow==='left') {
      arrowRef.current.setAttribute('disabled', isLeftDisabled);
    } else if(whichArrow === 'right'){
      arrowRef.current.setAttribute('disabled', isRightDisabled);
    }

    if (whichArrow === "left" && currentPage === 1) {
      isLeftDisabled = true;
    } else if (whichArrow === 'right' && currentPage === totalPagesCount) {
      isRightDisabled = true;
    }
  }, [currentPage])

  return (
    <button className={classes['container']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={attachedClasses.join(" ")}
        onClick={clickHandler}
        ref={arrowRef}
      >
        <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
      </svg>
    </button>
  );
}

export default Arrow;
