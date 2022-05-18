import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems() {
  return (
    <ul className={classes['navigation-items']}>
      <NavigationItem link="/">Books Search</NavigationItem>
      <NavigationItem link="favorite-books">Favorite Books</NavigationItem>
    </ul>
  );
}

export default NavigationItems;