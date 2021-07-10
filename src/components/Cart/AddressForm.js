import { useRef } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Button/Input";
import styles from "./AddressForm.module.css";
import { BrowserView } from "react-device-detect";

const AddressForm = (props) => {
  console.log(props);
  const quarterRef = useRef();
  const apartmentRef = useRef();
  const streetRef = useRef();
  const sectorRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const addAddressHandler = (event) => {
    event.preventDefault();

    props.addressAdded({
      quarter: quarterRef && quarterRef.current && quarterRef.current.value,
      apartment: apartmentRef && apartmentRef.current && apartmentRef.current.value,
      street: streetRef && streetRef.current && streetRef.current.value,
      sector: sectorRef && sectorRef.current && sectorRef.current.value,
      city: cityRef && cityRef.current && cityRef.current.value,
      state: stateRef && stateRef.current && stateRef.current.value,
      zip: zipRef && zipRef.current && zipRef.current.value,
    });
  };

  return (
    <form className={styles["form"]}>
      <div className={styles["form-group"]}>
        <Input
          ref={quarterRef}
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
          ref={apartmentRef}
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

      <BrowserView>
        <div className={styles["form-group"]}>
          <Input
            ref={streetRef}
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
            ref={sectorRef}
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

      </BrowserView>
      <div className={styles["form-group"]}>
        <Input
          ref={cityRef}
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
          ref={stateRef}
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
          ref={zipRef}
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
