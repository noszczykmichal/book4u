import PropTypes from "prop-types";
import { useContext } from "react";

import classes from "./Input.module.css";
import UIContext from "../../../store-context/uiContext";

function Input({ htmlName, htmlClass, htmlType, htmlPlaceholder }) {
  const uiContext = useContext(UIContext);
  const { inputStoredValueObj, inputValueSetter } = uiContext;
  const inputValue = inputStoredValueObj[htmlName];
  const currentValue = inputValue || "";
  const [classA, classB] = htmlClass;

  return (
    <input
      type={htmlType}
      name={htmlName}
      className={[classes[classA], classes[classB]].join(" ")}
      placeholder={htmlPlaceholder}
      value={currentValue}
      onChange={inputValueSetter}
    />
  );
}

Input.propTypes = {
  htmlName: PropTypes.string.isRequired,
  htmlClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  htmlType: PropTypes.string.isRequired,
  htmlPlaceholder: PropTypes.string,
};

Input.defaultProps = {
  htmlPlaceholder: "",
};

export default Input;
