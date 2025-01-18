import { FormEvent, useContext, KeyboardEvent, useRef } from "react";

import UIContext from "../../../store-context/uiContext";
import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

const TablePagination = () => {
  const uiContext = useContext(UIContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    displayedPage,
    totalBooksAvail,
    setPaginationValue,
    displayedPageChangeHandler,
    // paginationValue,
  } = uiContext;
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const paginationInputValue = inputRef.current!.value.trim();
    if (event.key === "Enter" && paginationInputValue !== "") {
      displayedPageChangeHandler(+paginationInputValue);
      inputRef.current!.value = "";
      inputRef.current!.blur();
    }
  };

  const paginationInputHandler = (event: FormEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    if (+eventTarget.value >= 1 && +eventTarget.value <= totalPagesCount) {
      setPaginationValue(+eventTarget.value);
    }
  };

  const blurHandler = () => {
    inputRef.current!.value = "";
    inputRef.current!.setAttribute("placeholder", displayedPage.toString());
  };
  const focusHandler = () => {
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
        onKeyDown={onKeyDownHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        ref={inputRef}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow direction="next" />
    </div>
  );
};

export default TablePagination;
