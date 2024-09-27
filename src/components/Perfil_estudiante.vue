<template>
  <Header_sin_login/>
  <div class="perfil-estudiante">
    <router-link to="/main_estudiante">
      <button class="back-button">
        <i class="fa fa-arrow-left"></i> Volver
      </button>
    </router-link>
    
    <h1>Perfil Estudiante</h1>
    <div v-if="usuario">
      <div class="foto-perfil">
        <img src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" alt="Foto de perfil">
      </div>
      <div class="info-basica">
        <h2>Información Básica</h2>
        <p><strong>Documento:</strong> {{ usuario.documento }}</p>
        <p><strong>Tipo de Documento:</strong> {{ usuario.tipo_de_documento }}</p>
        <p><strong>Nombre:</strong> {{ usuario.nombre }} {{ usuario.apellido }}</p>
        <p><strong>Fecha de Nacimiento:</strong> {{ usuario.fecha_nacimiento }}</p>
        <p><strong>Género:</strong> {{ usuario.genero }}</p>
        <p><strong>Celular:</strong> {{ usuario.celular }}</p>
        <p><strong>Correo:</strong> {{ usuario.correo }}</p>
      </div>

      <div class="info-adicional">
        <h2>Información Adicional</h2>
        <p><strong>Dirección:</strong> {{ usuario.direccion }}</p>
        <p><strong>Sede:</strong> {{ usuario.sede }}</p>
        <p><strong>Usuario:</strong> {{ usuario.usuario }}</p>
        <p><strong>Nivel Actual:</strong> {{ usuario.nivel_actual }}</p>
        <p><strong>Fecha de Inscripción:</strong> {{ usuario.fecha_inscripcion }}</p>
        <p><strong>Plan:</strong> {{ usuario.plan }}</p>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
  <Footer/>
</template>


  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import Footer from './Footer.vue';
  import Header_sin_login from './Header_sin_login.vue';

  
  export default {
    components: {
    Footer,
    Header_sin_login 
  },
    setup() {
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
          console.log(usuario)
        } catch (error) {
          console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }
      };
  
      onMounted(fetchUserProfile); // Llama a la función al montar el componente
  
      return { usuario }; // Retorna el usuario para usar en el template
    },
  };
  </script>
  
  <style scoped>
.perfil-estudiante {
  background-color: #f5eded; 
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
h1 {
  text-align: center;
  color: #7fa1c3; 
  font-size: 2.5em;
  margin-bottom: 20px;
}

.foto-perfil {
  text-align: center;
  margin-bottom: 20px;
}

.foto-perfil img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 3px solid #83b4ff; 
}

.info-basica,
.info-adicional {
  background-color: #e2dad6; 
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

h2 {
  color: #83b4ff; 
  margin-bottom: 10px;
  font-size: 1.5em;
  border-bottom: 2px solid #7fa1c3; 
  padding-bottom: 5px;
}

p {
  color: #333; 
  line-height: 1.6;
}

strong {
  color: #7fa1c3; 
}

@media (max-width: 600px) {
  .perfil-estudiante {
    padding: 10px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  .foto-perfil img {
    width: 120px;
    height: 120px;
  }
}
</style>
