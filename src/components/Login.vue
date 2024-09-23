<template>
    <Header_login/>
    <div class="wrapper_login">
        <form @submit.prevent="handleLogin" class="form_login">
            <div class="txt_container_login">
                <h1 class="title_login">LOGIN</h1>
            </div>
            <div class="inp">
                <input v-model="usuario" type="text" class="input_login" placeholder="usuario" required >
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="inp">
                <input v-model="contraseña" type="password"  class="input_login" placeholder="contraseña" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <button class="submit_login" type="submit">Iniciar sesión</button>
            <p class="fp">¿Olvidaste tu contraseña? <a href="" class="back_link_login"><b>Haz click aquí</b></a></p>
            <p class="go_back_login"><router-link to="/"><b>Volver</b></router-link ></p>
        </form>

        <div class="banner_login">
            <img src="../components/img/LogoRacadi.png" alt="" class="logo_login">
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Header_login from './Header_login.vue';
import Footer from './Footer.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; 
import { jwtDecode } from "jwt-decode";


// Variables para los inputs you know
const usuario = ref('');
const contraseña = ref('');

//tener el router para la redireccion
const router = useRouter();

// funcion de inicio de sesion
const handleLogin = async () => {
    try {
        // Hacer la solicitud post a la API de login
        const response = await axios.post('http://localhost:8000/login', {
            usuario: usuario.value,
            contraseña: contraseña.value,
        });
        
        const token_decodificado=jwtDecode(response.data.access_token)
        console.log(response.data)
        console.log("funciona")
        // mensaje bonito de exito
        Swal.fire({
            icon: 'success',
            title: 'Login exitoso',
            text: `Has iniciado sesión como ${token_decodificado.rol}`,
        });
   
        localStorage.setItem('token' ,response.data.access_token )
        console.log(localStorage.getItem('token'))
 

        // Redireccionar según el rol
        const rol = token_decodificado.rol;
        if (rol === 'administrador') {
            router.push('/main_admin'); 
        } else if (rol === 'estudiante') {
            router.push('/main_estudiante'); 
        } else if (rol === 'profesor') {
            router.push('/main_profesor'); 
        }
    } catch (error) {
        if (error.response && error.response.data.detail) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.detail// Muestra el mensaje de error devuelto por la API
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo salió mal. Intenta nuevamente.',
            });
        }
    }
};
</script>


<style>

::-webkit-input-placeholder {
    color: #eee;
}

a {
    text-decoration: none;
}

b {
    color: rgb(70, 199, 199);
}

.wrapper_login {
    position: relative;
    width: 800px;
    height: 65vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid  #7baad6;
    box-shadow: 0 0 40px 0 #83B4FF;
    margin-top: 7vh;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(to right, #43607c,  #3562a7);

}

.form_login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left
}

.title_login {
    font-size: 40px;
    margin-top: 30px;
    color:white;
}

.inp {
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

.input_login {
    border: none;
    outline: none;
    background: none;
    width: 260px;
    margin-top: 40px;
    padding-right: 10px;
    font-size: 17px;
    color: #0ef;
}

.submit_login {
    border: none;
    outline: none;
    width: 288px;
    margin-top: 25px;
    padding: 10px 0;
    font-size: 20px;
    border-radius: 40px;
    letter-spacing: 1px;
    cursor: pointer;
    background: linear-gradient(45deg, #4b8ef3, #7baad6);
    color: white;
}

.fp {
    letter-spacing: 0.5px;
    font-size: 18px;
    color: white;
    margin-top: 5vh;
}

.back_link_login{
    color: #83B4FF;
    text-decoration: none;
    margin-left: 5px;
}

.banner_login {
    position: absolute;
    top: 0;
    right: 0;
    width: 80vh;
    height: 100%;
    background: linear-gradient(to right, #97c0ff, #43607c);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
    display: flex;
    justify-content: right;
    padding-right: 9vh;
}


.go_back_login {
font-size: 20px;
margin-top: 10px;
color: #83B4FF;
}
.logo_login{
height: 45vh;
width:45vh;
margin-top: 7vh;
}
.txt_container_login{
    text-align: left;
    width: 100%;
    padding-left: 35vh;
}

.fa-solid{
    color: white;
    font-size: 2vh;
}

</style>


