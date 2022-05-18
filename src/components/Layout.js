import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "./Navigation/Toolbar/Toolbar";

import {useState} from 'react';

function Layout(props) {
  const [isVisible, setVisibility]=useState(false);

  function visiblityHandler(){
    setVisibility(prevState=> !prevState);
  }

  return (
    <div>
        <Toolbar toggleClicked={visiblityHandler}/>
        <MobileNavigation show={isVisible}/>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
