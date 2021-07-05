import Button from "../UI/Button/Button";
import styles from "./AddressForm.module.css";

const AddressForm = (props) => {
  const addAddressHandler = (event) => {
    event.preventDefault();
    console.log("Add Address Handler");
  };
  return (
    <form className={styles["form"]}>
      <div className={`${styles["form-group"]} ${styles.two}`}>
        <div className={styles["form-control"]}>
          <label htmlFor="quarter">Quarter Number</label>
          <input type="text" id="quarter" placeholder="Ex : 102"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="apartment">Building/Apartment Name</label>
          <input
            type="text"
            id="apartment"
            placeholder="Ex : Maheshwari Apartment"
          ></input>
        </div>
      </div>

      <div className={`${styles["form-group"]} ${styles.two}`}>
        <div className={styles["form-control"]}>
          <label htmlFor="street">Street Number</label>
          <input type="number" id="street" placeholder="Ex : 102"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="sector">Sector</label>
          <input type="text" id="sector" placeholder="Ex : Sector 58"></input>
        </div>
      </div>

      <div className={`${styles["form-group"]} ${styles.three}`}>
        <div className={styles["form-control"]}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Ex : Mumbai"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="state">State</label>
          <input type="text" id="state" placeholder="Ex : Maharashtra"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="zip">Zip</label>
          <input type="number" id="zip" placeholder="Ex : 829440"></input>
        </div>
      </div>

      <div className={styles["form-action"]}>
        <Button
          config={{
            width: "100%",
            color: "dodgerblue",
            padding: "15px",
          }}
          type="submit"
          name="Submit"
          onClick={addAddressHandler}
        />
      </div>
    </form>
  );
};

export default AddressForm;
