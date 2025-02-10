<template>
    <div class="main-container">
      <div class="profesores-container">
        <div class="profesores-search">
          <span class="protit">Profesores</span>
          <form @submit.prevent="buscarprofesores">
            <div class="search-bar">
              <button type="button" class="fa fa-arrow-left search_l_bttn" @click="restablecerBusqueda"></button>
              <input type="text" class="busqueda_adver" placeholder="Buscar por nombre" v-model="busquedaProfesor">
              <button type="submit" class="fa fa-search search_r_bttn"></button>
            </div>
          </form>
        </div>
        <div v-for="profesor in profesores" :key="profesor.documento" class="profesor-item">
          <div class="student-info">
            <p><strong>Documento:</strong> {{ profesor.documento }}</p>
            <p><strong>Nombre:</strong> {{ profesor.nombre }} {{ profesor.apellido }}</p>
          </div>
          <div class="button-group">
            <button class="delete-button" @click="confirmDelete(profesor)">
              <i class="fa fa-trash"></i>
            </button>
            <router-link :to="{ 
                  path: '/editar_eliminar_cuentas/editar_eliminar_profesores/editar', 
                  query: { profesor: JSON.stringify(profesor) } 
                }">
              <button class="edit-button">
                <i class="fa fa-pencil"></i>
              </button>
            </router-link>
            
            <router-link :to="{ 
                  path: '/editar_eliminar_cuentas/editar_eliminar_profesores/informacion', 
                  query: { profesor: JSON.stringify(profesor) } 
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
  
  const profesores = ref([]);
  const busquedaProfesor = ref('');
  
  const obtener_profesores = async () => {
    try {
      const response = await axios.get('http://localhost:8000/obtenerprofesores');
      profesores.value = response.data;
    } catch (error) {
      console.error("Error al capturar los estudiantes", error);
    }
  };
  
  const buscarprofesores = async () => {
    try {
      const response = await axios.get('http://localhost:8000/buscarprofesores', {
        params: { nombre: busquedaProfesor.value }
      });
      profesores.value = response.data;
    } catch (error) {
      console.error("Error al buscar estudiantes", error);
    }
  };
  
  const restablecerBusqueda = () => {
    busquedaProfesor.value = '';
    obtener_profesores();
  };
  
  const deleteTeacher = async (documento) => {
    try {
      await axios.delete(`http://localhost:8000/eliminarprofesor/${documento}`);
      Swal.fire({
        icon: 'success',
        title: 'Profesor Eliminado Exitosamente',
      });
  
      profesores.value = profesores.value.filter(profesor => profesor.documento !== documento);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  
  const confirmDelete = (teacher) => {
    Swal.fire({
      title: `¿Estás seguro de eliminar a\n${teacher.nombre} ${teacher.apellido}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#83B4FF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTeacher(teacher.documento);
      }
    });
  };
  
  onMounted(obtener_profesores);
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
  
  @media (min-width: 481px) and (max-width: 1024px) {
  .main-container {
    flex-direction: column; /* Cambiar a columna para mejor disposición */
    gap: 20px; /* Reducir el espacio entre elementos */
    padding: 10px; /* Añadir padding para no pegar el contenido a los bordes */
  }

  .profesores-container {
    max-width: 95%; /* Ocupar todo el ancho disponible */
    max-height: 500px; /* Reducir la altura máxima */

  }


  .search-bar {
    margin-top: 0; /* Eliminar margen superior */
  }

  .profesor-item {
    font-size: 16px; /* Reducir el tamaño de fuente */
    flex-direction: column; /* Cambiar a columna para mejor disposición */
    align-items: flex-start; /* Alinear elementos a la izquierda */
  }

  .button-group {
    margin-left: 0; /* Eliminar margen izquierdo */
    margin-top: 10px; /* Añadir margen superior */
    gap: 10px; /* Aumentar el espacio entre botones */
  }

  .protit {
    font-size: 18px; /* Reducir el tamaño de fuente del título */
  }

  .search-bar input {
    padding: 6px; /* Reducir el padding del input */
  }

  .search_r_bttn,
  .search_l_bttn {
    padding: 6px; /* Reducir el padding de los botones */
    height: 30px; /* Reducir la altura de los botones */
  }

  .delete-button,
  .edit-button,
  .info-button {
    padding: 6px; /* Reducir el padding de los botones */
  }

  button i {
    font-size: 12px; /* Reducir el tamaño de los íconos */
  }
}

@media (min-width: 150px) and (max-width: 480px) {
  .main-container {
    flex-direction: column; /* Cambiar a columna para mejor disposición */
    gap: 20px; /* Reducir el espacio entre elementos */
  }

  .profesores-container {
    max-width: 100%; /* Ocupar todo el ancho disponible */
    max-height: 400px; /* Reducir la altura máxima */
    border-radius: 5px; /* Reducir el radio de borde */
  }

  .profesores-search {
    padding-top: 5px; /* Reducir el padding superior */
    border-bottom: 1px solid #83B4FF; /* Reducir el grosor del borde */
  }

  .search-bar {
    margin-top: 0; /* Eliminar margen superior */
  }

  .profesor-item {
    font-size: 14px; /* Reducir el tamaño de fuente */
    flex-direction: column; /* Cambiar a columna para mejor disposición */
    align-items: flex-start; /* Alinear elementos a la izquierda */
    padding: 5px 0; /* Reducir el padding */
  }

  .button-group {
    margin-left: 0; /* Eliminar margen izquierdo */
    margin-top: 5px; /* Añadir margen superior */
    gap: 5px; /* Reducir el espacio entre botones */
  }

  .protit {
    font-size: 16px; /* Reducir el tamaño de fuente del título */
  }

  .search-bar input {
    padding: 4px; /* Reducir el padding del input */
    font-size: 12px; /* Reducir el tamaño de fuente del input */
  }

  .search_r_bttn,
  .search_l_bttn {
    padding: 4px; /* Reducir el padding de los botones */
    height: 26px; /* Reducir la altura de los botones */
  }

  .delete-button,
  .edit-button,
  .info-button {
    padding: 4px; /* Reducir el padding de los botones */
    border-radius: 5px; /* Reducir el radio de borde */
  }

  button i {
    font-size: 10px; /* Reducir el tamaño de los íconos */
  }
}
  </style>
  