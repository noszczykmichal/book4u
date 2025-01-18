/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    <li className={classes["navigation-item"]} onClick={onCloseAllModals}>
      <NavLink to={link}>{children}</NavLink>
    </li>
  );
};

export default NavigationItem;
