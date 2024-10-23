<script setup>
import header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';
import {ref,onMounted}from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';


const documento = ref('')
const descripcion = ref('')
const usuario=ref(null)
const router = useRouter();


const añadir_observacion=async()=>{
  try{
   const response= await axios.post("http://127.0.0.1:8000/añadirObservacion",{
    descripcion:descripcion.value,
    documento:documento.value,
    creada_por:usuario.value.usuario
    
   })
   Swal.fire({
    icon:'success',
    title:'Observacion registrada',
    text:'Observacion agregada exitosamente'
    

   })
  }catch (error) {
        if (error.response && error.response.data.detail) {
            let mensajeError = error.response.data.detail;

            // Si mensajeError es un objeto se convierte a string para mostrarlo
            if (typeof mensajeError === 'object') {
                mensajeError = JSON.stringify(mensajeError);
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: mensajeError // Muestra el detalle del error
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo salió mal. Intenta nuevamente.',
            });
        }
    }
}
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

        } catch (error) {
          console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }

      };
  
      onMounted(fetchUserProfile); // Llama a la función al montar el componente
  

const documentoFiltro = ref('')
const observaciones = ref([]); // Lista para almacenar las observaciones obtenidas
const buscarObservaciones = async () => {
  try {
    // Realiza la solicitud GET al endpoint de FastAPI
    const response = await axios.get(`http://127.0.0.1:8000/filtro_ObservadoresDocumento/${documentoFiltro.value}`);
    
    // Asigna la respuesta a la variable observaciones
    observaciones.value = response.data;

  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar observaciones:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.detail || 'Ocurrió un error al buscar las observaciones'
    });
    observaciones.value=null
  }
};

</script>

<template>
  <header_sin_login/>

<div class="containerMadre_observadorAdmin">
    <div class="cont_MostrarObservacionesAdmin">
      <h2 class="titulos_observadorAdmnin ">Busca Observaciones De Un Estudiante</h2>
      <div class="muestra_observacionesAdmin">
        <!-- Aquí se mostrarán las observaciones -->
        
        <div v-if=" observaciones.length">
         <div class="observation-item" v-for="observacion in observaciones" :key="observacion.id">
           <p><strong>Fecha:</strong> {{ observacion.fecha }}</p>
           <p><strong>Documento:</strong> {{ observacion.documento }}</p>
           <p>{{ observacion.descripcion }}</p>
        </div>
       </div>
       <div v-else>
          No hay observaciones
        </div>
        
        
        <!-- Más observaciones -->
      </div>

      <div class="seccion_Filtrar_ObservacionesAdmin">
        <h2 class="titulos_observadorAdmnin ">Filtrar por documento</h2>
        <input v-model="documentoFiltro" required type="text" id="filter-doc" placeholder="Ingrese documento">
        <button @click="buscarObservaciones" class="btnFiltar_ObservacionesAdmin">Filtrar</button>
      </div>
    </div>

    <div class="cont_AgregarObservador">
      <h2 class="titulos_observadorAdmnin ">Agregar Observación</h2>
      <form @submit.prevent="añadir_observacion"   class="Form_Agregarobservacion">
        

        <div class="contTitulo_seccionesAgregrarObservaciones">
          <label for="document">Documento:</label>
          <input type="text" id="document" name="document" v-model="documento" required>
        </div>

        <div class="contTitulo_seccionesAgregrarObservaciones">
          <label for="text">Observación:</label>
          <input  id="text" name="text" type="text" placeholder="Escribe la observación..." v-model="descripcion" required>
        </div>

        <button type="submit" class="btn_AgregarObseracionAdmin">Agregar Observación</button>
      </form>
    </div>
  </div>
  <Footer/>

</template>

<style>


.containerMadre_observadorAdmin {
  display: flex;
  gap: 30px;
  padding: 20px;
  width: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}

.cont_MostrarObservacionesAdmin{
  width: 50%;
  background-color: #6bc7ec00;
}

.titulos_observadorAdmnin {
  color:#6bc8ec;
  margin-bottom: 20px;
  font-weight: bold;
}

.muestra_observacionesAdmin{
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

.seccion_Filtrar_ObservacionesAdmin {
  margin-top: 20px;
  background-color: #6bc7ec00;
}

.seccion_Filtrar_ObservacionesAdmin input {
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.btnFiltar_ObservacionesAdmin{
  background-color:#6bc8ec;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.cont_AgregarObservador {
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-bottom: 15px;
  
}   .Form_Agregarobservacion label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

     .Form_Agregarobservacion input {
       width: 100%;
       padding: 10px;
       border: 1px solid #ccc;
       border-radius: 5px;
     }
     .Form_Agregarobservacion textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }


.contTitulo_seccionesAgregrarObservaciones {
  margin-bottom: 15px;
  
}      
.btn_AgregarObseracionAdmin {
  background-color: #6bc8ec;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}



</style>