import { useContext } from 'react';
import GlobalContext from '../../../store/global-context';

import classes from './Select.module.css';

function Select(props) {
    const globalCtx = useContext(GlobalContext);

    return <select className={classes['form__select']} name={props.nameForSelect} onChange={globalCtx.inputValueSetter} value={globalCtx.inputStoredValueObj[props.nameForSelect]} >
        {props.options.map((optionValue) => {
            const key = Math.random().toString();

            return <option key={key} value={optionValue}>{optionValue}</option>
        })}
    </select>
}

export default Select;