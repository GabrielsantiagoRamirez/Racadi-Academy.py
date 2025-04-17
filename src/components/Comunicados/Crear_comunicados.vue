<template>
  <header_sin_login/>
  <div class="form-container">
    <div class="volver-container">
      <router-link to="/main_admin">
        <div class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </div>
      </router-link>
    </div>
    <h1 class="form-title">Crear Comunicados</h1>
    <form @submit.prevent="crear_comunicado" class="form">
      <div class="form-row">
        <!-- Columna 1: Título y Foto -->
        <div class="form-column">
          <div class="form-group">
            <label for="titulo">
              <i class="fa fa-user-circle"></i> Título
            </label>
            <input type="text" v-model="titulo" id="titulo" class="input" required />
          </div>
          <div class="form-group">
            <label for="file">
              <i class="fa fa-image"></i> Foto
            </label>
            <input type="file" @change="onFileChange" id="file" class="input" required />
          </div>
        </div>

        <!-- Columna 2: Descripción -->
        <div class="form-column">
          <div class="form-group">
            <label for="descripcion">
              <i class="fa fa-pencil-square"></i> Descripción
            </label>
            <textarea
              v-model="descripcion"
              id="descripcion"
              class="descripcion-textarea"
              required
            ></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="submit-button">
        <i class="fa fa-save"></i> Guardar Comunicado
      </button>
    </form>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '../Footer_Login/Footer.vue';
import header_sin_login from '../Headers/header_sin_login.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';

const titulo = ref("");
const descripcion = ref("");
const file = ref(null);

const onFileChange = (event) => {
  file.value = event.target.files[0];
};

const crear_comunicado = async () => {
  try {
    const formData = new FormData();
    formData.append("titulo", titulo.value);
    formData.append("descripcion", descripcion.value);
    formData.append("file", file.value);

    await axios.post("https://apiracadipy-production.up.railway.app/crear_comunicados", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    //limpio el form
    titulo.value = "";
    descripcion.value = "";
    file.value = null;

    Swal.fire({
      icon: "success",
      title: "Comunicado agregado con éxito",
      timer: 2000,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error("Error de entidad:", error);
    const mensajeError = error.response?.data.detail || "Algo salió mal. Intenta nuevamente.";
    Swal.fire({
      icon: "error",
      title: mensajeError,
    });
  }
};
</script>

<style scoped>
.form-container {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #F5EDED;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #7FA1C3;
}

.form {
  display: grid;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  gap: 2rem;
}

.form-column {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

.form-group label {
  font-size: 1.1rem;
  color: #7FA1C3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4vh;
}

.descripcion-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  background-color: #F0F0F0;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
  height: 150px;
  resize: none; 
  }

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  background-color: #F0F0F0;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s; 

}

/* Focus en el input y textarea */
.input:focus,
.descripcion-textarea:focus {
  border-color: #7FA1C3; /* Cambiamos el color del borde */
  outline: none; /* Sin borde de enfoque predeterminado */
  box-shadow: 0 0 5px rgba(127, 161, 195, 0.6), 0 0 10px rgba(127, 161, 195, 0.3); /* Sombra de enfoque */
}

/* Estilo del botón de submit */
.submit-button {
  background-color: #83B4FF;
  color: #ffffff;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #7FA1C3;
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



/* Para tablets */
@media (min-width: 481px) and (max-width: 1024px) {
  .form-container {
    width: 90%;
    padding: 1rem;
    margin: 2rem auto;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 2rem;
  }

  .volver-container {
    display: flex;
    justify-content: flex-start;
  }

  .form-group label {
    font-size: 1rem;
  }

  .submit-button {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
}

/* Para celulares */
@media (min-width: 100px) and (max-width: 480px) {
  .form-container {
    width: 85%;
    padding: 1rem;
    margin: 1rem auto;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .volver-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .submit-button {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
}

</style>
