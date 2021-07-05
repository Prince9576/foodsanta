import React from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";

const ModalNode = (props) => {
  return (
    <React.Fragment>
      <div onClick={props.closeModal} className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{props.headerTitle}</h2>
          <i
            onClick={props.closeModal}
            className={`fas fa-times ${styles.close}`}
          ></i>
        </div>
        <hr></hr>
        <div className={styles.content}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <ModalNode
          closeModal={props.closeModal}
          headerTitle={props.headerTitle}
          children={props.children}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
