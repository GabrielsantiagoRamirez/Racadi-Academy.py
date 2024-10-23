<template>
    <Header_sin_login/>
    <div class="contenedor_tabla_pago" v-if="cuenta">
        <table class="tabla_pago">
            <thead class="contenedor_informacion_pago_header">
                <tr>
                    <th colspan="6" class="cabeza_tabla_pagos">Creditos Activos</th>
                </tr>
                <tr class="fila_titulo">
                    <td>Pagare</td>
                    <td>Documento</td>
                    <td>Saldo</td>
                    <td>Pago Minimo</td>
                    <td>Fecha del Próximo Pago</td>
                    <td>Días de Mora</td>
                </tr>
            </thead>
            <tbody>
                <tr class="informacion_fila">
                    <td>{{ cuenta.pagare }}</td>
                    <td>{{ cuenta.documento }}</td>
                    <td>{{ cuenta.saldo }}</td>
                    <td>{{ cuenta.pago_minimo }}</td>
                    <td>{{ cuenta.fecha_proximo_pago }}</td>
                    <td>{{ cuenta.dias_mora }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="contenedor_botones">
        <RouterLink to="/pagina_pago">
            <button class="boton_confirmar">Confirmar para pago</button>
        </RouterLink>
        <RouterLink to="/main_estudiante">
            <button class="boton_cancelar">Cancelar</button>
        </RouterLink>
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

// Componente para el Header y Footer
import Footer from './Footer.vue';
import Header_sin_login from './header_sin_login.vue';

const info_pagos = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/datos_cuenta/${usuario.value.documento}`);
        cuenta.value = response.data;
    } catch (error) {
        console.error('Error al obtener los datos de cuenta:', error);
    }
};

const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        router.push("/login");
        return;
    }
    try {
        const response = await axios.get('http://localhost:8000/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        usuario.value = response.data;
        if (usuario.value && usuario.value.documento) {
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
@media (min-width: 1200px) and (max-width: 1499px) {}

.contenedor_tabla_pago {
    width: 60%;
    margin: 50px auto;
    background-color: #E2DAD6;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}

.cabeza_tabla_pagos {
    font-family: 'Anek Devanagari', sans-serif;
    font-size: 24px;
    text-align: center;
    color: #7FA1C3;
}

.fila_titulo {
    background-color: #83B4FF;
    color: white;
    text-align: center;
}

.informacion_fila {
    background-color: #F5EDED;
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

.contenedor_botones {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.boton_confirmar, .boton_cancelar {
    font-family: 'Anek Devanagari', sans-serif;
    background-color: #83B4FF;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
}

.boton_confirmar:hover {
    background-color: #7FA1C3;
}

.boton_cancelar {
    margin-left: 15px;
}

.boton_cancelar:hover {
    background-color: #E2DAD6;
    color: #53649b;
}

.boton_confirmar:focus, .boton_cancelar:focus {
    outline: none;
    box-shadow: 0px 0px 5px #83B4FF;
}

</style>

