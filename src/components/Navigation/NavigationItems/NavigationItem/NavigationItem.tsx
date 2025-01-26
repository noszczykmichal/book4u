import { FC, ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import UIContext from "../../../../store-context/uiContext";

interface NavigationItemProps {
  link: string;
  children: ReactNode;
}

const NavigationItem: FC<NavigationItemProps> = ({ link, children }) => {
  const uiContext = useContext(UIContext);
  const { onCloseAllModals } = uiContext;

  return (
    <li className={classes["navigation-item"]}>
      <NavLink to={link} onClick={onCloseAllModals}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
