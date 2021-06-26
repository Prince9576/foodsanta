import React from "react";
import styles from "./Main.module.css";
import Search from "../Search/Search";
import Meals from "../Meals/Meals";

const Main = (props) => {
  return (
    <React.Fragment>
      <div className={styles["search-wrapper"]}>
        <Search />
      </div>
      <div className={styles["meals-wrapper"]}>
        <Meals />
      </div>
    </React.Fragment>
  );
};

export default Main;
