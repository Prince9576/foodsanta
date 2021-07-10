import { React, useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import MealContext from "../../store/MealContext";
import Button from "../UI/Button/Button";
import styles from "./CartItem.module.css";
import { BrowserView, MobileView } from "react-device-detect";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const mealCtx = useContext(MealContext);
  const [selectedNumberOfItems, setSelectedNumberOfItems] = useState(1);
  const itemsChangeHandler = (event) => {
    setSelectedNumberOfItems(+event.target.value);
    cartCtx.updateItem(props.item.id, event.target.value);
  };

  const deleteItemsHandler = (...args) => {
    console.log("Delete", args);
    cartCtx.removeItem(args[0]);
    mealCtx.removeAdded(args[0]);
  };
  return (
    <div className={styles["cart-item"]}>
      <img className={styles.image} src={props.item.imageUrl} />
      <div className={styles.form}>
        <div className={styles["form-item"]}>{props.item.name}</div>
        {
          props.configurable && <select
            value={selectedNumberOfItems}
            onChange={itemsChangeHandler}
            className={styles["form-item"]}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        }

        {!props.configurable && <div className={styles.amount}>
          <i className="fas fa-times"></i>
          {(cartCtx.items.find((i) => {
            return props.item.id === i.id;
          })).amount}
        </div>}

      </div>
      <div className={styles.price}>
        <div className={styles["price-value"]}>
          {" "}
          ${(+(props.item.price * selectedNumberOfItems)).toFixed(2)}
        </div>
        {props.configurable &&
          <div>
            <BrowserView>
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
            </BrowserView>
            <MobileView
              style={{
                display: "flex",
              }}
            >
              <i
                className={`fas fa-trash-alt ${styles["delete-icon"]}`}
                onClick={deleteItemsHandler.bind(null, props.item.id)}
              ></i>
            </MobileView>
          </div>
        }

      </div>
    </div>
  );
};

export default CartItem;
