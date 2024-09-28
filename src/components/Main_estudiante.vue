<template>
    <Header_sin_login/>

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
import Footer from './Footer.vue';

 

</script>