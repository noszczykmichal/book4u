import PropTypes from "prop-types";
import { useRef, useContext, useEffect } from "react";

import UIContext from "../../../store-context/uiContext";
import classes from "./PaginationArrow.module.css";

function Arrow({ type }) {
  const uiContext = useContext(UIContext);
  const { totalBooksAvail, displayedPage, changeDisplayedPage } = uiContext;
  const buttonRef = useRef();
  let attachedClasses = [classes.arrow];
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);

  if (type === "left") {
    attachedClasses = [classes.arrow, classes["arrow--left"]];
  }

  const clickHandler = () => {
    if (type === "left") {
      return changeDisplayedPage((prevState) =>
        prevState === 1 ? 1 : prevState - 1,
      );
    }
    return changeDisplayedPage((prevState) =>
      prevState < totalPagesCount ? prevState + 1 : totalPagesCount,
    );
  };

  useEffect(() => {
    if (type === "left" && displayedPage === 1) {
      buttonRef.current.setAttribute("disabled", "true");
    } else if (type === "left" && displayedPage !== 1) {
      buttonRef.current.removeAttribute("disabled");
    }

    if (type === "right" && displayedPage === totalPagesCount) {
      buttonRef.current.setAttribute("disabled", "true");
    } else if (type === "right" && displayedPage !== totalPagesCount) {
      buttonRef.current.removeAttribute("disabled");
    }
  }, [displayedPage, type, totalPagesCount]);

  return (
    <button type="button" className={classes.container} ref={buttonRef}>
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

Arrow.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Arrow;
