<template>
    <Header_sin_login/>
    <h1 class="h1_portal_Admin">Portal de administrador</h1>

<div class="cont_acciones_admin">

<router-link to="/agregarobservacion" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-pencil-square" aria-hidden="true"></i>
        <a href="">Agregar Observaciones</a>
   
</router-link>

<router-link to="/HorarioProfesor" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-calendar" ></i>
    <a>Tu Horario de clases </a>
   
</router-link>

<router-link to="/ver_comunicados" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-newspaper" aria-hidden="true"></i>
    <a href="">Comunicados</a>

    </router-link>

</div>
</template>
<script setup>
import Header_sin_login from './header_sin_login.vue';
</script>

<style scoped>
.h1_portal_Admin{
    text-align: center;
    font-size: 40px;
    color: #6bc8ec;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 4%;
    margin-bottom: 3%;

}

.cont_acciones_admin{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}


.acciones_Admin{
    background-color: #6bc8ec;
    height: auto;
    width: 8%;
    display: flex;
  flex-direction: column;
  padding:2%;
  justify-content: space-around;
  color: white;
  align-items: center;

}
.acciones_Admin:hover{
background-color: #6bc7ec56;

}
.acciones_Admin a{
    color: white;
    text-align:center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 17px;
    margin-top: 15%;
    
    
}
#Icon_acciones_Admin{
    font-size: 60px;
    
    background-color: rgba(250, 235, 215, 0);

}

</style>