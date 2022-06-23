import { useContext } from 'react';
import GlobalContext from '../../store/global-context';

import classes from './Counter.module.css';

function Counter() {
    const favBooksContext = useContext(GlobalContext);

    return <p className={classes['counter']}>{favBooksContext.totalFavorites}</p>;
}

export default Counter;