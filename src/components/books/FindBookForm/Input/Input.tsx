import { FC, useContext } from "react";

import UIContext from "@/store-context/uiContext";
import { FindBookFormInputNames } from "@/utils/types";
import classes from "@/components/books/FindBookForm/Input/Input.module.css";

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
  const attachedClasses = [classes[classA], classes[classB]].join(" ");

  return (
    <input
      type={htmlType}
      name={htmlName as string}
      className={attachedClasses}
      placeholder={htmlPlaceholder}
      value={inputValue}
      onChange={updateInputValues}
    />
  );
};

export default Input;
