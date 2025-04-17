<script setup>
import {ref,onMounted}from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import header_sin_login from '../Headers/header_sin_login.vue';
import Footer from '../Footer_Login/Footer.vue';

const usuario=ref(null)
const observaciones = ref([]); // Lista para almacenar las observaciones obtenidas
const router = useRouter();
const fecha=  ref('')
const buscarObservaciones = async () => {
  try {
    // Realiza la solicitud GET al endpoint de FastAPI
    const response = await axios.get(`https://apiracadipy-production.up.railway.app/filtro_ObservadoresDocumento/${usuario.value.documento}` ) ;
    
    // Asigna la respuesta a la variable observaciones
    observaciones.value = response.data;

    // Mostrar notificación de éxito si se encontraron observaciones
    if (observaciones.value.length > 0) {
      console.log(response.data)

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
    const response = await axios.get(`https://apiracadipy-production.up.railway.app/filtro_ObservadoresFecha/${usuario.value.documento}/${fecha.value}`);
    
    // Asigna la respuesta a la variable observaciones
    observaciones.value = response.data;

    // Mostrar notificación de éxito si se encontraron observaciones
    if (observaciones.value.length > 0) {
      console.log(response.data)
    } 
    
  } catch (error) {
    console.error('Error al buscar observaciones:', error);
    Swal.fire({
      icon: 'error',
      title: 'Recuerda colocar la fecha ;)',
      timer:2000,
      showConfirmButton: false
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
          const response = await axios.get('https://apiracadipy-production.up.railway.app/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          usuario.value = response.data; // Asigna los datos del usuario
          console.log(usuario.value.documento)
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
  <header_sin_login />

  <div class="containerMadre_observadorEstudiante">
    <div class="volver-container">
      <router-link to="/main_estudiante">
        <div class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </div>
      </router-link>
    </div>

    <div class="cont_MostrarObservacionesEstudiante">
      <h2 class="titulos_observadorEstudiante">Observaciones</h2>
      <div class="muestra_observacionesEstudiante" v-if="observaciones.length > 0">
        <div class="observation-item" v-for="observacion in observaciones" :key="observacion.id_observacion">
          <p><strong>Fecha:</strong> {{ observacion.fecha }}</p>
          <p>{{ observacion.descripcion }}</p>
          <p><strong>Creada por:</strong> {{ observacion.creada_por }}</p>
        </div>
      </div>
      <div v-else>
        Sin Observaciones
      </div>
      
      <div class="seccion_Filtrar_ObservacionesEstudiante">
        <h2 class="titulos_observadorEstudiante">Filtrar por fecha</h2>
        <form @submit.prevent="buscarObservacionesFeceha">
          <input type="date" id="filter-date" placeholder="Ingrese fecha" v-model="fecha">
          <button class="btnFiltar_ObservacionesEstudiante">Filtrar</button>
        </form>

        <button class="btnFiltar_ObservacionesEstudiante2" @click="restablecer_observaciones">Mostrar observaciones</button>
      </div>
    </div>
  </div>

  <Footer/>
</template>


<style scoped>
.containerMadre_observadorEstudiante {
  display: flex;
  flex-direction: column; /* Asegúrate de que el contenido se alinee verticalmente */
  gap: 30px;
  padding: 20px;
  width: 60%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  position: relative; /* Agregar esto para que los elementos hijos se posicionen respecto a este contenedor */
}

.volver-container {
  position: absolute; /* Posiciona el botón absolutamente */
  top: 15px; /* Ajusta según sea necesario */
  left: 15px; /* Ajusta según sea necesario */
  z-index: 1; /* Asegúrate de que esté por encima de otros elementos */
}

.cont_MostrarObservacionesEstudiante  {
  width: 100%;
  background-color: #6bc7ec00;
}

.titulos_observadorEstudiante  {
  color:#6bc8ec;
  margin-bottom: 20px;
  font-weight: bold;
  margin-top: 5vh;
  font-size: 20px;
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

.back-button {
  background-color: transparent; 
  border: none; 
  color: #6bc8ec; 
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease; 
}

.back-button i {
  margin-right: 0.5rem; 
  font-size: 1.5rem; 
}

.back-button:hover {
  color: #83b4ff; 
}



/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .containerMadre_observadorEstudiante {
    width: 90%; /* Ajuste de ancho para tablets */
    margin-top: 3%; /* Margen superior reducido */
    padding: 15px; /* Padding reducido */
  }

  .titulos_observadorEstudiante {
    font-size: 1.2em; /* 1.2em = 19.2px */
    margin-top: 5vh; /* Margen superior reducido */
  }

  .muestra_observacionesEstudiante {
    height: 250px; /* Altura reducida */
  }

  .seccion_Filtrar_ObservacionesEstudiante input {
    width: calc(100% - 80px); /* Ajuste de ancho para el input */
  }

  .btnFiltar_ObservacionesEstudiante,
  .btnFiltar_ObservacionesEstudiante2 {
    padding: 8px 12px; /* Padding reducido */
    font-size: 0.9em; /* 0.9em = 14.4px */
  }

  .back-button {
    font-size: 1em; /* 1em = 16px */
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .containerMadre_observadorEstudiante {
    width: 95%; /* Ajuste de ancho para celulares */
    margin-top: 2%; /* Margen superior reducido */
    padding: 10px; /* Padding reducido */
  }

  .titulos_observadorEstudiante {
    font-size: 1em; /* 1em = 16px */
    margin-top: 6vh; /* Margen superior reducido */
    font-size: 110%;
  }

  .muestra_observacionesEstudiante {
    height: 200px; /* Altura reducida */
  }

  .seccion_Filtrar_ObservacionesEstudiante input {
    width: 90%; /* Ancho completo para el input */
    margin-bottom: 10px; /* Margen inferior añadido */
  }

  .btnFiltar_ObservacionesEstudiante,
  .btnFiltar_ObservacionesEstudiante2 {
    width: 100%; /* Ancho completo para los botones */
    padding: 10px; /* Padding ajustado */
    font-size: 0.8em; /* 0.8em = 12.8px */
    margin-top: 10px; /* Margen superior añadido */
  }

  .back-button {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }
}
</style>
