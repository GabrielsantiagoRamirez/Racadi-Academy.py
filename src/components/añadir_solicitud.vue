<template>
    <div class="contenedor_solicitud_form">
        <h1 class="titulo_solicitud"> Añadir Solicitud</h1>
        <form @submit.prevent="añadir_solicitud" class="formulario_solicitud">
            <div class="formulario_grupo_añadir">
                <label for="documento">
                    <i class="fa fa-id-card"></i> Documento
                </label>
                <input type="text" v-model="documento" id="documento" required>
            </div>

            <div class="formulario_grupo_añadir">
                <label for="descripcion">
                    <i class="fa fa-commenting-o"></i> Descripción
                </label>
                <input type="text" v-model="descripcion" id="descripcion" required>
            </div>

            <button type="submit" class="enviar_solicitud">
                <i class="fa fa-save"></i> Guardar Solicitud
            </button>
        </form>
    </div>
</template>

<script setup>
// Variables para el método POST
const documento = ref('');
const descripcion = ref('');

// Importaciones necesarias para Vue
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const añadir_solicitud = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/añadir_Solicitud', {
            documento: documento.value,
            descripcion: descripcion.value
        });

        Swal.fire({
            icon: 'success',
            title: 'Solicitud registrada',
            text: 'Solicitud agregada exitosamente'
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

.formulario_grupo_añadir {
    margin-bottom: 15px;
}

.formulario_grupo_añadir label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}

.formulario_grupo_añadir input {
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
