<template>
    <Header_sin_login/>
    <h1 class="h1_portal_Admin">Portal de administrador</h1>

<div class="cont_acciones_admin">

<router-link to="/agregarobservacion" class="acciones_Admin">
    
    <i id="Icon_acciones_Admin" class="fa fa-pencil-square" aria-hidden="true"></i>
        <a href="">Agregar Observaciones</a>
   
</router-link>

</div>
</template>
<script setup>
import Header_sin_login from './Header_sin_login.vue';</script>