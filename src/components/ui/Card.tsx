import { useContext, useEffect, useRef, FC, ReactNode } from "react";

import UIContext from "../../store-context/uiContext";
import classes from "./Card.module.css";

interface CardProps {
  animated?: boolean;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children, animated }) => {
  const uiContext = useContext(UIContext);
  const { toggleBarCurrentHeight, isFindBookFormVisible, formCurrentHeight } =
    uiContext;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animated && cardRef.current) {
      cardRef.current.style.display = "block";
      cardRef.current.style.height = `${toggleBarCurrentHeight + 10}px`;
      cardRef.current.style.transition = "min-height 1s ease-out";

      if (isFindBookFormVisible) {
        cardRef.current.style.minHeight = `${
          toggleBarCurrentHeight + formCurrentHeight + 10
        }px`;
      } else {
        cardRef.current.style.minHeight = `${toggleBarCurrentHeight + 10}px`;
      }
    }
  });

  return (
    <div className={classes.card} ref={cardRef}>
      {children}
    </div>
  );
};

export default Card;
