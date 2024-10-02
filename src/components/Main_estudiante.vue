<template>
    <Header_sin_login/>

    <RouterLink to="/portal_pagos">
        <button>Quiero Pagar re YA</button>
    </RouterLink>

    <router-link to="/observacionEstudiante">
    <div>
        Observaciones estudiantes
        <i class="fa fa-plus-circle"></i>
    </div>
</router-link>


    <router-link to="/reserva_clase">
        <div>Reservar Clases </div>
    </router-link>

    <Footer/>









</template>
<script setup>
import Header_sin_login from './Header_sin_login.vue';
import Footer from './Footer.vue';

 

</script>