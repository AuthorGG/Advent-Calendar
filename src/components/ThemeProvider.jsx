"use client";

import { createContext, useContext, useState } from "react";
import redbull from "@/config/redbull.json";
import tclofi from "@/config/tclofi.json";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [brand, setBrand] = useState("redbull");

  const config = brand === "redbull" ? redbull : tclofi;
  const { theme, days } = config;

  return (
    <ThemeContext.Provider value={{ theme, days, brand, setBrand }}>
      <div
        style={{
          "--primary-color": theme.primaryColor,
          "--secondary-color": theme.secondaryColor,
          "--accent-color": theme.accentColor,
          "--font-family": theme.fontFamily,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
