import classes from './Toolbar.module.css'

import NavigationItems from "../NavigationItems/NavigationItems";

function Toolbar() {
  return <header className={classes['toolbar']}>
      <nav className={classes['toolbar__desktop-navigation']}>
      <NavigationItems/>
      </nav>
  </header>;
}

export default Toolbar;
