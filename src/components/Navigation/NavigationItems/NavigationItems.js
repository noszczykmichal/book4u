import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Counter from "../../ui/Counter";
import TrashIcon from "../../ui/TrashIcon";

function NavigationItems(props) {
  return (
    <ul className={classes["navigation-items"]}>
      <NavigationItem link="/" clicked={props.linkClicked}>
        All Books
      </NavigationItem>
      <NavigationItem link="favorite-books" clicked={props.linkClicked}>
        Favorite Books
        <Counter/>
        <TrashIcon/>
      </NavigationItem>
    </ul>
  );
}

export default NavigationItems;
