import PropTypes from "prop-types";
import { useContext } from "react";
import UIContext from "../../../store-context/uiContext";

import classes from "./Select.module.css";

function Select({ nameForSelect, options }) {
  const uiContext = useContext(UIContext);
  const { inputValueSetter, inputStoredValueObj } = uiContext;

  return (
    <select
      className={classes.form__select}
      name={nameForSelect}
      onChange={inputValueSetter}
      value={inputStoredValueObj[nameForSelect]}
    >
      {options.map((optionValue) => {
        const key = Math.random().toString();

        return (
          <option key={key} value={optionValue}>
            {optionValue}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  nameForSelect: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
