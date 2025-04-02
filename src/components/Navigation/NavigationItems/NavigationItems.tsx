import NavigationItem from "@/components/Navigation/NavigationItems/NavigationItem/NavigationItem";
import Counter from "@/components/Navigation/NavigationItems/Counter/Counter";
import TrashIcon from "@/components/Navigation/NavigationItems/TrashIcon/TrashIcon";
import classes from "@/components/Navigation/NavigationItems/NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={classes["navigation-items"]}>
      <NavigationItem link="/">All Books</NavigationItem>
      <div className={classes["navigation-item--badges"]}>
        <NavigationItem link="favorite-books">Favorite Books</NavigationItem>
        <Counter />
        <TrashIcon />
      </div>
    </ul>
  );
};

export default NavigationItems;
