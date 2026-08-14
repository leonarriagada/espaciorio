# ESPACIO RÍO

## MASTER SPEC — Digital Experience & Frontend Architecture

### Version 1.0 — 2026

---

# 0. DIRECTIVA PRINCIPAL

Construir el sitio web oficial de **Espacio Río** como una experiencia digital premium que traduzca al entorno web la arquitectura, paisajismo, naturaleza, gastronomía y sensación espacial mostrada en los renders de referencia proporcionados por el cliente.

El sitio NO debe parecer:

* un mall tradicional;
* un directorio comercial;
* una plantilla WordPress;
* una landing SaaS;
* una web corporativa genérica;
* una página construida a partir de cards repetitivas;
* una interfaz excesivamente redondeada;
* una experiencia tecnológica/futurista.

Debe parecer la **extensión digital del propio proyecto arquitectónico**.

La persona que visite el sitio debe sentir:

> "Estoy entrando a Espacio Río."

No:

> "Estoy viendo información sobre un centro comercial."

---

# 1. CONCEPTO DE MARCA

## Concepto central

**Espacio Río = arquitectura contemporánea + naturaleza + gastronomía + encuentro + paisaje.**

El proyecto debe posicionarse visualmente como:

> **Premium Outdoor Lifestyle Destination**

La referencia estética está más cerca de:

* boutique resort;
* lifestyle center;
* arquitectura contemporánea;
* hospitality premium;
* desarrollo inmobiliario de alto nivel;
* editorial de arquitectura;
* destino gastronómico;

que de un centro comercial tradicional.

---

# 2. REFERENCIAS VISUALES OBLIGATORIAS

Las imágenes entregadas por el cliente son la principal referencia visual del proyecto.

Elementos que deben trasladarse al diseño digital:

* arquitectura contemporánea de baja altura;
* volúmenes horizontales;
* fachadas blancas, piedra y grafito;
* grandes superficies de vidrio;
* madera natural;
* vegetación abundante;
* grandes coníferas;
* montaña;
* cielo amplio;
* pavimentos de piedra;
* césped;
* terrazas;
* gastronomía;
* circulación peatonal;
* automóviles;
* luz cálida de tarde;
* sensación premium;
* integración entre arquitectura y naturaleza.

No reinterpretar estos elementos como una estética futurista.

La arquitectura debe sentirse:

**real, construible, sofisticada, natural y atemporal.**

---

# 3. PRINCIPIO UX FUNDAMENTAL

La web debe sentirse como un recorrido físico.

El usuario debe experimentar una secuencia narrativa:

```text
LLEGAR
   ↓
DESCUBRIR
   ↓
RECORRER
   ↓
EXPERIMENTAR
   ↓
QUEDARSE
   ↓
VOLVER
```

El scroll debe funcionar como una representación digital de recorrer Espacio Río.

---

# 4. DIRECCIÓN ARTÍSTICA

## Palabras clave

* Architectural
* Editorial
* Premium
* Natural
* Contemporary
* Calm
* Sophisticated
* Cinematic
* Human
* Outdoor
* Mountain
* Hospitality
* Lifestyle

## Evitar

* excesivo glassmorphism;
* gradientes tecnológicos;
* neón;
* sombras exageradas;
* botones enormes;
* cards redondeadas;
* blobs;
* partículas;
* animaciones llamativas sin función;
* UI tipo dashboard;
* exceso de iconos;
* colores saturados;
* layouts genéricos de tres columnas;
* hero con cinco botones;
* sliders automáticos convencionales.

---

# 5. PALETA VISUAL BASE

La paleta debe derivarse directamente de los renders.

## Off White

```text
#F3F1EB
```

Uso:

* fondos principales;
* superficies editoriales;
* bloques de contenido.

## Stone

```text
#D8D3C8
```

Uso:

* separadores;
* superficies;
* detalles.

## Warm Grey

```text
#A8A49B
```

Uso:

* metadata;
* textos secundarios;
* elementos auxiliares.

## Graphite

```text
#242624
```

Uso:

