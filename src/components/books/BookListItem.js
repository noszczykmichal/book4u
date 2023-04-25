import PropTypes from "prop-types";
import { useContext } from "react";
import UIContext from "../../store-context/uiContext";

import classes from "./BookListItem.module.css";
import Card from "../ui/Card";

function BookListItem({ bookInfo }) {
  const uiContext = useContext(UIContext);
  const { bookIsFavorite, addFavorite, removeFavorite } = uiContext;
  const isBookFavorite = bookIsFavorite(bookInfo.id);
  const toggleFavoriteStatus = () => {
    if (isBookFavorite === false) {
      return addFavorite(bookInfo);
    }
    return removeFavorite(bookInfo.id);
  };

  const authorFinder = () => {
    const bookAgents = [...bookInfo.agents];
    const authorRegex = /Author/;
    const filteredAgents = bookAgents.find((agent) =>
      agent.type.match(authorRegex),
    );
    return filteredAgents ? filteredAgents.person : "Unknown Author";
  };

  const resourceFinder = (typeRegEx, uriRegEx) => {
    const bookResources = [...bookInfo.resources];
    const filteredResource = bookResources.find(
      (resource) =>
        resource.type.match(typeRegEx) && resource.uri.match(uriRegEx),
    );

    return filteredResource ? filteredResource.uri : null;
  };

  return (
    <li className={classes.list__item}>
      <Card>
        <h3 className={classes.book__title}>{bookInfo.title} by</h3>
        <h4>{authorFinder()}</h4>
        <p>
          Bookshelves:
          {bookInfo.bookshelves.join(", ")}
        </p>
        <ul aria-label="It's about:" className={classes.book__subjects}>
          {bookInfo.subjects
            .filter((subject) => subject.length >= 3)
            .map((subject) => {
              const subjectId = Math.random().toString();

              return (
                <li key={subjectId} className={classes.book__subject}>
                  {subject}
                </li>
              );
            })}
          <a
            href={resourceFinder("text", "htm")}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              classes.book__button,
              classes["book__button--link"],
            ].join(" ")}
          >
            Read this book
          </a>
        </ul>
        <img
          className={classes.book__cover}
          src={resourceFinder("image", "medium")}
          alt="book cover"
        />
        <button
          type="button"
          className={classes.book__button}
          onClick={toggleFavoriteStatus}
        >
          {isBookFavorite ? "Remove from Favorites" : "To Favorites"}
        </button>
      </Card>
    </li>
  );
}

BookListItem.propTypes = {
  bookInfo: PropTypes.shape({
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
  }).isRequired,
};

export default BookListItem;
