<template>
    <header_sin_login />
    
    <div class="comunicados-background">
      <div class="volver-container">
        <router-link :to="perfilRuta">
          <div class="back-button">
            <i class="fa fa-arrow-left"></i> Volver
          </div>
        </router-link>
      </div>
  
      <div class="comunicados-container">
        <h1 class="page-title">Comunicados</h1>
  
        <div v-if="comunicados.length">
          <div
            v-for="comunicado in comunicados"
            :key="comunicado.id_comunicado"
            class="comunicado-card"
          >
            <h3 class="comunicado-title">{{ comunicado.titulo }}</h3>
            <p class="comunicado-description">{{ comunicado.descripcion }}</p>
  
            <div v-if="comunicado.foto" class="comunicado-image">
              <img :src="`http://localhost:8000${comunicado.foto}`" alt="Comunicado Image" />
            </div>
          </div>
  
          <div v-if="loading" class="loading">Cargando más...</div>
          
          <div v-if="noMoreComunicados" class="no-more-comunicados">
          </div>
        </div>
  
        <div v-else class="no-comunicados-container">
          <span class="no-comunicados">Por el momento no hay comunicados para mostrar</span>
        </div>
      </div>
    </div>
  
    <Footer />
  </template>
  
  <script setup>
  import Footer from '../Footer_Login/Footer.vue';
  import header_sin_login from '../Headers/header_sin_login.vue';
  import axios from 'axios';
  import { ref, onMounted, onUnmounted } from 'vue';
  import { jwtDecode } from "jwt-decode";
  const comunicados = ref([]);
  const loading = ref(false);
  const noMoreComunicados = ref(false); 
  const page = ref(1);
  const perPage = 5; 
  const perfilRuta = ref('/main_estudiante');
  
  // Al cargar el componente, decodifica el token y determina la ruta del perfil 
  //para que al darle atras vuelva cada usuario a su main
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const token_decodificado = jwtDecode(token);
      const rol = token_decodificado.rol;
  
      if (rol === 'profesor') {
        perfilRuta.value = '/main_profesor';
      }
      if(rol === 'administrador') {
        perfilRuta.value = '/main_admin';
      }
    } catch (error) {
      perfilRuta.value = '/login';
      console.log(error)
    }
  }
  
  const get_comunicados = async (pageNumber = 1) => {
    if (loading.value || noMoreComunicados.value) return; // Evita múltiples solicitudes y si no hay más comunicados
    loading.value = true;
    try {
      const response = await axios.get(`http://localhost:8000/obtener_comunicados`, {
        params: {
          _page: pageNumber,
          _limit: perPage
        }
      });
  
      // Ordenar los comunicados por el id (de mayor a menor) para que se muestre el mas reciente primero
      const sortedComunicados = response.data.sort((a, b) => b.id_comunicado - a.id_comunicado);
  
      // Filtrar comunicados existentes para evitar duplicados
      const newComunicados = sortedComunicados.filter(comunicado => 
        !comunicados.value.some(existing => existing.id_comunicado === comunicado.id_comunicado)
      );
  
      if (newComunicados.length === 0) {
        noMoreComunicados.value = true; // No hay más comunicados para cargar
      } else {
        // Agregar nuevos comunicados a la lista
        comunicados.value = [...comunicados.value, ...newComunicados];
        page.value += 1; // Aumentar la página para la próxima carga(osea el proximo scroll)
      }
    } catch (error) {
      console.error('Error al capturar los comunicados', error);
    } finally {
      loading.value = false; // Finalizar la carga
    }
  };
  
  // Detectamos cuando el usuario llega al final de la página para cargar más comunicado
  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
    if (bottom && !loading.value && !noMoreComunicados.value) {
      get_comunicados(page.value);
    }
  };
  
  onMounted(() => {
    get_comunicados(page.value);
    window.addEventListener('scroll', handleScroll);
  });
  
  // Limpiar el evento de scroll cuando el componente se destruya
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .comunicados-background {
    background-color: #ffffffb2; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(14, 109, 146, 0.1);
    width: 70%;
    margin: 0 auto; 
    margin-top: 7vh;
  }
  
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    color: #7fa1c3;
    font-weight: bold;
  }
  
  .volver-container {
    display: flex;
    justify-content: flex-start;
    margin-left: 2rem;
  }
  
  .back-button {
    background-color: transparent;
    color: #7fa1c3;
    font-size: 23px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }
  
  .back-button i {
    margin-right: 0.5rem;
    font-size: 25px;
  }
  
  .back-button:hover {
    color: #83b4ff;
  }
  
  .comunicados-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .comunicado-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 15px  #83b4ff;
    width: 450px; 
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  
  .comunicado-card:hover {
    transform: scale(1.05);
  }
  
  /* Título de cada comunicado */
  .comunicado-title {
    font-size: 1.75rem;
    font-weight: bold;
    color: #7fa1c3;
    margin-bottom: 1rem;
  }
  
  /* Descripción de cada comunicado */
  .comunicado-description {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.6;
    word-wrap: break-word;
  }
  
  /* Estilo de las imágenes */
  .comunicado-image img {
    width: 400px;
    height: 250px;
    border-radius: 8px;
    margin-top: 1rem;
    box-shadow: 0 4px 10px  #83b4ff;

  }
  
  /* Mensaje cuando no hay comunicados */
  .no-comunicados-container {
    margin-top: 30px;
  }
  
  .no-comunicados {
    text-align: center;
    font-size: 1.2rem;
    color: #7fa1c3;
  }
  
  .loading {
    text-align: center;
    font-size: 1.5rem;
    color: #7fa1c3;
    margin-top: 2rem;
  }
  
  /* Mensaje de no hay más comunicados */
  .no-more-comunicados {
    text-align: center;
    font-size: 1.5rem;
    color: #7fa1c3;
    margin-top: 2rem;
  }
  </style>
  