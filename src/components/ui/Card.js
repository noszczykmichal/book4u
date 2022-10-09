import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../../store/global-context";

import classes from "./Card.module.css";

function Card({ animated, children }) {
  const globalCtx = useContext(GlobalContext);
  const { toggleBarHeight, findBookFormVisible, formHeight } = globalCtx;
  const cardRef = useRef();

  useEffect(() => {
    if (animated) {
      cardRef.current.style.display = "block";
      cardRef.current.style.height = `${toggleBarHeight + 10}px`;
      cardRef.current.style.transition = "min-height 1s ease-out";

      if (findBookFormVisible) {
        cardRef.current.style["min-height"] = `${
          toggleBarHeight + formHeight + 10
        }px`;
      } else {
        cardRef.current.style["min-height"] = `${toggleBarHeight + 10}px`;
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
  animated: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  animated: "",
};

export default Card;
