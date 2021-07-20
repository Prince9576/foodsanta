import { useRef, useContext, useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Button/Input";
import styles from "./AddressForm.module.css";
import { BrowserView } from "react-device-detect";
import AddressContext from "../../store/AddressContext";
import {
  isImportantValidation,
  looseValidation,
} from "../../validations/form-validation";
const defaultFormValue = {
  value: "",
  validity: false,
};
const AddressForm = (props) => {
  console.log("AddressForm", props);
  const addressCtx = useContext(AddressContext);
  const [formValidity, setFormValidity] = useState(false);
  const [quarterForm, setQuarterForm] = useState(
    props.edit
      ? { value: addressCtx.address.quarter, validity: true }
      : defaultFormValue
  );
  const [apartmentForm, setApartmentForm] = useState(
    props.edit
      ? { value: addressCtx.address.apartment, validity: true }
      : defaultFormValue
  );
  const [streetForm, setStreetForm] = useState(
    props.edit
      ? { value: addressCtx.address.street, validity: true }
      : defaultFormValue
  );
  const [sectorForm, setSectorForm] = useState(
    props.edit
      ? { value: addressCtx.address.sector, validity: true }
      : defaultFormValue
  );
  const [cityForm, setCityForm] = useState(
    props.edit
      ? { value: addressCtx.address.city, validity: true }
      : defaultFormValue
  );
  const [stateForm, setStateForm] = useState(
    props.edit
      ? { value: addressCtx.address.state, validity: true }
      : defaultFormValue
  );
  const [zipForm, setZipForm] = useState(
    props.edit
      ? { value: addressCtx.address.zip, validity: true }
      : defaultFormValue
  );
  const [submit, setSubmit] = useState(false);
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
    setSubmit(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (submit) {
      props.addressAdded();
    }
  }, [submit]);

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

  useEffect(() => {
    console.log("Evaluating", quarterForm, apartmentForm);
    if (
      quarterForm.validity &&
      apartmentForm.validity &&
      streetForm.validity &&
      sectorForm.validity &&
      cityForm.validity &&
      stateForm.validity &&
      zipForm.validity
    ) {
      setFormValidity(true);
    } else {
      setFormValidity(false);
    }
  }, [
    quarterForm.validity,
    apartmentForm.validity,
    streetForm.validity,
    sectorForm.validity,
    cityForm.validity,
    stateForm.validity,
    zipForm.validity,
    formValidity,
  ]);

  return (
    <form className={styles["form"]}>
      <div className={styles["form-group"]}>
        <Input
          val={quarterForm.value}
          onChange={onQuarterValueChangeHandler}
          htmlFor="quarter"
          label="Qr/Building No"
          type="text"
          placeholder="Ex : 102"
          isImportant={false}
          group="two"
          validationFn={looseValidation}
        />

        <Input
          val={apartmentForm.value}
          onChange={onApartmentValueChangeHandler}
          htmlFor="apartment"
          label="Building/Apartment Name"
          type="text"
          placeholder="Ex : Maheshwari Apartment"
          isImportant={true}
          group="two"
          validationFn={isImportantValidation}
        />
      </div>

      <BrowserView>
        <div className={styles["form-group"]}>
          <Input
            val={streetForm.value}
            onChange={onStreetValueChangeHandler}
            htmlFor="street"
            label="Street Number"
            type="text"
            placeholder="Ex : 14"
            isImportant={false}
            group="two"
            validationFn={looseValidation}
          />
          <Input
            val={sectorForm.value}
            onChange={onSectorValueChangeHandler}
            htmlFor="sector"
            label="Sector"
            type="text"
            placeholder="Ex : Sector 58"
            isImportant={true}
            group="two"
            validationFn={isImportantValidation}
          />
        </div>
      </BrowserView>
      <div className={styles["form-group"]}>
        <Input
          val={cityForm.value}
          onChange={onCityValueChangeHandler}
          htmlFor="city"
          label="City"
          type="text"
          placeholder="Ex : Mumbai"
          isImportant={true}
          group="three"
          validationFn={isImportantValidation}
        />
        <Input
          val={stateForm.value}
          onChange={onStateValueChangeHandler}
          htmlFor="state"
          label="State"
          type="text"
          placeholder="Ex : Maharashtra"
          isImportant={true}
          group="three"
          validationFn={isImportantValidation}
        />
        <Input
          val={zipForm.value}
          onChange={onZipValueChangeHandler}
          htmlFor="zip"
          label="Zip"
          type="text"
          placeholder="Ex : 827009"
          isImportant={true}
          group="three"
          validationFn={isImportantValidation}
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
          disabled={!formValidity}
        />
      </div>
    </form>
  );
};

export default AddressForm;
