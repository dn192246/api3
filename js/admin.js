const API_URL = 'https://retoolapi.dev/VlEee7/tbProveedores';
const IMG_API_URL = 'https://api.imgbb.com/1/upload?key=99f84e0bab707d47c84f0499ce6af4d7';

const form = document.getElementById('persona-form');
const nombreEl = document.getElementById('nombre');
const telefonoEl = document.getElementById('telefono');
const imagenFileEl = document.getElementById('imagen-file');
const imagenUrlEl = document.getElementById('imagen-url');
const idEl = document.getElementById('persona-id');
const cancelBtn = document.getElementById('btn-cancel');
const submitBtn = document.getElementById('btn-submit');
const tbody = document.getElementById('personas-tbody');

// Carga inicial
window.addEventListener('DOMContentLoaded', CargarPersonas);

async function CargarPersonas() {
  const res = await fetch(API_URL);
  const data = await res.json();
  CargarTabla(data);
}

function CargarTabla(personas) {
  tbody.innerHTML = '';
  personas.forEach(persona => {
    tbody.innerHTML += `
    <tr>
      <td><img src="${persona.imagen}" alt="Foto de ${persona.nombre}" /></td>
      <td>${persona.nombre}</td>
      <td>${persona.telefono}</td>
      <td>
        <button onclick="CargarParaEditar('${persona.id}')">Editar</button>
        <button onclick="BorrarPersona('${persona.id}')">Eliminar</button>
      </td>
    </tr>
    `;
  });
}

async function BorrarPersona(id) {
  if (!confirm('¿Eliminar esta persona?')) return;
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  CargarPersonas();
  alert("El registro fue eliminado");
}

async function CargarParaEditar(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const p = await res.json();

  nombreEl.value = p.nombre;
  telefonoEl.value = p.telefono;
  imagenUrlEl.value = p.imagen;
  imagenFileEl.value = '';
  idEl.value = p.id;

  submitBtn.textContent = 'Actualizar';
  cancelBtn.hidden = false;
}

cancelBtn.addEventListener('click', () => {
  form.reset();
  idEl.value = '';
  submitBtn.textContent = 'Agregar';
  cancelBtn.hidden = true;
});

async function subirImagen(file) {
  const fd = new FormData();
  fd.append('image', file);
  const res = await fetch(IMG_API_URL, { method: 'POST', body: fd });
  const obj = await res.json();
  return obj.data.url;
}

// Usamos addEventListener en lugar de onsubmit
form.addEventListener('submit', async e => {
  e.preventDefault();

  let imageUrl = imagenUrlEl.value;
  if (imagenFileEl.files.length > 0) {
    imageUrl = await subirImagen(imagenFileEl.files[0]);
  }

  const payload = {
    nombre: nombreEl.value,
    telefono: telefonoEl.value,
    imagen: imageUrl
  };

  if (idEl.value) {
    await fetch(`${API_URL}/${idEl.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    alert("Registro actualizado");
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    alert("Registro agregado");
  }

  form.reset();
  cancelBtn.hidden = true;
  submitBtn.textContent = 'Agregar';
  CargarPersonas();
});
