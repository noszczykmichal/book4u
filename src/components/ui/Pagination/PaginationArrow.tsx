import { useRef, useContext, useEffect, FC } from "react";

import UIContext from "../../../store-context/uiContext";
import { PaginationDirection } from "../../../utils/types";
import classes from "./PaginationArrow.module.css";

interface PaginationArrowProps {
  direction: PaginationDirection;
}

const PaginationArrow: FC<PaginationArrowProps> = ({ direction }) => {
  const uiContext = useContext(UIContext);
  const { totalBooksAvail, displayedPage, displayedPageChangeHandler } =
    uiContext;
  const buttonRef = useRef<HTMLButtonElement>(null);
  let attachedClasses: string[] = [classes.arrow];
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);

  if (direction === "previous") {
    attachedClasses = [classes.arrow, classes["arrow--previous"]];
  }

  const clickHandler = () => {
    displayedPageChangeHandler(direction, totalPagesCount);
  };

  useEffect(() => {
    if (direction === "previous" && displayedPage === 1) {
      buttonRef?.current?.setAttribute("disabled", "true");
    } else if (direction === "previous" && displayedPage !== 1) {
      buttonRef?.current?.removeAttribute("disabled");
    }

    if (direction === "next" && displayedPage === totalPagesCount) {
      buttonRef?.current?.setAttribute("disabled", "true");
    } else if (direction === "next" && displayedPage !== totalPagesCount) {
      buttonRef?.current?.removeAttribute("disabled");
    }
  }, [displayedPage, direction, totalPagesCount]);

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
};

export default PaginationArrow;
