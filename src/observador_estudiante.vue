<script setup>
import {ref,onMounted}from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const usuario=ref(null)
const observaciones = ref([]); // Lista para almacenar las observaciones obtenidas
const router = useRouter();
const fecha=  ref('')
const buscarObservaciones = async () => {
  try {
    // Realiza la solicitud GET al endpoint de FastAPI
    const response = await axios.get(`http://127.0.0.1:8000/filtro_ObservadoresDocumento/${usuario.value.documento}`);
    
    // Asigna la respuesta a la variable observaciones
    observaciones.value = response.data;

    // Mostrar notificación de éxito si se encontraron observaciones
    if (observaciones.value.length > 0) {
      console.log(response.data)

    } else {
      // Notificación si no se encontraron observaciones
      Swal.fire({
        icon: 'warning',
        title: 'Sin observaciones',
        text: `No se encontraron observaciones para el documento `
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar observaciones:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.detail || 'Ocurrió un error al buscar las observaciones'
    });
  }
};

const buscarObservacionesFeceha = async () => {
  try {
    // Realiza la solicitud GET al endpoint de FastAPI
    const response = await axios.get(`http://127.0.0.1:8000/filtro_ObservadoresFecha/${usuario.value.documento}/${fecha.value}`);
    
    // Asigna la respuesta a la variable observaciones
    observaciones.value = response.data;

    // Mostrar notificación de éxito si se encontraron observaciones
    if (observaciones.value.length > 0) {
      console.log(response.data)

    } else {
      // Notificación si no se encontraron observaciones
      Swal.fire({
        icon: 'warning',
        title: 'Sin observaciones',
        text: `No se encontraron observaciones para el documento `
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar observaciones:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.detail || 'Ocurrió un error al buscar las observaciones'
    });
  }
};

const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push("/login");
          return; // Salir de la función si no hay token
        }
        try {
          const response = await axios.get('http://localhost:8000/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          usuario.value = response.data; // Asigna los datos del usuario
          console.log(usuario)
          await buscarObservaciones()
        } catch (error) {
          console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }

      };

      const restablecer_observaciones = async ()=>{
        fecha.value=""
        buscarObservaciones()
      }
  

      onMounted(fetchUserProfile);



</script>

<template>
<div class="containerMadre_observadorEstudiante">
  <div class="cont_MostrarObservacionesEstudiante">
    <h2 class="titulos_observadorEstudiante ">Observaciones</h2>
    <div class="muestra_observacionesEstudiante" >
      <!-- Aquí se mostrarán las observaciones -->
      <div class="observation-item" v-for="observacion in observaciones" :key="observacion
    .id_observacion">
        <p><strong>Fecha:</strong> {{ observacion.fecha }}</p>
        <p>{{ observacion.descripcion }}</p>
      </div>
    </div>
    
    <div class="seccion_Filtrar_ObservacionesEstudiante">
      <h2 class="titulos_observadorEstudiante ">Filtrar por fecha</h2>
      <form @submit.prevent="buscarObservacionesFeceha">
        <input type="date" id="filter-date" placeholder="Ingrese fecha" v-model="fecha">
        <button class="btnFiltar_ObservacionesEstudiante">Filtrar</button>
      </form>

      <button class="btnFiltar_ObservacionesEstudiante2" @click="restablecer_observaciones">Mostrar observaciones</button>
      
    </div>
  </div>
</div>

</template>

<style>
.containerMadre_observadorEstudiante {
  display: flex;
  gap: 30px;
  padding: 20px;
  width: 60%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}

.cont_MostrarObservacionesEstudiante  {
  width: 100%;
  background-color: #6bc7ec00;
}

.titulos_observadorEstudiante  {
  color:#6bc8ec;
  margin-bottom: 20px;
  font-weight: bold;
}

.muestra_observacionesEstudiante  {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.observation-item {
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.seccion_Filtrar_ObservacionesEstudiante  {
  margin-top: 20px;
  background-color: #6bc7ec00;
}

.seccion_Filtrar_ObservacionesEstudiante  input {
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.btnFiltar_ObservacionesEstudiante  {
  background-color:#6bc8ec;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 2%;
  
}
.btnFiltar_ObservacionesEstudiante2 {
  background-color:#6bc8ec;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;

  margin-top: 2%;
  
}
</style>