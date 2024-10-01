<template>
    <Header_sin_login/>
    <RouterLink to="/portal_pagos">
        <button>Quiero Pagar re YA</button>
    </RouterLink>
    <RouterLink to="/portal_pagos"> <button> Quiero pagar re ya</button></RouterLink>
    <RouterLink to="/solicitudes"> <button>QUiero ver mis solicitudes zungas</button> </RouterLink>
    <router-link to="/observacionEstudiante">
    <div>
        Observaciones estudiantes
        <i class="fa fa-plus-circle"></i>
    </div>
</router-link>
    <Footer/>




</template>
<script setup>
import Header_sin_login from './header_sin_login.vue';
import Footer from './footer.vue';

 

</script>