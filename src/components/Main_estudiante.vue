<template>
    <Header_sin_login/>
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
import Header_sin_login from './Header_sin_login.vue';
import Footer from './Footer.vue';

 

</script>