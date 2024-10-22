<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
    
    <Header_sin_login/>
    <body>
        <div class="container_pagos">
            <form @submit.prevent="verificar_usuario">
            <img src="../components/img/logoRacadi.png" alt="" class="logo_pagos">
            <div class="sub_racadi_pagos">
                <h1>PORTAL DE PAGOS</h1>
            </div>
            <div>
                <form @submit.prevent="verificar_usuario">
                    <h1 class="subtitulo_pago">Tipo de Documento</h1>
                    <select class="pago_select" v-model="tipo_documento" id="tipo_de_documento" required>
                        <option v-for="tipo in tipos_documento" :key="tipo" :value="tipo">{{ tipo }}</option>
                    </select>
                    <h1 class="subtitulo_pago">Documento</h1>
                    <div>
                        <input type="text" v-model="documento" id="documento" required>
                    </div>
                    <RouterLink to="/main_estudiante"> <button class="cancelar_pagos_pagos"> Cancelar</button></RouterLink>
                    <button type="submit" class="cancelar_pagos_pagos"> Ingresar</button>
                </form>

            </div>
        </form>
        </div>
    </body>
    <Footer/>
</template>


<script setup>
//Funciones de Node
import Swal from 'sweetalert2';
import {ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { jwtDecode } from 'jwt-decode';

//COmponenetes del Header y Footer
import Header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';


//variable predeterminada para el tipo_documento
const tipos_documento=['cedula','cedula extranjera','tarjeta de identidad']


//Variables para hacer el Post
const documento = ref('')
const tipo_documento= ref('')



//tener el router para la redireccion
const router = useRouter();

// Funcion para verificar el usuario que va a pagar
const verificar_usuario = async()=>{
    try{
        // Hacer la solicitud post a la API verificar_pago
        const response = await axios.post('http://localhost:8000/verificar_pago',{
            tipo_de_documento:tipo_documento.value,
            documento:documento.value
        })
        Swal.fire({
            icon:'success',
            title:'Cuenta encontrada',
            text:`Ha ingresado de manera exitosa`,
        });

        //decodificar el token
        const token_decodificado=jwtDecode(response.data.access_token)
        console.log(response.data)

        // guardamos el token en el local storage
        localStorage.setItem('token' , response.data.access_token )
        console.log(localStorage.getItem('token'))
        //se redireccion a donde tiene la informacion del pago
        router.push('/info_pago')
    }catch (error) {
        if(error.response && error.response.data.detail){
            let mensajeError = error.response.data.detail;

            // Si mensajeError es un objeto se convierte a string para mostrarlo
            if (typeof mensajeError === 'object') {
                mensajeError = JSON.stringify(mensajeError);
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: mensajeError // Muestra el detalle del error
            });
        }else {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo salió mal. Intenta nuevamente.',
            });
        }
    }
}
</script>


<style scoped>

.container_pagos{
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.6);
    width: 500px;
    height: 750px;
    background-color: #7FA1C3; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 50px;
}

.sub_racadi_pagos{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 50px;
    color: #fdfdfd; 
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
.logo_pagos{
    width: 330px;
    height: 350px;
}
.cancelar_pagos_pagos {
    background-color: #4e70b5; 
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}
.cancelar_pagos_pagos:hover {
    background-color: #52639b; 
}

.pago_select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #ccc;
    color: black;
}

.subtitulo_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    margin-top: 20px;
    font-size: 24px;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
</style>