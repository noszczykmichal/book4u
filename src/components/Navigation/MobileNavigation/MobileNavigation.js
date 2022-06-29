import { useContext } from 'react';

import classes from './MobileNavigation.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import GlobalContext from '../../../store/global-context';

function MobileNavigation(){
    const globalCtx = useContext(GlobalContext);
    let attachedClasses=[classes['container']];
    
    if(globalCtx.mobileNavVisible){
        attachedClasses=[classes['container'], classes['active']];
    }

    return <div className={attachedClasses.join(' ')}>
        <NavigationItems />
    </div>
}

export default MobileNavigation;
