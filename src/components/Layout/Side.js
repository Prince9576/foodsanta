import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartWrapper from "../Cart/CartWrapper";
import EmptyCart from "../Cart/EmptyCart";
import styles from "./Side.module.css";



const Side = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    console.log("Running useEffect", cartCtx);
    if (cartCtx.items.length === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [cartCtx]);

  return (

    <div className={styles["side-wrapper"]}>
      <h1 className={styles.title}>My Orders</h1>
      <hr></hr>
      {isCartEmpty && <EmptyCart />}
      {!isCartEmpty && <CartWrapper />}
    </div>
  );
};

export default Side;
