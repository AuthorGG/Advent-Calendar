import React, { useState } from "react";
import styles from "./DayCard.module.css";
import { useTheme } from "@/components/ThemeProvider";

export default function DayCard({ dayNumber, isUnlocked, onClick }) {
  const { theme } = useTheme();
  const [isShaking, setIsShaking] = useState(false);
  const [message, setMessage] = useState(null);

  // 🎄 Lista de mensajes divertidos
  const messages = [
    "🎅 ¡Todavía no es el día!",
    "🎁 La paciencia también es un regalo...",
    "⛄ Vuelve mañana, reno travieso",
    "🍪 Ni Santa se adelanta tanto...",
    "🌟 La magia llega a su tiempo",
    "🎄 ¡Ho ho ho! Espera un poquito más",
  ];

  const handleLockedClick = () => {
    setIsShaking(true);

    // sacar un mensaje aleatorio
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);

    // reset animación + ocultar mensaje
    setTimeout(() => {
      setIsShaking(false);
      setMessage(null);
    }, 2000);
  };

  return (
    <div
      className={`${styles.card} ${
        isUnlocked ? styles.unlocked : styles.locked
      } ${isShaking ? styles.shake : ""}`}
      onClick={isUnlocked ? onClick : handleLockedClick}
      style={{
        "--primary-color": theme?.primaryColor || "#d32f2f",
        "--secondary-color": theme?.secondaryColor || "#ffd700",
      }}
    >
      {/* Número siempre */}
      <span className={styles.day}>{dayNumber}</span>

      {/* Wrap cuando está bloqueado */}
      {!isUnlocked && (
        <img
          src="/assets/gift-wrap.png"
          alt="Gift wrap"
          className={styles.wrap}
        />
      )}

      {/* Mensaje emergente si existe */}
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}
