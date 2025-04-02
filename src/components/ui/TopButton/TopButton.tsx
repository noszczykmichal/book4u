import { useContext } from "react";

import UIContext from "@/store-context/uiContext";
import classes from "@/components/ui/TopButton/TopButton.module.css";

const BubbleAnchor = () => {
  const uiContext = useContext(UIContext);
  const { onTakeToTopClick } = uiContext;

  return (
    <button type="button" className={classes.anchor} onClick={onTakeToTopClick}>
      Top
    </button>
  );
};

export default BubbleAnchor;
