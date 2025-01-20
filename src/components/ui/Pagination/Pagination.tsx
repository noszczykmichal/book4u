import { FormEvent, useContext, useRef, useState } from "react";

import UIContext from "../../../store-context/uiContext";
import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

const TablePagination = () => {
  const uiContext = useContext(UIContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { displayedPage, setDisplayedPage, totalBooksAvail } = uiContext;
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);
  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

  const paginationInputHandler = (event: FormEvent) => {
    if (timerID) {
      clearTimeout(timerID);
    }

    const timer = setTimeout(() => {
      const eventTarget = event.target as HTMLInputElement;
      if (+eventTarget.value >= 1 && +eventTarget.value <= totalPagesCount) {
        setDisplayedPage(+eventTarget.value);
      }
    }, 1000);

    setTimerID(timer);
  };

  const onBlurHandler = () => {
    inputRef.current!.value = "";
    inputRef.current!.setAttribute("placeholder", displayedPage.toString());
  };
  const onFocusHandler = () => {
    inputRef.current!.value = displayedPage.toString();
    inputRef.current!.setAttribute("placeholder", "");
  };

  return (
    <div className={classes.pagination}>
      <PaginationArrow direction="previous" />
      <input
        type="number"
        className={classes.pagination__input}
        onChange={paginationInputHandler}
        placeholder={displayedPage.toString()}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        ref={inputRef}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow direction="next" />
    </div>
  );
};

export default TablePagination;
