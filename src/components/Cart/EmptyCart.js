import styles from "./EmptyCart.module.css";

const EmptyCart = (props) => {
  return (
    <div className={styles["empty-cart"]}>
      <img src="https://mykit.in/public/img/images/emptycart.svg" />
      <h3>Oops, looks like your cart is empty !</h3>
    </div>
  );
};

export default EmptyCart;
