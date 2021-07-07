const { useState } = require("react");

const useInput = (validator) => {
  console.log("Validator", validator);
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validator(enteredValue);
  const hasError = isTouched && !isValid;

  console.log("has error", enteredValue, isTouched, isValid, hasError);
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
