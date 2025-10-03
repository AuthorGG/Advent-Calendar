# 🎄 Calendario de Adviento Interactivo

Este proyecto es un **Calendario de Adviento personalizable** desarrollado con **Next.js**.  
La idea principal es que pueda **adaptarse a diferentes marcas** (ejemplo: Red Bull, TC Lofi) cambiando colores, logos y mensajes navideños de forma sencilla a través de archivos JSON de configuración.

---

## 🚀 Características principales

- **Framework:** Next.js con App Router.
- **Estilos:** CSS Modules + variables dinámicas de theme.
- **Soporte multi-marca:** configuración desde JSON (`/config/redbull.json`, `/config/tclofi.json`).
- **Componentes reutilizables:** `DayCard`, `Modal`, `ThemeProvider`.
- **Calendario interactivo:**
  - Casillas desbloqueadas muestran contenido del día.
  - Casillas bloqueadas muestran un "gift wrap" con animación shake y mensaje jocoso al intentar abrirlas.
- **Responsive:** diseño adaptable (6 columnas en desktop, 4 en tablet, 2 en móvil).
- **Modal navideño:** muestra mensaje, título e imagen personalizados según el día.

---

## 📂 Estructura del proyecto

```
src/
  app/
    page.jsx                # Página principal del calendario
    CalendarGrid.module.css # Estilos del grid responsive
  components/
    DayCard.jsx             # Casilla individual del calendario
    DayCard.module.css
    Modal.jsx               # Modal reutilizable
    Modal.module.css
    ThemeProvider.jsx       # Contexto para manejar temas y marcas
  config/
    redbull.json            # Configuración Red Bull
    tclofi.json             # Configuración TC Lofi
  public/
    assets/                 # Logos, imágenes, gift wrap
```

---

## ⚙️ Configuración de marcas

Cada marca tiene un JSON en la carpeta `/config`.  
Ejemplo `redbull.json`:

```json
{
  "theme": {
    "primaryColor": "#002776",
    "secondaryColor": "#ff1801",
    "accentColor": "#ffd700",
    "logo": "/assets/redbull-logo.png",
    "giftwrap": "/assets/giftwrap.png",
    "fontFamily": "Arial, sans-serif"
  },
  "days": [
    {
      "day": 1,
      "title": "¡Bienvenido diciembre!",
      "message": "Red Bull te da alas en Navidad 🎅",
      "image": "/assets/redbull-day1.png"
    },
    {
      "day": 2,
      "title": "Velocidad y energía",
      "message": "Un brindis por la Fórmula 1 🏎💨",
      "image": "/assets/redbull-day2.png"
    }
  ]
}
```

Con este formato se pueden crear fácilmente nuevas configuraciones de marca.

---

## 🛠️ Instalación y uso

Clona el repositorio:

```bash
git clone https://github.com/tuusuario/advent-calendar.git
cd advent-calendar
```

Instala dependencias:

```bash
npm install
```

Ejecuta en modo desarrollo:

```bash
npm run dev
```

Accede en el navegador:

```
http://localhost:3000
```

Compila para producción:

```bash
npm run build
npm run start
```

---

## 💡 Ideas de mejora

- Añadir **animaciones navideñas extra** ( música de fondo opcional).
- Integración con **Firebase o Supabase** para que cada usuario pueda desbloquear su calendario personal.
- Posibilidad de **compartir en redes sociales** el mensaje del día.
- Editor de marcas vía interfaz (subir logo, elegir colores, etc.), sin tener que tocar el JSON manualmente.

---

## 🤝 Reutilización para marcas

Este calendario está pensado para ser **100% reutilizable**:

- Se cambia el logo, colores y mensajes desde JSON.
- No hace falta modificar el código base.
- Permite usar la misma estructura para campañas de diferentes clientes o marcas.

Ejemplos:

- 🎨 **TC Lofi:** versión con colores pastel, mensajes relajados y temática musical.
- 🏎️ **Red Bull Racing:** colores corporativos, mensajes deportivos y energía navideña.

---

## 📜 Licencia

MIT License – libre para usar, modificar y compartir.
