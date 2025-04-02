<template>
  <header_sin_login />

  <div class="perfil-estudiante">

    <router-link to="/main_profesor">
      <button class="back-button">
        <i class="fa fa-arrow-left"></i> Volver
      </button>
    </router-link>

    <button class="logout-button" @click="logout">
    <i class="fa fa-sign-out-alt"></i> Cerrar Sesión
    </button>
    <h1 class="perfil_tittle">Perfil Profesor</h1>
    <div v-if="usuario" class="info-header">
      <div class="foto-perfil">
        <img v-if="usuario.foto_perfil" :src="`http://localhost:8000${usuario.foto_perfil}`" alt="Foto de perfil">
        <img v-else src="../img/defaultFoto.jpg" alt="Foto de perfil por defecto">
      </div>

      <div class="info-nombre">
        <h2>{{ usuario.nombre }} {{ usuario.apellido }}</h2>
        <p class="nivel-descripcion" v-if="nivelDescripcion">{{ nivelDescripcion }}</p>
      </div>
    </div>

    <div v-if="usuario">
      <div class="info-container">
        <div class="info-card">
          <h2>Información Básica</h2>
          <div class="info-item" v-for="(item, index) in basicInfo" :key="index">
            <i :class="item.icon"></i>
            <p><strong>{{ item.label }}:</strong> {{ item.value }}</p>
          </div>
        </div>

        <div class="info-card">
          <h2>Información Adicional</h2>
          <div class="info-item" v-for="(item, index) in additionalInfo" :key="index">
            <i :class="item.icon"></i>
            <p><strong>{{ item.label }}:</strong> {{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="chargin">
        Cargando... <i class="fa fa-clock"></i>
    </div>    

  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import header_sin_login from '../Headers/header_sin_login.vue';
import Footer from '../Footer_Login/Footer.vue';

const usuario = ref(null);
const router = useRouter();

const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push("/login");
    return; // Salir de la función si no hay token
  }
  try {
    const response = await axios.get('http://localhost:8889/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    usuario.value = response.data; // Asigna los datos del usuario
    console.log(usuario.value); // Usa usuario.value para ver el valor real en la consola

  } catch (error) {
    console.error('Error fetching user profile:', error); // Manejo de errores
    localStorage.removeItem('token');
    router.push('/login'); // Redirige a login en caso de error
  }
};

onMounted(fetchUserProfile); // Llama a la función al montar el componente


// Define la información básica y adicional
const basicInfo = computed(() => [
  { label: "Documento", value: usuario.value?.documento, icon: "fa fa-id-card" },
  { label: "Tipo de Documento", value: usuario.value?.tipo_de_documento, icon: "fa fa-file-alt" },
  { label: "Fecha de Nacimiento", value: usuario.value?.fecha_nacimiento, icon: "fa fa-calendar-alt" },
  { label: "Género", value: usuario.value?.genero, icon: "fa fa-venus-mars" },
  { label: "Celular", value: usuario.value?.celular, icon: "fa fa-phone" },
  { label: "Correo", value: usuario.value?.correo, icon: "fa fa-envelope" },
]);

const additionalInfo = computed(() => [
  { label: "Dirección", value: usuario.value?.direccion, icon: "fa fa-map-marker-alt" },
  { label: "Usuario", value: usuario.value?.usuario, icon: "fa fa-user-circle" },
  { label: "Fecha de Contratacion", value: usuario.value?.fecha_contratacion, icon: "fa fa-calendar-check" },
]);

const nivelDescripcion = computed(() => {
  return "Como profesor, eres una pieza clave en el aprendizaje y desarrollo de los estudiantes. Gracias a tu dedicación y experiencia, cada clase se convierte en una oportunidad para inspirar, motivar y guiar a los futuros profesionales.";
});


const logout = () => {
  localStorage.removeItem('token');
  router.push('/'); // Redirigir a la página de inicio de sesión
};



</script>

<style scoped>
.perfil_tittle{
  margin-top: 10px;
  font-size: 26px;
  color: #83b4ff;
  text-align: center;

}
.perfil-estudiante {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  position: relative;
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
  position: absolute;
  left: 20px;
  top: 20px;
}

.back-button i {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.back-button:hover {
  color: #83b4ff;
}

.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.foto-perfil {
  margin-right: 20px;
  margin-top: 5vh;
}

.foto-perfil img {
  border-radius: 50%;
  width: 130px;
  height: 130px;
  border: 3px solid #83b4ff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.info-nombre {
  flex-grow: 1;
}

.nivel-descripcion {
  color: #000000;
  font-size: 1.09em;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #83b4ff;
  margin-bottom: 10px;
  font-size: 1.8em;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.info-item i {
  color: #83b4ff;
  margin-right: 10px;
  font-size: 1.5em;
}

p {
  color: #333;
}

strong {
  color: #7fa1c3;
}

.button-container {
  display: flex;
  justify-content: space-between; 
  margin-bottom: 1rem; 
}

.logout-button {
  background-color: transparent;
  border: none;
  color: rgb(238, 35, 35);
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  position: absolute;
  right: 20px;
  top: 20px;
}

.logout-button i {
  margin-right: 0.5rem;
}

.logout-button:hover {
  color: #ff4c4c; 
}


.chargin{
    font-size: 20px;
    color: #83B4FF;
    margin-top: 5px;
}


/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .perfil_tittle {
    font-size: 1.5em; /* 1.5em = 24px */
    margin-top: 30px;

  }

  .perfil-estudiante {
    padding: 1em; /* 1em = 16px */
    max-width: 90%; /* Ajuste de ancho para tablets */
  }

  .back-button,
  .logout-button {
    font-size: 1.1em; /* 1.1em = 17.6px */
  }

  .foto-perfil img {
    width: 8em; /* 8em = 128px */
    height: 8em; /* 8em = 128px */
  }

  .info-nombre h2 {
    font-size: 1.5em; /* 1.5em = 24px */
  }

  .nivel-descripcion {
    font-size: 1em; /* 1em = 16px */
  }

  .info-card h2 {
    font-size: 1.5em; /* 1.5em = 24px */
  }

  .info-item {
    font-size: 1em; /* 1em = 16px */
  }

  .info-aviso {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .perfil_tittle {
    font-size: 1.25em; /* 1.25em = 20px */
    margin-top: 30px;
  }

  .perfil-estudiante {
    padding: 0.75em; /* 0.75em = 12px */
    max-width: 95%; /* Ajuste de ancho para celulares */
  }

  .back-button,
  .logout-button {
    font-size: 1em; /* 1em = 16px */
    top: 0.5em; /* 0.5em = 8px */
  }

  .back-button {
    left: 0.5em; /* 0.5em = 8px */
  }

  .logout-button {
    right: 0.5em; /* 0.5em = 8px */
  }

  .info-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .foto-perfil {
    margin-right: 0;
    margin-top: 1em; /* 1em = 16px */
  }

  .foto-perfil img {
    width: 6em; /* 6em = 96px */
    height: 6em; /* 6em = 96px */
  }

  .info-nombre h2 {
    font-size: 1.25em; /* 1.25em = 20px */
  }

  .nivel-descripcion {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }

  .info-card h2 {
    font-size: 1.25em; /* 1.25em = 20px */
  }

  .info-item {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }

  .info-aviso {
    font-size: 0.8em; /* 0.8em = 12.8px */
    flex-direction: column;
    text-align: center;
  }

  .info-aviso i {
    margin-bottom: 0.5em; /* 0.5em = 8px */
  }
}


</style>
