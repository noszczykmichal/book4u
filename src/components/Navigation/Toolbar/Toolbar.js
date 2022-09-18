import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleButton from "../MobileNavigation/ToggleButton/ToggleButton";
import Logo from "./Logo/Logo";

function Toolbar() {
  return (
    <header className={classes.toolbar}>
      <Logo />
      <nav className={classes["toolbar__desktop-navigation"]}>
        <NavigationItems />
      </nav>
      <ToggleButton className={classes.toolbar__toggle} />
    </header>
  );
}

export default Toolbar;
