<template>
    <header_sin_login />
  <div class="contenedor-horario">
    <router-link to="/main_estudiante">
      <button class="back-button">
        <i class="fa fa-arrow-left"></i> Volver
      </button>
    </router-link>
    <h1 class="titulo">Reserva De Clases <br>
    <span class="subtitulo"v-if="usuario">{{usuario.sede}}--{{ usuario.nivel_actual}}</span>

    <div v-if="itsweekend && itsNextWeek===false" class="nextweek">
      <span @click="siguienteSemana" >Siguiente Semana <i class="fa fa-arrow-right"></i></span>
    </div>
    <div v-if="itsweekend && itsNextWeek===true"  class="currentweek">
      <span @click="semanaAntrior"  > <i class="fa fa-arrow-left"></i> Semana Actual </span>
    </div>
    </h1>

    <div class="semana">
      <div v-for="dia in diasSemana" :key="dia.fecha" class="dia">
        <h2>{{ dia.nombre }}</h2>
        <p class="fecha">{{ dia.fecha }}</p>

        <div v-if="dia.clases.length">
          <div v-for="clase in dia.clases" :key="clase.hora_inicio" class="clase">
            <p><strong>Horario:</strong> {{ convertir_hora_texto(clase.hora_inicio) }} - {{ convertir_hora_texto(clase.hora_fin) }}</p>
            <p><strong>Docente:</strong> {{ clase.profesor }}</p>
            <p><strong>Cupos:</strong> {{ clase.cupos }}</p>
            <button 
              class="btn-reservar" 
              :class="{ 'reservado': existeReserva(clase) }"
              @click="existeReserva(clase) ? cancelarReserva(clase.id_clase,clase.sede,clase.fecha,clase.hora_inicio,clase.hora_fin) : reservarClase(clase.id_clase,clase.sede,clase.fecha,clase.hora_inicio,clase.hora_fin)">
              <i class="fas" :class="existeReserva(clase) ? 'fa-calendar-times' : 'fa-calendar-plus'"></i> 
              {{ existeReserva(clase) ? 'Cancelar' : 'Reservar' }}
            </button>
          </div>
        </div>
        <div v-else>
          <p style="text-align: center;">No hay clases disponibles.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '../Footer_Login/Footer.vue';
import header_sin_login from '../Headers/header_sin_login.vue';
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();
const usuario = ref(null);
const clases = ref([]);
const diasSemana = ref([]);
const reservas = ref([]);
const itsweekend =ref(false)
const fechaInicioSemana = ref(new Date());
const itsNextWeek = ref(false)

const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
      router.push('/login');
      return;
  }
  try {
      const response = await axios.get('https://apiracadipy-production.up.railway.app/users/me', {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      usuario.value = response.data;
      await obtener_clases();
      calcularDiasDeLaSemana();
  } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('token');
      router.push('/login');
  }
};

const obtener_clases = async () => {
  try {
      const response = await axios.get(`https://apiracadipy-production.up.railway.app/obtenerclasesestudiante/${usuario.value.sede}/${usuario.value.nivel_actual}`);
      clases.value = response.data;
  } catch (error) {
      console.log('Error fetching classes', error.response?.data || error.message);
  }
};

