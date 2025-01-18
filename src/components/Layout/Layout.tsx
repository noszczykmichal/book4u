import { FC, ReactNode } from "react";

import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Backdrop />
      <Modal />
      <Toolbar />
      <MobileNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