* textos principales;
* navegación;
* fondos oscuros;
* detalles arquitectónicos.

## Forest

```text
#304638
```

Uso:

* secciones especiales;
* footer;
* CTA;
* bloques inmersivos.

## Moss

```text
#68755F
```

Uso:

* acentos;
* microinteracciones;
* estados hover.

## Wood

```text
#8A6B4D
```

Uso extremadamente limitado.

Representa la madera arquitectónica de los renders.

---

# 6. REGLA DE COLOR

La interfaz debe ser predominantemente neutra.

Aproximadamente:

```text
70% Off-white / Stone
20% Graphite
8% Forest / Moss
2% Wood
```

No convertir el sitio en una web verde.

El verde pertenece al paisaje y funciona como acento.

Importante:

**Starbucks NO debe definir la identidad cromática de Espacio Río.**

El verde Starbucks debe aparecer únicamente donde corresponde a la marca del local.

---

# 7. TIPOGRAFÍA

Utilizar una combinación editorial:

## Display / Headings

Preferir una serif contemporánea elegante.

Opciones aceptables:

* Cormorant Garamond;
* DM Serif Display;
* una serif premium equivalente si está disponible.

## UI / Body

Usar una sans moderna y extremadamente limpia:

* Inter;
* Manrope;
* Geist Sans;
* equivalente.

Preferencia inicial:

```text
Display: Cormorant Garamond
UI/Body: Geist / Inter
```

No utilizar más de dos familias tipográficas principales.

---

# 8. LAYOUT

El layout debe inspirarse en arquitectura.

Usar:

* líneas;
* grids;
* grandes márgenes;
* espacios negativos;
* bloques rectangulares;
* composiciones asimétricas;
* imágenes de gran formato;
* divisores finos.

Evitar el aspecto de plantilla.

---

# 9. BORDER RADIUS

No utilizar grandes border-radius.

Por defecto:

```text
rounded-none
```

o radios extremadamente pequeños:

```text
2px
4px
```

Nunca construir el sitio alrededor de:

```text
rounded-2xl
rounded-3xl
```

La arquitectura de referencia es geométrica.

La interfaz debe reflejarlo.

---

# 10. HERO

El hero debe ocupar aproximadamente:

```text
100svh
```

Debe utilizar una imagen/render de Espacio Río de máxima calidad.

Estructura:

```text
--------------------------------------------------
ESPACIO RÍO                       EL ESPACIO
                                  LOCALES
                                  EXPERIENCIAS
                                  UBICACIÓN

                    ESPACIO RÍO

              Un lugar para encontrarse.

                                      ↓
--------------------------------------------------
```

La navegación debe ser discreta.

No colocar una barra blanca convencional sobre la imagen.

Preferir:

* logo/título;
* navegación minimalista;
* menu button en mobile;
* texto editorial;
* indicador de scroll.

---

# 11. HERO — IMAGEN

La imagen debe ser protagonista.

No utilizar overlays negros pesados.

Utilizar únicamente:

```text
linear-gradient(
  transparent,
  rgba(0,0,0,0.25)
)
```

o equivalente muy sutil cuando sea necesario para legibilidad.

El objetivo es preservar:

* montaña;
* árboles;
* arquitectura;
* cielo;
* luz.

---

# 12. HERO — ANIMACIÓN

La entrada debe ser elegante.

Secuencia recomendada:

1. imagen aparece;
2. overlay desaparece ligeramente;
3. título aparece;
4. subtítulo aparece;
5. navegación aparece;
6. indicador de scroll aparece.

Duración aproximada:

```text
0.8s – 1.2s
```

Easing:

```text
ease-out
```

No utilizar animaciones agresivas.

---

# 13. SECCIÓN 01 — INTRODUCCIÓN

Después del hero:

```text
EL LUGAR

Más que un destino.
Un lugar para encontrarse.
```

Debe ser una sección editorial con mucho espacio negativo.

Composición:

```text
                 EL LUGAR

        Más que un destino.

        Arquitectura, naturaleza,
        gastronomía y encuentro
        en un mismo espacio.

                         [IMAGEN]
```