const calcularDiasDeLaSemana = (fechaInicio = new Date()) => {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const resultado = [];
  
    const diaActual = fechaInicio.getDay() === 0 ? 7 : fechaInicio.getDay();
    const inicioSemana = new Date(fechaInicio);
    inicioSemana.setDate(fechaInicio.getDate() - (diaActual - 1));
  
    itsweekend.value = diaActual ===3 || diaActual === 5 || diaActual===6 || diaActual ===7;
  
    for (let i = 0; i < dias.length; i++) {
      const fecha = new Date(inicioSemana);
      fecha.setDate(inicioSemana.getDate() + i);
  
      resultado.push({
        nombre: dias[i],
        fecha: fecha.toLocaleDateString('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        clases: [],
      });
    }
  
    filtrarClasesPorDia(resultado);
    diasSemana.value = resultado;
  };
const filtrarClasesPorDia = (dias) => {
  dias.forEach((dia) => {
    const [diaStr, mesStr, añoStr] = dia.fecha.split('/');
    const fechaDia = new Date(`${añoStr}-${mesStr}-${diaStr}`).setHours(0, 0, 0, 0);

    dia.clases = clases.value.filter((clase) => {
      const fechaClase = new Date(clase.fecha).setHours(0, 0, 0, 0);
      return fechaClase === fechaDia;
    });
  });
};



const convertir_hora_texto = (hora) => {
  const [horaNum, minutos] = hora.split(':');
  const hora24 = parseInt(horaNum, 10);
  const isPM = hora24 >= 12;
  const hora12 = hora24 % 12 || 12;

  return `${hora12}:${minutos.slice(0, 2)} ${isPM ? 'Pm' : 'Am'}`;
};
const siguienteSemana = () => {
    fechaInicioSemana.value.setDate(fechaInicioSemana.value.getDate() + 7);
    itsNextWeek.value=true
    calcularDiasDeLaSemana(fechaInicioSemana.value);

  };

const semanaAntrior = () => {
    fechaInicioSemana.value.setDate(fechaInicioSemana.value.getDate() - 7);
    itsNextWeek.value=false
    calcularDiasDeLaSemana(fechaInicioSemana.value);

  };  
  

// RESERVA DE CLASES 
const reservarClase = async (idClase,sede,fecha,hora_inicio,hora_fin) => {
  try {
      const response = await axios.post("https://apiracadipy-production.up.railway.app/reservar_clase", {
          documento_estudiante: usuario.value.documento,
          id_clase: idClase
      });

      const observador_response = await axios.post("https://apiracadipy-production.up.railway.app/añadirObservacion",{
        descripcion:`El estudiante reservo la clase del dia ${fecha} , Sede: ${sede} , Horario: ${convertir_hora_texto(hora_inicio)}--${convertir_hora_texto(hora_fin)}`,
        documento:usuario.value.documento,
        creada_por:`${usuario.value.nombre} ${usuario.value.apellido}`
      })
      Swal.fire({
          icon: 'success',
          title: 'Clase Agendada',
          timer: 1500,
          showConfirmButton: false
      });
      await obtenerReservas();
  } catch (error) {
      let mensajeError = error.response?.data.detail || 'Algo salió mal. Intenta nuevamente.';
      Swal.fire({
          icon: 'error',
          title: mensajeError
      });
  }
};

// CANCELAR RESERVA DE CLASES
const cancelarReserva = async (idClase,sede,fecha,hora_inicio,hora_fin) => {
  try {
      await axios.delete('https://apiracadipy-production.up.railway.app/cancelar_reserva', {
          data: {
              documento_estudiante: usuario.value.documento,
              id_clase: idClase
          }
      });

      const observador_response_cancelar = await axios.post("https://apiracadipy-production.up.railway.app/añadirObservacion",{
        descripcion:`El estudiante cancelo la clase reservada del dia ${fecha} , Sede: ${sede} , Horario: ${convertir_hora_texto(hora_inicio)}--${convertir_hora_texto(hora_fin)}`,
        documento:usuario.value.documento,
        creada_por:`${usuario.value.nombre} ${usuario.value.apellido}`
      })

      Swal.fire({
          icon: 'success',
          title: 'Reserva Cancelada',
          timer: 1500,
          showConfirmButton: false
      });

      await obtenerReservas();
      filtrarClasesPorDia(diasSemana.value); 
      await nextTick(); // Forzar actualización de Vue reactivamente

  } catch (error) {
      let mensajeError = error.response?.data.detail || 'Algo salió mal. Intenta nuevamente.';
      Swal.fire({
          icon: 'error',
          title: mensajeError,
      });
  }
};

// COMPROBAR SI EXISTE RESERVA
const existeReserva = (clase) => {
  return reservas.value.some(reserva => reserva.id_clase === clase.id_clase);
};

// OBTENER RESERVAS
const obtenerReservas = async () => {
  try {
      const response = await axios.get(`https://apiracadipy-production.up.railway.app/obtener_reservas/${usuario.value.documento}`);
      reservas.value = response.data.length ? response.data : [];
  } catch (error) {
      console.log("Error al obtener reservas", error.response?.data || error.message);
  }
};

onMounted(async () => {
  await fetchUserProfile();
  await obtenerReservas();
});
</script>







<style scoped>
.contenedor-horario {
  background-color: #ffffff; 
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  margin-top: 5vh;
  border-radius: 5px;
  overflow-x: scroll;
}

.titulo {
  text-align: center;
  color: #83B4FF; /* Azul */
  margin-bottom: 20px;
  font-size: 2rem;
}
.subtitulo {
  text-align: center;
  color: #83B4FF; /* Azul */
  margin-bottom: 20px;
  font-size: 1.4rem;
}

/* Estilo de los días de la semana */
.semana {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Seis días */
  gap: 10px;
}

.dia {
  background-color: #fff; 
  padding: 15px;
  border-left: 1px solid #7FA1C3; 
  border-right: 1px solid #7FA1C3; 
}

.dia h2 {
  text-align: center;
  color: #83B4FF; 
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.fecha {
  text-align: center;
  color: #7FA1C3; 
  margin-bottom: 15px;
  font-size: 1rem;
}

/* Estilo de las clases */
.clase {
  border: 1px solid #83B4FF; 
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.clase p {
  margin: 5px 0;
}

/* Botón de reserva */
.btn-reservar {
  background-color: #83B4FF; 
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.btn-reservar:hover {
  background-color: #7FA1C3; 
}

.btn-reservar i {
  font-size: 1rem;
}

.btn-reservar.reservado {
    background-color: #fa1414; 
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

}

.btn-reservar.reservado:hover {
  background-color: #f35c36; 
}

.btn-reservar.reservado i {
  font-size: 1rem;
}


.back-button {
    background-color: transparent;
    border: none;
    color: #7fa1c3;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }
  
  .back-button i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  
  .back-button:hover {
    color: #83b4ff;
  }

  .nextweek{
    color: #83B4FF;
    cursor: pointer;
    font-size: 20px;
    text-align: end;
    margin-right: 10px;
  }

  .currentweek{
    color: #83B4FF;
    cursor: pointer;
    font-size: 20px;
    text-align: start;
    margin-left: 10px;
  }

  /* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .contenedor-horario {
    width: 90%; /* Ajuste de ancho para tablets */
    padding: 15px; /* Padding reducido */
    margin-top: 3vh; /* Margen superior reducido */
  }

  .titulo {
    font-size: 1.8rem; /* 1.8rem = 28.8px */
  }

  .subtitulo {
    font-size: 1.2rem; /* 1.2rem = 19.2px */
  }

  .semana {
    display: flex; /* Cambiar a flex para scroll horizontal */
    overflow-x: auto; /* Scroll horizontal */
    gap: 10px; /* Espacio entre días reducido */
    padding-bottom: 10px; /* Espacio para el scroll */
  }

  .dia {
    min-width: 150px; /* Ancho mínimo para cada día */
    padding: 10px; /* Padding reducido */
    font-size: 90%;

  }

  .dia h2 {
    font-size: 1.1rem; /* 1.1rem = 17.6px */
  }

  .fecha {
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }

  .clase {
    padding: 8px; /* Padding reducido */
  }

  .btn-reservar {
    font-size: 0.8rem; /* 0.8rem = 12.8px */
    padding: 6px 10px; /* Padding reducido */
  }

  .btn-reservar.btn-reservar.reservado {
    font-size: 0.8rem; /* 0.8rem = 12.8px */
    padding: 6px 10px; /* Padding reducido */
  }


  .nextweek,
  .currentweek {
    font-size: 1.1rem; /* 1rem = 16px */
  }

  .back-button {
    font-size: 1rem; /* 1rem = 16px */
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .contenedor-horario {
    width: 90%; /* Ancho completo */
    padding: 10px; /* Padding reducido */
    margin-top: 2vh; /* Margen superior reducido */
  }

  .titulo {
    font-size: 1.5rem; /* 1.5rem = 24px */
  }

  .subtitulo {
    font-size: 1.2rem; /* 1rem = 16px */
  }

  .semana {
    display: flex; /* Cambiar a flex para scroll horizontal */
    overflow-x: auto; /* Scroll horizontal */
    gap: 8px; /* Espacio entre días reducido */
    padding-bottom: 10px; /* Espacio para el scroll */
  }

  .dia {
    min-width: 150px; /* Ancho mínimo para cada día */
    padding: 8px; /* Padding reducido */
    font-size: 90%;

  }

  .dia h2 {
    font-size: 1rem; /* 1rem = 16px */
  }

  .fecha {
    font-size: 0.8rem; /* 0.8rem = 12.8px */
  }

  .clase {
    padding: 6px; /* Padding reducido */
  }

  .btn-reservar {
    font-size: 0.7rem; /* 0.7rem = 11.2px */
    padding: 5px 8px; /* Padding reducido */
  }
  .btn-reservar.btn-reservar.reservado {
    font-size: 0.7rem; /* 0.7rem = 11.2px */
    padding: 5px 8px; /* Padding reducido */
  }


  .nextweek,
  .currentweek {
    font-size: 1rem; /* 0.9rem = 14.4px */
  }

  .back-button {
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }
}

 
</style>
