import { FC } from "react";

import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { Book } from "@/utils/types";
import Card from "@/components/ui/Card/Card";
import { booksActions } from "@/store-redux/books";
import classes from "@/components/books/BookList/BookListItem/BookListItem.module.css";

interface BookListItemProps {
  bookInfo: Book;
}

type MediumType = "text" | "image";
type UriType = "htm" | "medium";

const BookListItem: FC<BookListItemProps> = ({ bookInfo }) => {
  const favorites = useAppSelector((state) => state.books.favorites);
  const dispatch = useAppDispatch();
  const { addToUserFavorites, removeFromFavorites } = booksActions;

  const isBookFavorite = (bookID: number) =>
    favorites.some((book: BookListItemProps["bookInfo"]) => book.id === bookID);

  const toggleFavoriteStatus = (bookID: number) => () =>
    isBookFavorite(bookID)
      ? dispatch(removeFromFavorites(bookID))
      : dispatch(addToUserFavorites(bookInfo));

  const authorFinder = (() => {
    const bookAgents = [...bookInfo.agents];
    const authorRegex = /Author/;
    const filteredAgents = bookAgents.find((agent) =>
      agent.type.match(authorRegex),
    );
    return filteredAgents ? filteredAgents.person : "Unknown Author";
  })();

  const resourceFinder = (typeRegEx: MediumType, uriRegEx: UriType) => {
    const bookResources = [...bookInfo.resources];
    const filteredResource = bookResources.find(
      (resource) =>
        resource.type.match(typeRegEx) && resource.uri.match(uriRegEx),
    );

    return filteredResource ? filteredResource.uri : undefined;
  };

  const bookshelves = ` ${bookInfo.bookshelves.join(", ")}`;

  const bookSubjects = bookInfo.subjects
    .filter((subject) => subject.length >= 3)
    .map((subject) => {
      const subjectId = Math.random().toString();

      return (
        <li key={subjectId} className={classes.book__subject}>
          {subject}
        </li>
      );
    });

  const buttonClasses = [
    classes.book__button,
    classes["book__button--link"],
  ].join(" ");

  return (
    <li className={classes.list__item}>
      <Card>
        <h3 className={classes.book__title}>{bookInfo.title} by</h3>
        <h4>{authorFinder}</h4>
        <p>
          Bookshelves:
          {bookshelves}
        </p>
        <ul aria-label="It's about:" className={classes.book__subjects}>
          {bookSubjects}
          <a
            href={resourceFinder("text", "htm")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
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
          onClick={toggleFavoriteStatus(bookInfo.id)}
        >
          {isBookFavorite(bookInfo.id)
            ? "Remove from Favorites"
            : "To Favorites"}
        </button>
      </Card>
    </li>
  );
};

export default BookListItem;
