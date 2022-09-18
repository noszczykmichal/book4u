import PropTypes from "prop-types";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <Backdrop />
      <Modal />
      <Toolbar />
      <MobileNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
