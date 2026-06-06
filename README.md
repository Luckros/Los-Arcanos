# Los Arcanos — Landing Page
## Plan de Acción: SEO + Lanzamiento

---

## Estructura de componentes

```
app/
├── layout.tsx          → SEO global: metadata, Schema JSON-LD, fuentes
├── globals.css         → Design tokens (CSS vars) + clases globales
└── page.tsx            → Ensamblado de secciones

components/
├── Navbar.tsx          → Nav sticky con CTA WhatsApp
├── Hero.tsx            → Hero con título emocional + CTA principal
├── Services.tsx        → Cards de Tarot y Limpieza (grid 2 col)
├── About.tsx           → Biografía + stats + foto
├── Testimonials.tsx    → 3 testimonios con estrellas
├── FinalCTA.tsx        → CTA final de conversión
└── Icons.tsx           → WhatsAppIcon, StickyWhatsApp, Footer, Ornament
```

---

## 1. Primeros pasos técnicos

```bash
# Instalar dependencias
npm install

# Correr en local
npm run dev

# Build para producción
npm run build
```

### Archivos a personalizar antes de lanzar

| Archivo | Qué cambiar |
|---------|-------------|
| `app/layout.tsx` | URL del dominio real (3 veces), descripción, keywords |
| `components/About.tsx` | Tu nombre, foto real (`/public/foto-perfil.jpg`), tu historia personal |
| `components/Testimonials.tsx` | Testimonios reales de tus clientes |
| `/public/og-image.jpg` | Imagen 1200×630px para redes sociales |

---

## 2. Checklist SEO On-Page ✅

### Meta-etiquetas (ya incluidas en layout.tsx)
- [x] `<title>` con keyword principal + marca
- [x] `<meta description>` bajo 160 caracteres, con CTA
- [x] Keywords naturales para AR: "lectura de tarot argentina", "por WhatsApp"
- [x] `og:image`, `og:title`, `og:description` para Instagram/WhatsApp previews
- [x] `twitter:card` para compartir
- [x] `robots: index, follow`
- [x] `canonical` URL
- [x] `lang="es-AR"`, `geo.region`, `geo.country`

### Schema JSON-LD (ya incluido)
- [x] `LocalBusiness` con nombre, teléfono, área de servicio Argentina
- [x] `Service` x2 (Tarot + Limpieza) con canal de contacto WhatsApp

---

## 3. Plan de contenido SEO — Posicionamiento orgánico

### Keywords objetivo (de más tráfico a más específico)

| Keyword | Intención | Dificultad |
|---------|-----------|------------|
| lectura de tarot argentina | Transaccional | Media |
| lectura de tarot por whatsapp | Transaccional | Baja ✅ |
| tarotista argentina online | Transaccional | Baja ✅ |
| limpieza energética online argentina | Transaccional | Baja ✅ |
| consulta espiritual whatsapp | Transaccional | Muy baja ✅ |
| tarot personalizado audios | Informacional | Muy baja ✅ |

**Estrategia**: empezar por keywords de cola larga (baja dificultad). Son más fáciles de rankear y tienen alta intención de compra.

### Acciones SEO (en orden de impacto)

1. **Google Business Profile** — Creá un perfil aunque seas 100% online. Categoría: "Tarotista" o "Consultor espiritual". Añadí servicios, fotos y pedí reseñas a clientes.

2. **Velocidad (Core Web Vitals)** — Next.js con `next/image` y fuentes de Google ya optimiza. Verificá con [PageSpeed Insights](https://pagespeed.web.dev/).

3. **Instagram → Tráfico web** — Poné el link de la landing en bio. Cada Reel o post con CTA "Link en bio". Los Stories con sticker de enlace son los más efectivos.

4. **Contenido para posicionar** (fase 2):
   - Blog post: "¿Para qué sirve una lectura de tarot? (guía honesta)"
   - Blog post: "Cómo prepararte para una limpieza energética"
   - Estos posts ranquean para búsquedas informacionales y llevan a la página de servicios.

5. **Backlinks básicos** — Mencioná tu web en directorios gratuitos de servicios espirituales en Argentina.

---

## 4. Mobile First — Checklist

- [x] Fuentes con `clamp()` para escala fluida
- [x] Grid de servicios: 1 col en móvil, 2 col en desktop (md:grid-cols-2)
- [x] Botón WhatsApp flotante siempre visible (bottom-right)
- [x] Navbar con CTA en mobile (sin menú complejo que confunda)
- [x] Hero con padding generoso en mobile
- [ ] Probar en Chrome DevTools → iPhone SE, 14 Pro, Pixel 7
- [ ] Probar velocidad de carga en 4G simulado

---

## 5. Conversión — Lo que hace que esta página venda

| Elemento | Por qué convierte |
|----------|-------------------|
| Botón WhatsApp sticky | Siempre visible, sin friction |
| CTA en navbar | Captura intención temprana |
| Badge "Audios" en Tarot | Diferenciador claro vs competencia |
| Badge "Incluye PDF" en Limpieza | Valor percibido más alto |
| Testimonios con nombre y ciudad | Prueba social con contexto AR |
| Stats (2 años, 100s clientes) | Autoridad sin sonar egocéntrica |
| Copy en hero resuelve emoción | "No sabés hacia dónde ir" → empatía |

---

## 6. Próximos pasos recomendados

1. Registrar dominio (`.com.ar` para SEO local argentino)
2. Deploy en Vercel (gratis para Next.js, 1 click)
3. Conectar dominio en Vercel → automático HTTPS
4. Subir foto real en `About` y OG image
5. Agregar tus testimonios reales
6. Crear Google Business Profile
7. Poner el link en Instagram bio

---

*Generado con Next.js 14 + Tailwind CSS + Cormorant Garamond + Jost*
