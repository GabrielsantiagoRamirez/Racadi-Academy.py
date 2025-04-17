<script setup>
import header_sin_login from '../Headers/header_sin_login.vue';
import Footer from '../Footer_Login/Footer.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { jwtDecode } from "jwt-decode";

const documento = ref('');
const descripcion = ref('');
const usuario = ref(null);
const router = useRouter();
const estudiantes = ref([]);
const busquedaEstudiante = ref('');
const documentoFiltro = ref('');
const observaciones = ref([]);
const perfilRuta = ref('/main_admin');
const showEstudiantes = ref(false);
const estudianteSeleccionado = ref(null);

// Al cargar el componente, decodifica el token y determina la ruta del perfil
const token = localStorage.getItem('token');
if (token) {
  try {
    const token_decodificado = jwtDecode(token);
    const rol = token_decodificado.rol;

    if (rol === 'profesor') {
      perfilRuta.value = '/main_profesor';
    }
  } catch (error) {
    perfilRuta.value = '/login';
    console.log(error);
  }
}

const añadir_observacion = async () => {
  try {
    await axios.post("apiracadipy-production.up.railway.app/añadirObservacion", {
      descripcion: descripcion.value,
      documento: documento.value,
      creada_por: usuario.value.usuario
    });
    Swal.fire({
      icon: 'success',
      title: 'Observación registrada',
      text: 'Observación agregada exitosamente'
    });

    documento.value=""
    documentoFiltro.value=""
    descripcion.value=""
    estudianteSeleccionado.value=null
    observaciones.value=[]
  } catch (error) {
    const mensajeError = error.response?.data?.detail || 'Algo salió mal. Intenta nuevamente.';
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: typeof mensajeError === 'object' ? JSON.stringify(mensajeError) : mensajeError
    });
  }
};

const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push("/login");
    return;
  }
  try {
    const response = await axios.get('apiracadipy-production.up.railway.app/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    usuario.value = response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    localStorage.removeItem('token');
    router.push('/login');
  }
};

const obtener_estudiantes = async () => {
  try {
    const response = await axios.get('apiracadipy-production.up.railway.app/obtenerestudiantes');
    estudiantes.value = response.data;
  } catch (error) {
    console.error("Error al capturar los estudiantes", error);
  }
};

