<template>
  <header_sin_login/>
    <div class="container_principal_solicitudes">
      <div class="volver-container">
        <router-link to="/main_estudiante">
          <div class="back-button">
            <i class="fa fa-arrow-left"></i> Volver
          </div>
        </router-link>
      </div>
  
      <h1 class="solicitudes_texto">Solicitudes</h1>

      <div class="form-container">
        <span class="form-title">Redactar Solicitud</span>

            <form @submit.prevent="agregarSolicitud" class="form">
        <div class="form-row">
            <div class="info-aviso">
            <i class="fa fa-exclamation-triangle"></i>
            <p>Por favor,utilice este formulario para enviar sus solicitudes, sugerencias o reclamos de manera respetuosa. Nos comprometemos a revisar su mensaje y responderle lo mas pronto posible. Agradecemos su paciencia mientras procesamos su solicitud</p>
            </div>


            <div class="form-column">
            <div class="form-group">
                <label for="descripcion">
                <i class="fa fa-pencil-square"></i> Descripción
                </label>
                <textarea
                v-model="descripcion"
                id="descripcion"
                class="descripcion-textarea"
                required
                ></textarea>
            </div>
            </div>
        </div>
        <button type="submit" class="submit-button">
            <i class="fa fa-save"></i> Enviar Solicitud
        </button>
        </form>        

      </div>





  
      <div class="columns-container">
        <div class="column">
          <h2 class="column-title">Solicitudes Sin Respuesta</h2>
          <table class="solicitudes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitud in solicitudes.filter(s => !s.contestacion)" :key="solicitud.id_solicitud">
                <td>{{ solicitud.id_solicitud }}</td>
                <td>{{ solicitud.descripcion }}</td>
                <td>{{ solicitud.fecha_creacion }} 
                  <button class="delete-button" @click="confirmDelete(solicitud)">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
    
              </tr>
              <tr v-if="!solicitudes.some(solicitud => !solicitud.contestacion)">
                <td colspan="4" class="no-solicitudes">No tienes solicitudes sin respuesta.</td>
              </tr>
            </tbody>

          </table>
        </div>
  
        <div class="column">
          <h2 class="column-title">Solicitudes Con Respuesta</h2>
          <table class="solicitudes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Respuesta</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitud in solicitudes.filter(s => s.contestacion)" :key="solicitud.id_solicitud">
                <td>{{ solicitud.id_solicitud }}</td>
                <td>{{ solicitud.descripcion }}</td>
                <td>{{ solicitud.respuesta }}</td>
                <td>{{ solicitud.fecha_creacion }}</td>
              </tr>
              <tr v-if="!solicitudes.some(solicitud => solicitud.contestacion)">
                <td colspan="4" class="no-solicitudes">No tienes solicitudes con respuesta.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';
  import Swal from 'sweetalert2';

  
  const usuario = ref(null);
  const solicitudes = ref([]);
  const router = useRouter();
  const descripcion = ref("")


  const agregarSolicitud = async() =>{
    try{
        const response = await axios.post("http://127.0.0.1:8000/agregar_solicitud",{
            documento:usuario.value.documento,
            descripcion:descripcion.value
        });

        Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada exitosamente',
            timer:1500,
            showConfirmButton:false
        });

        descripcion.value=""
        obtener_solicitudes()
    } catch (error) {
    const mensajeError = error.response?.data?.detail || 'Algo salió mal. Intenta nuevamente.';
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: typeof mensajeError === 'object' ? JSON.stringify(mensajeError) : mensajeError
    });
  }
  }

  const confirmDelete = (solicitud) => {
  Swal.fire({
    title: `¿Estás seguro de eliminar la solicidud?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#83B4FF',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarSolicitud(solicitud.id_solicitud);
    }
  });
};

  const eliminarSolicitud = async (id_solicitud) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/eliminar_solicitud/${id_solicitud}`);
    Swal.fire({
      icon: 'success',
      title: 'Solicitud eliminada exitosamente',
      timer: 1500,
      showConfirmButton: false
    });
    obtener_solicitudes(); 
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo eliminar la solicitud. Inténtalo de nuevo.'
    });
  }
};





  
  const obtener_solicitudes = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/obtenersolicitudestudiante/${usuario.value.documento}`);
      solicitudes.value = response.data;
    } catch (error) {
      console.error('Error fetching solicitudes:', error);
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
      await obtener_solicitudes();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('token');
      router.push('/login');
    }
  };
  
  onMounted(async () => {
    await fetchUserProfile();
  });
  </script>
  
  <style scoped>
  .container_principal_solicitudes {
  width: 90%;
  background-color: #FFFFFF; 
  border-radius: 10px;
  padding: 40px;
  margin: 30px auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.form-container {
  width: 90%;
  margin: 2rem auto;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px  #83b4ff;
}

.form {
  display: grid;
  gap: 1.5rem;
}

.form-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #7FA1C3;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 1rem;
}

.form-column {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

.form-group label {
  font-size: 1.1rem;
  color: #7FA1C3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.descripcion-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  background-color: #F0F0F0;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
  height: 150px;
  resize: none; 
  }

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #83B4FF;
  border-radius: 4px;
  background-color: #F0F0F0;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s; 

}

.input:focus,
.descripcion-textarea:focus {
  border-color: #7FA1C3; 
  outline: none; 
  box-shadow: 0 0 5px rgba(127, 161, 195, 0.6), 0 0 10px rgba(127, 161, 195, 0.3); 
}

.submit-button {
  background-color: #83B4FF;
  color: #ffffff;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #7FA1C3;
}



.columns-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
}

.column {
  flex: 1;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: auto;
  max-height: 500px;
}

.column-title {
  font-size: 22px;
  color: #FFFFFF; 
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(135deg, #1e90ff, #87cefa);
  padding: 10px;
  border-radius: 8px;
}

.solicitudes_texto{
    font-size: 35px;
    color: #83B4FF;
    text-align: center;

}



.solicitudes-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.solicitudes-table th, .solicitudes-table td {
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
  word-wrap: break-word;  
}

.solicitudes-table th {
  background-color: #f2f2f2;
  font-size: 16px;
  color: #83B4FF;
  font-weight: bold;
  width: 80px; 
}

.solicitudes-table td {
  background-color: #f9f9f9;
  font-size: 16px;
  max-width: 200px; 
  overflow: hidden;
  text-overflow: ellipsis;  
  height: auto;
  max-height: 50px;  
  overflow-y: auto; 
  position: relative;

}

.solicitudes-table td.descripcion,
.solicitudes-table td.respuesta {
  max-height: 80px; 
  overflow-y: auto;
}

.no-solicitudes {
  text-align: center;
  color: #7FA1C3;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  background-color: #f0f0f0;
}

.volver-container {
  display: flex;
  justify-content: flex-start;
}

.back-button {
  background-color: transparent;
  border: none;
  color: #7FA1C3;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.back-button i {
  margin-right: 0.5rem;
  font-size: 1.6rem;
}

.back-button:hover {
  color: #83B4FF;
}

.info-aviso {
  background-color: #fff3cd;
  border: 1px solid #ffeeba; 
  color: #856404; 
  padding: 15px;
  margin-top: 5vh; 
  border-radius: 10px; 
  display: flex; 
  height: 80px;
  align-items: center;
}

.info-aviso i {
  margin-right: 10px;
  font-size: 1.5em; 
}

.delete-button {
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: auto;
  right: 6px;

}

.delete-button:hover {
  background-color: #e55b5b;
}

.delete-button i {
  font-size: 12px;
}

.td_d_b{
  width: 1px;
}


/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .container_principal_solicitudes {
    width: 90%; /* Ajuste de ancho para tablets */
    padding: 20px; /* Padding reducido */
    margin: 20px auto; /* Margen reducido */
  }

  .form-container {
    width: 90%; /* Ancho completo */
    padding: 1rem; /* Padding reducido */
  }

  .form-title {
    font-size: 1.5rem; /* 1.5rem = 24px */
  }

  .form-row {
    grid-template-columns: 1fr; /* Cambiar a una columna */
    gap: 1rem; /* Espacio entre elementos reducido */
  }

  .descripcion-textarea {
    height: 120px; /* Altura reducida */
  }

  .columns-container {
    flex-direction: column; /* Cambiar a disposición en columna */
    gap: 20px; /* Espacio entre columnas reducido */
  }

  .column {
    padding: 15px; /* Padding reducido */
    max-height: 400px; /* Altura máxima reducida */
  }

  .column-title {
    font-size: 1.2rem; /* 1.2rem = 19.2px */
    padding: 8px; /* Padding reducido */
  }

  .solicitudes_texto {
    font-size: 1.8rem; /* 1.8rem = 28.8px */
  }

  .solicitudes-table th,
  .solicitudes-table td {
    padding: 10px; /* Padding reducido */
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }

  .no-solicitudes {
    font-size: 1.2rem; /* 1.2rem = 19.2px */
    padding: 15px; /* Padding reducido */
  }

  .back-button {
    font-size: 1.2rem; /* 1.2rem = 19.2px */
  }

  .info-aviso {
    margin-top: 3vh; /* Margen superior reducido */
    padding: 10px; /* Padding reducido */
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }

  .delete-button {
    padding: 4px 6px; /* Padding reducido */
    font-size: 10px; /* Tamaño de fuente reducido */

  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .container_principal_solicitudes {
    width: 90%; /* Ancho completo */
    padding: 10px; /* Padding reducido */
    margin: 10px auto; /* Margen reducido */
  }

  .form-container {
    width: 90%; /* Ancho completo */
    padding: 0.5rem; /* Padding reducido */
  }

  .form-title {
    font-size: 1.2rem; /* 1.2rem = 19.2px */
  }

  .form-row {
    grid-template-columns: 1fr; /* Cambiar a una columna */
    gap: 0.5rem; /* Espacio entre elementos reducido */
  }

  .descripcion-textarea {
    height: 100px; /* Altura reducida */
  }


  .columns-container {
    flex-direction: column; /* Cambiar a disposición en columna */
    gap: 10px; /* Espacio entre columnas reducido */
  }

  .column {
    padding: 10px; /* Padding reducido */
    max-height: 300px; /* Altura máxima reducida */
  }

  .column-title {
    font-size: 1rem; /* 1rem = 16px */
    padding: 6px; /* Padding reducido */
  }


  .solicitudes_texto {
    font-size: 1.5rem; /* 1.5rem = 24px */
  }

  .solicitudes-table th,
  .solicitudes-table td {
    padding: 8px; /* Padding reducido */
    font-size: 0.8rem; /* 0.8rem = 12.8px */
  }

  .no-solicitudes {
    font-size: 1rem; /* 1rem = 16px */
    padding: 10px; /* Padding reducido */
  }

  .back-button {
    font-size: 1rem; /* 1rem = 16px */
  }

  .info-aviso {
    margin-top: 2vh; /* Margen superior reducido */
    padding: 8px; /* Padding reducido */
    font-size: 0.8rem; /* 0.8rem = 12.8px */
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .info-aviso i {
    margin-bottom: 1.5vh;
  }

  .delete-button {
    padding: 3px 5px; /* Padding reducido */
    font-size: 8px; /* Tamaño de fuente reducido */
  }
}
  </style>
  