No utilizar una card.

---

# 14. SECCIÓN 02 — EL ESPACIO

Presentar Espacio Río como lugar físico.

Utilizar:

* una imagen panorámica;
* texto breve;
* pequeños datos;
* composición asimétrica.

Conceptos:

* arquitectura;
* naturaleza;
* paisaje;
* encuentro;
* gastronomía.

La imagen debe ocupar una parte importante del viewport.

---

# 15. SECCIÓN 03 — EXPERIENCIAS

Crear una sección inmersiva.

Título:

```text
EXPERIENCIAS
```

Conceptos:

```text
CAFÉ
GASTRONOMÍA
ENCUENTRO
NATURALEZA
```

Cada experiencia debe tener una imagen.

Preferir una composición editorial en lugar de cuatro cards idénticas.

Ejemplo:

```text
┌──────────────────────────────┐
│                              │
│           IMAGEN             │
│                              │
│ CAFÉ                         │
│ Una pausa para comenzar.     │
└──────────────────────────────┘

                    ┌────────────────────┐
                    │                    │
                    │      IMAGEN        │
                    │                    │
                    │ GASTRONOMÍA        │
                    └────────────────────┘
```

---

# 16. SECCIÓN 04 — LOCALES

Los locales son parte importante del sitio, pero NO deben convertirse en un directorio visual aburrido.

Crear un sistema de establecimientos.

Cada establecimiento debe poder contener:

```text
name
category
description
image
logo
schedule
location
website
instagram
featured
```

La presentación visual debe ser editorial.

Preferir:

* grandes imágenes;
* hover;
* desplazamiento horizontal;
* navegación por índice;
* filtros mínimos.

---

# 17. LOCAL CARD

Las cards pueden existir funcionalmente, pero no deben parecer tarjetas SaaS.

Visual:

```text
IMAGE
--------------------------------

01

STARBUCKS

Café · Gastronomía

EXPLORAR →
```

Sin exceso de:

* sombras;
* bordes;
* radios;
* badges.

---

# 18. SECCIÓN 05 — ESPACIO AL AIRE LIBRE

Crear una sección dedicada a:

* terrazas;
* jardines;
* paseo;
* arquitectura;
* naturaleza.

Mensaje conceptual:

```text
AL AIRE LIBRE

Un lugar pensado para quedarse.
```

Utilizar una imagen grande.

Puede tener un pequeño efecto parallax.

---

# 19. SECCIÓN 06 — GALERÍA

Crear una galería visual de alta calidad.

No usar una grilla uniforme.

Usar un layout editorial:

```text
┌──────────────────────┐
│                      │
│       IMAGE          │
│                      │
└──────────────────────┘

                ┌───────────────┐
                │               │
                │    IMAGE      │
                │               │
                └───────────────┘
```

Alternar:

* imágenes panorámicas;
* verticales;
* cuadrados;
* fotografías de arquitectura;
* personas;
* gastronomía;
* paisaje.

---

# 20. SECCIÓN 07 — UBICACIÓN

La ubicación debe sentirse como el cierre del recorrido.

Título:

```text
ENCUÉNTRANOS
```

Subtítulo:

```text
Tu próximo destino está más cerca.
```

Incluir:

* dirección;
* horarios generales si existen;
* mapa;
* accesos;
* estacionamiento;
* Drive-Thru cuando corresponda;
* botón de navegación.

No inventar datos.

Si la dirección definitiva no está disponible, utilizar placeholders claramente marcados.

---

# 21. CTA FINAL

Crear un bloque oscuro/forest.

Ejemplo conceptual:

```text
██████████████████████████████████

             ESPACIO RÍO

        Ven a descubrirlo.

             EXPLORAR →

██████████████████████████████████
```

Debe sentirse como un cierre editorial.

---

# 22. FOOTER

Footer grande.

Fondo:

```text
Forest #304638
```

Contenido:

