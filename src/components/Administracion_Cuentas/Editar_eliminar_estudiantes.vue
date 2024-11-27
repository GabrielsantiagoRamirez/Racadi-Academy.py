<template>
  <div class="main-container">
    <div class="profesores-container">
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
      <div v-for="estudiante in estudiantes" :key="estudiante.documento" class="profesor-item">
        <div class="student-info">
          <p><strong>Documento:</strong> {{ estudiante.documento }}</p>
          <p><strong>Nombre:</strong> {{ estudiante.nombre }} {{ estudiante.apellido }}</p>
        </div>
        <div class="button-group">
          <button class="delete-button" @click="confirmDelete(estudiante)">
            <i class="fa fa-trash"></i>
          </button>
          <router-link :to="{ 
                path: '/editar_eliminar_cuentas/editar_eliminar_estudiantes/editar', 
                query: { estudiante: JSON.stringify(estudiante) } 
              }">
            <button class="edit-button">
              <i class="fa fa-pencil"></i>
            </button>
          </router-link>
          
          <router-link :to="{ 
                path: '/editar_eliminar_cuentas/editar_eliminar_estudiantes/informacion', 
                query: { estudiante: JSON.stringify(estudiante) } 
              }">
            <button class="info-button">
              <i class="fa fa-info-circle"></i>
            </button>
              </router-link>


        </div>
      </div>
    </div>

    <div>
      <!--Le coloque una llave a el router vue para obligarlo a reconstruirse cada vez que cambia la url  --> 
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

const estudiantes = ref([]);
const busquedaEstudiante = ref('');

const obtener_estudiantes = async () => {
  try {
    const response = await axios.get('http://localhost:8000/obtenerestudiantes');
    estudiantes.value = response.data;
  } catch (error) {
    console.error("Error al capturar los estudiantes", error);
  }
};

const buscarEstudiantes = async () => {
  try {
    const response = await axios.get('http://localhost:8000/buscarestudiantes', {
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

const deleteStudent = async (documento) => {
  try {
    await axios.delete(`http://localhost:8000/eliminarestudiante/${documento}`);
    Swal.fire({
      icon: 'success',
      title: 'Estudiante Eliminado Exitosamente',
    });

    estudiantes.value = estudiantes.value.filter(estudiante => estudiante.documento !== documento);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};

const confirmDelete = (student) => {
  Swal.fire({
    title: `¿Estás seguro de eliminar a\n${student.nombre} ${student.apellido}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#83B4FF',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      deleteStudent(student.documento);
    }
  });
};

onMounted(obtener_estudiantes);
</script>

<style scoped>

.main-container{
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}


.profesores-container {
    flex: 1;
    background-color: #fff;
    padding-left :15px;
    padding-right: 15px;
    padding-bottom :15px;
    border-radius: 8px;
    box-shadow: 0px 3px 8px rgba(129, 188, 243, 0.747);
    max-width: 500px;
    overflow-y: scroll;
    max-height: 700px;
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
      font-size: 18px;
      display: flex;
      flex-direction: row;
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

.student-info{
padding: 0px;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: auto;
  align-items: center;

}

.delete-button, .edit-button, .info-button {
  border: none;
  padding: 7px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  color: white;
}

.delete-button {
  background-color: #FF6B6B;
}
.delete-button:hover {
  background-color: #FF4C4C;
  transform: scale(1.1);
}

.edit-button {
  background-color: #4CAF50;
}
.edit-button:hover {
  background-color: #3F9C40;
  transform: scale(1.1);
}

.info-button {
  background-color: #1E90FF;
}
.info-button:hover {
  background-color: #1C86EE;
  transform: scale(1.1);
}

button i {
  font-size: 14px;
}


</style>
