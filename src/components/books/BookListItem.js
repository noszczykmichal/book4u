import classes from "./BookListItem.module.css";

import Card from "../ui/Card";

function BookListItem(props) {
  return (
    <li className={classes['list__item']}>
      <Card>
        <h3 className={classes['book__title']}>{props.bookInfo.title} by</h3>
        <h4>{props.bookInfo.agents[0]["person"]}</h4>
        <p>Bookshelves: {props.bookInfo.bookshelves.join(", ")}</p>
        <ul aria-label="It's abouts:" className={classes['book__subjects']}>
          {props.bookInfo.subjects.map((subject) => {
            const subjectId = Math.random().toString();

            return <li key={subjectId} className={classes['book__subject']}>{subject}</li>;
          })}
        </ul>

        <button className={classes['button']}>Add to Favorite</button>
      </Card>
    </li>
  );
}

export default BookListItem;
