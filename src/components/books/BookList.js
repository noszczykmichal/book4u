import classes from './BookList.module.css'

import BookListItem from "./BookListItem";

function BookList(props) {
  return <ul className={classes['book-list']}>
      {props.data.map(book=><BookListItem key={Math.random()*book.id} bookInfo={book}/>)}
  </ul>;
}

export default BookList;

