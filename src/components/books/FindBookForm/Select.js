import { useState, forwardRef } from 'react';

import classes from './Select.module.css';

const Select = forwardRef((props, ref) => {
    const [selectValue, setSelectValue] = useState('');

    const onChangeHandler = () => {
        setSelectValue(ref.current.value);
    }

    return <select className={classes['form__select']}  name={props.nameForSelect} value={selectValue} onChange={onChangeHandler} ref={ref}>
        {props.options.map((optionValue) => {
            const key = Math.random().toString();

            return <option key={key} value={optionValue}>{optionValue}</option>
        })}
    </select>
})

export default Select;