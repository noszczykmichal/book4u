import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./MobileNavigation.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import GlobalContext from "../../../store/global-context";

function MobileNavigation() {
  const globalCtx = useContext(GlobalContext);
  const { mobileNavVisible } = globalCtx;
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={mobileNavVisible}
      timeout={500}
      classNames={{
        enter: "",
        enterActive: classes["mobile-navigation--open"],
        exit: "",
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
}

export default MobileNavigation;
