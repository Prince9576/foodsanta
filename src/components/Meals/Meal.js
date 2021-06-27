import { useContext } from "react";
import CartContext from "../../store/CartContext";
import styles from "./Meal.module.css";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem(props.meal);
  };
  return (
    <div className={styles["meal-container"]}>
      <div onClick={addToCartHandler} className={styles["cart-icon"]}>
        <i className="fas fa-cart-plus"></i>
      </div>
      <img className={styles["meal-img"]} src={props.meal.imageUrl} />
      <hr></hr>
      <div className={styles["flexify"]}>
        <div>
          <h4>{props.meal.name}</h4>
          <p>{props.meal.description}</p>
        </div>
        <h2>${props.meal.price}</h2>
      </div>
    </div>
  );
};

export default Meal;
