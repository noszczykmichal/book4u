import PropTypes from "prop-types";
import { useContext } from "react";

import classes from "./Input.module.css";
import GlobalContext from "../../../store/global-context";

function Input({ htmlName, htmlClass, htmlType, htmlId, htmlPlaceholder }) {
  const globalCtx = useContext(GlobalContext);
  const { inputStoredValueObj, inputValueSetter } = globalCtx;
  const inputValue = inputStoredValueObj[htmlName];
  const currentValue = inputValue || "";
  const [classA, classB] = htmlClass;

  return (
    <input
      type={htmlType}
      id={htmlId}
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
  htmlId: PropTypes.string,
  htmlPlaceholder: PropTypes.string,
};

Input.defaultProps = {
  htmlId: "",
  htmlPlaceholder: "",
};

export default Input;
