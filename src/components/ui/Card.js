import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../../store/global-context";

import classes from "./Card.module.css";

function Card({ animated, children }) {
  const globalCtx = useContext(GlobalContext);
  const cardRef = useRef();

  useEffect(() => {
    if (animated) {
      cardRef.current.style.display = "block";
      cardRef.current.style.height = `${globalCtx.toggleBarHeight + 10}px`;
      cardRef.current.style.transition = "min-height 1s ease-out";

      if (globalCtx.findBookFormVisible) {
        cardRef.current.style["min-height"] = `${
          globalCtx.toggleBarHeight + globalCtx.formHeight + 10
        }px`;
      } else {
        cardRef.current.style["min-height"] = `${
          globalCtx.toggleBarHeight + 10
        }px`;
      }
    }
  });

  return (
    <div className={classes.card} ref={cardRef}>
      {children}
    </div>
  );
}

Card.propTypes = {
  animated: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