```text
ESPACIO
RÍO

Un lugar para encontrarse.

EL ESPACIO
LOCALES
EXPERIENCIAS
UBICACIÓN

Instagram
Contacto

© Espacio Río
```

Mantenerlo limpio.

---

# 23. NAVEGACIÓN

Desktop:

```text
ESPACIO RÍO

EL ESPACIO
LOCALES
EXPERIENCIAS
UBICACIÓN

MENU
```

Puede ser una navegación fija/transparente.

Al hacer scroll:

* cambiar contraste;
* añadir backdrop sutil;
* reducir altura;
* mantener elegancia.

No utilizar una navbar pesada.

---

# 24. MENÚ MOBILE

Mobile debe tener una experiencia propia.

No simplemente esconder links.

Al abrir:

pantalla completa.

Fondo:

Forest.

Tipografía grande.

```text
EL ESPACIO

LOCALES

EXPERIENCIAS

UBICACIÓN

INSTAGRAM
```

Cerrar mediante:

```text
×
```

Animación suave.

---

# 25. MICROINTERACCIONES

Usar microinteracciones extremadamente sutiles.

### Links

Underline animado.

### Imágenes

Scale:

```text
1 → 1.03
```

### Botones

Pequeño desplazamiento de icono/flecha.

### Scroll

Reveal progresivo.

### Menú

Fade + slide.

---

# 26. SISTEMA DE ANIMACIÓN

Utilizar **Motion for React** para animaciones UI.

Instalar:

```bash
npm install motion
```

No utilizar GSAP inicialmente.

GSAP solamente debe introducirse si posteriormente existe una necesidad real de:

* scroll-driven animation compleja;
* timeline cinematográfica;
* pinning avanzado;
* secuencias de imágenes.

La primera versión debe mantenerse ligera.

---

# 27. SMOOTH SCROLL

No implementar smooth scrolling agresivo por defecto.

El scroll nativo debe seguir funcionando correctamente.

Si se determina que el diseño necesita una experiencia de scroll más cinematográfica, evaluar posteriormente:

```text
Lenis
```

Pero NO introducir una dependencia adicional antes de comprobar que realmente aporta valor.

---

# 28. TECNOLOGÍA

Utilizar:

```text
Next.js 16
React
TypeScript
Tailwind CSS v4
Motion
ESLint
```

Arquitectura preferentemente App Router.

---

# 29. ESTRUCTURA DEL PROYECTO

Usar una arquitectura limpia.

Ejemplo:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── locales/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Introduction.tsx
│   │   ├── SpaceSection.tsx
│   │   ├── Experiences.tsx
│   │   ├── Tenants.tsx
│   │   ├── OutdoorSection.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── ui/
│   │   ├── MagneticLink.tsx
│   │   ├── ImageReveal.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ArrowLink.tsx
│   │
│   └── motion/
│       ├── FadeIn.tsx
│       ├── Reveal.tsx
│       └── ParallaxImage.tsx
│
├── data/
│   ├── tenants.ts
│   └── site.ts
│
├── lib/
│   └── utils.ts
│
└── types/
    └── index.ts
```

No crear componentes gigantes de 500+ líneas.

---

# 30. COMPONENTIZACIÓN

Cada sección importante debe ser independiente.

Evitar:

```text
page.tsx = 1500 líneas
```

Preferir:

```tsx
<Header />
<Hero />
<Introduction />
<SpaceSection />
<Experiences />
<Tenants />
<OutdoorSection />
<Gallery />
<Location />
<FinalCTA />
<Footer />
```

---

# 31. DATA-DRIVEN TENANTS

Los locales deben estar definidos en datos.

Ejemplo conceptual:

```ts
export interface Tenant {
  slug: string
  name: string
  category: string
  description: string
  image: string
  logo?: string
  schedule?: string
  website?: string
  instagram?: string
  featured?: boolean
}
```

Esto permitirá agregar nuevos locales sin modificar la estructura visual.

---

# 32. IMÁGENES

No utilizar imágenes placeholder de stock en la versión final si existen renders/fotografías reales.

Las imágenes entregadas por el cliente deben tratarse como referencias principales.

Organizar assets:

```text
public/
└── images/
    ├── hero/
    ├── architecture/
    ├── tenants/
    ├── lifestyle/
    ├── landscape/
    └── gallery/
