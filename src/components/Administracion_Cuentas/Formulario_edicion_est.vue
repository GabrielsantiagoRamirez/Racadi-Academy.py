<template>
  <div class="form-container">
    <h1 class="form-title">Editar Informacion Estudiante</h1>
    <form @submit.prevent="actualizar_estudiante" class="form">
      
      <!-- Documento -->
      <div class="form-group">
        <label for="documento">
          <i class="fa fa-id-card"></i> Documento
        </label>
        <input type="text" v-model="documento" id="documento" required  disabled>
        
      </div>
      
      <!-- Tipo de Documento -->
      <div class="form-group">
        <label for="tipo_de_documento">
          <i class="fa fa-file-alt"></i> Tipo de Documento
        </label>
        <select v-model="tipo_documento" id="tipo_de_documento" required>
          <option v-for="tipo in tipos_documento" :key="tipo" :value="tipo">{{ tipo }}</option>
        </select>
      </div>

      <!-- Nombre -->
      <div class="form-group">
        <label for="nombre">
          <i class="fa fa-user"></i> Nombre
        </label>
        <input type="text" v-model="nombre" id="nombre" required disabled>
      </div>

      <!-- Apellido -->
      <div class="form-group">
        <label for="apellido">
          <i class="fa fa-user-tag"></i> Apellido
        </label>
        <input type="text" v-model="apellido" id="apellido" required  disabled>
      </div>

      <!-- Fecha de Nacimiento -->
      <div class="form-group">
        <label for="fecha_nacimiento">
          <i class="fa fa-calendar-alt"></i> Fecha De Nacimiento
        </label>
        <input type="date" v-model="fecha_nacimiento" id="fecha_nacimiento" required  disabled>
      </div>

      <!-- Género -->
      <div class="form-group">
        <label for="genero">
          <i class="fa fa-venus-mars"></i> Género
        </label>
        <select v-model="genero" id="genero" disabled >
          <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
        </select>
      </div>

      <!-- Celular -->
      <div class="form-group">
        <label for="celular">
          <i class="fa fa-phone"></i> Celular
        </label>
        <input type="text" v-model="celular" id="celular" required>
      </div>

      <!-- Correo -->
      <div class="form-group">
        <label for="correo">
          <i class="fa fa-envelope"></i> Correo
        </label>
        <input type="email" v-model="correo" id="correo" required>
      </div>

      <!-- Dirección -->
      <div class="form-group">
        <label for="direccion">
          <i class="fa fa-map-marker-alt"></i> Dirección
        </label>
        <input type="text" v-model="direccion" id="direccion" required>
      </div>

      <!-- Sede -->
      <div class="form-group">
        <label for="sede">
          <i class="fa fa-building"></i> Sede
        </label>
        <select v-model="sede" id="sede" required>
          <option v-for="opcion in sedes" :key="opcion" :value="opcion">{{ opcion }}</option>
        </select>
      </div>

      <!-- Usuario -->
      <div class="form-group">
        <label for="usuario">
          <i class="fa fa-user-circle"></i> Usuario
        </label>
        <input type="text" v-model="usuario" id="usuario" required>
      </div>

      <!-- Contraseña -->
      <div class="form-group">
        <label for="contraseña">
          <i class="fa fa-lock"></i> Contraseña
        </label>
        <input type="password" v-model="contraseña" id="contraseña" required>
      </div>

      <!-- Nivel Actual -->
      <div class="form-group">
        <label for="nivel_actual">
          <i class="fa fa-graduation-cap"></i> Nivel actual
        </label>
        <select v-model="nivel_actual" id="nivel_actual" required disabled>
          <option v-for="nivel in nombre_niveles" :key="nivel" :value="nivel">{{ nivel }}</option>
        </select>
      </div>

      <!-- Plan -->
      <div class="form-group">
        <label for="plan">
          <i class="fa fa-clipboard-list"></i> Plan
        </label>
        <select v-model="plan" id="plan" required disabled>
          <option v-for="nombre in nombre_planes" :key="nombre" :value="nombre">{{ nombre }}</option>
        </select>
      </div>

      <!-- Foto de Perfil -->
      <div class="form-group">
        <label for="file">
          <i class="fa fa-image"></i> Foto de Perfil
        </label>
        <input type="file" @change="onFileChange" id="file">
      </div>

      <button type="submit" class="submit-button">
        <i class="fa fa-save"></i> Editar Informacion
      </button>
    </form>
  </div>
