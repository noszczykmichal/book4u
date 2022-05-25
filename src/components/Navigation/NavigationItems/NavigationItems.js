import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
  return (
    <ul className={classes['navigation-items']}>
      <NavigationItem link="/" clicked={props.linkClicked}>Books Search</NavigationItem>
      <NavigationItem link="favorite-books" clicked={props.linkClicked}>Favorite Books</NavigationItem>
    </ul>
  );
}

export default NavigationItems;