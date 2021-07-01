import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import MealContext from "../../store/MealContext";
import styles from "./Meal.module.css";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const mealCtx = useContext(MealContext);
  const [mealAdded, setMealAdded] = useState(props.meal.added);
  const addToCartHandler = () => {
    if (props.meal.added) {
      return;
    }
    cartCtx.addItem(props.meal);
    mealCtx.markAdded(props.meal.id);
    console.log("Added", props);
  };
  useEffect(() => {
    const index = cartCtx.items.findIndex((item) => {
      return item.id === props.meal.id;
    });
    console.log("Cart Context changed", index);
    if (index === -1) {
      setMealAdded(false);
    } else {
      setMealAdded(true);
    }
  }, [cartCtx]);
  return (
    <div className={styles["meal-container"]}>
      <div onClick={addToCartHandler} className={styles["cart-icon"]}>
        {mealAdded ? (
          <i className={`fas fa-check ${styles.addedToCart}`}></i>
        ) : (
          <i className="fas fa-cart-plus"></i>
        )}
      </div>
      <img className={styles["meal-img"]} src={props.meal.imageUrl} />
      <hr></hr>
      <div className={styles["flexify"]}>
        <div className={styles["item"]}>
          <h4>{props.meal.name}</h4>
          <p>{props.meal.description}</p>
        </div>
        <h2>${props.meal.price}</h2>
      </div>
    </div>
  );
};

export default Meal;
