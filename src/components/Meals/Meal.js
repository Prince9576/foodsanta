import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import styles from "./Meal.module.css";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const [mealAdded, setMealAdded] = useState(props.meal.added);
  const addToCartHandler = () => {
    if (props.meal.added) {
      return;
    }
    cartCtx.addItem(props.meal);
    console.log("Added", props.meal);
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
