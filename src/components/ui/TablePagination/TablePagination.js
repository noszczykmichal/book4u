import classes from './TablePagination.module.css'

import Arrow from './Arrow';

function TablePagination(props) {
  return <div className={classes['table-pagination']}>
      <Arrow left="true"/>
      <input type="number" min="1" defaultValue="1" className={classes['table-pagination__input']}/>
      <span>z</span>
      <span>{props.totalPagesCount}</span>
      <Arrow right="true"/>
  </div>;
}

export default TablePagination;
