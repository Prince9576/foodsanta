import { useContext } from "react";
import MealContext from "../../store/MealContext";
import Meal from "./Meal";
import styles from "./Meals.module.css";
const Meals = (props) => {
  let content;
  const mealsCtx = useContext(MealContext);
  if (mealsCtx.fetching) {
    content = <p>Loading...</p>;
  } else {
    if (mealsCtx.error) {
      content = <p>Something went wrong</p>;
    } else {
      content = mealsCtx.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      });
    }
  }
  return content;
};

export default Meals;
