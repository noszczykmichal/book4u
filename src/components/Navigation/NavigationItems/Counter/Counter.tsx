import { useAppSelector } from "@/hooks/useReduxHooks";
import classes from "@/components/Navigation/NavigationItems/Counter/Counter.module.css";

const Counter = () => {
  const favorites = useAppSelector((state) => state.books.favorites);

  return <p className={classes.counter}>{favorites.length}</p>;
};

export default Counter;
