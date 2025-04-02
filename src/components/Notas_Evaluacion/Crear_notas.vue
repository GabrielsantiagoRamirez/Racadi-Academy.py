<template>
  <header_sin_login/>
    <div class="crear-clases-container">
      <div class="volver-container">
        <router-link to="/main_admin">
          <div class="back-button">
            <i class="fa fa-arrow-left"></i> Volver
          </div>
        </router-link>
      </div>
  
      <h1>Resultados De Evaluacion</h1>

                <!-- Botón flotante para móviles -->
    <button class="floating-btn" @click="toggleEstudiantes">
      <i class="fa fa-users"></i> Estudiantes
    </button>
  
      <div class="form-profesores-container">
        <div class="form-container">
          <form @submit.prevent="agregar_notas">
            <!-- Formulario de creación de notas -->
            <div class="form-group">
              <label for="documento">
                <i class="fa fa-id-card"></i> Documento del estudiante
              </label>
              <input type="text" v-model="documento" required>
            </div>

  
       
            <div class="form-group">
              <label for="spaking">
                <i class="fa fa-comments"></i> Speaking
              </label>
              <input type=number step="0.1" v-model="speaking" required>
            </div>



            <div class="form-group">
              <label for="listening">
                <i class="fa fa-volume-up"></i> Listening
              </label>
              <input type=number step="0.1" v-model="listening" required>
            </div>



            <div class="form-group">
              <label for="reading">
                <i class="fa fa-book"></i> Reading Comprehension
              </label>
              <input type=number step="0.1" v-model="reading" required>
            </div>



            <div class="form-group">
              <label for="writing">
                <i class="fa fa-pencil-alt"></i> Writing
              </label>
              <input type=number step="0.1" v-model="writing" required>
            </div>


            
            <div class="form-group">
              <label for="grammar">
                <i class="fa fa-language"></i> Grammar
              </label>
              <input type=number step="0.1" v-model="grammar" required>
            </div>
  
  
            <button type="submit" class="submit-btn">Subir Notas</button>
          </form>
          <div v-if="error_mensaje" class="clase_error"> <i class="fa fa-exclamation"></i>&nbsp;{{ error_mensaje }}</div>
        </div>
  
        <div class="profesores-container"  :class="{ 'mobile-visible': showEstudiantes }">
          <div class="profesores-search">
            <span class="protit">Estudiantes</span>
            <form @submit.prevent="buscarEstudiantes">
              <div class="search-bar">
                <button type="button" class="fa fa-arrow-left search_l_bttn" @click="restablecerBusqueda"></button>
                <input type="text" class="busqueda_adver" placeholder="Buscar por nombre" v-model="busquedaEstudiante">
                <button type="submit" class="fa fa-search search_r_bttn"></button>
              </div>
            </form>
          </div>
          <div
          v-for="estudiante in estudiantes.filter(e => e.estado)"
            :key="estudiante.documento"
            class="profesor-item"
            :class="{ disabled: estudiante.nivel_actual === 'advanced' }"
            @click="estudiante.nivel_actual !== 'advanced' && seleccionarEstudiante(estudiante)"
          >
            <p><strong>Documento:</strong> {{ estudiante.documento }}</p>
            <p><strong>Nombre:</strong> {{ estudiante.nombre }} {{ estudiante.apellido }}</p>
            <p><strong>Nivel Actual:</strong> {{ estudiante.nivel_actual }}</p>
        </div>

        </div>
      </div>
      <div v-if="estudianteSeleccionado" class="estudiante-seleccionado">
      <p><strong>Estudiante seleccionado:</strong> {{ estudianteSeleccionado.nombre }} {{ estudianteSeleccionado.apellido }}</p>
    </div>
    </div>
    <Footer/>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';
  
  // Campos del formulario
  const documento = ref('');
  const speaking = ref('');
  const listening = ref('');
  const reading = ref('');
  const writing = ref('');
  const grammar = ref('');

  const error_mensaje= ref('');
  
  

  const estudiantes = ref([]);
  const busquedaEstudiante = ref('');

  
  const showEstudiantes = ref(false);
const estudianteSeleccionado = ref(null);
  
  const agregar_notas = async () => {
    try {
        const response = await axios.post('http://localhost:8889/add_notas', null, {
            params: {
                documento: documento.value,
                speaking: speaking.value,
                listening: listening.value,
                reading: reading.value,
                writing: writing.value,
                grammar: grammar.value
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'Notas agregadas con éxito',
            timer: 2000,
            showConfirmButton: false,
        });
    } catch (error) {
        let mensajeError = error.response?.data.detail || 'Algo salió mal. Intenta nuevamente.';
        error_mensaje.value = mensajeError;
    }
};

  
  const obtener_estudiantes = async () => {
    try {
        const response = await axios.get('http://localhost:8889/obtenerestudiantes');
        estudiantes.value = response.data;
    } catch (error) {
        console.error("Error al capturar los estudiantes", error);
    }
  };
  
  const buscarEstudiantes = async () => {
    try {
        const response = await axios.get('http://localhost:8889/buscarestudiantes', {
            params: { nombre: busquedaEstudiante.value }
        });
        estudiantes.value = response.data; 
    } catch (error) {
        console.error("Error al buscar estudiantes", error);
    }
  };
  

  
  const restablecerBusqueda = () => {
    busquedaEstudiante.value = ''; 
    obtener_estudiantes();
  };
  

  const seleccionarEstudiante = (estudiante) => {
  estudianteSeleccionado.value = estudiante;
  documento.value = estudiante.documento;
  error_mensaje.value=""
  showEstudiantes.value = false; // Cerrar el modal después de seleccionar
  document.body.style.overflow = 'auto'; // Permitir scroll cuando se selecciona un profesor
};

const toggleEstudiantes = () => {
  showEstudiantes.value = !showEstudiantes.value;
  
  if (showEstudiantes.value) {
    document.body.style.overflow = 'hidden'; // Desactivar scroll cuando showProfesores es true
  } else {
    document.body.style.overflow = 'auto'; // Permitir scroll cuando showProfesores es false
  }
};
  
  onMounted(() => {
    obtener_estudiantes(); 
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
    padding-left :15px;
    padding-right: 15px;
    padding-bottom :15px;
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
    padding-bottom: 15px; 
    margin-top: 5px;
    }

  
    .search-bar input {
      flex: 1;
      padding: 8px;
      border: 1px solid #83B4FF;
      border-radius: 4px 0 0 4px;
      background-color: #F0F0F0;
    }
  
    .search_r_bttn  {
      background-color: #7FA1C3;
      color: white;
      padding: 8px;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      border: none;
      height: 34px;
    }
  
    .search_l_bttn  {
      background-color: #7FA1C3;
      color: white;
      padding: 8px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      cursor: pointer;
      border: none;
      height: 34px;
    }
  
  
  
  
    .profesores-list {
      max-height: 250px;
      overflow-y: auto;
      border-top: 2px solid #83B4FF;
      padding-top: 10px;
    }
  
    .profesor-item {
      padding: 8px 0;
      border-bottom: 1px solid #83B4FF;
      cursor: pointer;
    }
    .profesor-item:hover{
      background-color: rgb(240, 240, 240);
    }
    .busqueda_adver::placeholder{
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
    .clase_error{
      color: red;
      font-size: 17;
      margin-top: 10px;
    }
    .profesor-item.disabled {
      color: gray;
      cursor: not-allowed;
      opacity: 0.6;
    }

    .floating-btn {
  display: none;
}

.estudiante-seleccionado {
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
  


