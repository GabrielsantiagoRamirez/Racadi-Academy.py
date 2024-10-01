<template>
    <Header_sin_login/>
    <div class="contenedor_tabla_solicitud">
        <table class="tabla_solicitud">
            <thead class="contenedor_informacion_solicitud_header">
                <th colspan="5" class="cabeza_tabla_solicitudes">
                    Solicitudes
                </th>
                <tr>
                    <td class="cabeza_tabla_solicitudes">
                        Id
                    </td>
                    <td class="cabeza_tabla_solicitudes">
                        Documento
                    </td>
                    <td class="cabeza_tabla_solicitudes">
                        Descripcion
                    </td>
                    <td class="cabeza_tabla_solicitudes">
                        Respuesta
                    </td>
                    <td class="cabeza_tabla_solicitudes">
                        Fecha de Creación
                    </td>
                </tr>
            </thead>
            <tbody class="fondo_solicitudes" v-if="solicitud">
                <tr >
                    <td class="informacion_solicitud">
                        {{ solicitud.id_solicitud }}
                    </td>
                    <td class="informacion_solicitud">
                        {{ solicitud.documento }}
                    </td>
                    <td class="informacion_solicitud">
                        {{ solicitud.descripcion }}
                    </td>
                    <td class="informacion_solicitud">
                        {{ solicitud.respuesta}}
                    </td>
                    <td class="informacion_solicitud">
                        {{ solicitud.fecha_creacion }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container_info_botones">
        <button class="cancelar_solicitud_info"> Agregar</button> 
        <button class="cancelar_solicitud_ing"> Editar </button>
    </div>
    <Footer/>
</template>

<script>
// Contenedores predeterminados
import Header_sin_login from './header_sin_login.vue';
import Footer from './footer.vue';


import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {
    components: {
        Footer,
        Header_sin_login
    },
    setup() {
        const solicitud = ref(null);
        const router = useRouter();

        const info_solicitudes = async () => {
            try {
                const token = localStorage.get
        }
    }
}
</script>