import { useContext } from "react";
import MealContext from "../../store/MealContext";
import Meal from "./Meal";
import styles from "./Meals.module.css";
const Meals = (props) => {
  const mealsCtx = useContext(MealContext);
  return mealsCtx.meals.map((meal) => {
    return <Meal key={meal.id} meal={meal} />;
  });
};

export default Meals;
