import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Counter from "./Counter/Counter";
import TrashIcon from "./TrashIcon/TrashIcon";

function NavigationItems(props) {
  return (
    <ul className={classes["navigation-items"]}>
      <NavigationItem link="/" clicked={props.linkClicked}>
        All Books
      </NavigationItem>
      <div className={classes['navigation-item--badges']}>
        <NavigationItem link="favorite-books" clicked={props.linkClicked}>
          Favorite Books
        </NavigationItem>
        <Counter />
        <TrashIcon trashIconClicked={props.trashIconClicked} />
      </div>
    </ul>
  );
}

export default NavigationItems;