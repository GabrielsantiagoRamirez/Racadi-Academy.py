<template>
  <header_sin_login />
    <div class="contenedor_tabla_pago">
        <router-link to="/main_estudiante">
            <button class="back-button">
                <i class="fa fa-arrow-left"></i> Volver
            </button>
        </router-link>
        <div>
            <span class="cabeza_tabla_pagos"> Créditos Activos</span>
        </div>
        <div class="tabla-scroll"> <!-- Contenedor con scroll horizontal -->
            <table class="tabla_pago">
                <thead class="contenedor_informacion_pago_header">
                    <tr class="fila_titulo">
                        <td>Pagare</td>
                        <td>Documento</td>
                        <td>Saldo</td>
                        <td>Pago Minimo</td>
                        <td>Monto Por Mora</td>
                        <td>Pago Total</td>
                        <td>Fecha del Próximo Pago</td>
                        <td>Días de Mora</td>
                    </tr>
                </thead>
                <tbody v-if="cuenta">
                    <tr class="informacion_fila">
                        <td>{{ cuenta.pagare }}</td>
                        <td>{{ cuenta.documento }}</td>
                        <td>$ {{ cuenta.saldo }}</td>
                        <td>$ {{ cuenta.pago_minimo }}</td>
                        <td>$ {{ cuenta.monto_por_mora }}</td>
                        <td>$ {{ cuenta.pago_total }}</td>
                        <td>{{ cuenta.fecha_proximo_pago }}</td>
                        <td>{{ cuenta.dias_mora }}</td>
                    </tr>
                </tbody>
                <div v-else class="chargin">
                    Cargando... <i class="fa fa-clock"></i>
                </div>
            </table>
        </div>

        <div class="title_margin">
            <span class="cabeza_tabla_pagos">Historial De Pagos</span>
        </div>
        <table class="tabla_pago_dos" v-if="pagos.length > 0">
            <thead class="contenedor_informacion_pago_header">
                <tr class="fila_titulo">
                    <td>ID De Pago</td>
                    <td>Fecha</td>
                    <td>Valor</td>
                </tr>
            </thead>
            <tbody class="historial_pagos_body">
                <tr class="informacion_fila" v-for="pago in pagos" :key="pago.id_pago">
                    <td>{{ pago.id_pago }}</td>
                    <td>{{ pago.fecha }}</td>
                    <td>$ {{ pago.valor }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <p class="no-historial-mensaje">Por el momento, no cuentas con un historial de pagos</p>
        </div>
    </div>
    <Footer/>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const usuario = ref(null);
const cuenta = ref(null);
const router = useRouter();
const pagos = ref([])

import Footer from '../Footer_Login/Footer.vue';
import Header_sin_login from '../Headers/header_sin_login.vue';

const info_cuenta = async () => {
    try {
        const response = await axios.get(`apiracadipy-production.up.railway.app/datos_cuenta/${usuario.value.documento}`);
        cuenta.value = response.data;
        console.log(cuenta.value)
    } catch (error) {
        console.error('Error al obtener los datos de cuenta:', error);
    }
};

const info_pagos = async () => {
    try {
        const response = await axios.get(`apiracadipy-production.up.railway.app/getStudentpayments/${usuario.value.documento}`);
        pagos.value = response.data;
        console.log(pagos.value)
    } catch (error) {
        console.error('Error al obtener los pagos de cuenta:', error);
    }
};

const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        router.push("/login");
        return;
    }
    try {
        const response = await axios.get('apiracadipy-production.up.railway.app/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        usuario.value = response.data;
        if (usuario.value && usuario.value.documento) {
            await info_cuenta();
            await info_pagos();
        }
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        localStorage.removeItem('token');
        router.push('/login');
    }
};

onMounted(fetchUserProfile);
</script>

<style scoped>
.historial_pagos_body {
    max-height: 300px; 
    overflow-y: auto; 
    display: block; 
    background-color: #ffffff;
}

.tabla_pago thead, .tabla_pago tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.tabla_pago tbody {
    display: block;
}

.tabla_pago {
    border: 1px solid #d6e0f5; 
    border-radius: 8px; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.tabla_pago_dos thead, .tabla_pago_dos tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.tabla_pago_dos tbody {
    display: block;
}

.tabla_pago_dos {
    border: 1px solid #d6e0f5; 
    border-radius: 8px; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}


.fila_titulo {
    background: linear-gradient(90deg, #83B4FF, #7FA1C3); 
    color: white;
    font-weight: bold;
}

.informacion_fila:nth-child(even) {
    background-color: #f0f4fa;
}

.informacion_fila:hover {
    background-color: #e8eefb; 
}

.boton_confirmar, .boton_cancelar {
    transition: transform 0.2s ease, background-color 0.3s ease;
}

.boton_confirmar:hover, .boton_cancelar:hover {
    transform: scale(1.05); 
}

.contenedor_tabla_pago {
    width: 70%;
    margin: 50px auto;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
}

.cabeza_tabla_pagos {
    font-family: 'Anek Devanagari', sans-serif;
    font-size: 29px;
    text-align: center;
    color: #7FA1C3;
}

.title_margin {
    margin-top: 30px;
}

.fila_titulo {
    background-color: #83B4FF;
    color: white;
    text-align: center;
}

.informacion_fila {
    background-color: #f5f5f5;
    color: #53649b;
    font-size: 18px;
    text-align: center;
}

.tabla_pago {
    width: 100%;
    border-collapse: collapse;
    margin-top: 5px;
}

.tabla_pago th,
.tabla_pago td {
    padding: 12px;
    border-bottom: 2px solid #83B4FF;
}

.tabla_pago_dos {
    width: 100%;
    border-collapse: collapse;
    margin-top: 5px;
}

.tabla_pago_dos th,
.tabla_pago_dos td {
    padding: 12px;
    border-bottom: 2px solid #83B4FF;
}



.back-button {
    background-color: transparent;
    border: none;
    color: #83B4FF;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
}

.back-button i {
    margin-right: 8px;
}

.back-button:hover {
    color: #7FA1C3;
}

.no-historial-mensaje {
    font-size: 18px;
    color: #ff7f7f;
    background-color: #fbe6e6; 
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
}

.chargin{
    font-size: 20px;
    color: #83B4FF;
    margin-top: 5px;
}

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
    .contenedor_tabla_pago {
        width: 90%;
        padding: 15px;
    }
    .tabla-scroll{
        overflow-x: scroll;
    }
    .cabeza_tabla_pagos {
        font-size: 24px;
    }
    .tabla_pago {
        overflow-x: auto;
        display: block;
        min-width: 800px;

    }

    .tabla_pago th,
     .tabla_pago td {
    padding: 6px;
    border-bottom: 2px solid #83B4FF;
    }

    .tabla_pago_dos {
        overflow-x: auto;
        display: block;
    }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
    .contenedor_tabla_pago {
        width: 95%;
        padding: 10px;
    }
    .tabla-scroll{
        overflow-x: scroll;
    }
    .cabeza_tabla_pagos {
        font-size: 20px;
    }
    .tabla_pago {
        overflow-x: auto;
        display: block;
        min-width: 800px;
    }

    .tabla_pago th,
     .tabla_pago td {
    padding: 6px;
    border-bottom: 2px solid #83B4FF;
    }

    .tabla_pago_dos {
        overflow-x: auto;
        display: block;
    }
    .back-button {
        font-size: 1rem;
    }
    .no-historial-mensaje {
        font-size: 16px;
    }
}
</style>
