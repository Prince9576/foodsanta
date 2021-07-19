import React from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";

const ModalNode = (props) => {
  const cssClasses = [
    styles.modal,
    props.show === "entering"
      ? styles.modalOpen
      : props.show === "exiting"
      ? styles.modalClosed
      : "",
  ];
  return (
    <React.Fragment>
      <div onClick={props.closeModal} className={styles.overlay}></div>
      <div className={cssClasses.join(" ")}>
        <div className={styles.header}>
          <div className={styles["header-layer"]}>
            <h2 className={styles.headerTitle}>{props.headerTitle}</h2>
            {props.iconsMarkup && props.iconsMarkup}
          </div>
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
  console.log(props.show);
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <ModalNode
          show={props.show}
          closeModal={props.closeModal}
          headerTitle={props.headerTitle}
          children={props.children}
          iconsMarkup={props.iconsMarkup}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
