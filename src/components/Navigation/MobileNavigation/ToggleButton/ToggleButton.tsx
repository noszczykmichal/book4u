import { useContext } from "react";

import UIContext from "@/store-context/uiContext";
import classes from "@/components/Navigation/MobileNavigation/ToggleButton/ToggleButton.module.css";

const ToggleButton = () => {
  const uiContext = useContext(UIContext);
  const { onMobileNavOpen } = uiContext;
  return (
    <button
      type="button"
      aria-label="mobile navigation toggle button"
      className={classes.toggle}
      onClick={onMobileNavOpen}
    >
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
      <div className={classes.toggle__bar} />
    </button>
  );
};

export default ToggleButton;
