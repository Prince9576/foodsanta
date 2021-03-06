import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import styles from "./CartList.module.css";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    console.log("Cart ctx", cartCtx)
    setCartList(cartCtx.items);
  }, [cartCtx]);
  return (
    <div className={styles["cart-list"]}>
      {cartList.map((item) => {
        return <CartItem configurable={props.configurable} key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
