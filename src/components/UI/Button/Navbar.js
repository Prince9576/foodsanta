import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["cart-wrapper"]}>
        <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
        <div className={styles["notifications"]}>1</div>
      </div>
    </div>
  );
};

export default Navbar;
