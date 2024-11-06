<template>
    <Header_sin_login/>

    <h1 class="h1_portal_Admin">Portal de administrador</h1>

<div class="cont_acciones_admin">
<router-link to="/crear_cuentas" class="acciones_Admin">
    
        <i id="Icon_acciones_Admin" class="fa fa-user-plus" aria-hidden="true"></i>
        <a href="">Creacion de usuarios</a>
        
    
</router-link>

<router-link to="/editar_eliminar_cuentas" class="acciones_Admin">
    
        <i id="Icon_acciones_Admin" class="fa fa-cog" aria-hidden="true"></i>
        <a href="">Eliminar y Editar Cuentas</a>
</router-link>


<router-link to="/anadir_clase" class="acciones_Admin">
    <i id="Icon_acciones_Admin" class="fa fa-calendar-plus" aria-hidden="true"></i>
    <a href="">Crear clases</a>
</router-link>

<router-link to="/add_notes" class="acciones_Admin">
    <i id="Icon_acciones_Admin" class="fa fa-book" aria-hidden="true"></i>
    <a href="">Subir Resultados De Evaluacion</a>
</router-link>


<router-link to="/agregarobservacion" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-pencil-square" aria-hidden="true"></i>
        <a href="">Agregar Observaciones</a>
   
</router-link>


<router-link to="/solicitudes_admin" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-check-square" aria-hidden="true"></i>
        <a href="">Ver Solicitudes</a>
   
</router-link>


<router-link to="/crear_comunicados" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-comments" aria-hidden="true"></i>
        <a href="">Enviar Comunicados</a>
   
</router-link>
</div>




    <Footer/>

</template>


<script setup> 
import Header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';
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