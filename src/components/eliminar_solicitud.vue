<template>
    <div class="contenedor_solicitud_form">
        <h1 class="titulo_solicitud"> Eliminar Solicitud</h1>
        <form @submit.prevent="editar_solicitud" class="formulario_solicitud">
            <div class="formulario_grupo_eliminar">
                <label for="documento">
                    <i class="fa fa-id-card"></i> Id
                </label>
                <input type="text" v-model="id" id="id" required>
            </div>

            <button type="submit" class="enviar_solicitud">
                <i class="fa fa-save"></i> Eliminar Solicitud
            </button>
        </form>
    </div>
</template>

<script setup>
// Variables para el método POST
const id = ref('');

// Importaciones necesarias para Vue
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const editar_solicitud = async () => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/eliminar_solicitud/${id.value}`, {
            id:id.value,
        });


        Swal.fire({
            icon: 'success',
            title: 'Solicitud Eliminada',
            text: 'Su solicitud ha sido eliminada de manera correcta'
        });

    } catch (error) {
        let mensajeError = error.response?.data?.detail || 'Algo salió mal. Intenta nuevamente.';

        if (typeof mensajeError === 'object') {
            mensajeError = JSON.stringify(mensajeError);
        }

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensajeError
        });
    }
};
</script>


<style>
@media (min-width: 1200px) and (max-width: 1499px){
}
.formulario_solicitud {
    background-color: #ffffff; /* Blanco */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
}

.formulario_grupo_eliminar {
    margin-bottom: 15px;
}

.formulario_grupo_eliminar label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}

.formulario_grupo_eliminar input {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.enviar_solicitud {
    width: 100%;
    background-color: #2090c2; /* Azul fuerte */
}

.enviar_solicitud:hover {
    background-color: #4e70b5; /* Azul medio */
}

/* Estilo de los títulos */
.titulo_solicitud {
    text-align: center;
    color: #2090c2; /* Azul fuerte */
    font-size: 24px;
    margin-bottom: 20px;
}
</style>