<template>
    <div class="main_container">
      <div class="asistencia_container">
        <div class="volver-container">
          <router-link to="/HorarioProfesor">
            <div class="back-button">
              <i class="fa fa-times"></i>
            </div>
          </router-link>
        </div>
  
        <h1>Asistencia</h1>
  
        <div v-if="estudiantes.length === 0" class="no-estudiantes">
          <i class="fa fa-clock"></i> 
          <p>Por el momento, ningún estudiante ha reservado esta clase.</p>
        </div>
  
        <div v-for="estudiante in estudiantes" :key="estudiante.documento" class="estudiante-item row">
          <div class="estudiante-info">
            <p>{{ estudiante.nombre }} {{ estudiante.apellido }}</p>
          </div>
  
          <div v-if="!estudiante.registrado" class="botones-container">
            <button @click="registrar_asistencia(estudiante.id_reserva, estudiante.sede, estudiante.fecha, estudiante.hora_inicio, estudiante.hora_fin, estudiante.documento)" class="asistio-btn">
              Asistió
            </button>
            <button @click="registrar_incumplimineto(estudiante.id_reserva, estudiante.sede, estudiante.fecha, estudiante.hora_inicio, estudiante.hora_fin, estudiante.documento)" class="no-asistio-btn">
              No Asistió
            </button>
          </div>
  
          <div v-else class="estado">
            <p :class="{'asistio': estudiante.estado === 'Asistió', 'no-asistio': estudiante.estado === 'No Asistió'}">
              {{ estudiante.estado }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { toRef } from 'vue';
  import { useRoute } from 'vue-router';
  
  const router = useRoute();
  const idClase = toRef(router.query, 'id_clase');
  const nombre = toRef(router.query, 'nombre');
  const apellido = toRef(router.query, 'apellido');
  
  const estudiantes = ref([]);
  
  const get_students = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/getStudentsByClass/${idClase.value}`);
    estudiantes.value = response.data.map(estudiante => ({
      ...estudiante,
      registrado: estudiante.asistencia !== null, 
      estado: estudiante.asistencia === true ? 'Asistió' : estudiante.asistencia === false ? 'No Asistió' : ''
    }));
  } catch (error) {
    console.log(error);
  }
};

  const registrar_asistencia = async (id_reserva, sede, fecha, hora_inicio, hora_fin, documento) => {
    try {
      await axios.post(`http://127.0.0.1:8000/asistencia/${id_reserva}`);
      await axios.post("http://localhost:8000/añadirObservacion", {
        descripcion: `El estudiante asistió a la clase del día ${fecha}, Sede: ${sede}, Horario: ${convertir_hora_texto(hora_inicio)}--${convertir_hora_texto(hora_fin)}`,
        documento,
        creada_por: `${nombre.value} ${apellido.value}`
      });
  
      const estudiante = estudiantes.value.find(e => e.id_reserva === id_reserva);
      estudiante.registrado = true;
      estudiante.estado = 'Asistió';
    } catch (error) {
      console.log(error);
    }
  };
  
  const registrar_incumplimineto = async (id_reserva, sede, fecha, hora_inicio, hora_fin, documento) => {
    try {
      await axios.post(`http://127.0.0.1:8000/incumplimiento/${id_reserva}`);
      await axios.post("http://localhost:8000/añadirObservacion", {
        descripcion: `El estudiante NO asistió a la clase del día ${fecha}, Sede: ${sede}, Horario: ${convertir_hora_texto(hora_inicio)}--${convertir_hora_texto(hora_fin)}`,
        documento,
        creada_por: `${nombre.value} ${apellido.value}`
      });
  
      const estudiante = estudiantes.value.find(e => e.id_reserva === id_reserva);
      estudiante.registrado = true;
      estudiante.estado = 'No Asistió';
    } catch (error) {
      console.log(error);
    }
  };
  
  const convertir_hora_texto = (hora) => {
    const [horaNum, minutos] = hora.split(':');
    const hora24 = parseInt(horaNum, 10);
    const isPM = hora24 >= 12;
    const hora12 = hora24 % 12 || 12;
    return `${hora12}:${minutos.slice(0, 2)} ${isPM ? 'PM' : 'AM'}`;
  };
  
  onMounted(get_students);
  </script>
  
  <style scoped>

  h1{
    font-size: 30px;
    color: #83B4FF;
    font-weight: bold;
  }
  .main_container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .asistencia_container {
    width: 35%;
    max-width: 600px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    border: #83B4FF solid 1px;
    box-shadow: 0px 4px 20px rgba(12, 134, 138, 0.2);
    text-align: center;
    position: relative;
  }
  
  .back-button {
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;
    color: red;
    cursor: pointer;
    display: flex;
    transition: color 0.3s ease;
  }
  
  .back-button i {
    font-size: 30px;
  }
  
  .back-button:hover {
    color: rgba(255, 0, 0, 0.514);
  }
  
  .estudiante-item {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  
  .estudiante-info p {
    margin: 0;
    font-weight: bold;
    flex: 1;
    font-size: 20px
  }
  
  .botones-container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .botones-container button {
    color: white;
    border: none;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .asistio-btn {
    background-color: #83B4FF;
  }
  
  .asistio-btn:hover {
    background-color: #70a9fd;
  }
  
  .no-asistio-btn {
    background-color: #f44336;
  }
  
  .no-asistio-btn:hover {
    background-color: #da190b;
  }
  
  .estado {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  
  .asistio {
    color: #28a745;
  }
  
  .no-asistio {
    color: #ff0019;
  }
  
  .no-estudiantes {
    margin-top: 20px;
    font-size: 18px;
    color: #000000;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .no-estudiantes i {
    margin-right: 10px;
    font-size: 30px;
    color: #70a9fd;
  }
  </style>
  
  