# Arthen Landing (React + Vite + Tailwind)

MVP de la landing B2C de Arthen con enfoque premium, performance y medición lista (GA4 opcional). Incluye selector guiado, destacados, storytelling, franja para instaladores y garantías.

---

## 🚀 Stack

- **React 18 + Vite (TS)**
- **Tailwind CSS** (+ utilidades personalizadas)
- **shadcn/ui** (button, card, input, label, dialog, tabs, select, badge)
- **Framer Motion** (animaciones)
- **lucide-react** (iconos)

---

## 📂 Estructura sugerida

```
.
├─ public/
│  ├─ catalog.json            # Catálogo mock (productos)
│  └─ assets/                 # (opcional) imágenes/vídeo propios
├─ src/
│  ├─ ArthenLanding.tsx       # Componente principal (con hook de analytics)
│  ├─ index.css               # Tailwind
│  └─ main.tsx                # Render raíz
├─ .github/workflows/ci.yml   # CI (build + artefacto)
├─ vercel.json                # Config de deploy/cache/headers
└─ package.json
```

---

## 🔧 Puesta en marcha

```bash
# Requisitos: Node 18+
npm i
npm run dev     # http://localhost:5173
npm run build   # genera dist/
npm run preview # sirve dist/ en local
```

### shadcn/ui

Si aún no se han creado los componentes:

```bash
npx shadcn@latest init
npx shadcn@latest add button card input label dialog tabs select badge
```

Alias `@` → en `tsconfig.json`:

```json
{"compilerOptions": {"baseUrl": ".", "paths": {"@/*": ["src/*"]}}}
```

---

## 🎯 Métricas y Analytics

El archivo incluye helper `track()` (GA4 + dataLayer) y un **hook ****useAnalyticsTracking()** con:

- **Scroll depth**: eventos a 25/50/75/100 (`scroll_depth`)
- **Engagement**: `hover_cta`, `hover_item`, `open_lead`
- **Embudo**: `begin_checkout`, `add_to_cart`, `select_item`, `view_item_list`
- **Conversión**: `purchase` (demo)

> GA4 es opcional. Si añades el snippet con `G-XXXXXXX`, los eventos empiezan a enviarse; sin GA, `dataLayer` seguirá recibiendo eventos para debug.

### Variables de entorno (opcional)

En Vercel → *Environment Variables*:

- `VITE_GA_MEASUREMENT_ID = G-XXXXXXX`

En `index.html` puedes leerlo con `import.meta.env.VITE_GA_MEASUREMENT_ID`.

---

## 🎨 Paleta / Diseño

- **--bone** `#F8FAF9` (fondos claros)
- **--carbon** `#0F172A` (texto fuerte)
- **--petrol** `#0F4C5C` (CTA primario)
- **--olive** `#6E7F5B` (acento sostenible)
- **--sage** `#E9F2EC` (fondos suaves)

Tipografía recomendada: Inter / Helvetica Neue.

---

## 🧱 Componentes principales

- **Hero** (vídeo silencioso + CTAs)
- **GuidedPicker** (selector guiado 2 pasos + recomendaciones)
- **Categories** (grid 2×2)
- **Highlights** (lista/carrusel de productos)
- **Stories** (testimonios/UGC)
- **ProStrip** (teaser B2B para instaladores)
- **Guarantees** (confianza y valores)
- **LeadModal** (form 2 pasos)
- **VariantSwitcher** (base/emocional/minimal) — opcional para A/B manual

---

## 🔍 SEO & Accesibilidad (check rápido)

- H1 único en Hero; H2 por sección.
- Imágenes `alt` informativos; contraste ≥ 4.5:1.
- Botones con `:focus-visible`; navegación por teclado.
- Metadatos: título \~60 car., description \~155 car.
- `lazy` en imágenes pesadas (cuando migren a componentes propios).

---

## 📈 Rendimiento

- Vite ya produce bundles optimizados.
- Mover el **vídeo del hero** a CDN propio en producción (mejor latencia/propiedad).
- Convertir imágenes a **WebP/AVIF**; tamaño responsive.
- Cache-control configurado en `vercel.json` (JS/CSS/images inmuebles; `catalog.json` 5’).

---

## ☁️ Deploy en Vercel

1. Repo en GitHub con `vercel.json` y `dist` **no** versionado.
2. Vercel → *New Project* → Importar repo.
3. Build: `npm run build` · Output: `dist` (auto-detectado).
4. (Opcional) Variables de entorno (GA4).
5. Deploy → Previews por PR y Prod en `main`.

---

## 🧪 QA Checklist

- Hero carga, vídeo reproduce **muted**.
- Selector guiado muestra 3 recomendaciones al responder 2 preguntas.
- Destacados renderizan con datos de `public/catalog.json`.
- Modal de lead abre/cierra; step 1→2 OK.
- Eventos clave en consola `window.dataLayer`: `view_item_list`, `add_to_cart`, `begin_checkout`, `scroll_depth`.

---

## 🛠️ Troubleshooting

- **shadcn/ui import error** → ejecuta `npx shadcn add …`; verifica alias `@/*`.
- **Vídeo no reproduce** → debe ir `muted` y `playsInline`. En iOS requiere interacción si no está `muted`.
- **CORS imágenes** → mueve assets a `/public/assets` o a tu CDN.
- **Alias @ no resuelto** → revisa `tsconfig.json` y reinicia Vite.

---

## 🗺️ Roadmap sugerido

- Integrar **consent banner** (CMP) + Consent Mode.
- Reemplazar imágenes por **assets propios** + optimización responsive.
- Añadir **FAQ** con schema + **Rich Snippets** de `Product`.
- Flujo real de checkout / leads (endpoint) y validación.
- Tests de variantes (Hero: vídeo vs. imagen; CTA copy; orden de secciones).

---

## 👥 Convenciones de equipo

- Branches: `feat/*`, `fix/*`, `chore/*`.
- PRs con preview de Vercel; checklist de QA mínimo.
- Commits estilo Conventional Commits (opcional): `feat: …`, `fix: …`.

---

## 📦 Licencia

Privado — uso interno de Arthen.
