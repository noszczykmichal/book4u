import { useState } from "react";

import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import classes from "./Layout.module.css";

function Layout(props) {
  const [isVisible, setVisibility] = useState(false);

  function visiblityHandler() {
    setVisibility((prevState) => !prevState);
  }

  return (
    <div>
      <Backdrop show={isVisible} clicked={visiblityHandler} />
      <Toolbar toggleClicked={visiblityHandler} />
      <MobileNavigation show={isVisible} linkClicked={visiblityHandler}/>
      <main className={classes["main"]}>{props.children}</main>
    </div>
  );
}

export default Layout;