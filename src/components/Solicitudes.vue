<template>
    <Header_sin_login/>
    <div class="container_principal_solicitudes">
        <h1 class="solicitudes_texto">Solicitudes</h1>
        <div class="transparent-container">
            <div class="contenedor_tabla_solicitud">
                <table class="tabla_solicitud">
                    <thead class="contenedor_informacion_solicitud_header">
                        <tr>
                            <td class="cabeza_tabla_solicitudes">Id</td>
                            <td class="cabeza_tabla_solicitudes">Documento</td>
                            <td class="cabeza_tabla_solicitudes">Descripcion</td>
                            <td class="cabeza_tabla_solicitudes">Respuesta</td>
                            <td class="cabeza_tabla_solicitudes">Fecha de Creación</td>
                        </tr>
                    </thead>
                    <tbody class="fondo_solicitudes" v-if="solicitud.length > 0">
                        <tr v-for="s in solicitud" :key="s.id_solicitud">
                            <td class="informacion_solicitud">{{ s.id_solicitud }}</td>
                            <td class="informacion_solicitud">{{ s.documento }}</td>
                            <td class="informacion_solicitud">{{ s.descripcion }}</td>
                            <td class="informacion_solicitud">
                                <span v-if="s.respuesta === ''">No te han enviado respuesta aún</span>
                                <span v-else>{{ s.respuesta }}</span>
                            </td>
                            <td class="informacion_solicitud">{{ s.fecha_creacion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container_solicitud_botones">
                <RouterLink to="/solicitudes/anadir_solicitud">
                    <i class="fa fa-folder-o"></i>
                    <button class="agregar_solicitud_info"> Agregar</button> 
                </RouterLink>
                <RouterLink to="/solicitudes/editar_solicitud">
                    <i class="fa fa-folder-o"></i>
                    <button class="agregar_solicitud_info"> Editar </button>
                </RouterLink>
                <RouterLink to="/solicitudes/eliminar_solicitud">
                    <button class="eliminar_solicitud_ing"> Eliminar </button>
                </RouterLink>
                <RouterView/>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Header_sin_login from './header_sin_login.vue';
import Footer from './Footer.vue';
// Declaración de referencias reactivas y router
const solicitud = ref([]);
const router = useRouter();

// Función para obtener la información de las solicitudes
const info_solicitudes = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        router.push('/login');
        return;
    }
    try {
        const response = await axios.get('http://127.0.0.1:8000/traer_datos_solicitudes', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        solicitud.value = response.data;
        console.log(solicitud);
        console.log("Me encuentro aquí");

    } catch (error) {
        console.error('Error fetching solicitudes:', error);
        localStorage.removeItem('token');
        router.push('/login'); // Redirige a login en caso de error
    }
};

// Montar la función cuando el componente está listo
onMounted(info_solicitudes);

</script>




<style scoped>
@media (min-width: 1200px) and (max-width: 1499px){

}

/* Contenedor principal */
.container_principal_solicitudes {
    width: 80%;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.85); /* Fondo sutil */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    border-radius: 10px;
    padding: 40px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
}

/* Estilo de la tabla */
.contenedor_tabla_solicitud {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
}

.tabla_solicitud {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.cabeza_tabla_solicitudes {
    background-color: #4e70b5; /* Azul medio */
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
    font-size: 20px;
    padding: 15px;
    text-align: left;
    font-weight: bold;
    border-bottom: 3px solid #2090c2; /* Azul fuerte */
}

.informacion_solicitud {
    background-color: #53649b; /* Azul más oscuro */
    color: #ffffff;
    text-align: center;
    border: 1px solid #2090c2; /* Azul fuerte */
    padding: 12px;
    font-size: 16px;
}

.fondo_solicitudes {
    background-color: #53649b;
}

/* Botones */
.container_solicitud_botones {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.agregar_solicitud_info {
    background-color: #2090c2; /* Azul fuerte */
    border: none;
    border-radius: 10px;
    color: #ffffff;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.eliminar_solicitud_ing{
    border: none;
    border-radius: 10px;
    color: #ffffff;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.agregar_solicitud_info i {
    margin-right: 8px;
}

.agregar_solicitud_info:hover {
    background-color: #4e70b5; /* Azul medio */
}

.agregar_solicitud_info {
    background-color: #4e70b5; /* Azul medio */
}

.agregar_solicitud_info:hover {
    background-color: #52639b; /* Azul más oscuro */
}

.editar_solicitud_ing {
    background-color: #52639b; /* Azul más oscuro */
}

.editar_solicitud_ing:hover {
    background-color: #53649b;
}

.eliminar_solicitud_ing {
    background-color: #d9534f; /* Rojo suave */
}

.eliminar_solicitud_ing:hover {
    background-color: #c9302c; /* Rojo más oscuro */
}

/* Titulos */
.solicitudes_texto {
    text-align: center;
    font-size: 28px;
    color: #2090c2; /* Azul fuerte */
    margin-bottom: 20px;
}

/* Contenedor casi imperceptible */
.transparent-container {
    background-color: rgba(255, 255, 255, 0.15); /* Fondo casi transparente */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05); /* Sombra sutil */
}

</style>