import { FC } from "react";

import classes from "./BookList.module.css";
import { Book } from "../../utils/types";
import BookListItem from "./BookListItem";
import BubbleAnchor from "../ui/TopButton";

interface BookListProps {
  data: Book[];
}

const BookList: FC<BookListProps> = ({ data }) => {
  return (
    <ul className={classes["book-list"]} id="book-list">
      {data.map((book) => (
        <BookListItem key={book.id} bookInfo={book} />
      ))}
      <BubbleAnchor />
    </ul>
  );
};

export default BookList;
