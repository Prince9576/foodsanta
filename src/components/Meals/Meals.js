import { useContext } from "react";
import MealContext from "../../store/MealContext";
import Meal from "./Meal";
import styles from "./Meals.module.css";
const Meals = (props) => {
  let content;
  const mealsCtx = useContext(MealContext);
  if (mealsCtx.fetching) {
    content = (
      <div className={styles["utility-container"]}>
        <i className={`fas fa-circle-notch ${styles["loader"]}`}></i>
      </div>
    );
  } else {
    if (mealsCtx.error) {
      content = (
        <div className={styles["utility-container"]}>
          <p className={styles["error"]}>Something went wrong...</p>
        </div>
      );
    } else {
      content = mealsCtx.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      });
    }
  }
  return content;
};

export default Meals;
