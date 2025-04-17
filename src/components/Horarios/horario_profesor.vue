<template>
    <header_sin_login />

    <div class="contenedor-horario">
      <router-link to="/main_profesor">
        <button class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </button>
      </router-link>
      <h1 class="titulo">Horario de clases
        <div v-if="itsNextWeek===false" class="nextweek">
      <span @click="siguienteSemana" >Siguiente Semana <i class="fa fa-arrow-right"></i></span>
    </div>
    <div v-if="itsNextWeek===true"  class="currentweek">
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
              <p><strong>Sede:</strong> {{ clase.sede }}</p>
              <p><strong>Nivel:</strong> {{ clase.nivel }}</p>
              <p><strong>Estudiantes:</strong> {{ clase.estudiantes }}</p>
              <div v-if="canTakeAttendance(clase)">
                  <router-link :to="{ path: '/HorarioProfesor/asistencia', query: { id_clase: clase.id_clase , nombre: usuario.nombre , apellido: usuario.apellido } }">
                    <button class="btn-tomar-asistencia">
                      Tomar Asistencia
                    </button>
                  </router-link>
                </div>
                <div v-else>
                  <p style="color: orange"><i class="fa fa-clock"></i> Clase no iniciada</p>
                </div>
             
            </div>
          </div>
          <div v-else>
            <p style="text-align: center;">No hay clases agendadas.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';
  import { ref, onMounted, nextTick } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const usuario = ref(null);
  const clases = ref([]);
  const diasSemana = ref([]);
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
        const response = await axios.get(`https://apiracadipy-production.up.railway.app/filtro_ClasesDocumento/${usuario.value.documento}`);
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

    dia.clases = clases.value
      .filter((clase) => {
        const fechaClase = new Date(clase.fecha).setHours(0, 0, 0, 0);
        return fechaClase === fechaDia;
      })
      .sort((a, b) => {
        const horaInicioA = a.hora_inicio.split(':').map(Number);
        const horaInicioB = b.hora_inicio.split(':').map(Number);
        return horaInicioA[0] - horaInicioB[0] || horaInicioA[1] - horaInicioB[1];
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

  const canTakeAttendance = (clase) => {
    const now = new Date(); 
    const [añoClase, mesClase, diaClase] = clase.fecha.split('-').map(Number); 
    const [horaInicio, minutosInicio] = clase.hora_inicio.split(':').map(Number);

    const classStartTime = new Date(añoClase, mesClase - 1, diaClase, horaInicio, minutosInicio, 0, 0);

    if (classStartTime > now) {
        return false;
    }

    return true;
};





  

  onMounted(async () => {
    await fetchUserProfile();
  });
  </script>
  
  
  
  <style scoped>
  .contenedor-horario {
    background-color: #ffffff; /* Beige claro */
    padding: 20px;
    margin: 0 auto;
    max-width: 90%;
    margin-top: 5vh;
  }
  
  .titulo {
    text-align: center;
    color: #83B4FF; /* Azul */
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  /* Estilo de los días de la semana */
  .semana {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* Seis días */
    gap: 10px;
  }
  
  .dia {
    background-color: #fff; /* Fondo blanco */
    padding: 15px;
    border-left: 1px solid #7FA1C3; /* Borde azul claro */
    border-right: 1px solid #7FA1C3; /* Borde azul claro */
  }
  
  .dia h2 {
    text-align: center;
    color: #83B4FF; /* Azul */
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
  
  .fecha {
    text-align: center;
    color: #7FA1C3; /* Azul claro */
    margin-bottom: 15px;
    font-size: 1rem;
  }
  
  /* Estilo de las clases */
  .clase {
    border: 1px solid #83B4FF; /* Borde azul */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .clase p {
    margin: 5px 0;
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

    .btn-tomar-asistencia {
    background-color: #83B4FF;
    color: #fff;
    border: none;
    width: 100%;
    padding: 5px ;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
    margin-top: 10px;
  }

  .btn-tomar-asistencia:hover {
    background-color: #7FA1C3; 
    transform: scale(1.05); 
  }

  .btn-tomar-asistencia i {
    font-size: 1.2rem;
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

  .btn-tomar-asistencia {
    font-size: 90%; /* 0.7rem = 11.2px */
    padding: 5px 8px; /* Padding reducido */
  }


  .nextweek,
  .currentweek {
    font-size: 1.1rem; /* 1rem = 16px */
    margin-top: 2vh;
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

  .btn-tomar-asistencia {
    font-size: 90%; /* 0.7rem = 11.2px */
    padding: 5px 8px; /* Padding reducido */
  }


  .nextweek,
  .currentweek {
    font-size: 1rem; /* 0.9rem = 14.4px */
    margin-top: 2vh;

  }

  .back-button {
    font-size: 0.9rem; /* 0.9rem = 14.4px */
  }
}
  </style>