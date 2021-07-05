import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import styles from "./AddressForm.module.css";

const AddressForm = (props) => {
  const {
    enteredValue: enteredQuarter,
    isValid: isQuarterValid,
    hasError: hasQuarterError,
    nameChangeHandler: quarterChangeHandler,
    blurChangeHandler: quarterBlurChangeHandler,
    reset: resetQuarter,
  } = useInput((value) => {
    return value.trim().length < 10;
  });

  const {
    enteredValue: enteredApartment,
    isValid: isApartmentValid,
    hasError: hasApartmentError,
    nameChangeHandler: apartmentChangeHandler,
    blurChangeHandler: apartmentBlurChangeHandler,
    reset: resetApartment,
  } = useInput((value) => {
    return value && value.trim() !== "" && value.trim().length < 100;
  });

  const quarterClass = hasQuarterError ? styles.invalid : "";
  const apartmentClass = hasApartmentError ? styles.invalid : "";
  const importantMarkup = (
    <sup className={styles.important}>
      <i className="fas fa-asterisk"></i>
    </sup>
  );
  const addAddressHandler = (event) => {
    event.preventDefault();
    console.log("Add Address Handler");
    resetQuarter();
  };
  return (
    <form className={styles["form"]}>
      <div className={`${styles["form-group"]} ${styles.two}`}>
        <div className={styles["form-control"]}>
          <label htmlFor="quarter">Quarter Number</label>
          <input
            className={quarterClass}
            value={enteredQuarter}
            onChange={quarterChangeHandler}
            onBlur={quarterBlurChangeHandler}
            type="text"
            id="quarter"
            placeholder="Ex : 102"
          ></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="apartment">Building/Apartment Name</label>
          {importantMarkup}
          <input
            className={apartmentClass}
            value={enteredApartment}
            onChange={apartmentChangeHandler}
            onBlur={apartmentBlurChangeHandler}
            type="text"
            id="apartment"
            placeholder="Ex : Maheshwari Apartment"
          ></input>
        </div>
      </div>

      <div className={`${styles["form-group"]} ${styles.two}`}>
        <div className={styles["form-control"]}>
          <label htmlFor="street">Street Number</label>
          {importantMarkup}
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
          {importantMarkup}
          <input type="text" id="city" placeholder="Ex : Mumbai"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="state">State</label>
          {importantMarkup}
          <input type="text" id="state" placeholder="Ex : Maharashtra"></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="zip">Zip</label>
          {importantMarkup}
          <input type="number" id="zip" placeholder="Ex : 829440"></input>
        </div>
      </div>
      <div className={styles.indicator}>
        {importantMarkup} fields are required.
      </div>
      <div className={styles["form-action"]}>
        <Button
          className={styles["btn-margin"]}
          config={{
            width: "100%",
            color: "rgb(4, 170, 109)",
            padding: "19px",
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
