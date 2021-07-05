import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Button/Modal";

import styles from "./Address.module.css";

const Address = (props) => {
  const DEFAULT_CONTENT = (
    <Button
      config={{
        width: "100%",
        color: "dodgerblue",
        padding: "15px",
      }}
      type="button"
      name="Add Address"
      onClick={addAddressHandler}
    />
  );
  const [addressAdded, setAddressAdded] = useState(false);
  const [content, setContent] = useState(DEFAULT_CONTENT);

  function addAddressHandler() {
    console.log("Address Button Clicked");
    const content = <Modal headerTitle="Address Form">A simple Modal</Modal>;
    setContent(content);
  }

  if (addressAdded) {
    content = (
      <div>
        <h5 className={styles.heading}>Delivery Address</h5>
        <div className={styles.address}>
          <h1 className={styles.heading}>1341, Morris Street</h1>
          <h1 className={styles.heading}>America, 876300</h1>
        </div>
      </div>
    );
  }
  return <div className={styles["address-container"]}>{content}</div>;
};

export default Address;
