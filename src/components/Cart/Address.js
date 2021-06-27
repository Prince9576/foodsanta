import styles from "./Address.module.css";
const Address = (props) => {
  return (
    <div className={styles["address-container"]}>
      <h5 className={styles.heading}>Delivery Address</h5>
      <div className={styles.address}>
        <h1 className={styles.heading}>1341, Morris Street</h1>
        <h1 className={styles.heading}>America, 876300</h1>
      </div>
    </div>
  );
};

export default Address;
