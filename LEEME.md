# BL3D · Gestión del taller (con sincronización)

## Archivos (subilos todos, sueltos, a tu repositorio de GitHub)

- `index.html` — la app completa
- `firebase-config.js` — acá pegás los datos de tu proyecto de Firebase (paso 5 de abajo)
- `sw.js`, `manifest.webmanifest` — para instalarla en el celular y usarla sin conexión
- `icon-*.png`, `apple-touch-icon.png` — íconos con tu logo
- `firestore.rules` — reglas de seguridad que vas a copiar en Firebase (paso 4)

Si no configurás Firebase, la app funciona igual pero cada dispositivo guarda sus propios datos.

## Activar la sincronización (celular y compu ven lo mismo)

Se usa Firebase, de Google. El plan gratuito (Spark) alcanza de sobra para este uso.

1. Entrá a https://console.firebase.google.com con tu cuenta de Google → **Agregar proyecto**. Ponele un nombre (por ejemplo `bl3d`). Podés desactivar Google Analytics.
2. **Compilación → Authentication → Comenzar**. En "Método de acceso" activá **Correo electrónico/contraseña**.
   Después, en la pestaña **Users → Agregar usuario**, cargá tu email y una contraseña. Ese va a ser tu acceso a la app.
3. **Compilación → Firestore Database → Crear base de datos**. Elegí una ubicación cercana (por ejemplo `southamerica-east1`, São Paulo) y modo **producción**.
4. En Firestore, pestaña **Reglas**: borrá lo que hay, pegá el contenido de `firestore.rules` y tocá **Publicar**.
5. Rueda de engranaje (arriba a la izquierda) → **Configuración del proyecto** → bajá hasta "Tus apps" → ícono **`</>`** (Web). Ponele un nombre y registrala. Te muestra un bloque `firebaseConfig` con estos valores: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`.
   Copiá cada valor en `firebase-config.js`, reemplazando los `PEGAR_AQUI` (dejá las comillas).
6. En Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio** y agregá `TU-USUARIO.github.io`.
7. (Recomendado) En Authentication → Configuración → **Acciones del usuario**, desactivá **"Habilitar creación (registro)"** para que nadie pueda crearse una cuenta. Si esa opción no te aparece, no pasa nada: las reglas igual impiden que otros vean tus datos.
8. Subí a GitHub el `firebase-config.js` con tus datos y el resto de los archivos actualizados.

Los valores de `firebase-config.js` no son secretos, aunque el repositorio sea público. La seguridad la dan las reglas del paso 4 y tu contraseña.

## Primer uso

- Abrí la app: te pide email y contraseña.
- Lo que ya tenías cargado en ese dispositivo se sube solo a la nube la primera vez que ingresás.
- En el otro dispositivo, ingresá con la misma cuenta y vas a ver todo.
- Arriba, debajo del título, ves el estado: **Sincronizado**, **Sincronizando…** o **Sin conexión**.
- Sin internet podés seguir cargando pedidos; se suben solos cuando vuelve la conexión.

## Piezas guardadas y presupuestos

- En la Calculadora, el botón **"Guardar pieza"** guarda el nombre y el precio que calculaste en una lista de "Piezas guardadas", visible al pie de esa misma pestaña.
- Al armar un presupuesto (nuevo o desde un pedido), el desplegable **"+ Agregar pieza calculada"** deja elegir una de esas piezas y la agrega como ítem, con su precio ya cargado. Podés elegir varias, una por una, y ajustar la cantidad de cada una si hace falta.
- Se pueden borrar piezas guardadas con la "×" de cada una.

## Notas

- Se sincronizan pedidos, compras, las piezas guardadas, la configuración de la calculadora, los datos de tu negocio y el número de presupuesto.
- Si cargás el mismo pedido desde dos dispositivos a la vez, gana el último cambio que se guardó.
- **Cerrar sesión** está abajo de la lista de pedidos. En un dispositivo que no es tuyo, usá una ventana privada.
- Seguí haciendo copias de seguridad de vez en cuando; ahora también podés restaurarlas y se suben a la nube.
- Al actualizar archivos en GitHub, la app se refresca sola la próxima vez que la abras con internet.

## Instalar en el celular

- **Android (Chrome):** botón "Instalar app" abajo de la lista de pedidos, o menú ⋮ → Instalar aplicación.
- **iPhone (Safari):** Compartir → Agregar a inicio.
