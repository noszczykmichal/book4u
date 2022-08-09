import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import GlobalContext from "../../store/global-context";

import classes from "./Card.module.css";

function Card(props) {
  const globalCtx = useContext(GlobalContext);
  const cardRef = useRef();

  useEffect(() => {
    if (props.animated) {
      cardRef.current.style.display='block';
      cardRef.current.style.height = `${globalCtx.toggleBarHeight + 10}px`;
      cardRef.current.style.transition='min-height 1s ease-out';
      
      if (globalCtx.findBookFormVisible) {
        cardRef.current.style['min-height'] = `${globalCtx.toggleBarHeight + globalCtx.formHeight + 10}px`;
      }else{
        cardRef.current.style['min-height'] = `${globalCtx.toggleBarHeight + 10}px`;
      }
    }
  })

  return (
    <div className={classes['card']} ref={cardRef}>{props.children}</div>
  );
}

export default Card;
