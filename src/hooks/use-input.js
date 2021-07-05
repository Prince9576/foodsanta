const { useState } = require("react");

const useInput = (validator) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validator(enteredValue);
  const hasError = isTouched && !isValid;

  const nameChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurChangeHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid,
    hasError,
    nameChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;
