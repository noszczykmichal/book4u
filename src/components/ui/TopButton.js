import { useContext } from 'react';
import GlobalContext from '../../store/global-context';

import classes from './TopButton.module.css'

function BubbleAnchor() {
    const globalCtx = useContext(GlobalContext);

    return <button className={classes['anchor']} onClick={globalCtx.takeToTopButton}>Top</button>
}

export default BubbleAnchor;