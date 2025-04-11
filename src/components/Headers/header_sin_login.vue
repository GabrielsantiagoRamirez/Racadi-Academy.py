<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
  <header class="container_header_sin">
      <div>
          <img src="../img/logoRacadi.png" alt="" class="logo">
      </div>
      <div class="texto">
          <h1>
              RACADI ACADEMY
          </h1>
      </div>
      <div class="container_redes"> 
          <a href="#"><i class="fa-brands fa-facebook-square redes"></i></a>
          <a href="#"><i class="fa-brands fa-instagram redes"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp redes"></i></a>
          <a href="#"><i class="fa-brands fa-github redes"></i></a>
      </div>
      <router-link :to="perfilRuta">
          <div class="perfil_header">
              <i class="fa fa-user-circle perfil_sin" aria-hidden="true"></i>
              <h1>Perfil</h1>
          </div>
      </router-link>
  </header>
</template>

<script setup>
import { ref, } from 'vue';
import { jwtDecode } from "jwt-decode";

// Estado para la ruta del perfil
const perfilRuta = ref('/perfil_estudiante');

// Al cargar el componente, decodifica el token y determina la ruta del perfil
const token = localStorage.getItem('token');
if (token) {
  try {
      const token_decodificado = jwtDecode(token);
      const rol = token_decodificado.rol;

      if (rol === 'profesor') {
          perfilRuta.value = '/perfil_profesor'; }

  } catch (error) {
    perfilRuta.value = '/login'
  }
}
</script>

<style>
/* Estilos para el header */
.perfil_header{
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: white;
  text-align: center;
  font-size: 30px;
  margin-right: 5vh;
}

.container_header_sin{
  background-color: #7FA1C3;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px 0 #263d53; 
}

.logo {
  width: 150px;
  display: flex;
  align-items: center;
  margin-left: 3vh;
}

.redes{
  font-size: 35px;
  color: white;
}

.perfil_sin{
  font-size: 50px;
}

.container_redes{
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: space-between;
}

.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: white;
  width: 800px;
  text-align: center;
  font-size: 40px; 
  line-height: 1.2; 
  text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
    .container_header_sin {
        height: 120px;
        padding: 0 2%;
    }

    .logo {
        width: 100px;
        margin-left: 2vh;
    }

    .texto {
        font-size: 28px;
        width: 60%;
    }

    .container_redes {
        max-width: 120px;
    }

    .redes {
        font-size: 25px;
    }

    .perfil_header {
        font-size: 20px;
        margin-right: 2vh;
    }

    .perfil_sin {
        font-size: 35px;
    }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
    .container_header_sin {
        height: auto;
        flex-direction: column;
        padding: 10px 0;
        justify-content: center;
    }

    .logo {
        width: 70px;
        margin-left: 0;
        margin-bottom: 5px;
    }

    .texto {
        font-size: 18px;
        width: 100%;
        margin: 5px 0;
    }

    .container_redes {
        max-width: 120px;
        margin: 10px 0;
    }

    .redes {
        font-size: 20px;
    }

    .perfil_header {
        font-size: 16px;
        margin-right: 0;
        margin-top: 10px;
    }

    .perfil_sin {
        font-size: 25px;
    }
}
</style>