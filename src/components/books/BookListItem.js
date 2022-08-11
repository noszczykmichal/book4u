import { useContext } from "react";
import GlobalContext from "../../store/global-context";

import classes from "./BookListItem.module.css";
import Card from "../ui/Card";

function BookListItem(props) {
  const globalCtx = useContext(GlobalContext);
  const bookIsFavorite = globalCtx.bookIsFavorite(props.bookInfo.id);

  const toggleFavoriteStatus = () => {
    if (bookIsFavorite === false) {
      return globalCtx.addFavorite(props.bookInfo);
    } else {
      return globalCtx.removeFavorite(props.bookInfo.id);
    }
  };

  const authorFinder = () => {
    const bookAgents = [...props.bookInfo.agents];
    const authorRegex = /Author/;
    const filteredAgents = bookAgents.find((agent) =>
      agent.type.match(authorRegex)
    );
    return filteredAgents ? filteredAgents.person : "Unknown Author";
  };

  const resourceFinder = (typeRegEx, uriRegEx) => {
    const bookResources = [...props.bookInfo.resources];
    const filteredResource = bookResources.find((resource) => {
      return resource.type.match(typeRegEx) && resource.uri.match(uriRegEx);
    });

    return filteredResource ? filteredResource.uri : null;
  };

  return (
    <li className={classes["list__item"]}>
      <Card>
        <h3 className={classes["book__title"]}>{props.bookInfo.title} by</h3>
        <h4>{authorFinder()}</h4>
        <p>Bookshelves: {props.bookInfo.bookshelves.join(", ")}</p>
        <ul aria-label="It's about:" className={classes["book__subjects"]}>
          {props.bookInfo.subjects.filter(subject => subject.length >= 3).map((subject) => {
            const subjectId = Math.random().toString();

            return (
              <li key={subjectId} className={classes["book__subject"]}>
                {subject}
              </li>
            );
          })}
          <a
            href={resourceFinder("text", "htm")}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              classes["book__button"],
              classes["book__button--link"],
            ].join(" ")}
          >
            Read this book
          </a>
        </ul>
        <img
          className={classes["book__cover"]}
          src={resourceFinder("image", "medium")}
          alt="book cover"
        />
        <button
          className={classes["book__button"]}
          onClick={toggleFavoriteStatus}
        >
          {bookIsFavorite ? "Remove from Favorites" : "To Favorites"}
        </button>
      </Card>
    </li>
  );
}

export default BookListItem;