```

Usar `next/image`.

Optimizar:

* AVIF/WebP;
* responsive sizes;
* lazy loading;
* priority únicamente en imágenes above-the-fold.

---

# 33. HERO PERFORMANCE

La imagen principal es crítica.

Debe:

* cargar rápido;
* utilizar `priority`;
* tener `sizes="100vw"`;
* evitar CLS;
* utilizar un aspect ratio conocido;
* utilizar un fallback apropiado.

No sacrificar performance por efectos visuales.

---

# 34. RESPONSIVE DESIGN

No diseñar primero desktop y "arreglar" mobile después.

Mobile debe ser una composición propia.

Breakpoints base:

```text
mobile
sm
md
lg
xl
2xl
```

En mobile:

* hero completo;
* tipografía proporcional;
* imágenes grandes;
* navegación fullscreen;
* galerías horizontales cuando corresponda;
* evitar texto pequeño;
* evitar animaciones pesadas.

---

# 35. ACCESSIBILITY

Implementar:

* semantic HTML;
* headings jerárquicos;
* alt text real;
* focus states;
* navegación por teclado;
* contraste adecuado;
* botones accesibles;
* `prefers-reduced-motion`.

Si el usuario tiene reducción de movimiento:

```css
@media (prefers-reduced-motion: reduce)
```

desactivar parallax y animaciones no esenciales.

---

# 36. SEO

Implementar metadata desde `layout.tsx`.

Debe incluir:

* title;
* description;
* Open Graph;
* Twitter/X metadata;
* favicon;
* canonical cuando corresponda.

Título inicial:

```text
Espacio Río — Un lugar para encontrarse
```

La metadata definitiva debe poder modificarse desde una configuración central.

---

# 37. SEO LOCAL

Preparar estructura para:

* nombre;
* dirección;
* teléfono;
* horarios;
* redes sociales;
* establecimientos;
* ubicación geográfica.

Implementar posteriormente JSON-LD cuando los datos reales estén confirmados.

No inventar información comercial.

---

# 38. PERFORMANCE

Objetivo:

```text
Lighthouse Performance > 90
Lighthouse Accessibility > 90
Lighthouse Best Practices > 90
Lighthouse SEO > 90
```

Prioridad:

1. LCP;
2. CLS;
3. INP;
4. tamaño de imágenes;
5. JS innecesario.

No cargar librerías por estética si CSS/Next puede resolverlo.

---

# 39. REGLA SOBRE CLIENT COMPONENTS

Utilizar Server Components por defecto.

Usar:

```tsx
"use client"
```

solamente cuando sea necesario para:

* interacción;
* estado;
* Motion;
* menú;
* carousel;
* browser APIs.

No convertir toda la aplicación en Client Component.

---

# 40. TAILWIND

Utilizar Tailwind CSS v4.

No crear una montaña de clases arbitrarias.

Definir variables CSS para el sistema visual.

Ejemplo conceptual:

```css
:root {
  --color-cream: #F3F1EB;
  --color-stone: #D8D3C8;
  --color-graphite: #242624;
  --color-forest: #304638;
  --color-moss: #68755F;
  --color-wood: #8A6B4D;
}
```

Los componentes deben consumir tokens.

---

# 41. CSS GLOBAL

`globals.css` debe mantenerse limpio.

No convertirlo en un archivo de 3000 líneas.

Utilizar:

* CSS variables;
* base styles;
* typography;
* selection;
* scrollbar si realmente aporta;
* motion utilities solamente cuando sea necesario.

La mayoría del styling debe permanecer en Tailwind.

---

# 42. ICONOGRAFÍA

Usar una librería ligera como:

```text
Lucide React
```

si se necesitan iconos.

No utilizar iconos grandes y coloridos.

Los iconos deben ser:

* lineales;
* pequeños;
* geométricos;
* discretos.

---

# 43. FORMAS

Utilizar principalmente:

* rectángulos;
* líneas;
* bloques;
* divisores;
* círculos pequeños cuando tengan función.

No utilizar blobs decorativos.

---

# 44. TEXTURA

La web puede utilizar texturas extremadamente sutiles inspiradas en:

* piedra;
* papel;
* grano fotográfico;
* hormigón.

Pero solamente si aportan profundidad.

No aplicar ruido fuerte sobre toda la interfaz.

---

# 45. "RÍO" COMO RECURSO GRÁFICO

No representar un río literal de forma obvia.

Utilizar una línea orgánica muy fina como elemento ocasional de navegación visual.

Conceptualmente:

```text
flujo
recorrido
conexión
naturaleza
```

Esta línea puede aparecer entre determinadas secciones.

Debe ser muy sutil.

---

# 46. TRANSICIONES ENTRE SECCIONES

Evitar que cada sección parezca una página independiente.

La transición debe sentirse continua.

Ejemplo:

```text
OFF-WHITE
     ↓