const buscarEstudiantes = async () => {
  try {
    const response = await axios.get('apiracadipy-production.up.railway.app/buscarestudiantes', {
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

const buscarObservaciones = async () => {
  try {
    const response = await axios.get(`apiracadipy-production.up.railway.app/filtro_ObservadoresDocumento/${documentoFiltro.value}`);
    observaciones.value = response.data;
  } catch (error) {
    console.error('Error al buscar observaciones:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.detail || 'Ocurrió un error al buscar las observaciones'
    });
    observaciones.value = null;
  }
};

const seleccionarEstudiante = (estudiante) => {
  estudianteSeleccionado.value = estudiante;
  documento.value = estudiante.documento;
  documentoFiltro.value = estudiante.documento;
  showEstudiantes.value = false; // Cerrar el modal después de seleccionar
  observaciones.value=[]
  document.body.style.overflow = 'auto'; // Permitir scroll cuando se selecciona un estudiante
  
};

const toggleEstudiantes = () => {
  showEstudiantes.value = !showEstudiantes.value;

  if (showEstudiantes.value) {
    document.body.style.overflow = 'hidden'; // Desactivar scroll cuando showEstudiantes es true
  } else {
    document.body.style.overflow = 'auto'; // Permitir scroll cuando showEstudiantes es false
  }
};

onMounted(fetchUserProfile);
onMounted(obtener_estudiantes);
</script>

<template>
  <header_sin_login/>
  <div class="contpadrepadre">
    <div class="volver-container">
      <router-link :to="perfilRuta">
        <div class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </div>
      </router-link>
    </div>
    <h1>Observaciones</h1>

    <!-- Botón flotante para móviles -->
    <button class="floating-btn" @click="toggleEstudiantes">
      <i class="fa fa-users"></i> Estudiantes
    </button>

    <div class="containerMadre_observadorAdmin">
      <div class="cont_MostrarObservacionesAdmin">
        <h2 class="titulos_observadorAdmnin">Busca Observaciones De Un Estudiante</h2>
        <div class="muestra_observacionesAdmin">
          <div v-if="observaciones.length">
            <div class="observation-item" v-for="observacion in observaciones" :key="observacion.id">
              <p><strong>Fecha:</strong> {{ observacion.fecha }}</p>
              <p><strong>Documento:</strong> {{ observacion.documento }}</p>
              <p>{{ observacion.descripcion }}</p>
              <p><strong>Creada por:</strong> {{ observacion.creada_por }}</p>
            </div>
          </div>
          <div v-else>No hay observaciones</div>
        </div>
        <div class="seccion_Filtrar_ObservacionesAdmin">
          <h2 class="titulos_observadorAdmnin">Filtrar por documento</h2>
          <input v-model="documentoFiltro" required type="text" id="filter-doc" placeholder="Ingrese documento">
          <button @click="buscarObservaciones" class="btnFiltar_ObservacionesAdmin">Filtrar</button>
        </div>
      </div>

      <div class="cont_AgregarObservador">
        <h2 class="titulos_observadorAdmnin">Agregar Observación</h2>
        <form @submit.prevent="añadir_observacion" class="Form_Agregarobservacion">
          <div class="contTitulo_seccionesAgregrarObservaciones">
            <label for="document">Documento:</label>
            <input type="text" id="document" name="document" v-model="documento" required>
          </div>
          <div class="contTitulo_seccionesAgregrarObservaciones">
            <label for="text">Observación:</label>
            <!-- Cambiamos el input por un textarea -->
            <textarea id="text" name="text" placeholder="Escribe la observación..." v-model="descripcion" required></textarea>
          </div>
          <button type="submit" class="btn_AgregarObseracionAdmin">Agregar Observación</button>
        </form>
      </div>

      <!-- Contenedor de estudiantes (oculto en móviles por defecto) -->
      <div class="profesores-container" :class="{ 'mobile-visible': showEstudiantes }">
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
          @click="seleccionarEstudiante(estudiante)"
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
  <Footer />
</template>


<style scoped>
    h1 {
      text-align: center;
      color: #83B4FF;
      font-size: 1.8em;
      margin-bottom: 30px;
    }

    input:focus,
   textarea:focus {
  border-color: #7FA1C3; /* Cambiamos el color del borde */
  outline: none; /* Sin borde de enfoque predeterminado */
  box-shadow: 0 0 5px rgba(127, 161, 195, 0.6), 0 0 10px rgba(127, 161, 195, 0.3); /* Sombra de enfoque */
}


    textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  resize: vertical; /* Permite redimensionar verticalmente */
  min-height: 100px; /* Altura mínima */
}
  

.contpadrepadre{
  width: 90%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  padding: 20px;

}
.containerMadre_observadorAdmin {
  display: flex;
  gap: 30px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}

.cont_MostrarObservacionesAdmin{
  width: 50%;
  background-color: #6bc7ec00;
}

.titulos_observadorAdmnin {
  color:#6bc8ec;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}

.muestra_observacionesAdmin{
  max-height: 300px;
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
  width: 90%;
  padding: 10px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
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
  
}   

.Form_Agregarobservacion{
  padding-right: 20px;
}
.Form_Agregarobservacion label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

     .Form_Agregarobservacion input {
       width: 100%;
       padding: 10px;
       border: 1px solid #83B4FF;
       border-radius: 4px;
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

.profesores-container {
    flex-grow: 1;
    max-height: 500px;
    width: 500px;
    background-color: #fff;
    padding-left :15px;
    padding-right: 15px;
    padding-bottom :15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    overflow-y: auto;
    max-height: 500px;
    }

    

    .profesores-search {
    position: sticky;
    padding-top: 15px;
    top: 0;
    background-color: #fff; 
    z-index: 1; 
    margin-bottom: 10px; 
    border-bottom: 2px solid #6bc8ec; 
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
      border: 1px solid #6bc8ec;
      border-radius: 4px 0 0 4px;
      background-color: #F0F0F0;
    }
    .search-bar input:focus {
    flex: 1;
    padding: 8px;
    border: 1px solid #6bc8ec;
    border-radius: 4px 0 0 4px;
    background-color: #F0F0F0;
    outline: none; /* Elimina el borde de enfoque predeterminado */
  }
  
    .search_r_bttn  {
      background-color: #6bc8ec;
      color: white;
      padding: 8px;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      border: none;
      height: 34px;
    }
  
    .search_l_bttn  {
      background-color: #6bc8ec;
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
      border-top: 2px solid #6bc8ec;
      padding-top: 10px;
    }
  
    .profesor-item {
      padding: 8px 0;
      border-bottom: 1px solid #6bc8ec;
      cursor: pointer;
    }
    .profesor-item:hover{
      background-color: rgb(240, 240, 240);
    }
    .busqueda_adver::placeholder{
      color: black;
    }
   
    .protit {
    color: #6bc8ec;
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
    .back-button {
      background-color: transparent; 
      border: none; 
      color: #7fa1c3; 
      font-size: 1.2rem;
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
@media  (min-width : 651px) and ( max-width: 1024px) {
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



@media  ( max-width: 650px) {

  h1{
    margin-bottom: 20px;
    margin-top: 20px;

  }

  .contpadrepadre{
    padding: 12px;
  }

  .containerMadre_observadorAdmin{
    flex-direction: column-reverse;
    align-items: center;
    padding: 0px;
  }

  .cont_MostrarObservacionesAdmin{
    width: 95%;
  }

  .cont_AgregarObservador{
    width: 80%;


  }



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
