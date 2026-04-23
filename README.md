# 💛 Love Countdown — Para el cumpleaños de tu novia

Una constelación de 23 estrellas que se desbloquean día a día hasta su cumpleaños.

---

## 🚀 Setup en 5 pasos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar las fechas en `.env.local`
```env
START_DATE=2026-04-23       # Día en que empieza (casilla 1 se abre este día)
BIRTHDAY_DATE=2026-05-15    # Cumpleaños (casilla 23 se abre este día)
```

### 3. Agregar tus fotos
Pon las fotos en `/public/photos/` con los nombres:
- `photo-1.jpg` ... `photo-23.jpg`
- Pueden ser JPG, PNG o WebP
- Si una casilla no tiene foto, pon `photo: null` en `data/boxes.ts`

### 4. Editar los mensajes en `data/boxes.ts`
Abre el archivo y edita cada casilla:
- `title` — Título corto
- `message` — El mensaje de amor / poema
- `photo` — Ruta de la foto (o null)
- `emoji` — El emoji de la estrella cerrada
- ⚠️ La casilla 23 es especial — ahí revelas el regalo

### 5. Correr en local para probar
```bash
npm run dev
```
Visita http://localhost:3000

---

## 🌐 Deploy en Vercel

```bash
# 1. Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# 2. Deploy
vercel

# 3. Agrega las variables de entorno en el dashboard de Vercel:
#    Settings → Environment Variables
#    - START_DATE
#    - BIRTHDAY_DATE
```

O conecta tu repo de GitHub a Vercel y despliega automáticamente.

---

## 🎮 Modo de prueba (ver todas las casillas abiertas)

Cambia temporalmente en `app/api/boxes/route.ts`:
```ts
const diffDays = 999  // Fuerza todas abiertas
```

Recuerda revertirlo antes del deploy final.

---

## 📁 Estructura
```
love-countdown/
├── app/
│   ├── page.tsx              ← Página principal
│   ├── api/boxes/route.ts    ← Lógica de desbloqueo por fecha
│   └── layout.tsx + globals.css
├── components/
│   ├── StarField.tsx         ← Fondo animado de estrellas
│   ├── ConstellationGrid.tsx ← Las 23 estrellas conectadas
│   ├── StarNode.tsx          ← Cada estrella individual
│   ├── BoxModal.tsx          ← Modal con foto y mensaje
│   └── BirthdayBanner.tsx    ← Banner del cumpleaños
├── data/
│   └── boxes.ts              ← ← ← TUS FOTOS Y MENSAJES AQUÍ
├── public/
│   └── photos/               ← ← ← TUS FOTOS AQUÍ
└── .env.local                ← Fechas de inicio y cumpleaños
```

---

## 💡 Tips

- **Zona horaria**: La medianoche se calcula en `America/Guatemala` por defecto. Cámbiala en `app/api/boxes/route.ts` si necesitas otra.
- **Retraso de Vercel**: Vercel puede tardar hasta 10 minutos en reflejar cambios de fecha. Para producción exacta, considera agregar un botón de "refrescar" en la app.
- **Fotos**: Comprime las fotos a menos de 500KB para que carguen rápido. Usa https://squoosh.app

---

Hecho con 💛 — *"Un regalo que dura 23 días"*