IMAGE
     ↓
FOREST
     ↓
OFF-WHITE
     ↓
IMAGE
     ↓
STONE
     ↓
FOREST
```

Esto crea ritmo visual.

---

# 47. RITMO

El sitio debe alternar:

### luz

Off-white.

### oscuridad

Forest / Graphite.

### imagen

Fotografía/render.

### vacío

Espacio negativo.

Esto evita monotonía.

---

# 48. PRINCIPIO DE "LESS UI"

La interfaz no debe competir con las imágenes.

Si una sección puede funcionar con:

```text
título + imagen + texto
```

no agregar:

* card;
* badge;
* icono;
* botón;
* sombra;
* borde;

sin necesidad.

---

# 49. ARQUITECTURA DE INFORMACIÓN

La home debe responder progresivamente:

### ¿Qué es?

Espacio Río.

### ¿Qué se siente?

Naturaleza + arquitectura + encuentro.

### ¿Qué puedo hacer?

Comer, tomar café, encontrarse, recorrer.

### ¿Qué locales existen?

Directorio/experiencias.

### ¿Dónde está?

Ubicación.

### ¿Cómo voy?

Acceso.

---

# 50. PÁGINAS FUTURAS

Preparar la arquitectura para:

```text
/
├── /locales
├── /locales/[slug]
├── /experiencias
├── /ubicacion
└── /contacto
```

La primera fase puede centrarse en `/`.

No construir páginas innecesarias antes de terminar la home.

---

# 51. PRIORIDAD DE IMPLEMENTACIÓN

## FASE 1 — FOUNDATION

Crear:

* Next 16;
* TypeScript;
* Tailwind v4;
* fonts;
* tokens;
* estructura de carpetas;
* metadata;
* layout;
* Header;
* Footer.

## FASE 2 — HERO

Construir:

* hero;
* navegación;
* imagen;
* typography;
* intro animation;
* scroll indicator.

## FASE 3 — EDITORIAL SECTIONS

Construir:

* Introduction;
* Space;
* Experiences;
* Outdoor.

## FASE 4 — TENANTS

Crear:

* data model;
* tenant cards;
* gallery;
* tenant routes.

## FASE 5 — GALLERY + LOCATION

Construir:

* galería;
* ubicación;
* CTA;
* footer.

## FASE 6 — MOTION

Añadir:

* reveals;
* image hover;
* parallax;
* transitions;
* menu animation.

## FASE 7 — POLISH

Revisar:

* responsive;
* accessibility;
* performance;
* SEO;
* visual consistency.

---

# 52. CRITERIO DE ÉXITO VISUAL

Antes de considerar terminado el proyecto, verificar:

### Al abrir la página

Debe sentirse premium inmediatamente.

### Después de 3 segundos

Debe quedar claro que Espacio Río es un lugar físico especial.

### Después de hacer scroll

Debe sentirse como recorrer el complejo.

### Al ver los locales

Debe sentirse como descubrir lugares dentro de un destino.

### Al llegar al footer

Debe existir una sensación de cierre, no de caída abrupta.

---

# 53. TEST VISUAL

Comparar constantemente la implementación con los renders de referencia.

Verificar:

* colores;
* proporciones;
* espacios;
* densidad visual;
* arquitectura;
* vegetación;
* iluminación;
* contraste;
* sensación premium.

El sitio NO necesita copiar literalmente la arquitectura.

Debe traducir su lenguaje.

---

# 54. REGLA CONTRA EL DISEÑO GENÉRICO

Si una decisión de diseño podría pertenecer igualmente a:

* una startup;
* una fintech;
* una agencia;
* un SaaS;
* una tienda online;

probablemente NO pertenece al sistema visual de Espacio Río.

Preguntarse constantemente:

> "¿Esto parece Espacio Río?"

Si la respuesta es no, eliminarlo.

---

# 55. REGLA DE PRIORIDAD

Cuando exista conflicto entre:

```text
información
```

y

```text
experiencia visual
```

no eliminar información importante.

En cambio:

**reorganizarla para que la interfaz permanezca limpia.**

El sitio debe ser usable, no solamente bonito.

---

# 56. REGLA DE CONTENIDO

No inventar:

* locales;
* horarios;
* dirección;
* teléfono;
* servicios;
* instalaciones;
* eventos;
* afirmaciones comerciales.

Cuando falten datos reales utilizar:

```text
TODO: CONTENT REQUIRED
```

o placeholders claramente identificables durante desarrollo.

---

# 57. ESTADO INICIAL

Codex debe comenzar inspeccionando el repositorio existente.

Antes de modificar:

1. identificar framework;
2. revisar `package.json`;
3. revisar versión de Next;
4. revisar Tailwind;
5. revisar estructura;
6. revisar assets existentes;
7. revisar configuración;
8. revisar si existe un sistema de diseño;
9. reutilizar infraestructura útil;
10. evitar destruir trabajo existente sin necesidad.

Si el proyecto está vacío, inicializar la arquitectura descrita en este documento.

---

# 58. REGLA DE IMPLEMENTACIÓN

No intentar construir todo en una sola pasada.

Construir por fases y validar cada una.

Primero:

```text
foundation
```

Después:

```text
hero
```

Después:

```text
editorial sections
```

Después:

```text
tenants
```

Después:

```text
location
```

Finalmente:

```text
motion + polish
```

---

# 59. COMPORTAMIENTO ESPERADO DE CODEX

Codex debe actuar como:

**Frontend Engineer + Creative Developer + Digital Art Director**

No limitarse a implementar componentes literalmente.

Debe interpretar el sistema visual descrito en este documento y mantener coherencia entre:

* arquitectura;
* UX;
* responsive;
* tipografía;
* motion;
* imágenes;
* código.

Pero no debe introducir decisiones visuales arbitrarias que contradigan el documento.

---

# 60. DEFINICIÓN FINAL DEL PRODUCTO

El resultado final debe sentirse como:

> **La versión digital de caminar por Espacio Río durante una tarde luminosa, entre arquitectura contemporánea, árboles, terrazas, cafés y montaña.**

Ese es el objetivo.

No construir "una web para un centro comercial".

Construir:

# **LA EXPERIENCIA DIGITAL DE ESPACIO RÍO.**

---

# 61. COMANDO DE INICIO

Una vez inspeccionado el repositorio, comenzar inmediatamente con la implementación.

No esperar confirmación para decisiones menores.

Tomar decisiones razonables alineadas con este documento.

Cuando exista información que solamente el cliente pueda proporcionar, dejar un placeholder claramente identificado y continuar con el desarrollo.

La primera entrega funcional debe contener:

* Header;
* Hero;
* Introduction;
* Space;
* Experiences;
* Tenants;
* Outdoor;
* Gallery;
* Location;
* CTA;
* Footer;

aunque inicialmente algunos contenidos puedan utilizar assets temporales.

La página debe poder ejecutarse localmente y debe ser responsive desde el primer momento.

---

# END OF MASTER SPEC
