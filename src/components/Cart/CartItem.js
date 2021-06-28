import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [selectedNumberOfItems, setSelectedNumberOfItems] = useState(1);
  const itemsChangeHandler = (event) => {
    setSelectedNumberOfItems(+event.target.value);
    cartCtx.updateItem(props.item.id, event.target.value);
  };

  const deleteItemsHandler = (...args) => {
    console.log("Delete", args);
    cartCtx.removeItem(args[0]);
  };
  return (
    <div className={styles["cart-item"]}>
      <img className={styles.image} src={props.item.imageUrl} />
      <div className={styles.form}>
        <div className={styles["form-item"]}>{props.item.name}</div>
        <select
          value={selectedNumberOfItems}
          onChange={itemsChangeHandler}
          className={styles["form-item"]}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className={styles.price}>
        <div className={styles["price-value"]}>
          {" "}
          ${(+(props.item.price * selectedNumberOfItems)).toFixed(2)}
        </div>
        <Button
          config={{
            padding: "10px",
            color: "#dc3545",
            width: "75%",
          }}
          type="button"
          name="Delete"
          onClick={deleteItemsHandler.bind(null, props.item.id)}
        ></Button>
      </div>
    </div>
  );
};

export default CartItem;
