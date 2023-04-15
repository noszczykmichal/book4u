import { useState, useEffect } from "react";

import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleButton from "../MobileNavigation/ToggleButton/ToggleButton";
import Logo from "./Logo/Logo";
import useScrollDirection from "../../../hooks/useScrollDirection";
import useHandleScroll from "../../../hooks/useHandleScroll";

function Toolbar() {
  const scrollDirection = useScrollDirection("down");
  const [attachedClasses, setAttachedClasses] = useState("toolbar");
  const isTop = useHandleScroll();

  useEffect(() => {
    if (isTop) {
      setAttachedClasses(classes.toolbar);
    } else if (!isTop && scrollDirection === "up") {
      setAttachedClasses(
        [classes.toolbar, classes["toolbar--box-shadow"]].join(" "),
      );
    } else if (!isTop && scrollDirection === "down") {
      setAttachedClasses(
        [classes.toolbar, classes["toolbar--hidden"]].join(" "),
      );
    }
  }, [scrollDirection, isTop]);

  return (
    <header className={attachedClasses}>
      <Logo />
      <nav className={classes["toolbar__desktop-navigation"]}>
        <NavigationItems />
      </nav>
      <ToggleButton className={classes.toolbar__toggle} />
    </header>
  );
}

export default Toolbar;
