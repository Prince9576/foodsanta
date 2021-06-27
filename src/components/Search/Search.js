import styles from "./Search.module.css";

const Search = (props) => {
  const placeHolderText = "What would you like to eat ?";
  return (
    <div className={styles["search-container"]}>
      <input type="text" id="search" placeholder={placeHolderText} />
      <i className={`${styles["search-icon"]} fas fa-search`}></i>
    </div>
  );
};

export default Search;
