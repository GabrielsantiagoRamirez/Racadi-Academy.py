<template>
  <div class="form-container">
    <h1 class="form-title">Añadir Profesor</h1>
    <form @submit.prevent="añadir_estudiante" class="form">
      
      <div class="form-group">
        <label for="documento">
          <i class="fa fa-id-card"></i> Documento
        </label>
        <input type="text" v-model="documento" id="documento" required>
      </div>

      <div class="form-group">
        <label for="tipo_de_documento">
          <i class="fa fa-file-alt"></i> Tipo de Documento
        </label>
        <select v-model="tipo_documento" id="tipo_de_documento" required>
          <option v-for="tipo in tipos_documento" :key="tipo" :value="tipo">{{ tipo }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nombre">
          <i class="fa fa-user"></i> Nombre
        </label>
        <input type="text" v-model="nombre" id="nombre" required>
      </div>

      <div class="form-group">
        <label for="apellido">
          <i class="fa fa-user-tag"></i> Apellido
        </label>
        <input type="text" v-model="apellido" id="apellido" required>
      </div>

      <div class="form-group">
        <label for="fecha_nacimiento">
          <i class="fa fa-calendar-alt"></i> Fecha De Nacimiento
        </label>
        <input type="date" class="fninp"v-model="fecha_nacimiento" id="fecha_nacimiento" required>
      </div>

      <div class="form-group">
        <label for="genero">
          <i class="fa fa-venus-mars"></i> Género
        </label>
        <select v-model="genero" id="genero">
          <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="celular">
          <i class="fa fa-phone"></i> Celular
        </label>
        <input type="text" v-model="celular" id="celular" required>
      </div>

      <div class="form-group">
        <label for="correo">
          <i class="fa fa-envelope"></i> Correo
        </label>
        <input type="email" v-model="correo" id="correo" required>
      </div>

      <div class="form-group">
        <label for="direccion">
          <i class="fa fa-map-marker-alt"></i> Dirección
        </label>
        <input type="text" v-model="direccion" id="direccion" required>
      </div>

      <div class="form-group">
        <label for="usuario">
          <i class="fa fa-user-circle"></i> Usuario
        </label>
        <input type="text" v-model="usuario" id="usuario" required>
      </div>

      <div class="form-group">
        <label for="contraseña">
          <i class="fa fa-lock"></i> Contraseña
        </label>
        <input type="password" v-model="contraseña" id="contraseña" required>
      </div>

      <button type="submit" class="submit-button">
        <i class="fa fa-save"></i> Guardar Profesor
      </button>
    </form>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';

// tipo de documento y generos predefinidos
const tipos_documento = ['cedula', 'cedula extranjera'];
const generos =["masculino", "femenino", "otro"]



//variables para hacer el post
const documento =ref("")
const tipo_documento =ref("")
const nombre =ref("")
const apellido =ref("")
const fecha_nacimiento=ref('')
const genero=ref('')
const celular =ref("")
const correo =ref("")
const direccion =ref("")
const usuario =ref("")
const contraseña =ref("")




const añadir_estudiante =async()=>{
    try{
        const response = await axios.post('http://localhost:8000/añadirprofesor',{
        documento:documento.value,
        tipo_de_documento:tipo_documento.value,
        nombre:nombre.value,
        apellido:apellido.value,
        fecha_nacimiento:fecha_nacimiento.value,
        genero:genero.value,
        celular:celular.value,
        correo:correo.value,
        direccion:direccion.value,
        usuario:usuario.value,
        contraseña:contraseña.value
        }

        )
        Swal.fire({
            icon: 'success',
            title: 'Profesor Registrado con exito',
            timer:2000,
            showConfirmButton:false
        });

    }catch (error) {
        if (error.response && error.response.data.detail) {
            let mensajeError = error.response.data.detail;

            // Si `mensajeError` es un objeto, conviértelo a string para mostrarlo
            if (typeof mensajeError === 'object') {
                mensajeError = JSON.stringify(mensajeError);
            }

            Swal.fire({
                icon: 'error',
                title: mensajeError,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal. Intenta nuevamente.',
            });
        }
    }
}

</script>


<style scoped>
.form-container {
  background-color: #f5eded;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}


.form-title {
  color: #7fa1c3;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}


.form {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: space-between;
}


.form-group {
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.6rem); 
}

.form-group label {
  font-size: 1rem;
  color: #83b4ff;
  margin-bottom: 0.5rem;
}

input[type="date"]::placeholder {
    color: #83b4ff; 
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


option {
  background-color: #f5eded;
  color: #333;
  padding: 0.5rem;
}


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
  width: 100%;
}

.submit-button:hover {
  background-color: #7fa1c3;
}

.fa {
  margin-right: 0.5rem;
  color: #83b4ff;
}
</style>