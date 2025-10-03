import "@/styles/globals.css";
import BrandSwitcher from "@/components/BrandSwitcher";
import redbullConfig from "@/config/redbull.json";
import tclofiConfig from "@/config/tclofi.json";

export const metadata = {
  title: "Calendario de Adviento",
  description: "Un calendario navideño interactivo con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BrandSwitcher
          configs={{ redbull: redbullConfig, tclofi: tclofiConfig }}
        >
          {children}
        </BrandSwitcher>
      </body>
    </html>
  );
}
