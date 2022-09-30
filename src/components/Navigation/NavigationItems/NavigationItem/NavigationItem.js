/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import GlobalContext from "../../../../store/global-context";

function NavigationItem({ link, children }) {
  const globalCtx = useContext(GlobalContext);

  return (
    <li
      className={classes["navigation-item"]}
      onClick={globalCtx.closeAllModals}
    >
      <NavLink to={link}>{children}</NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
