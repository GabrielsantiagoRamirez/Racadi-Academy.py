<template>
    <Header_sin_login/>
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
  import Header_sin_login from './Header_sin_login.vue';
  import Footer from './Footer.vue';
  

  </script>
  
  <style scoped>
  .crear-cuentas-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f5eded;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    transition: all 0.3s ease;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #7fa1c3;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
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
  </style>
  