import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Button/Modal";
import styles from "./Address.module.css";
import AddressForm from "./AddressForm";
import AddressContext from "../../store/AddressContext";

const Address = (props) => {
  const addressCtx = useContext(AddressContext);
  const DEFAULT_CONTENT = (
    <Button
      config={{
        width: "100%",
        color: "dodgerblue",
        padding: "15px",
      }}
      type="button"
      name="Add Address"
      onClick={addAddressClickHandler}
    />
  );
  const [addressAdded, setAddressAdded] = useState(false);
  const [content, setContent] = useState(DEFAULT_CONTENT);

  function closeModalHandler() {
    console.log("Modal Closed");
    if (!addressAdded) {
      setContent(DEFAULT_CONTENT);
    }
  }
  function addAddressHandler(event) {
    setAddressAdded(true);
    setContent(
      <div>
        <h5 className={styles.heading}>Delivery Address</h5>
        <div className={styles.address}>
          <h1
            className={styles.heading}
          >{`${event.quarter}, ${event.apartment}`}</h1>
          {event.sector && event.street && <h1
            className={styles.heading}
          >{`Street ${event.street}, Sector ${event.sector}`}</h1>}
          <h1
            className={styles.heading}
          >{`${event.city}, ${event.state}, ${event.zip}`}</h1>
        </div>
      </div>
    );
  }
  function addAddressClickHandler() {
    console.log("Address Button Clicked");
    const content = (
      <Modal closeModal={closeModalHandler} headerTitle="Address Form">
        <AddressForm addressAdded={addAddressHandler} />
      </Modal>
    );
    setContent(content);
  }

  return <div className={styles["address-container"]}>{content}</div>;
};

export default Address;
