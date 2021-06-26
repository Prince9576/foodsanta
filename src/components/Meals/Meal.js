import styles from "./Meal.module.css";

const Meal = (props) => {
  return (
    <div class={styles["meal-container"]}>
      <div className={styles["cart-icon"]}>
        <i class="fas fa-cart-plus"></i>
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
