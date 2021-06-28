import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={
        props.config
          ? {
              backgroundColor: props.config.color,
              width: props.config.width,
              padding: props.config.padding,
            }
          : {}
      }
      className={styles.button}
      type={props.type}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
