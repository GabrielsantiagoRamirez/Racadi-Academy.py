<template>
    <Header_sin_login/>

    <h1>Portal administrador</h1>

<router-link to="/crear_cuentas">
    <div>
        crear cuentas
        <i class="fa fa-plus-circle"></i>
    </div>
</router-link>

<router-link to="/editar_eliminar_cuentas">
    <div>
        Editar y Eliminar Cuentas
        <i class="fa fa-plus-circle"></i>
    </div>
</router-link>


    <Footer/>

</template>


<script setup> 
import Header_sin_login from './Header_sin_login.vue';
import Footer from './Footer.vue';
</script>