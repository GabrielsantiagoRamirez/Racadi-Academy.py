<template>
    <div class="form-container">
      <h1 class="form-title">Añadir Estudiante</h1>
      <form @submit.prevent="añadir_estudiante" class="form">
  
        <!-- Documento -->
        <div class="form-group">
          <label for="documento">
            <i class="fa fa-id-card"></i> Documento
          </label>
          <input type="text" v-model="documento" id="documento" required>
        </div>
  
        <!-- Tipo de documento -->
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
          <input type="text" v-model="nombre" id="nombre" required>
        </div>
  
        <!-- Apellido -->
        <div class="form-group">
          <label for="apellido">
            <i class="fa fa-user-tag"></i> Apellido
          </label>
          <input type="text" v-model="apellido" id="apellido" required>
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
  
        <!-- Sede -->
        <div class="form-group">
          <label for="sede">
            <i class="fa fa-building"></i> Sede
          </label>
          <select v-model="sede" id="sede" required>
            <option v-for="opcion in sedes" :key="opcion" :value="opcion">{{ opcion }}</option>
          </select>
        </div>
  
        <!-- Botón de envío -->
        <button type="submit" class="submit-button">
          <i class="fa fa-save"></i> Guardar Estudiante
        </button>
  
      </form>
    </div>
  </template>

<script setup>

import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';

// de tipo de documento y sede predefinidos
const tipos_documento = ['cedula', 'cedula extranjera', 'tarjeta de identidad'];
const sedes = ['madrid', 'mosquera', 'funza', 'facatativa', 'bogota'];

//variables para hacer el post 
const documento =ref("")
const tipo_documento =ref("")
const nombre =ref("")
const apellido =ref("")
const celular =ref("")
const correo =ref("")
const usuario =ref("")
const contraseña =ref("")
const sede =ref("")


const añadir_estudiante =async()=>{
    try{
        const response = await axios.post('http://localhost:8000/añadirestudiante',{
        documento:documento.value,
        tipo_de_documento:tipo_documento.value,
        nombre:nombre.value,
        apellido:apellido.value,
        celular:celular.value,
        correo:correo.value,
        usuario:usuario.value,
        contraseña:contraseña.value,
        sede:sede.value
        }

        )
        Swal.fire({
            icon: 'success',
            title: 'Estudiante Registrado',
            text: `se añadio el estudiante exitosamente`,
        });

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

</script>

<style scoped>
/* Contenedor principal del formulario */
.form-container {
  background-color: #f5eded;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Título del formulario */
.form-title {
  color: #7fa1c3;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Estilos generales del formulario */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Estilos para cada grupo del formulario */
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 1rem;
  color: #83b4ff;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #e2dad6;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #83b4ff;
  box-shadow: 0px 0px 8px rgba(131, 180, 255, 0.5);
}

/* Estilo del botón de envío */
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
}

.submit-button:hover {
  background-color: #7fa1c3;
}

/* Estilos para los iconos */
.fa {
  margin-right: 0.5rem;
  color: #83b4ff;
}
</style>