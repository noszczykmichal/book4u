import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./MobileNavigation.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import UIContext from "../../../store-context/uiContext";

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
