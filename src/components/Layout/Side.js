import EmptyCart from "../Cart/EmptyCart";
import styles from "./Side.module.css";

const Side = (props) => {
  return (
    <div>
      <h1 className={styles.title}>My Orders</h1>
      <hr></hr>
      <EmptyCart />
    </div>
  );
};

export default Side;
