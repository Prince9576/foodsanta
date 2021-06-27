import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
