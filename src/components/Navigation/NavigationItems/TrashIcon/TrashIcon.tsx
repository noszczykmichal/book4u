import { useContext } from "react";

import { useAppSelector } from "@/hooks/useReduxHooks";
import UIContext from "@/store-context/uiContext";
import classes from "@/components/Navigation/NavigationItems/TrashIcon/TrashIcon.module.css";

const TrashIcon = () => {
  const favorites = useAppSelector((state) => state.books.favorites);
  const uiContext = useContext(UIContext);
  const { onTrashIconOnClick } = uiContext;
  const isDisabled = favorites.length === 0;
  let attachedClasses = [classes.container].join(" ");

  if (isDisabled) {
    attachedClasses = [classes.container, classes["container--inactive"]].join(
      " ",
    );
  }

  return (
    <button
      type="button"
      className={attachedClasses}
      onClick={onTrashIconOnClick}
      disabled={isDisabled}
      aria-label="delete favorite books"
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fillRule="evenodd"
        clipRule="evenodd"
        className={classes.container__icon}
      >
        <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" />
      </svg>
    </button>
  );
};

export default TrashIcon;
