# 📇 Agenda de Contactos – Proyecto CRUD con JavaScript

Este proyecto es una agenda de contactos web que permite **agregar**, **ver**, **editar** y **eliminar personas** con nombre, teléfono e imagen. Los datos se almacenan mediante una **API falsa generada con Retool API Generator**, y las imágenes se suben automáticamente a **ImgBB**.

Diseñado completamente con **HTML**, **CSS** y **JavaScript puro**, sin frameworks ni librerías externas salvo **Pico.css** para los estilos base.

---

## 🚀 Funcionalidades

- CRUD completo desde `admin.html`:
  - Crear personas con nombre, teléfono e imagen
  - Subida automática de imágenes a ImgBB
  - Edición y eliminación de registros
- Vista pública en `index.html`:
  - Muestra los contactos en tarjetas visuales
- Interfaz responsive y moderna con **Pico.css** y **Flexbox**
- Código limpio, modular y fácilmente personalizable

---

## 🧱 Tecnologías utilizadas

- **HTML5**
- **CSS3** (Pico.css + Flexbox)
- **JavaScript moderno** (ES6+, Fetch API)
- **[ImgBB API](https://api.imgbb.com/)** (para alojar imágenes)
- **[Retool API Generator](https://retool.com/api-generator/)** (para crear endpoints falsos)

---

## 📁 Estructura del proyecto

```
api3/
├── index.html              # Vista pública (tarjetas de personas)
├── admin.html              # Vista administrativa (CRUD)
│
├── css/
│   ├── style.css           # Estilos compartidos (header, footer)
│   ├── index.css           # Estilos específicos para index.html
│   └── admin.css           # Estilos específicos para admin.html
│
├── js/
│   ├── index.js            # Lógica de carga y renderizado de tarjetas
│   └── admin.js            # Lógica CRUD con subida a ImgBB y Retool API
│
└── README.md               # Este archivo
```

---

## ⚙️ Configuración

1. **Clona el repositorio:**

```bash
git clone https://github.com/dn192246/api3.git
cd api3
```

2. **Configura tu API falsa de Retool:**

Edita las siguientes líneas en `js/admin.js` y `js/index.js`:

```js
const API_URL = 'https://retoolapi.dev/TU_ENDPOINT/tbNombre';
```

3. **Configura tu clave de ImgBB:**

```js
const IMGBB_ENDPOINT = 'https://api.imgbb.com/1/upload?key=TU_API_KEY';
```

Puedes obtener una gratis en [https://api.imgbb.com/](https://api.imgbb.com/).

4. **Abre `admin.html` y `index.html` en el navegador:**

No necesitas servidor web, solo abre los archivos localmente.

---

## 🧑‍💻 Cómo usar

### Vista Administrativa (`admin.html`)

- Rellena los campos de nombre y teléfono
- Adjunta una imagen (se sube automáticamente)
- Puedes editar o eliminar un contacto existente

### Vista Pública (`index.html`)

- Visualiza todas las personas registradas como tarjetas
- Se muestran con imagen, nombre y teléfono
- Diseño adaptable a dispositivos móviles

---

## ✏️ Personalización

- Puedes agregar más campos (correo, dirección, etc.) y extender el CRUD
- Puedes reemplazar ImgBB por otro sistema de hosting si lo deseas
- Modifica fácilmente los estilos desde los archivos `css/`

---

**Autor:** [dn192246](https://github.com/dn192246)
