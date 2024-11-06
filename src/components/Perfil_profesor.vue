<template>
  <Header_sin_login />
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
        <img v-else src="../components/img/defaultFoto.jpg" alt="Foto de perfil por defecto">
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
    <div v-else>
      <p>Cargando...</p>
    </div>

    <div class="info-aviso">
      <i class="fa fa-exclamation-triangle"></i>
      <p>"si necesita realizar un cambio en su información , envie una solicitud, la atenderemos lo antes posible.</p>
    </div>

  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Footer from './Footer.vue';
import Header_sin_login from './header_sin_login.vue';

const usuario = ref(null);
const router = useRouter();

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
  width: 125px;
  height: 125px;
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

.info-aviso {
  background-color: #fff3cd;
  border: 1px solid #ffeeba; 
  color: #856404; 
  padding: 15px;
  margin-top: 20px; 
  border-radius: 10px; 
  display: flex; 
  align-items: center; 
}

.info-aviso i {
  margin-right: 10px;
  font-size: 1.5em; 
}


</style>
