import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Backdrop />
      <Modal />
      <Toolbar />
      <MobileNavigation />
      <main className={classes["main"]}>{props.children}</main>
    </div>
  );
}

export default Layout;