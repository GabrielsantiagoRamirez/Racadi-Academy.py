<template>
    <header_sin_login/>
    <div class="crear-cuentas-container">

      <!-- Botón de Volver -->
       <router-link to="/main_admin">    
         <button  class="back-button">
        <i class="fa fa-arrow-left"></i> Volver
      </button></router-link>

  
      <h1><i class=""></i> Crear Cuentas</h1>
  
      <!-- Enlaces de navegación -->
      <router-link to="/crear_cuentas/add_estudiante" class="cuenta-link">
        <div class="cuenta-option">
          <i class="fa fa-user-graduate"></i>
          <span>Ingresar nuevo estudiante</span>
        </div>
      </router-link>
  
      <router-link to="/crear_cuentas/add_profesor" class="cuenta-link">
        <div class="cuenta-option">
          <i class="fa fa-chalkboard-teacher"></i>
          <span>Ingresar nuevo profesor</span>
        </div>
      </router-link>
  
      <!-- Aquí se coloca router view para mostrar los componentes hijos -->
      <div class="cuenta-view">
        <router-view />
      </div>
    </div>
    <Footer/>
  </template>
  
  <script setup>
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';


  </script>
  
  <style scoped>
  .crear-cuentas-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgb(73, 167, 190);
    max-width: 700px;
    margin: 0 auto;
    transition: all 0.3s ease;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #83b4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  h1 i {
    margin-right: 0.5rem;
  }
  
  .cuenta-link {
    text-decoration: none;
  }
  
  .cuenta-option {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #83b4ff;
    color: white;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }
  
  .cuenta-option i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  
  .cuenta-option:hover {
    background-color: #7fa1c3;
  }
  
  .cuenta-view {
    margin-top: 2rem;
  }
  
  .back-button {
    background-color: transparent;
    border: none;
    color: #7fa1c3;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }
  
  .back-button i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  
  .back-button:hover {
    color: #83b4ff;
  }
  
  /* Media Queries para Tablets (481px - 1024px) */
  @media (min-width: 481px) and (max-width: 1024px) {
    .crear-cuentas-container {
      padding: 1.5rem;
      max-width: 85%;
      margin-top: 40px;
    }
  
    h1 {
      font-size: 1.7rem;
      margin-bottom: 15px;
    }
  
    .cuenta-option {
      padding: 1.2rem;
      font-size: 1.1rem;
    }
  
    .cuenta-option i {
      font-size: 1.3rem;
    }
  
    .back-button {
      font-size: 1.1rem;
    }
  
    .back-button i {
      font-size: 1.3rem;
    }
  }
  
  /* Media Queries para Celulares (150px - 480px) */
  @media (min-width: 150px) and (max-width: 480px) {
    .crear-cuentas-container {
      padding: 1.2rem;
      max-width: 90%;
      margin-top: 30px;
      gap: 0.8rem;
    }
  
    h1 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      flex-direction: column;
      align-items: center;
    }
  
    h1 i {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }
  
    .cuenta-option {
      padding: 1rem;
      font-size: 1rem;
      flex-direction: column;
      text-align: center;
    }
  
    .cuenta-option i {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
  
    .cuenta-view {
      margin-top: 1.5rem;
    }
  
    .back-button {
      font-size: 1rem;
      justify-content: center;
    }
  
    .back-button i {
      font-size: 1.2rem;
    }
  }
  </style>
  