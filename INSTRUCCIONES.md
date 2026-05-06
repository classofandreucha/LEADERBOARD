# 🍌 Cómo subir esto a GitHub y Vercel

Te lo explico **sin terminal**, todo desde el navegador. Tarda 5 minutos.

---

## PASO 1 — Crear el repo en GitHub

1. Abre https://github.com/new (logueada con tu cuenta)
2. **Repository name:** escribe `banana-hackathon` (o el nombre que quieras)
3. Marca **Public** o **Private** — lo que prefieras
4. **NO marques** "Add a README", "Add .gitignore", ni "license" — déjalos en blanco
5. Click el botón verde **Create repository**

---

## PASO 2 — Subir los archivos

Te aparece una página que dice "Quick setup" con varias opciones. Busca el link que dice:

> **uploading an existing file**

Click ahí.

Te lleva a una pantalla con un cuadro grande de "Drag files here".

### Lo que vas a arrastrar

1. Abre **dos ventanas de Finder lado a lado**:
   - Ventana A: tu carpeta `FINAL-PARA-GITHUB`
   - Ventana B: el navegador con la página de upload de GitHub

2. En tu Finder, **selecciona TODO** lo que está dentro de `FINAL-PARA-GITHUB` (Cmd+A):
   - `index.html`
   - `hackaton.html`
   - `setup.html`
   - `vercel.json`
   - `README.md`
   - La carpeta `assets`
   - (También está `.gitignore` aunque no lo veas — Finder lo esconde, está bien)

3. **Arrastra todo** al cuadro de GitHub.

4. GitHub procesa los archivos. Puede tardar unos segundos porque las imágenes pesan.

5. Abajo de la página hay un campo "Commit changes". Escribe algo como:
   - **Commit title:** `Initial commit`
   - Deja la opción "Commit directly to the main branch"

6. Click el botón verde **Commit changes**.

✅ Tu código ya está en GitHub.

---

## PASO 3 — Conectar a Vercel

1. Abre https://vercel.com/new
2. Logueate con tu cuenta de GitHub si te lo pide
3. Te aparece la lista de tus repos. Busca `banana-hackathon` y click **Import**
4. En la pantalla de configuración:
   - **Framework Preset:** elige **Other**
   - **Root Directory:** déjalo como está (`.`)
   - **Build Command:** déjalo VACÍO
   - **Output Directory:** déjalo VACÍO
5. Click el botón **Deploy**
6. Espera ~30 segundos
7. Vercel te da un URL como `https://banana-hackathon.vercel.app/` — ese es tu sitio.

---

## Cómo actualizar el leaderboard cada semana

Cada vez que quieras cambiar puntos / feedback / avance:

1. Abre el archivo `index.html` con cualquier editor (TextEdit funciona, o VS Code)
2. Busca los marcadores `data-editable` y edita lo que necesites
3. Guarda
4. Ve a tu repo en GitHub.com
5. Click el archivo `index.html` en la lista
6. Click el ícono del lápiz (Edit this file)
7. Pega tu versión actualizada
8. Abajo escribe el commit message (ej: "Avance 02") y click Commit
9. Vercel redespliega automáticamente en ~30s

---

## Si algo falla

- **El sitio se ve blanco** → revisa que `index.html` esté en la raíz del repo, no dentro de una subcarpeta
- **No se ven los badges o las caras** → verifica que la carpeta `assets/` esté en el repo con sus subcarpetas `badges/` y `heads/`
- **Animaciones no corren** → es normal si abres el archivo directo desde Finder (`file://`). Solo funcionan en el sitio de Vercel real.

---

## Lo que NO necesitas hacer

- ❌ Instalar nada
- ❌ Usar terminal
- ❌ Saber Git
- ❌ Configurar nada raro en Vercel
