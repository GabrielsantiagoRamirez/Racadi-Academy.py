<template>
    <Header_sin_login/>

    <RouterLink to="/portal_pagos"> <div> Portal de pagos </div></RouterLink>
    <RouterLink to="/solicitudes"> <div>Solicitudes</div> </RouterLink>
    <router-link to="/observacionEstudiante">
    <div>
        Observaciones estudiantes
        <i class="fa fa-plus-circle"></i>
    </div>
</router-link>



    <router-link to="/reserva_clase">
        <div>Reservar Clases </div>
    </router-link>

    <h1 class="h1_portal_Admin">Portal de estudiantes</h1>

<div class="cont_acciones_admin">
    
    <RouterLink to="/portal_pagos" class="acciones_Admin">
        <i  id="Icon_acciones_Admin" class="fa fa-credit-card-alt" aria-hidden="true"></i>
        <a href="">Pagos de plan</a>
    </RouterLink>


    <router-link to="/observacionEstudiante" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-file-text" aria-hidden="true"></i>
    <a href="">Observaciones de estudiantes</a>

    </router-link>

    <div class="acciones_Admin">
        
    </div>
</div>

    <Footer/>








</template>
<script setup>
import Header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';

 

</script>