import CartWrapper from "../Cart/CartWrapper";
import EmptyCart from "../Cart/EmptyCart";
import styles from "./Side.module.css";

const Side = (props) => {
  const isCartEmpty = false;
  return (
    <div>
      <h1 className={styles.title}>My Orders</h1>
      <hr></hr>
      {isCartEmpty && <EmptyCart />}
      {!isCartEmpty && <CartWrapper />}
    </div>
  );
};

export default Side;
