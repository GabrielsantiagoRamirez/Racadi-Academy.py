<template>
    <Header_sin_login/>

    
    

    <h1 class="h1_portal_Admin">Portal de estudiantes</h1>

<div class="cont_acciones_admin">
    
    <RouterLink to="/info_pago" class="acciones_Admin">
        <i  id="Icon_acciones_Admin" class="fa fa-credit-card-alt" aria-hidden="true"></i>
        <a href="">Pagos de plan</a>
    </RouterLink>


    <router-link to="/observacionEstudiante" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-file-text" aria-hidden="true"></i>
    <a href="">Observaciones de estudiantes</a>

    </router-link>

    <RouterLink to="/solicitudes" class="acciones_Admin"> 
        <i id="Icon_acciones_Admin" class="fa fa-comments" aria-hidden="true"></i>
        <a>Solicitudes</a> 
    </RouterLink>
    
    <router-link to="/reserva_clase" class="acciones_Admin">
        <i id="Icon_acciones_Admin" class="fa fa-calendar-plus" aria-hidden="true"></i>
        <a>Reservar Clases </a>
    </router-link>

    <router-link to="/HorarioEstudiante" class="acciones_Admin" >
        <i id="Icon_acciones_Admin" class="fa fa-calendar" ></i>
        <a>Tu Horario de clases </a>
    </router-link>

    

    
</div>

    <Footer/>








</template>
<script setup>
import Header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';

 

</script>