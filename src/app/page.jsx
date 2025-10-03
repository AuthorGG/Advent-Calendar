"use client";

import { useState, useMemo } from "react";
import DayCard from "@/components/DayCard";
import Modal from "@/components/Modal";
import { useTheme } from "@/components/ThemeProvider";
import styles from "@/styles/CalendarGrid.module.css";

export default function Page() {
  const { theme, days, brand, setBrand } = useTheme();
  const [openDay, setOpenDay] = useState(null);

  const today = useMemo(() => new Date().getDate(), []);
  const activeDayData = openDay ? days?.find((d) => d.day === openDay) : null;

  return (
    <>
      <header style={{ textAlign: "center", padding: "20px" }}>
        {theme?.logo && (
          <img
            src={theme.logo}
            alt="Logo"
            style={{ maxHeight: 80, marginBottom: 10 }}
          />
        )}
        <h1 style={{ color: theme?.primaryColor }}>
          Calendario de Adviento ({brand})
        </h1>
        <div>
          <button
            style={{
              marginRight: "10px",
              marginTop: "10px",
              background: brand === "redbull" ? "var(--primary-color)" : "#eee",
              color: brand === "redbull" ? "white" : "#333",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setBrand("redbull")}
          >
            Red Bull
          </button>
          <button
            style={{
              background: brand === "tclofi" ? "var(--primary-color)" : "#eee",
              color: brand === "tclofi" ? "white" : "#333",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setBrand("tclofi")}
          >
            TC Lofi
          </button>
        </div>
      </header>

      {/* Grid */}
      <main className={styles.grid}>
        {Array.from({ length: 24 }, (_, i) => {
          const day = i + 1;
          const isUnlocked = day <= today;

          return (
            <DayCard
              key={day}
              dayNumber={day}
              isUnlocked={isUnlocked}
              onClick={() => setOpenDay(day)}
            />
          );
        })}
      </main>

      {openDay && (
        <Modal onClose={() => setOpenDay(null)}>
          <h2 style={{ color: theme?.primaryColor }}>
            {activeDayData?.title || `Día ${openDay}`}
          </h2>
          <p>
            {activeDayData?.message || "🎄 Disfruta de la magia navideña ✨"}
          </p>
          {activeDayData?.image && (
            <img
              src={activeDayData.image}
              alt={`Día ${openDay}`}
              style={{ marginTop: 10, maxWidth: "100%" }}
            />
          )}
        </Modal>
      )}
    </>
  );
}
