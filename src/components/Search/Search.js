import { useContext, useRef } from "react";
import MealContext from "../../store/MealContext";
import styles from "./Search.module.css";

const Search = (props) => {
  const mealCtx = useContext(MealContext);
  const searchRef = useRef();
  const searchHandler = () => {
    console.log(searchRef.current.value);
    mealCtx.searchItems(searchRef.current.value);
  };
  const placeHolderText = "What would you like to eat ?";
  return (
    <div className={styles["search-container"]}>
      <input
        ref={searchRef}
        onChange={searchHandler}
        type="text"
        id="search"
        placeholder={placeHolderText}
      />
      <i className={`${styles["search-icon"]} fas fa-search`}></i>
    </div>
  );
};

export default Search;
