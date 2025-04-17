<template>
  <div class="form-container">
    <h1 class="form-title">Añadir Estudiante</h1>
    <form @submit.prevent="añadir_estudiante" class="form">
      <div class="form-group">
        <label for="documento">
          <i class="fa fa-id-card"></i> Documento
        </label>
        <input type="text" v-model="documento" id="documento" required>
      </div>
      <div class="form-group">
        <label for="tipo_de_documento">
          <i class="fa fa-file-alt"></i> Tipo de Documento
        </label>
        <select v-model="tipo_documento" id="tipo_de_documento" required>
          <option v-for="tipo in tipos_documento" :key="tipo" :value="tipo">{{ tipo }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nombre">
          <i class="fa fa-user"></i> Nombre
        </label>
        <input type="text" v-model="nombre" id="nombre" required>
      </div>

      <div class="form-group">
        <label for="apellido">
          <i class="fa fa-user-tag"></i> Apellido
        </label>
        <input type="text" v-model="apellido" id="apellido" required>
      </div>

      <div class="form-group">
        <label for="fecha_nacimiento">
          <i class="fa fa-calendar-alt"></i> Fecha De Nacimiento
        </label>
        <input type="date" v-model="fecha_nacimiento" id="fecha_nacimiento" required>
      </div>

      <div class="form-group">
        <label for="genero">
          <i class="fa fa-venus-mars"></i> Género
        </label>
        <select v-model="genero" id="genero">
          <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="celular">
          <i class="fa fa-phone"></i> Celular
        </label>
        <input type="text" v-model="celular" id="celular" required>
      </div>

      <div class="form-group">
        <label for="correo">
          <i class="fa fa-envelope"></i> Correo
        </label>
        <input type="email" v-model="correo" id="correo" required>
      </div>

      <div class="form-group">
        <label for="direccion">
          <i class="fa fa-map-marker-alt"></i> Dirección
        </label>
        <input type="text" v-model="direccion" id="direccion" required>
      </div>

      <div class="form-group">
        <label for="sede">
          <i class="fa fa-building"></i> Sede
        </label>
        <select v-model="sede" id="sede" required>
          <option v-for="opcion in sedes" :key="opcion" :value="opcion">{{ opcion }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="usuario">
          <i class="fa fa-user-circle"></i> Usuario
        </label>
        <input type="text" v-model="usuario" id="usuario" required>
      </div>

      <div class="form-group">
        <label for="contraseña">
          <i class="fa fa-lock"></i> Contraseña
        </label>
        <input type="text" v-model="contraseña" id="contraseña" required>
      </div>

      <div class="form-group">
        <label for="nivel_actual">
          <i class="fa fa-graduation-cap"></i> Nivel actual
        </label>
        <select v-model="nivel_actual" id="nivel_actual" required>
          <option v-for="nivel in nombre_niveles" :key="nivel" :value="nivel">{{ nivel }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="plan">
          <i class="fa fa-clipboard-list"></i> Plan
        </label>
        <select v-model="plan" id="plan" required>
          <option v-for="nombre in nombre_planes" :key="nombre" :value="nombre">{{ nombre }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="file">
          <i class="fa fa-image"></i> Foto de Perfil
        </label>
        <input type="file" @change="onFileChange" id="file" >
      </div>

      <button type="submit" class="submit-button">
        <i class="fa fa-save"></i> Guardar Estudiante
      </button>
    </form>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const tipos_documento = ['cedula', 'cedula extranjera', 'tarjeta de identidad'];
const sedes = ['madrid', 'mosquera', 'funza', 'facatativa', 'bogota'];
const generos = ["masculino", "femenino", "otro"];

const documento = ref("");
const tipo_documento = ref("");
const nombre = ref("");
const apellido = ref("");
const fecha_nacimiento = ref("");
const genero = ref("");
const celular = ref("");
const correo = ref("");
const direccion = ref("");
const usuario = ref("");
const contraseña = ref("");
const sede = ref("");
const nivel_actual = ref("");
const plan = ref("");
const file = ref(null);

const nombre_planes = ref([]);
const nombre_niveles = ref([]);
const onFileChange = (event) => {
  file.value = event.target.files[0];
};

const añadir_estudiante = async () => {
  try {
    const formData = new FormData();
    formData.append("documento", documento.value);
    formData.append("tipo_de_documento", tipo_documento.value);
    formData.append("nombre", nombre.value);
    formData.append("apellido", apellido.value);
    formData.append("fecha_nacimiento", fecha_nacimiento.value);
    formData.append("genero", genero.value);
    formData.append("celular", celular.value);
    formData.append("correo", correo.value);
    formData.append("direccion", direccion.value);
    formData.append("sede", sede.value);
    formData.append("usuario", usuario.value);
    formData.append("contraseña", contraseña.value);
    formData.append("nivel_actual", nivel_actual.value);
    formData.append("plan", plan.value);
    if (file.value) {
      formData.append("file", file.value); 
    } 

    const response = await axios.post("https://apiracadipy-production.up.railway.app/añadirestudiante", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    Swal.fire({
      icon: "success",
      title: "Estudiante registrado con éxito",
      timer: 2000,
      showConfirmButton: false,
    });
  } catch (error) {
  console.error("Error de entidad:", error);
  const mensajeError = error.response?.data.detail || "Algo salió mal. Intenta nuevamente.";
  Swal.fire({
    icon: "error",
    title: mensajeError,
  });
}

};

const consultar_planes = async () => {
  try {
    const response = await axios.get("https://apiracadipy-production.up.railway.app/obtenernombreplanes");
    nombre_planes.value = response.data;
  } catch (error) {
    console.log("Error al capturar los planes", error);
  }
};

const consultar_niveles = async () => {
  try {
    const response = await axios.get("https://apiracadipy-production.up.railway.app/obtenernombreniveles");
    nombre_niveles.value = response.data;
  } catch (error) {
    console.log("Error al capturar los niveles", error);
  }
};

onMounted(consultar_niveles);
onMounted(consultar_planes);
</script>

<style scoped>
.form-container {
  background-color: #ffffffd8;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 0px 8px rgba(128, 193, 255, 0.747);
  transition: all 0.3s ease;
}

.form-title {
  color: #7fa1c3;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: space-between;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.6rem); 
}

.form-group label {
  font-size: 1rem;
  color: #83b4ff;
  margin-bottom: 0.5rem;
}

input[type="date"]::placeholder {
  color: #83b4ff; 
}

.form-group input,
.form-group select {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #7fa1c3;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: #ffffff;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #83b4ff;
  box-shadow: 0px 0px 8px rgba(131, 180, 255, 0.5);
}

option {
  background-color: #f5eded;
  color: #333;
  padding: 0.5rem;
}

.submit-button {
  background-color: #83b4ff;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.submit-button:hover {
  background-color: #7fa1c3;
}

.fa {
  margin-right: 0.5rem;
  color: #83b4ff;
}

/* Media Queries for Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .form-container {
    padding: 1.5rem;
    max-width: 500px;
  }
  
  .form-title {
    font-size: 1.7rem;
  }
  
  .form-group {
    width: 100%; /* Stack form groups vertically on tablets */
  }
  
  .submit-button {
    padding: 0.7rem 1.3rem;
    font-size: 1.1rem;
  }
}

/* Media Queries for Mobile (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .form-container {
    padding: 1.2rem;
    margin: 0 1rem;
    border-radius: 8px;
  }
  
  .form-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  .form {
    gap: 1rem;
  }
  
  .form-group {
    width: 100%;
  }
  
  .form-group label {
    font-size: 0.9rem;
  }
  
  .form-group input,
  .form-group select {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
  
  .submit-button {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }
  
  .fa {
    margin-right: 0.3rem;
    font-size: 0.9rem;
  }
}
</style>