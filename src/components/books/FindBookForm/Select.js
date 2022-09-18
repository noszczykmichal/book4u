import PropTypes from "prop-types";
import { useContext } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./Select.module.css";

function Select({ nameForSelect, options }) {
  const globalCtx = useContext(GlobalContext);

  return (
    <select
      className={classes.form__select}
      name={nameForSelect}
      onChange={globalCtx.inputValueSetter}
      value={globalCtx.inputStoredValueObj[nameForSelect]}
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
