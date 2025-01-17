import { FC, useContext } from "react";

import classes from "./Input.module.css";
import UIContext from "../../../store-context/uiContext";
import { FindBookFormInputNames } from "../../../utils/types";

interface InputProps {
  htmlName: FindBookFormInputNames;
  htmlClass: (keyof typeof classes)[];
  htmlType: string;
  htmlPlaceholder?: string;
}

const Input: FC<InputProps> = ({
  htmlName,
  htmlClass,
  htmlType,
  htmlPlaceholder = "",
}) => {
  const uiContext = useContext(UIContext);
  const { searchFormValues, updateInputValues } = uiContext;
  const inputValue = searchFormValues[htmlName]
    ? searchFormValues[htmlName]
    : "";
  const [classA, classB] = htmlClass;

  return (
    <input
      type={htmlType}
      name={htmlName as string}
      className={[classes[classA], classes[classB]].join(" ")}
      placeholder={htmlPlaceholder}
      value={inputValue}
      onChange={updateInputValues}
    />
  );
};

export default Input;
