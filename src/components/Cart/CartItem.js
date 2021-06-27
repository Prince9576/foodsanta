import { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const [selectedNumberOfItems, setSelectedNumberOfItems] = useState(1);
  const itemsChangeHandler = (event) => {
    setSelectedNumberOfItems(+event.target.value);
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
        ${(+(props.item.price * selectedNumberOfItems)).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
