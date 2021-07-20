import React from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

const ModalNode = (props) => {
  console.log(props, "Props in modal");
  return (
    <CSSTransition
      timeout={300}
      in={props.show}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: styles.modalOpen,
        exitActive: styles.modalClosed,
      }}
    >
      <div>
        <div onClick={props.closeModal} className={styles.overlay}></div>
        <div className={styles.modal}>
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
      </div>
    </CSSTransition>
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
