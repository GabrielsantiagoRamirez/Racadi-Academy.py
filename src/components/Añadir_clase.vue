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
  
      <h1>Crear Clases</h1>
  
      <div class="form-profesores-container">
        <div class="form-container">
          <form @submit.prevent="agregar_clase">
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
              <input type="time" v-model="hora_inicio" required>
            </div>
  
            <div class="form-group">
              <label for="hora_fin">
                <i class="fa fa-clock"></i> Hora De Finalización
              </label>
              <input type="time" v-model="hora_fin" required>
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
          <div v-if="error_mensaje" class="clase_error"> <i class="fa fa-exclamation"></i>&nbsp;{{ error_mensaje }}</div>
        </div>
  
        <div class="profesores-container">
          <div class="profesores-search">
            <span class="protit">Profesores</span>
            <form @submit.prevent="buscarProfesores">
              <div class="search-bar">
                <button type="button" class="fa fa-arrow-left search_l_bttn " @click="restablecerBusqueda"></button>
                <input type="text" class="busqueda_adver" placeholder="Buscar por nombre" v-model="busquedaProfesor">
                <button type="submit" class="fa fa-search search_r_bttn "></button>
              </div>
            </form>
          </div>
  
          <div v-for="profesor in profesores" :key="profesor.documento" class="profesor-item">
            <p><strong>Documento:</strong> {{ profesor.documento }}</p>
            <p><strong>Nombre:</strong> {{ profesor.nombre }} {{ profesor.apellido }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import header_sin_login from './header_sin_login.vue';
  import Footer from './Footer.vue';
  
  // Campos del formulario
  const nivel = ref('');
  const hora_inicio = ref('');
  const hora_fin = ref('');
  const fecha = ref('');
  const documento_profesor = ref('');
  const cupos = ref(0);
  const sede = ref('');
  const error_mensaje= ref('');
  
  // Sedes y niveles
  const sedes = ['madrid', 'mosquera', 'funza', 'facatativa', 'bogota'];
  const nombre_niveles = ref([]);
  const profesores = ref([]);
  const busquedaProfesor = ref('');
  
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
      error_mensaje.value=mensajeError
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
      profesores.value = response.data; // Actualiza la lista de profesores con los resultados de búsqueda
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
  }

  .volver-container {
    margin-bottom: 20px;
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
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }

  .profesores-search {
    margin-bottom: 10px;
  }

  .search-bar {
    display: flex;
    align-items: center;
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
  }
  .busqueda_adver::placeholder{
    color: black;
  }
  .protit{
    color: #7fa1c3;
    font-size: 18px;
    
  }
  strong {
    color: #7FA1C3;
  }
  .clase_error{
    color: red;
    font-size: 17;
    margin-top: 10px;
  }
</style>
