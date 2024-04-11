/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import UIContext from "../../../../store-context/uiContext";

function NavigationItem({ link, children }) {
  const uiContext = useContext(UIContext);
  const { closeAllModals } = uiContext;

  return (
    <li className={classes["navigation-item"]} onClick={closeAllModals}>
      <NavLink to={link}>{children}</NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
