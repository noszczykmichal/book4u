import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import GlobalContext from "../../../../store/global-context";

function NavigationItem(props) {
  const globalCtx = useContext(GlobalContext);

  return (
    <li className={classes["navigation-item"]} onClick={globalCtx.closeAllModals} >
      <Link to={props.link} >{props.children}</Link>
    </li>
  );
}

export default NavigationItem;
