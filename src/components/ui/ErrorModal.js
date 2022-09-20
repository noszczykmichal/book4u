import PropTypes from "prop-types";
import classes from "./ErrorModal.module.css";

function ErrorModal({ errorDetails }) {
  let content;

  if (errorDetails.apiError) {
    content = (
      <p>
        Trying to fetch from the API failed with message:
        <br />
        <span className={classes["error-details"]}>
          {errorDetails.errorMessage}
        </span>
        . <br />
        Make sure you are connected to the internet and try again later.
      </p>
    );
  } else {
    content = <p>{errorDetails.errorMessage}</p>;
  }

  return <div className={classes.container}>{content}</div>;
}

ErrorModal.propTypes = {
  errorDetails: PropTypes.shape({
    apiError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
};

export default ErrorModal;
