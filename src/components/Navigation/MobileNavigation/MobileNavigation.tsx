import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import NavigationItems from "@/components/Navigation/NavigationItems/NavigationItems";
import UIContext from "@/store-context/uiContext";
import classes from "@/components/Navigation/MobileNavigation/MobileNavigation.module.css";

const MobileNavigation = () => {
  const uiContext = useContext(UIContext);
  const { isMobileNavVisible } = uiContext;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isMobileNavVisible}
      timeout={500}
      classNames={{
        enterActive: classes["mobile-navigation--open"],
        exitActive: classes["mobile-navigation--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <nav className={classes["mobile-navigation"]} ref={nodeRef}>
        <NavigationItems />
      </nav>
    </CSSTransition>
  );
};

export default MobileNavigation;
