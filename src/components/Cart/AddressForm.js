import Button from "../UI/Button/Button";
import Input from "../UI/Button/Input";
import styles from "./AddressForm.module.css";

const AddressForm = (props) => {
  const addAddressHandler = (event) => {
    event.preventDefault();
    console.log("Add Address Handler");
  };

  return (
    <form className={styles["form"]}>
      <div className={styles["form-group"]}>
        <Input
          htmlFor="quarter"
          label="Qr/Building No"
          type="text"
          placeholder="Ex : 102"
          isImportant={false}
          group="two"
          validationFn={(value) => {
            return value.trim().length < 10;
          }}
        />

        <Input
          htmlFor="apartment"
          label="Building/Apartment Name"
          type="text"
          placeholder="Ex : Maheshwari Apartment"
          isImportant={true}
          group="two"
          validationFn={(value) => {
            return value && value.trim() !== "" && value.trim().length < 100;
          }}
        />
      </div>

      <div className={styles["form-group"]}>
        <Input
          htmlFor="street"
          label="Street Number"
          type="text"
          placeholder="Ex : 14"
          isImportant={false}
          group="two"
          validationFn={(value) => {
            return value.trim().length < 10;
          }}
        />
        <Input
          htmlFor="sector"
          label="Sector"
          type="text"
          placeholder="Ex : Sector 58"
          isImportant={true}
          group="two"
          validationFn={(value) => {
            return value && value.trim() !== "" && value.trim().length < 100;
          }}
        />
      </div>

      <div className={styles["form-group"]}>
        <Input
          htmlFor="city"
          label="City"
          type="text"
          placeholder="Ex : Mumbai"
          isImportant={true}
          group="three"
          validationFn={(value) => {
            return value && value.trim() !== "" && value.trim().length < 100;
          }}
        />
        <Input
          htmlFor="state"
          label="State"
          type="text"
          placeholder="Ex : Maharashtra"
          isImportant={true}
          group="three"
          validationFn={(value) => {
            return value && value.trim() !== "" && value.trim().length < 100;
          }}
        />
        <Input
          htmlFor="zip"
          label="Zip"
          type="text"
          placeholder="Ex : 827009"
          isImportant={true}
          group="three"
          validationFn={(value) => {
            return value && value.trim() !== "" && value.trim().length < 100;
          }}
        />
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
