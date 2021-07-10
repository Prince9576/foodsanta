import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button/Button";
import Address from "./Address";
import CartList from "./CartList";
import styles from "./CartWrapper.module.css";
import AddressContext from "../../store/AddressContext";
import Modal from "../UI/Button/Modal";
import OrderSuccessful from "./OrderSuccessful";

const CartWrapper = (props) => {
  const [modal, setModal] = useState(false);
  const DELIVERY_CHARGES = 15.0;
  const cartCtx = useContext(CartContext);
  const addressCtx = useContext(AddressContext);
  const closeModalHandler = () => {
    setModal(false);
  }
  const checkoutHandler = () => {
    setModal(<Modal closeModal={closeModalHandler} headerTitle="Order Placed Successfully"><OrderSuccessful></OrderSuccessful></Modal>)
  };

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
      <CartList configurable={true} />
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
      <Button disabled={!addressCtx.isAddressAvailable} type="submit" name="Place Order" onClick={checkoutHandler} />
      {modal && modal}
    </div>
  );
};

export default CartWrapper;
