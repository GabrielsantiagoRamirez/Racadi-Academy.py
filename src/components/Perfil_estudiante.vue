<template>
    <div>
      <h1>Perfil Estudiante</h1>
      <div v-if="usuario">
        <p>Documento: {{ usuario.documento }}</p>
        <p>Nombre: {{ usuario.nombre }}</p>
        <!-- Aquí puedes agregar más detalles del usuario -->
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const usuario = ref(null);
      const router = useRouter();
  
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
          console.log(usuario)

        } catch (error) {
          console.error('Error fetching user profile:', error); // Manejo de errores
          localStorage.removeItem('token');
          router.push('/login'); // Redirige a login en caso de error
        }
      };
  
      onMounted(fetchUserProfile); // Llama a la función al montar el componente
  
      return { usuario }; // Retorna el estado del usuario para usar en el template
    },
  };
  </script>
  
  <style>
  /* Aquí puedes agregar estilos específicos para el perfil del estudiante */
  </style>
  