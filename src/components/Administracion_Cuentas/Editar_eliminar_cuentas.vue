<template>
  <header_sin_login/>

<div class="mainContainer">

    <router-link to="/main_admin">
      <button class="back-button">
        <i class="fa fa-arrow-left"></i> Volver
      </button>
    </router-link>
    <h1>Administrar Cuentas</h1>

    <div class="cuentas-container">
        <router-link to="/editar_eliminar_cuentas/editar_eliminar_estudiantes" >
    <div class="cuenta-card">
        <i class="fa fa-user-graduate"></i>
       <span> Cuentas De Estudiantes</span> 
    </div>
</router-link>

<router-link to="/editar_eliminar_cuentas/editar_eliminar_profesores" >
    <div class="cuenta-card">
        <i class="fa fa-chalkboard-teacher"></i>        
        <span>  Cuentas De Profesores</span>

    </div>
</router-link>

    </div>


<div>
    <RouterView/>
</div>
</div>


<Footer/>

</template>
<script setup>
  import Footer from '../Footer_Login/Footer.vue';
  import header_sin_login from '../Headers/header_sin_login.vue';
  
</script>


<style scoped>

.mainContainer{
    background-color: white;
    width: 80%;
    margin: auto;
    margin-top: 4vh;
    border-radius: 10px;
    padding: 30px;

}

h1{
    font-size: 2rem;
    text-align: center;
    color: #83b4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}

.cuentas-container{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    margin-bottom: 6vh;
}

.cuenta-card{
    background-color: #83b4ff;
    color: white;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 7px;
    transition: background-color 0.3s ease;

}

.cuenta-card i{
    font-size: 22px;
    margin-right: 8px;
}

.cuenta-card:hover{
    background-color: #7fa1c3;
}


.back-button {
    background-color: transparent;
    border: none;
    color: #83b4ff;
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
    color: #7fa1c3;
  }


  /* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .mainContainer {
    width: 90%; /* Ajuste de ancho para tablets */
    margin-top: 3vh; /* Margen superior reducido */
    padding: 20px; /* Padding reducido */
  }

  h1 {
    font-size: 1.8rem; /* 1.8rem = 28.8px */
    margin-bottom: 20px; /* Margen inferior reducido */
  }

  .cuentas-container {
    flex-direction: row; /* Mantener disposición en fila */
    gap: 15px; /* Espacio entre tarjetas reducido */
    margin-bottom: 4vh; /* Margen inferior reducido */
  }

  .cuenta-card {
    padding: 12px; /* Padding reducido */
    font-size: 18px; /* Tamaño de fuente reducido */
  }

  .cuenta-card i {
    font-size: 20px; /* Tamaño de ícono reducido */
  }

  .back-button {
    font-size: 1rem; /* 1rem = 16px */
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .mainContainer {
    width: 95%; /* Ajuste de ancho para celulares */
    margin-top: 2vh; /* Margen superior reducido */
    padding: 5px; /* Padding reducido */
  }

  h1 {
    font-size: 1.5rem; /* 1.5rem = 24px */
    margin-bottom: 15px; /* Margen inferior reducido */
  }

  .cuentas-container {
    flex-direction: column; /* Cambiar a disposición en columna */
    gap: 10px; /* Espacio entre tarjetas reducido */
    margin-bottom: 3vh; /* Margen inferior reducido */
  }

  .cuenta-card {
    padding: 10px; /* Padding reducido */
    font-size: 16px; /* Tamaño de fuente reducido */
    text-align: center; /* Centrar texto */
  }

  .cuenta-card i {
    font-size: 18px; /* Tamaño de ícono reducido */
  }

  .back-button {
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }
}

</style>