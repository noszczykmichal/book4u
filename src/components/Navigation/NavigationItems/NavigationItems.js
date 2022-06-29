import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Counter from "./Counter/Counter";
import TrashIcon from "./TrashIcon/TrashIcon";

function NavigationItems() {
  return (
    <ul className={classes["navigation-items"]}>
      <NavigationItem link="/" >
        All Books
      </NavigationItem>
      <div className={classes['navigation-item--badges']}>
        <NavigationItem link="favorite-books" >
          Favorite Books
        </NavigationItem>
        <Counter />
        <TrashIcon />
      </div>
    </ul>
  );
}

export default NavigationItems;