import React from "react";
import styles from "./modal.module.css";
import ReactDom from "react-dom";

const Modal = ({ active, setActive }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div
          className={active ? styles.modal : styles.modalDisabled}
          onClick={() => setActive(false)}
        >
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <span
              className={styles.closeX}
              onClick={() => setActive(false)}
            ></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit itaque
            harum, maxime reprehenderit nam a dolorum autem, vitae minus, cumque
            hic doloribus magnam nisi optio incidunt nostrum doloremque dolor
            ipsa!
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
