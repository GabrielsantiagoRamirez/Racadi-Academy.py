<template>
    <div class="contenedor_solicitud_form">
        <h1 class="titulo_solicitud"> Editar Solicitud</h1>
        <form @submit.prevent="editar_solicitud" class="formulario_solicitud">
            <div class="formulario_grupo_editar">
                <label for="documento">
                    <i class="fa fa-id-card"></i> Id
                </label>
                <input type="text" v-model="id" id="id" required>
            </div>
            <div class="formulario_grupo_editar">
                <label for="descripcion">
                    <i class="fa fa-commenting-o"></i> Descripción
                </label>
                <input type="text" v-model="descripcion" id="descripcion" required>
            </div>

            <button type="submit" class="enviar_solicitud">
                <i class="fa fa-save"></i> Guardar Solicitud Editada
            </button>
        </form>
    </div>
</template>

<script setup>
// Variables para el método POST
const id = ref('');
const descripcion = ref('');

// Importaciones necesarias para Vue
import { ref , onMounted} from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

import { useRouter } from 'vue-router';
const router = useRouter();
const usuario = ref([])

const editar_solicitud = async () => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/actualizar_solicitud/${id.value}`, {
            documento: usuario.value.documento,
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


const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push("/login");
          return; // Salir de la función si no hay token
        }
        try {
          const response = await axios.get('http://localhost:8000/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          usuario.value = response.data; // Asigna los datos del usuario
          console.log(usuario.value.documento)
        } catch (error) {
          console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }

      };

      onMounted(fetchUserProfile);
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

.formulario_grupo_editar {
    margin-bottom: 15px;
}

.formulario_grupo_editar label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}

.formulario_grupo_editar input {
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