import { useContext } from 'react';

import classes from './Input.module.css';
import GlobalContext from '../../../store/global-context';

function Input(props) {
    let globalCtx = useContext(GlobalContext);
    let inputValue=globalCtx.inputStoredValueObj[props.htmlName]
    let currentValue=inputValue? inputValue : ''; 

    return <input type={props.htmlType} id={props.htmlId} name={props.htmlName} className={classes[props.htmlClass]} value={currentValue} onChange={globalCtx.inputValueSetter} />
}

export default Input;