import React from "react";
import Snowfall from "react-snowfall";
import styles from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        {children}

        {/* ❄️ efecto nieve */}
        <Snowfall
          color="white"
          snowflakeCount={50}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
