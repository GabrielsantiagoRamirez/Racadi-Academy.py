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


</style>