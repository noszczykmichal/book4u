import { FC, useContext } from "react";

import UIContext from "@/store-context/uiContext";
import { FindBookFormSelectNames } from "@/utils/types";
import classes from "@/components/books/FindBookForm/Select/Select.module.css";

interface SelectProps {
  nameForSelect: FindBookFormSelectNames;
  options: string[];
}

const Select: FC<SelectProps> = ({ nameForSelect, options }) => {
  const uiContext = useContext(UIContext);
  const { searchFormValues, updateInputValues } = uiContext;
  const availableOptions = options.map((optionValue) => {
    const key = Math.random().toString();

    return (
      <option key={key} value={optionValue}>
        {optionValue}
      </option>
    );
  });

  return (
    <select
      className={classes.form__select}
      name={nameForSelect}
      onChange={updateInputValues}
      value={searchFormValues[nameForSelect]}
    >
      {availableOptions}
    </select>
  );
};

export default Select;
