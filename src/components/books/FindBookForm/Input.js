import { useContext } from 'react';

import classes from './Input.module.css';
import GlobalContext from '../../../store/global-context';

function Input(props) {
    const globalCtx = useContext(GlobalContext);
    const inputValue = globalCtx.inputStoredValueObj[props.htmlName];
    const currentValue = inputValue ? inputValue : '';
    const [ classA, classB] = props.htmlClass;

    return <input type={props.htmlType} id={props.htmlId} name={props.htmlName} className={[classes[classA], classes[classB]].join(' ')} placeholder={props.htmlPlaceholder} value={currentValue} onChange={globalCtx.inputValueSetter} />
}

export default Input;