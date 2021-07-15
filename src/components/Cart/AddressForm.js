import { useRef, useContext, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Button/Input";
import styles from "./AddressForm.module.css";
import { BrowserView } from "react-device-detect";
import AddressContext from "../../store/AddressContext";
const defaultFormValue = {
  value: "",
  validity: false,
};
const AddressForm = (props) => {
  const addressCtx = useContext(AddressContext);
  const [formValidity, setFormValidity] = useState(false);
  const [quarterForm, setQuarterForm] = useState(defaultFormValue);
  const [apartmentForm, setApartmentForm] = useState(defaultFormValue);
  const [streetForm, setStreetForm] = useState(defaultFormValue);
  const [sectorForm, setSectorForm] = useState(defaultFormValue);
  const [cityForm, setCityForm] = useState(defaultFormValue);
  const [stateForm, setStateForm] = useState(defaultFormValue);
  const [zipForm, setZipForm] = useState(defaultFormValue);
  const addAddressHandler = (event) => {
    const addressObj = {
      quarter: quarterForm.value,
      apartment: apartmentForm.value,
      street: streetForm.value,
      sector: sectorForm.value,
      city: cityForm.value,
      state: stateForm.value,
      zip: zipForm.value,
    };
    addressCtx.addAddress(addressObj);
    event.preventDefault();

    props.addressAdded(addressObj);
  };

  const onQuarterValueChangeHandler = ({ value, validity }) => {
    console.log("Quarter", value, validity);
    setQuarterForm({
      value,
      validity,
    });
  };
  const onApartmentValueChangeHandler = ({ value, validity }) => {
    console.log("Apartment", value, validity);
    setApartmentForm({
      value,
      validity,
    });
  };
  const onStreetValueChangeHandler = ({ value, validity }) => {
    console.log("Street", value, validity);
    setStreetForm({
      value,
      validity,
    });
  };
  const onSectorValueChangeHandler = ({ value, validity }) => {
    console.log("Sector", value, validity);
    setSectorForm({
      value,
      validity,
    });
  };
  const onCityValueChangeHandler = ({ value, validity }) => {
    console.log("City", value, validity);
    setCityForm({
      value,
      validity,
    });
  };
  const onStateValueChangeHandler = ({ value, validity }) => {
    console.log("State", value, validity);
    setStateForm({
      value,
      validity,
    });
  };

  const onZipValueChangeHandler = ({ value, validity }) => {
    console.log("Zip", value, validity);
    setZipForm({
      value,
      validity,
    });
  };

  return (
    <form className={styles["form"]}>
      <div className={styles["form-group"]}>
        <Input
          onChange={onQuarterValueChangeHandler}
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
          onChange={onApartmentValueChangeHandler}
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
            onChange={onStreetValueChangeHandler}
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
            onChange={onSectorValueChangeHandler}
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
          onChange={onCityValueChangeHandler}
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
          onChange={onStateValueChangeHandler}
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
          onChange={onZipValueChangeHandler}
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
          disabled={
            !(
              quarterForm.validity &&
              apartmentForm.validity &&
              streetForm.validity &&
              sectorForm.validity &&
              cityForm.validity &&
              stateForm.validity &&
              zipForm.validity
            )
          }
        />
      </div>
    </form>
  );
};

export default AddressForm;
