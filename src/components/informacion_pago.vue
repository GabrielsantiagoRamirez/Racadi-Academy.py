<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">




<body>
    <Header_sin_login/>
    <div class="contenedor_tabla_pago">
        <table class="tabla_pago">
            <thead class="contenedor_informacion_pago_header">
                <th colspan="6" class="cabeza_tabla_pagos">
                    Creditos activos
                </th>
                <tr>
                    <td class="cabeza_tabla_pagos">
                        Pagare
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Documento
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Saldo
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Pago Minimo
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Fecha del proximo pago
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Dias de mora
                    </td>
                </tr>
            </thead>
            <tbody class="fondo_pago" v-if="cuenta">
                <tr>
                    <td class="informacion_pago">
                        {{ cuenta.Pagare }}
                    </td>
                    <td class="informacion_pago">
                        {{ cuenta.Documento }}
                    </td>
                    <td class="informacion_pago">
                        {{ cuenta.Saldo }}
                    </td>
                    <td class="informacion_pago">
                        {{ cuenta['Pago Minimo']}}
                    </td>
                    <td class="informacion_pago">
                        {{ cuenta['Fecha del proximo pago'] }}
                    </td>
                    <td class="informacion_pago">
                        {{ cuenta['Dias de mora'] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container_info_botones">
        <button class="cancelar_pagos_info"> Confirmar para pago</button>
       <RouterLink to="/main_estudiante"> <button class="cancelar_pagos_ing"> cancelar </button></RouterLink> 
    </div>
</body>
<Footer/>
</template>


<script>
//Importaciones para que funcione el archivo
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


//COmponente para el Headder y el Footer
import Footer from './Footer.vue';
import Header_sin_login from './header_sin_login.vue';


export default {
    components: {
        Footer,
        Header_sin_login
    },
    setup() {
        const cuenta = ref(null);
        const router = useRouter();

        const info_pagos = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                router.push("/login")
                return;
            }
            try{
                const response = axios.get('http://localhost:8000/datos_cuenta',{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                cuenta.value = response.data;
                console.log(cuenta);
            } catch(error){  
            console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }
        };

        onMounted(info_pagos);
        return { cuenta };
    },
}
</script>


<style>
@media (min-width: 1200px) and (max-width: 1499px){

}

.contenedor_tabla_pago{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
.contenedor_informacion_pago_header{
    background-color: #4e70b5;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);  
}
.cabeza_tabla_pagos{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    border: 2px solid #2090c2;
    font-size: 20px;
    padding: 15PX;
}
.informacion_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    text-align: center;
    border: 2px solid #53649b;
    font-size: 20px;
    padding: 8PX;
    color: white;
}

.fondo_pago{
    background-color: #53649b;
}

.tabla_pago{
    border: 2px solid #53649b;
    text-align: center;
}

.cancelar_pagos_info {
font-family: "Anek Devanagari", sans-serif;
font-optical-sizing: auto;
background-color: #4e70b5; 
color: #ffffff;
padding: 12px 20px;
border-radius: 10px;
cursor: pointer;
font-size: 20px;
}
.cancelar_pagos_info:hover {
    background-color: #52639b; 
}

.cancelar_pagos_ing {
font-family: "Anek Devanagari", sans-serif;
font-optical-sizing: auto;
background-color: #4e70b5; 
color: #ffffff;
padding: 12px 20px;
border-radius: 10px;
cursor: pointer;
margin-left: 10px;
font-size: 20px;
}

.cancelar_pagos_ing:hover {
    background-color: #52639b; 
}


.container_info_botones{
margin-top: 10px;
width: 23%;
margin-right: auto;
margin-left: auto;
}


</style>