# Build Us With AI · Banana Creative

Hackathon interno de Banana Creative · 2026.
Sitio estático con leaderboard, documentación del evento y guía de Claude.

## Stack

- HTML / CSS / JS puro · sin build step
- Tipografías: Switzer (Fontshare) + Geist Mono (Google Fonts)
- Animación: Motion One vía CDN
- Hosting: Vercel

## Estructura

```
.
├── index.html              Leaderboard + carta + tabla + badges + feedback + closer
├── hackaton.html           Doc completa del evento
├── setup.html              Guía Claude para participantes
├── vercel.json             Config de headers y caching
├── .gitignore
└── assets/
    ├── styles.css          Tokens y componentes compartidos
    ├── motion.js           Reveals + parallax
    ├── banana-logo.svg     Logo nav
    ├── copyright.svg       Sello footer
    ├── badges/             5 medallas con alpha
    │   ├── creative-forward.png
    │   ├── deep-dive.png
    │   ├── eye-candy.png
    │   ├── paper-trail.png
    │   └── the-thinker.png
    └── heads/              Caras directivos
        ├── ari.png · ari.svg (fallback)
        ├── ucha.png · ucha.svg
        └── guille.png · guille.svg
```

## Deploy

Ver `DEPLOY.md`.

## Actualizar leaderboard semana a semana

Editar `index.html` en los nodos marcados con `data-editable`:

| Marker | Qué editar |
|---|---|
| `data-editable="current-week"` | Sticker de semana en el hero |
| `data-editable="leaderboard-stamp"` | Sello "Avance N · X semanas restantes" |
| `data-editable="leaderboard-table"` | Tabla de posiciones |
| `data-editable="feedback"` | Cards de feedback |

## Local dev

```bash
python3 -m http.server 8000
# http://localhost:8000
```

ES modules requieren server (no `file://`). Cualquier static server sirve.
