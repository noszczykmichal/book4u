import {useState} from 'react';

import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import Backdrop from './ui/Backdrop';


function Layout(props) {
  const [isVisible, setVisibility]=useState(false);

  function visiblityHandler(){
    setVisibility(prevState=> !prevState);
  }

  return (
    <div>
        <Backdrop show={isVisible} clicked={visiblityHandler}/>
        <Toolbar toggleClicked={visiblityHandler}/>
        <MobileNavigation show={isVisible}/>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
