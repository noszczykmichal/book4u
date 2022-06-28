import classes from './MobileNavigation.module.css';

import NavigationItems from "../NavigationItems/NavigationItems";

function MobileNavigation(props){
    let attachedClasses=[classes['container']];
    
    if(props.show){
        attachedClasses=[classes['container'], classes['active']];
    }

    return <div className={attachedClasses.join(' ')}>
        <NavigationItems linkClicked={props.linkClicked} trashIconClicked={props.trashIconClicked}/>
    </div>
}

export default MobileNavigation;
