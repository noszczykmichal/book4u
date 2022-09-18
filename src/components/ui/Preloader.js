import classes from "./Preloader.module.css";

function Preloader() {
  return (
    <div className={classes.preloader}>
      <div className={classes.preloader__dots} />
      <div className={classes.preloader__dots} />
      <div className={classes.preloader__dots} />
      <div className={classes.preloader__dots} />
    </div>
  );
}

export default Preloader;
