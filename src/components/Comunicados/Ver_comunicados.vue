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
          v-for="comunicado in comunicadosPaginados"
          :key="comunicado.id_comunicado"
          class="comunicado-card"
        >
          <h3 class="comunicado-title">{{ comunicado.titulo }}</h3>
          <p class="comunicado-description">{{ comunicado.descripcion }}</p>

          <div v-if="comunicado.foto" class="comunicado-image">
            <img :src="`https://apiracadipy-production.up.railway.app${comunicado.foto}`" alt="Comunicado Image" />
          </div>
        </div>

        <div class="pagination">
          <button 
            @click="changePage(1)" 
            :disabled="currentPage === 1"
            class="pagination-button"
          >
            Primera
          </button>
          <button
            v-for="pageNumber in visiblePages"
            :key="pageNumber"
            @click="changePage(pageNumber)"
            :class="{ active: pageNumber === currentPage }"
            class="pagination-button"
          >
            {{ pageNumber }}
          </button>

          <button 
            @click="changePage(totalPages)" 
            :disabled="currentPage === totalPages"
            class="pagination-button"
          >
            Última
          </button>
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
import { ref, onMounted, computed } from 'vue';
import { jwtDecode } from "jwt-decode";

const comunicados = ref([]);
const currentPage = ref(1); 
const perPage = 3; // Comunicados por página
const perfilRuta = ref('/main_estudiante');

// Decodificar el token para determinar la ruta del perfil
const token = localStorage.getItem('token');
if (token) {
  try {
    const token_decodificado = jwtDecode(token);
    const rol = token_decodificado.rol;

    if (rol === 'profesor') {
      perfilRuta.value = '/main_profesor';
    }
    if (rol === 'administrador') {
      perfilRuta.value = '/main_admin';
    }
  } catch (error) {
    perfilRuta.value = '/login';
    console.log(error);
  }
}


const get_comunicados = async () => {
  try {
    const response = await axios.get(`https://apiracadipy-production.up.railway.app/obtener_comunicados`);
    comunicados.value = response.data.sort((a, b) => b.id_comunicado - a.id_comunicado);
  } catch (error) {
    console.error('Error al capturar los comunicados', error);
  }
};

// Calcular los comunicados que corresponden a la página actual
const comunicadosPaginados = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return comunicados.value.slice(start, end);
});

// Calcular el número total de páginas
const totalPages = computed(() => {
  return Math.ceil(comunicados.value.length / perPage);
});

//aca me aseguro que el maximo de paginas para seleccionar sean 5 
const visiblePages = computed(() => {
  const range = 2; 
  let start = Math.max(1, currentPage.value - range);
  let end = Math.min(totalPages.value, currentPage.value + range);


  if (end - start < 4) {
    if (currentPage.value < totalPages.value / 2) {
      end = Math.min(totalPages.value, start + 4);
    } else {
      start = Math.max(1, end - 4);
    }
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});


const changePage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > totalPages.value) return;
  currentPage.value = pageNumber;
};


onMounted(() => {
  get_comunicados();
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
  box-shadow: 0 4px 15px #83b4ff;
  width: 440px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.comunicado-card:hover {
  transform: scale(1.05);
}

.comunicado-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #7fa1c3;
  margin-bottom: 1rem;
}

.comunicado-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
  word-wrap: break-word;
}

.comunicado-image img {
  width: 400px;
  height: 250px;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 4px 10px #83b4ff;
}

.no-comunicados-container {
  margin-top: 30px;
}

.no-comunicados {
  text-align: center;
  font-size: 1.2rem;
  color: #7fa1c3;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.pagination-button {
  background-color: #7fa1c3;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background-color: #83b4ff;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-button.active {
  background-color: #83b4ff;
  font-weight: bold;
}

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .comunicados-background {
    width: 85%;
    padding: 15px;
    margin-top: 5vh;
  }

  .page-title {
    font-size: 2rem;
  }

  .volver-container {
    margin-left: 1rem;
  }

  .back-button {
    font-size: 20px;
  }

  .back-button i {
    font-size: 22px;
  }

  .comunicado-card {
    width: 360px;
    padding: 1.5rem;
  }

  .comunicado-title {
    font-size: 1.5rem;
  }

  .comunicado-description {
    font-size: 1.1rem;
  }

  .comunicado-image img {
    width: 340px;
    height: 220px;
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .comunicados-background {
    width: 95%;
    padding: 10px;
    margin-top: 3vh;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .volver-container {
    margin-left: 0.5rem;
    justify-content: center;
  }

  .back-button {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }

  .back-button i {
    font-size: 20px;
  }

  .comunicado-card {
    width: 85%;
    padding: 1rem;
    margin: 1rem 0;
    margin-left: auto;
    margin-right: auto;
  }

  .comunicado-title {
    font-size: 1.3rem;
  }

  .comunicado-description {
    font-size: 1rem;
    line-height: 1.4;
  }

  .comunicado-image img {
    width: 100%;
    height: auto;
    max-height: 200px;
  }

  .pagination {
    gap: 5px;
    margin-top: 1rem;
  }

  .pagination-button {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
}
</style>