import { useState, useEffect } from "react";

import NavigationItems from "@/components/Navigation/NavigationItems/NavigationItems";
import ToggleButton from "@/components/Navigation/MobileNavigation/ToggleButton/ToggleButton";
import Logo from "@/components/Navigation/Toolbar/Logo/Logo";
import useScrollDirection from "@/hooks/useScrollDirection";
import useHandleScroll from "@/hooks/useHandleScroll";
import classes from "@/components/Navigation/Toolbar/Toolbar.module.css";

const Toolbar = () => {
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
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
      <ToggleButton />
    </header>
  );
};

export default Toolbar;
