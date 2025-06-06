import { Link } from "react-router-dom";

import classes from "@/components/Navigation/Toolbar/Logo/Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to="/" tabIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={classes.logo__icon}
        >
          <path d="M12 4.707c-2.938-1.83-7.416-2.567-12-2.707v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.877-12 2.707zm-1 14.902c-1.525-.546-4.716-1.505-9-1.799v-13.703c5.156.389 7.527 1.463 9 2.334v13.168zm11-1.798c-4.283.293-7.475 1.252-9 1.799v-13.171c.868-.515 2.072-1.107 4-1.584v6.145l1.5-1.5 1.5 1.5v-6.691c.617-.079 1.279-.148 2-.202v13.704z" />
        </svg>
      </Link>
      <p className={classes.logo__name}>Book4u</p>
    </div>
  );
};

export default Logo;
