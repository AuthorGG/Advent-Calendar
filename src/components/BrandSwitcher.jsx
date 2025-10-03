"use client";
import { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";

export default function BrandSwitcher({ configs, children }) {
  const [brand, setBrand] = useState("redbull");
  const config = configs[brand];

  return (
    <ThemeProvider theme={config.theme} days={config.days}>
      {children}
    </ThemeProvider>
  );
}
