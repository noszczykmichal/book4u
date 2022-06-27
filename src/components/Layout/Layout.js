import { useState } from "react";

import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";

function Layout(props) {
  // const [isVisible, setVisibility] = useState(false);
  // const [isModalVisible, setModalVisibility] =useState(false);
  const [isBackdropVisible, setBackdropVisibilty]=useState(false);
  const [isMobileNavVisible, setMobileNavVisibilty]= useState(false);
  const [isModalVisible, setModalVisibility]=useState(false);

  function closeAll() {
    setBackdropVisibilty(false);
    setMobileNavVisibilty(false);
    setModalVisibility(false);
  }

  function openMobileNav(){
    setBackdropVisibilty(true);
    setMobileNavVisibilty(true);
  }

  function trashIconHandler(){
    setMobileNavVisibilty(false);
    setBackdropVisibilty(true);
    setModalVisibility(true);
  }
// click w kosz wykrywa jako kliknięcie w link
  return (
    <div>
      <Backdrop show={isBackdropVisible} clicked={closeAll} />
      <Toolbar toggleClicked={openMobileNav} trashIconClicked={trashIconHandler}/>
      <MobileNavigation show={isMobileNavVisible} linkClicked={closeAll} trashIconClicked={trashIconHandler}/>
      <Modal show={isModalVisible}/>
      <main className={classes["main"]}>{props.children}</main>
    </div>
  );
}

export default Layout;