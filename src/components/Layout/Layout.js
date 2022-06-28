import { useState, useContext } from "react";

import GlobalContext from "../../store/global-context";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";

function Layout(props) {
  const favBooksContext = useContext(GlobalContext);
  const [isBackdropVisible, setBackdropVisibilty] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibilty] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  function closeAll() {
    setBackdropVisibilty(false);
    setMobileNavVisibilty(false);
    setModalVisibility(false);
  }

  function openMobileNav() {
    setBackdropVisibilty(true);
    setMobileNavVisibilty(true);
  }

  function trashIconHandler() {
    setMobileNavVisibilty(false);
    setBackdropVisibilty(true);
    setModalVisibility(true);
  }

  function confirmButtonHandler() {
    favBooksContext.removeAllFavorites();
    closeAll();
  }

  function cancelButtonHandler() {
    closeAll();
  }

  return (
    <div>
      <Backdrop show={isBackdropVisible} clicked={closeAll} />
      <Toolbar toggleClicked={openMobileNav} trashIconClicked={trashIconHandler} />
      <MobileNavigation show={isMobileNavVisible} linkClicked={closeAll} trashIconClicked={trashIconHandler} />
      <Modal show={isModalVisible} confirmButtonClick={confirmButtonHandler} cancelButtonClick={cancelButtonHandler} />
      <main className={classes["main"]}>{props.children}</main>
    </div>
  );
}

export default Layout;