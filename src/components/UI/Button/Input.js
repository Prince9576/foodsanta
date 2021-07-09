import React, { useImperativeHandle } from "react";
import useInput from "../../../hooks/use-input";
import styles from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  const {
    enteredValue,
    isValid,
    hasError,
    nameChangeHandler,
    blurChangeHandler,
    reset,
  } = useInput((value) => {
    return props.validationFn(value);
  });

  useImperativeHandle(ref, () => {
    return {
      isValid,
      reset,
      value: enteredValue,
    };
  });

  const inputClass = hasError ? styles.invalid : "";
  const importantMarkup = (
    <sup className={styles.important}>
      <i className="fas fa-asterisk"></i>
    </sup>
  );
  return (
    <div
      className={`${styles["form-control"]} ${
        props.group === "two" ? styles.two : styles.three
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.isImportant ? importantMarkup : ""}
      <input
        className={inputClass}
        value={enteredValue}
        onChange={nameChangeHandler}
        onBlur={blurChangeHandler}
        type={props.type}
        id={props.htmlFor}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
});

export default Input;
