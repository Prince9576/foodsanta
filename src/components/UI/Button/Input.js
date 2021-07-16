import React, { useState } from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = props.validationFn(enteredValue);
  const hasError = isTouched && !isValid;

  const nameChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    props.onChange({
      value: event.target.value,
      validity: props.validationFn(event.target.value),
    });
  };

  const blurChangeHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

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
};

export default Input;
