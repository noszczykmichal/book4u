import { FC } from "react";

import { Book } from "@/utils/types";
import BookListItem from "@/components/books/BookList/BookListItem/BookListItem";
import BubbleAnchor from "@/components/ui/TopButton/TopButton";
import classes from "@/components/books/BookList/BookList.module.css";

interface BookListProps {
  data: Book[];
}

const BookList: FC<BookListProps> = ({ data }) => {
  const listItems = data.map((book) => (
    <BookListItem key={book.id} bookInfo={book} />
  ));

  return (
    <ul className={classes["book-list"]} id="book-list">
      {listItems}
      <BubbleAnchor />
    </ul>
  );
};

export default BookList;
