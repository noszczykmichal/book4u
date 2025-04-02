import { FC } from "react";

import classes from "@/components/ui/ErrorModal/ErrorModal.module.css";

interface ErrorModalProps {
  errorDetails: {
    apiError: boolean;
    errorMessage: string;
  };
}

const ErrorModal: FC<ErrorModalProps> = ({ errorDetails }) => {
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
};

export default ErrorModal;
