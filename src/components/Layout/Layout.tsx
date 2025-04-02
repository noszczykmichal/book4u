import { FC, ReactNode } from "react";

import MobileNavigation from "@/components/Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "@/components/Navigation/Toolbar/Toolbar";
import Backdrop from "@/components/ui/Backdrop/Backdrop";
import Modal from "@/components/ui/Modal/Modal";
import classes from "@/components/Layout/Layout.module.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Backdrop />
    <Modal />
    <Toolbar />
    <MobileNavigation />
    <main className={classes.main}>{children}</main>
  </>
);

export default Layout;
