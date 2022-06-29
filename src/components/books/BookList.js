import classes from './BookList.module.css'

import BookListItem from "./BookListItem";
import BubbleAnchor from '../ui/BubbleAnchor';

function BookList(props) {
  return <ul className={classes['book-list']} id="book-list">
      {props.data.map(book=><BookListItem key={Math.random()*book.id} bookInfo={book}/>)}
      <BubbleAnchor/>
  </ul>;
}

export default BookList;

