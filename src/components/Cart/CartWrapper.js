import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button/Button";
import Address from "./Address";
import CartList from "./CartList";
import styles from "./CartWrapper.module.css";

const CartWrapper = (props) => {
  const DELIVERY_CHARGES = 15.0;
  const cartCtx = useContext(CartContext);
  const checkoutHandler = () => {};

  return (
    <div className={styles["cart-container"]}>
      <Address />
      <div className={styles["info-list"]}>
        <div className={styles["info-item"]}>
          <i className="far fa-clock"></i>
          <span>48 mins</span>
        </div>
        <div className={styles["info-item"]}>
          <i className="fas fa-map-marker-alt"></i>
          <span>4 kms</span>
        </div>
      </div>
      <hr className={styles["line"]}></hr>
      <CartList />
      <hr className={styles["line"]}></hr>
      <div className={styles["total-container"]}>
        <div className={styles["total-item"]}>
          <div className={styles["total-item__header"]}>Subtotal</div>
          <div className={styles["total-item__price"]}>
            $ {cartCtx.totalAmount.toFixed(2)}
          </div>
        </div>
        <div className={styles["total-item"]}>
          <div className={styles["total-item__header"]}>Delivery</div>
          <div className={styles["total-item__price"]}>
            $ {DELIVERY_CHARGES.toFixed(2)}
          </div>
        </div>
        <div className={styles["total-item"]}>
          <div className={styles["total-item__header"]}>Total</div>
          <div className={styles["total-item__price"]}>{`$ ${(
            cartCtx.totalAmount + DELIVERY_CHARGES
          ).toFixed(2)}`}</div>
        </div>
      </div>
      <hr className={styles["line"]}></hr>
      <Button type="submit" name="Checkout" onClick={checkoutHandler} />
    </div>
  );
};

export default CartWrapper;
