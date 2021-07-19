import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Button/Modal";
import styles from "./Address.module.css";
import AddressForm from "./AddressForm";
import AddressContext from "../../store/AddressContext";

const Address = (props) => {
  const addressCtx = useContext(AddressContext);
  const [showAddressButton, setShowAddressButton] = useState(
    !addressCtx.isAddressAvailable
  );
  const [showModal, setShowModal] = useState(false);
  const [showAddressComponent, setShowAddressComponent] = useState(
    addressCtx.isAddressAvailable
  );

  const finishUtil = () => {
    setShowModal(false);
    if (addressCtx.isAddressAvailable) {
      setShowAddressButton(false);
      setShowAddressComponent(true);
    } else {
      setShowAddressButton(true);
      setShowAddressComponent(false);
    }
  };

  function closeModalHandler() {
    finishUtil();
  }
  function addressAddedHandler(event) {
    finishUtil();
  }
  function addAddressButtonClickHandler() {
    setShowModal(true);
  }

  return (
    <div className={styles["address-container"]}>
      {showAddressButton && (
        <Button
          config={{
            width: "100%",
            color: "dodgerblue",
            padding: "15px",
          }}
          type="button"
          name="Add Address"
          onClick={addAddressButtonClickHandler}
        />
      )}
      {showModal && (
        <Modal closeModal={closeModalHandler} headerTitle="Address Form">
          <AddressForm addressAdded={addressAddedHandler} />
        </Modal>
      )}
      {showAddressComponent && (
        <div>
          <h5 className={styles.heading}>Delivery Address</h5>
          <div className={styles.address}>
            <h1
              className={styles.heading}
            >{`${addressCtx.address.quarter}, ${addressCtx.address.apartment}`}</h1>
            {addressCtx.address.sector && addressCtx.address.street && (
              <h1
                className={styles.heading}
              >{`Street ${addressCtx.address.street}, Sector ${addressCtx.address.sector}`}</h1>
            )}
            <h1
              className={styles.heading}
            >{`${addressCtx.address.city}, ${addressCtx.address.state}, ${addressCtx.address.zip}`}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
