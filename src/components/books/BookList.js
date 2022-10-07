import PropTypes from "prop-types";

import classes from "./BookList.module.css";
import BookListItem from "./BookListItem";
import BubbleAnchor from "../ui/TopButton";

function BookList({ data }) {
  // console.log(data);
  return (
    <ul className={classes["book-list"]} id="book-list">
      {data.map((book) => (
        <BookListItem key={book.id} bookInfo={book} />
      ))}
      <BubbleAnchor />
    </ul>
  );
}

BookList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      agents: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          person: PropTypes.string,
          type: PropTypes.string,
        }),
      ),
      bookshelves: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      downloads: PropTypes.number,
      id: PropTypes.number,
      languages: PropTypes.arrayOf(PropTypes.string),
      license: PropTypes.string,
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          type: PropTypes.string,
          uri: PropTypes.string,
        }),
      ),
      subjects: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
