import { useContext } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

function TablePagination() {
  const globalCtx = useContext(GlobalContext);
  const totalPagesCount = Math.ceil(globalCtx.totalBooksAvail / 10);

  const onKeyDownHandler = (event) => {
    if (event.key === "Backspace") {
      globalCtx.inputPaginationSetter("");
    } else if (event.key === "Enter") {
      globalCtx.changeDisplayedPage(globalCtx.paginationValue);
    }
  }

  const paginationInputHandler = (event) => {
    if (+event.target.value >= 1 && +event.target.value <= totalPagesCount) {
      globalCtx.inputPaginationSetter(+event.target.value);
    }
  }

  return (
    <div className={classes["pagination"]}>
      <PaginationArrow type="left" />
      <input
        type="number"
        className={classes["pagination__input"]}
        onChange={paginationInputHandler}
        value={globalCtx.paginationValue}
        onKeyDown={onKeyDownHandler}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow type="right" />
    </div>
  );
}

export default TablePagination;
