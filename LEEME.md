# BL3D · Gestión del taller (versión independiente)

Archivos de esta carpeta (subilos todos, sueltos, sin carpetas adentro):

- `index.html` — la app completa
- `manifest.webmanifest` — datos para instalarla como app
- `sw.js` — permite usarla sin conexión
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` — íconos con tu logo

## Publicarla gratis en GitHub Pages

1. Creá una cuenta en https://github.com (si no tenés).
2. Tocá **New repository**. Poné un nombre (por ejemplo `bl3d`), dejalo **Public** y crealo.
3. En el repositorio: **Add file → Upload files**. Arrastrá todos los archivos de esta carpeta (no la carpeta en sí) y tocá **Commit changes**.
4. Andá a **Settings → Pages**. En **Branch** elegí `main` y la carpeta `/ (root)`, y guardá.
5. Esperá uno o dos minutos. Tu app queda en `https://TU-USUARIO.github.io/bl3d/`.

## Instalarla en el celular

- **Android (Chrome):** abrí el link y tocá el botón "Instalar app" (abajo de la lista de pedidos) o el menú ⋮ → "Instalar aplicación".
- **iPhone (Safari):** abrí el link → botón Compartir → "Agregar a inicio".

## Sobre los datos

- Los pedidos, compras y clientes se guardan **en el navegador de cada dispositivo**. No se suben a GitHub ni los ve nadie más, aunque el repositorio sea público.
- Cada dispositivo tiene sus propios datos. Para pasarlos de uno a otro, usá **Copia de seguridad** en uno y **Restaurar copia** en el otro.
- Hacé copias de seguridad seguido: si borrás los datos del navegador, se pierden.
- Para pasar lo que ya cargaste en la versión de Claude: hacé una **Copia de seguridad** allá y **Restaurar copia** acá.

## Actualizar la app

Si cambiás `index.html`, subilo de nuevo a GitHub y subí el número de `VERSION` en `sw.js` (por ejemplo `bl3d-v2`) para que los celulares reciban la novedad.

## Nota sobre el PDF

El generador de PDF (jsPDF) se carga desde internet la primera vez y después queda guardado para usarlo sin conexión.
