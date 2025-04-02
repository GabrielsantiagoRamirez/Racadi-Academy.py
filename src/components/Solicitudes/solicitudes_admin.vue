<template>
  <header_sin_login/>
    <div class="container_principal_solicitudes">
      <div class="volver-container">
        <router-link to="/main_admin">
          <div class="back-button">
            <i class="fa fa-arrow-left"></i> Volver
          </div>
        </router-link>
      </div>
  
      <h1 class="solicitudes_texto">Solicitudes</h1>


      <div class="columns-container">
        <div class="column">
          <h2 class="column-title">Solicitudes Pendientes</h2>
         
          <div class="scroll-table">
            <table class="solicitudes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>documento</th>
                <th>Descripción</th>
                <th>Contestar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitud in solicitudes.filter(s => !s.contestacion)" :key="solicitud.id_solicitud">
                <td>{{ solicitud.id_solicitud }}</td>
                <td>{{ solicitud.fecha_creacion }} </td>
                <td>{{ solicitud.documento }}</td>
                <td>{{ solicitud.descripcion }}</td>
                <td> <button class="delete-button" @click="abrirContestacion(solicitud)">
                    <i class="fa fa-commenting"></i>
                  </button></td>
    
              </tr>
              <tr v-if="!solicitudes.some(solicitud => !solicitud.contestacion)">
                <td colspan="5" class="no-solicitudes">No tienes solicitudes Pendientes.</td>
              </tr>
            </tbody>

          </table>

          </div>
       
        </div>
  
        
      </div>
    </div>
    <Footer />
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';
  
  const solicitudes = ref([]);
  
  const abrirContestacion = (solicitud) => {
    Swal.fire({
      title: 'Responder Solicitud',
      input: 'textarea',
      inputLabel: 'Escribe tu contestación',
      inputPlaceholder: 'Ingresa aquí la Respuesta',
      inputAttributes: {
        'aria-label': 'Escribe tu respuesta aquí',
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      preConfirm: async (respuesta) => {
        if (!respuesta) {
          Swal.showValidationMessage('La respuesta no puede estar vacía.');
        } else {
          try {
            await enviarContestacion(solicitud.id_solicitud, respuesta);
            Swal.fire({
              icon: 'success',
              title: 'Respuesta enviada exitosamente',
              timer: 1500,
              showConfirmButton: false,
            });
            obtener_solicitudes(); 
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Error al enviar respuesta',
              text: 'Inténtalo nuevamente.',
            });
          }
        }
      },
    });
  };
  
  const enviarContestacion = async (id_solicitud, respuesta) => {
    await axios.put(`http://127.0.0.1:8000/actualizar_contestacion/${id_solicitud}/${respuesta}`);
  };
  

  const obtener_solicitudes = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/obtenersolicitudes`);
      solicitudes.value = response.data;
    } catch (error) {
      console.error('Error al obtener solicitudes:', error);
    }
  };
  
  onMounted(() => {
    obtener_solicitudes();
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
  align-items: center;

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
  background-color: #7FA1C3;
  border: none;
  color: white;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-self:center ;


}

.delete-button:hover {
  background-color: #83B4FF;
}

.delete-button i {
  font-size: 20px;
}

.td_d_b{
  width: 1px;
}





/* Para tablets */
@media (min-width: 481px) and (max-width: 1024px) {
  .container_principal_solicitudes {
    width: 90%;
    padding: 20px;
    margin: 20px auto;
  }

  .columns-container {
    flex-direction: row;
    gap: 20px;
  }

  .column {
    width: 48%;
    margin-bottom: 0;
  }

  .solicitudes-table th, .solicitudes-table td {
    font-size: 14px;
  }
}

/* Para celulares */
@media (min-width: 100px) and (max-width: 480px) {
  .container_principal_solicitudes {
    width: 95%;
    padding: 10px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .volver-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5vh;
  }

  .back-button {
    align-self: flex-start;
  }

  .scroll-table{
    width: 100%;
    overflow: scroll;
  }

  .columns-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .column {
    width: 90%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  



  .solicitudes-table {
    width: 100%;
    border-collapse: collapse;
  }

  .solicitudes-table th, .solicitudes-table td {
    font-size: 12px;
    padding: 8px;
    text-align: center;
  }

  .column-title{
    width: 90%;
  
  }
}


  </style>
  