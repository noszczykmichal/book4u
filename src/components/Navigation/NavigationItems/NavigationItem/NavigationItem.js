import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  return (
    <li className={classes["navigation-item"]} onClick={props.clicked}>
      <Link to={props.link} >{props.children}</Link>
    </li>
  );
}

export default NavigationItem;
