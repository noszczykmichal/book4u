import classes from "./TablePagination.module.css";

import Arrow from "./Arrow";

function TablePagination(props) {
  return (
    <div className={classes["table-pagination"]}>
      <Arrow left="true" paginationHandler={props.paginationArrowHandler} />
      <input
        type="number"
        className={classes["table-pagination__input"]}
        onChange={props.inputChangeHandler}
        value={props.value}
      />
      <span>of</span>
      <span>{props.totalPagesCount}</span>
      <Arrow paginationHandler={props.paginationArrowHandler} />
    </div>
  );
}

export default TablePagination;
