<template>
  <div class="crear-clases-container">
    <div class="volver-container">
      <router-link to="/main_admin">
        <div class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </div>
      </router-link>
    </div>

    <h1>Crear Clases</h1>

    <!-- Botón flotante para móviles -->
    <button class="floating-btn" @click="toggleProfesores">
      <i class="fa fa-users"></i> Profesores
    </button>

    <div class="form-profesores-container">
      <div class="form-container">
        <form @submit.prevent="agregar_clase">
          <!-- Formulario de creación de clases -->
          <div class="form-group">
            <label for="sede">
              <i class="fa fa-building"></i> Sede
            </label>
            <select v-model="sede" id="sede" required>
              <option v-for="sede in sedes" :key="sede" :value="sede">{{ sede }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="nivel">
              <i class="fa fa-graduation-cap"></i> Nivel
            </label>
            <select v-model="nivel" id="nivel" required>
              <option v-for="nivel in nombre_niveles" :key="nivel" :value="nivel">{{ nivel }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="fecha">
              <i class="fa fa-calendar-alt"></i> Fecha
            </label>
            <input type="date" v-model="fecha" required>
          </div>

          <div class="form-group">
            <label for="hora_inicio">
              <i class="fa fa-clock"></i> Hora De Inicio
            </label>
            <select v-model="hora_inicio" id="hora_inicio" required>
              <option v-for="opcion in opcionesHora" :key="opcion.value" :value="opcion.value">
                {{ opcion.label }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="hora_fin">
              <i class="fa fa-clock"></i> Hora De Finalización
            </label>
            <input type="time" :value="hora_fin" disabled>
          </div>

          <div class="form-group">
            <label for="documento_profesor">
              <i class="fa fa-id-card"></i> Documento del profesor
            </label>
            <input type="text" v-model="documento_profesor" required>
          </div>

          <div class="form-group">
            <label for="cupos">
              <i class="fa fa-users"></i> Cupos de la clase
            </label>
            <input type="number" v-model="cupos" min="1" max="100" required>
          </div>

          <button type="submit" class="submit-btn">Crear Clase</button>
        </form>
        <div v-if="error_mensaje" class="clase_error">
          <i class="fa fa-exclamation"></i>&nbsp;{{ error_mensaje }}
        </div>
      </div>

      <!-- Contenedor de profesores (oculto en móviles por defecto) -->
      <div class="profesores-container" :class="{ 'mobile-visible': showProfesores }">
        <div class="profesores-search">
          <span class="protit">Profesores</span>
          <form @submit.prevent="buscarProfesores">
            <div class="search-bar">
              <button type="button" class="fa fa-arrow-left search_l_bttn" @click="restablecerBusqueda"></button>
              <input type="text" class="busqueda_adver" placeholder="Buscar por nombre" v-model="busquedaProfesor">
              <button type="submit" class="fa fa-search search_r_bttn"></button>
            </div>
          </form>
        </div>

        <div v-for="profesor in profesores" :key="profesor.documento" class="profesor-item" @click="seleccionarProfesor(profesor)">
          <p><strong>Documento:</strong> {{ profesor.documento }}</p>
          <p><strong>Nombre:</strong> {{ profesor.nombre }} {{ profesor.apellido }}</p>
        </div>
      </div>
    </div>

    <!-- Mostrar el profesor seleccionado -->
    <div v-if="profesorSeleccionado" class="profesor-seleccionado">
      <p><strong>Profesor seleccionado:</strong> {{ profesorSeleccionado.nombre }} {{ profesorSeleccionado.apellido }}</p>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from '../Footer_Login/Footer.vue';
import header_sin_login from '../Headers/header_sin_login.vue';

// Campos del formulario
const nivel = ref('');
const hora_inicio = ref('');
const hora_fin = ref('');
const fecha = ref('');
const documento_profesor = ref('');
const cupos = ref(0);
const sede = ref('');
const error_mensaje = ref('');

// Sedes y niveles
const sedes = ['madrid', 'mosquera', 'funza', 'facatativa', 'bogota'];
const nombre_niveles = ref([]);
const profesores = ref([]);
const busquedaProfesor = ref('');

// Control de visibilidad del apartado de profesores
const showProfesores = ref(false);
const profesorSeleccionado = ref(null);

const opcionesHora = [
  { value: '08:00', label: '08:00  a. m.' },
  { value: '10:00', label: '10:00  a. m.' },
  { value: '16:00', label: '04:00  p. m.' },
  { value: '18:00', label: '06:00  p. m.' }
];

watch(hora_inicio, (nuevaHora) => {
  if (nuevaHora) {
    const [horas, minutos] = nuevaHora.split(':').map(Number);
    const nuevaHoraFin = new Date(0, 0, 0, horas + 2, minutos);
    hora_fin.value = nuevaHoraFin.toTimeString().slice(0, 5);
  }
});

const agregar_clase = async () => {
  try {
    const response = await axios.post('http://localhost:8000/añadirclase', {
      sede: sede.value,
      nivel: nivel.value,
      hora_inicio: hora_inicio.value,
      hora_fin: hora_fin.value,
      fecha: fecha.value,
      documento_profesor: documento_profesor.value,
      cupos: cupos.value,
    });
    Swal.fire({
      icon: 'success',
      title: 'Clase creada con éxito',
      timer: 2000,
      showConfirmButton: false,
    });
  } catch (error) {
    let mensajeError = error.response?.data.detail || 'Algo salió mal. Intenta nuevamente.';
    error_mensaje.value = mensajeError;
  }
};

const obtener_profesores = async () => {
  try {
    const response = await axios.get('http://localhost:8000/obtenerprofesores');
    profesores.value = response.data;
  } catch (error) {
    console.error("Error al capturar los profesores", error);
  }
};

const buscarProfesores = async () => {
  try {
    const response = await axios.get('http://localhost:8000/buscarprofesores', {
      params: { nombre: busquedaProfesor.value }
    });
    profesores.value = response.data;
  } catch (error) {
    console.error("Error al buscar profesores", error);
  }
};

const consultar_niveles = async () => {
  try {
    const response = await axios.get('http://localhost:8000/obtenernombreniveles');
    nombre_niveles.value = response.data;
  } catch (error) {
    console.error("Error al capturar los niveles", error);
  }
};

const restablecerBusqueda = () => {
  busquedaProfesor.value = '';
  obtener_profesores();
};

const seleccionarProfesor = (profesor) => {
  profesorSeleccionado.value = profesor;
  documento_profesor.value = profesor.documento;
  showProfesores.value = false; // Cerrar el modal después de seleccionar
  document.body.style.overflow = 'auto'; // Permitir scroll cuando se selecciona un profesor
};

const toggleProfesores = () => {
  showProfesores.value = !showProfesores.value;
  
  if (showProfesores.value) {
    document.body.style.overflow = 'hidden'; // Desactivar scroll cuando showProfesores es true
  } else {
    document.body.style.overflow = 'auto'; // Permitir scroll cuando showProfesores es false
  }
};

onMounted(() => {
  consultar_niveles();
  obtener_profesores();
});
</script>


<style scoped>
.crear-clases-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  background-color: #F9F9F9;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10vh;
  position: relative;
}

.volver-container {
  display: flex;
  justify-content: flex-start;
}

.back-button {
  background-color: transparent;
  border: none;
  color: #7fa1c3;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.back-button i {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.back-button:hover {
  color: #83b4ff;
}

h1 {
  text-align: center;
  color: #83B4FF;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.form-profesores-container {
  display: flex;
  gap: 20px;
}

.form-container {
  flex: 1;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  overflow: hidden;
}

.form-group {
  margin-bottom: 12px;
}

label {
  display: block;
  font-weight: bold;
  color: #7FA1C3;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  background-color: #F0F0F0;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
select:focus {
  border-color: #7FA1C3;
  outline: none;
  box-shadow: 0 0 5px rgba(127, 161, 195, 0.6), 0 0 10px rgba(127, 161, 195, 0.3);
}

button.submit-btn {
  background-color: #7FA1C3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button.submit-btn:hover {
  background-color: #83B4FF;
}

.profesores-container {
  flex: 1;
  background-color: #fff;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  overflow-y: scroll;
  max-height: 500px;
}



.profesores-search {
      position: sticky;
      padding-top: 15px;
      top: 0;
      background-color: #fff; 
      z-index: 1; 
      margin-bottom: 10px; 
      border-bottom: 2px solid #83B4FF; 
      }
  

.search-bar {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #83B4FF;
  border-radius: 4px 0 0 4px;
  background-color: #F0F0F0;
}

.search_r_bttn,
.search_l_bttn {
  background-color: #7FA1C3;
  color: white;
  padding: 8px;
  cursor: pointer;
  border: none;
  height: 34px;
}

.search_r_bttn {
  border-radius: 0 4px 4px 0;
}

.search_l_bttn {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.profesor-item {
  padding: 8px 0;
  border-bottom: 1px solid #83B4FF;
  cursor: pointer;
}

.profesor-item:hover {
  background-color: rgb(240, 240, 240);
}

.busqueda_adver::placeholder {
  color: black;
}

.protit {
  color: #7fa1c3;
  font-size: 20px;
  font-weight: bold;
}

strong {
  color: #7FA1C3;
}

.clase_error {
  color: red;
  font-size: 17px;
  margin-top: 10px;
}


.floating-btn {
  display: none;
}

.profesor-seleccionado {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f4fa;
    border-radius: 8px;
    border: 1px solid #83B4FF;
    text-align: center;
  }


/* Estilos para móviles */
@media (max-width: 768px) {
  .form-profesores-container {
    flex-direction: row;
    align-items: center;
  }

  .form-container{
    margin-left: auto;
    margin-right: auto;
  }

  .profesores-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 100px); /* Deja un margen de 30px a la derecha */
  height: 100%; /* Asegura que ocupe toda la altura de la pantalla */
  max-height: 100vh; /* Máxima altura igual a la altura del viewport */
  background-color: white;
  z-index: 999;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  overflow-y: auto; /* Permite scroll vertical */
  border-left: 2px #83B4FF solid;
  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.5);/* Añade una sombra para oscurecer un poquito el fondo */
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%); /* Empieza fuera de la pantalla a la izquierda */
}

.profesores-container.mobile-visible {
  transform: translateX(0); /* Se desplaza hacia dentro de la pantalla cuando está visible */
}

/* Fondo oscurecido */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Asegura que ocupe toda la altura de la pantalla */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.overlay.show {
  display: block;
}


  
  .profesores-container.mobile-visible {
    display: block;
  }

  .floating-btn {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #83B4FF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }


}
</style>