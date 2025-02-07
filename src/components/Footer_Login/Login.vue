<template>
    <Header_login/>
    
    <div class="wrapper_login">
        <form @submit.prevent="handleLogin" class="form_login">
            <div class="txt_container_login">
                <h1 class="title_login">LOGIN</h1>
            </div>
            <div class="inp">
                <input v-model="usuario" type="text" class="input_login" placeholder="usuario" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="inp">
                <input
                    :type="mostrarContraseña ? 'text' : 'password'"
                    v-model="contraseña"
                    class="input_login"
                    placeholder="contraseña"
                    required
                >
                <i
                    :class="mostrarContraseña ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                    @click="togglePassword"
                    class="toggle_password_icon"
                ></i>
            </div>
            <button class="submit_login" type="submit">Iniciar sesión</button>
            <div class="login_mensaje_error" v-if="mensaje_error">
                <i class="fa fa-exclamation"></i>&nbsp;{{ mensaje_error }}
            </div>
            <p class="fp">¿Olvidaste tu contraseña? <a href="" class="back_link_login"><b>Haz click aquí</b></a></p>
            <p class="go_back_login"><router-link to="/"><b>Volver</b></router-link></p>
        </form>

        <div class="banner_login">
            <img src="../img/logoRacadi.png" alt="" class="logo_login">
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Footer from '../Footer_Login/Footer.vue';
import Header_login from '../Headers/Header_login.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { jwtDecode } from "jwt-decode";

const usuario = ref('');
const contraseña = ref('');
const mensaje_error = ref('');
const mostrarContraseña = ref(false);  

const router = useRouter();

const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:8000/login', {
            usuario: usuario.value,
            contraseña: contraseña.value,
        });
        
        const token_decodificado = jwtDecode(response.data.access_token);

        localStorage.setItem('token', response.data.access_token);

        const rol = token_decodificado.rol;
        if (rol === 'administrador') {
            router.push('/main_admin');
        } else if (rol === 'estudiante') {
            router.push('/main_estudiante');
        } else if (rol === 'profesor') {
            router.push('/main_profesor');
        }
    } catch (error) {
        mensaje_error.value = error.response?.data.detail || 'Algo salió mal. Intenta nuevamente';
    }
};

// Función para alternar entre mostrar y ocultar la contraseña
const togglePassword = () => {
    mostrarContraseña.value = !mostrarContraseña.value;
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

.login_mensaje_error {
    color: red;
    font-size: 18px;
    display: flex;
    align-self: self-start;
    margin-left: 9vh;
    margin-top: 5px;
}

.wrapper_login {
    position: relative;
    width: 800px;
    height: 65vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid #7baad6;
    box-shadow: 0 0 40px 0 #83B4FF;
    margin-top: 7vh;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(to right, #43607c, #3562a7);
}

.form_login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.title_login {
    font-size: 40px;
    margin-top: 30px;
    color: white;
}

.inp {
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    position: relative;
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
    font-size: 16px;
    color: white;
    margin-top: 5px;
}

.back_link_login {
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
    font-size: 18px;
    margin-top: 10px;
    color: #83B4FF;
}

.logo_login {
    height: 40vh;
    width: 40vh;
    margin-top: 7vh;
}

.txt_container_login {
    text-align: left;
    width: 100%;
    padding-left: 35vh;
}

.fa-solid {
    color: white;
    font-size: 2vh;
    margin-left: 8px;
}

.toggle_password_icon {
    cursor: pointer;
    color: white;
    font-size: 2vh;
    margin-left: 8px;
   
}





/* Para tablets */
@media (min-width: 481px) and (max-width: 1024px) {
  .wrapper_login {
    width: 80%;
    height: auto;
    margin-top: 5vh;
  }

  .banner_login {
    display: none;
  }

  .txt_container_login {
    padding-left: 0;
  }

  .form-row {
    grid-template-columns: 1fr 1fr;
  }

  .form-login {
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
  }
}




/* Estilos para celulares */
@media (min-width: 100px) and (max-width: 480px) {
    .wrapper_login {
        display: flex;
        flex-direction: column; 
        align-items: center; 
       height: auto;
        width: 90%; 
        margin: 0 auto;
        padding: 10px; 
        margin-bottom: 10%;
        margin-top: 10%;
    }

    .txt_container_login {
        text-align: center; 
        width: 100%; 
        margin: 20px 0; 
        padding-left: 0; 
    }

    .banner_login {
        display: none; 
    }

    .form_login {
        width: 100%;
        padding: 0; 
        align-items: center; 
    }

    .title_login {
        font-size: 28px; 
        margin-top: 20px; 
        margin-bottom: 10px; 
    }

    .input_login {
        width: 80%; 
        margin-top: 20px; 
    }

    .submit_login {
        width: 70%; 
        margin-top: 15px; 
    }

    .login_mensaje_error {
        font-size: 16px; 
        margin-left: 0; 
        margin-left: auto;
        margin-right: auto;
    }

    .fp, .go_back_login {
        font-size: 14px; 
    }

    .logo_login {
        display: none; 
    }
}




/* Estilos para tablets */
@media (min-width: 481px) and (max-width: 1024px) {
    .wrapper_login {
        width: 80%;
        height: auto;
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .banner_login {
        display: none; 
    }

    .txt_container_login {
    text-align: center; 
    width: 100%; 
    margin: 20px 0; 
}

    .form_login {
        width: 90%;
        margin: 0 auto;
        padding: 2rem; 
    }

    .title_login {
        font-size: 36px; 
    }

    .input_login {
        width: 80%; 
        margin-top: 20px; 
    }

    .submit_login {
        width: 70%; 
        margin-top: 15px; 
        max-width: 260px;
    }

    .login_mensaje_error {
        font-size: 16px; 
        margin-left: auto;
        margin-right: auto; 
    
    }

    .fp, .go_back_login {
        font-size: 16px; 
    }

    .logo_login {
        display: none;
    }
}


</style>