</template>

  
  <script setup>
  import Swal from 'sweetalert2';
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter , useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();

  const estudiante = route.query.estudiante
    ? JSON.parse(route.query.estudiante)
    : null;
  
  const tipos_documento = ['cedula', 'cedula extranjera', 'tarjeta de identidad'];
  const sedes = ['madrid', 'mosquera', 'funza', 'facatativa', 'bogota'];
  const generos = ["masculino", "femenino", "otro"];
  
  const documento = ref(estudiante?.documento || "");
  const tipo_documento = ref(estudiante?.tipo_de_documento ||  "");
  const nombre = ref(estudiante?.nombre ||"");
  const apellido = ref(estudiante?.apellido || "");
  const fecha_nacimiento = ref(estudiante?.fecha_nacimiento ||"");
  const genero = ref(estudiante?.genero ||"");
  const celular = ref(estudiante?.celular ||"");
  const correo = ref(estudiante?.correo ||"");
  const direccion = ref(estudiante?.direccion ||"");
  const usuario = ref(estudiante?.usuario ||"");
  const contraseña = ref(estudiante?.contraseña ||"");
  const sede = ref(estudiante?.sede ||"");
  const nivel_actual = ref(estudiante?.nivel_actual ||"");
  const plan = ref(estudiante?.plan ||"");
  const file = ref(null);
  
  const nombre_planes = ref([]);
  const nombre_niveles = ref([]);
  
  const onFileChange = (event) => {
    file.value = event.target.files[0];
  };
  
  // Función para actualizar el estudiante
  const actualizar_estudiante = async () => {
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

    const response = await axios.put(`https://apiracadipy-production.up.railway.app/actualizarestudiante/${documento.value}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    Swal.fire({
      icon: "success",
      title: "Informacion actualizada con éxito",
    });

    router.push("/editar_eliminar_cuentas/editar_eliminar_estudiantes")


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
    background-color: #fffffff3;
    padding: 1.5rem;
    border-radius: 8px;
    width: 500px;
    box-shadow: 0px 3px 8px rgba(129, 188, 243, 0.747);
    transition: all 0.3s ease;
  }
  
  .form-title {
    color: #7fa1c3;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: calc(50% - 0.5rem); 
  }
  
  .form-group label {
    font-size: 0.9rem;
    color: #83b4ff;
    margin-bottom: 0.4rem;
  }
  
  .form-group input,
  .form-group select {
    padding: 0.6rem;
    font-size: 0.9rem;
    border: 1px solid #e2dad6;
    border-radius: 6px;
    transition: all 0.3s ease;
    background-color: #ffffff;
  }
  
  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: #83b4ff;
    box-shadow: 0px 0px 6px rgba(131, 180, 255, 0.4);
  }
  
  option {
    background-color: #f5eded;
    color: #333;
    padding: 0.4rem;
  }
  
  .submit-button {
    background-color: #83b4ff;
    color: white;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .submit-button:hover {
    background-color: #7fa1c3;
  }
  
  .fa {
    margin-right: 0.4rem;
    color: #83b4ff;
  }
  
  input:disabled,
  select:disabled {
    background-color: #e7e5e5d3;
    cursor: not-allowed;
    border: 1px solid #ddd;
  }
  
  input:disabled:focus,
  select:disabled:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
  .form-container {
    width: 90%; /* Ajustar el ancho para tablets */
    padding: 1rem; /* Reducir el padding */
    margin-left: auto;
    margin-right: auto;
  }

  .form-title {
    font-size: 1.3rem; /* Reducir el tamaño del título */
  }

  .form-group label {
    font-size: 0.85rem; /* Reducir el tamaño de las etiquetas */
  }

  .form-group input,
  .form-group select {
    padding: 0.5rem; /* Reducir el padding de los inputs y selects */
    font-size: 0.85rem; /* Reducir el tamaño de la fuente */
  }

  .submit-button {
    padding: 0.5rem 1rem; /* Reducir el padding del botón */
    font-size: 0.9rem; /* Reducir el tamaño de la fuente */
  }
}

@media (min-width: 150px) and (max-width: 480px) {
  .form-container {
    width: 90%; /* Ajustar el ancho para celulares */
    padding: 0.8rem; /* Reducir el padding */
    border-radius: 6px; /* Reducir el radio de borde */
    margin-right: auto;
    margin-left: auto;
  }

  .form-title {
    font-size: 1.3rem; /* Reducir el tamaño del título */
    margin-bottom: 0.8rem; /* Reducir el margen inferior */
  }

  .form {
    gap: 0.6rem; /* Reducir el espacio entre elementos */
  }

  .form-group {
    width: 100%; /* Hacer que los campos ocupen todo el ancho */
  }

  .form-group label {
    font-size: 0.8rem; /* Reducir el tamaño de las etiquetas */
    margin-bottom: 0.3rem; /* Reducir el margen inferior */
  }

  .form-group input,
  .form-group select {
    padding: 0.4rem; /* Reducir el padding de los inputs y selects */
    font-size: 0.8rem; /* Reducir el tamaño de la fuente */
  }

  .submit-button {
    padding: 0.4rem 0.8rem; /* Reducir el padding del botón */
    font-size: 0.85rem; /* Reducir el tamaño de la fuente */
  }

  .fa {
    margin-right: 0.3rem; /* Reducir el margen del ícono */
  }
}
</style>
