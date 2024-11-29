<template>
    <header_sin_login />


    <div class="main-main-container">

      <router-link to="/main_estudiante">
        <button class="back-button">
          <i class="fa fa-arrow-left"></i> Volver
        </button>
      </router-link>

        <h1>Resultados De Evaluación</h1>

      <div class="container">

<div class="levels">
    <span>
        selecciona
    </span>
  <button @click="getNotes('beginner')">Beginner</button>
  <button @click="getNotes('basic 1')">Basic 1</button>
  <button @click="getNotes('basic 2')">Basic 2</button>
  <button @click="getNotes('intermediate')">Intermediate</button>
  <button @click="getNotes('advanced')">Advanced</button>
</div>

<div class="results">
  <div v-if="!selectedLevel">
    <p>No has seleccionado ningún nivel</p>
  </div>
  <div v-else-if="notas">
    <span class="levelsectit">{{ selectedLevel }}</span>

    <table>
      <thead>
        <tr>
          <th>EVALUACIÓN</th>
          <th>PORCENTAJE</th>
          <th>NOTA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Speaking</td>
          <td>20%</td>
          <td>{{ formatNote(notas.speaking) }}</td>
        </tr>
        <tr>
          <td>Listening</td>
          <td>20%</td>
          <td>{{ formatNote(notas.listening) }}</td>
        </tr>
        <tr>
          <td>Reading Comprehension</td>
          <td>20%</td>
          <td>{{ formatNote(notas.reading) }}</td>
        </tr>
        <tr>
          <td>Writing</td>
          <td>20%</td>
          <td>{{ formatNote(notas.writing) }}</td>
        </tr>
        <tr>
          <td>Grammar</td>
          <td>20%</td>
          <td>{{ formatNote(notas.grammar) }}</td>
        </tr>
      </tbody>

    </table>
    <div class="footer-summary">
        <div class="comments">
          <span class="obs-comm"> Observaciones:</span> 
          El estudiante {{ usuario.nombre }} {{ usuario.apellido }} presenta examen de cambio de nivel,
          los resultados
          <span v-if="notas.aprobacion">son los requeridos para ser promovido.</span>
          <span v-else>no son los requeridos para ser promovido.</span>
     
        </div>
        <div :class="['final-grade', notas.aprobacion ? 'approved' : 'not-approved']">
            Nota final {{ formatNote(notas.nota_evaluacion) }}
        </div>
       
      </div>
  </div>

  <div v-else>
    <span class="levelsectit"> {{ selectedLevel }}</span>
    <p >No tienes notas registradas para este nivel</p>
  </div>
</div>
</div>



    </div>

    
    <Footer />
  </template>
  
  <script setup>
  import header_sin_login from './header_sin_login.vue';
  import Footer from './Footer.vue';
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const usuario = ref(null);
  const notas = ref(null);
  const selectedLevel = ref(null);
  
  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    try {
      const response = await axios.get('http://localhost:8000/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      usuario.value = response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('token');
      router.push('/login');
    }
  };
  
  const getNotes = async (nivel) => {
    selectedLevel.value = nivel;
    try {
      const response = await axios.get(`http://localhost:8000/getStudentsNotes/${nivel}/${usuario.value.documento}`);
      notas.value = response.data;
    } catch (error) {
      console.log('Error fetching notes', error.response?.data || error.message);
    }
  };
  
  const formatNote = (note) => {
    return (note || 0.0).toFixed(1);
  };
  
  onMounted(fetchUserProfile);
  </script>
  
  <style scoped>

  .main-main-container{
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    padding: 20px;
    position: relative;
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 5vh;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    position: relative;
  }
  
  h1 {
    text-align: center;
    color: #83B4FF;
    font-size: 2rem;
    font-weight: bold;
  }

  p{
    font-size: 20px;
    margin-top: 20px;
  }
  
  .back-button {
    position: absolute;
    top: 13px;
    left: 13px;
    background-color: transparent;
    border: none;
    color: #83B4FF;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }
  
  .back-button i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  
  .back-button:hover {
    color: #83b5ffb6;
  }


  
  .levels {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 2px solid #83B4FF;
    padding: 15px;
    max-height: 300px;
    border-radius: 8px;
    width: 15%;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: #83B4FF;
    
  }
  
  .levels button {
    width: 100%;
    padding: 10px;
    background-color: #83B4FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-size: 17px;
    font-weight: bold;
  }
  
  .levels button:hover {
    background-color: #83b5ffd7;
    color: white;
    transform: scale(1.05);
  }
  
  .results {
    width: 60%;
    border: 2px solid #83B4FF;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
  }
  
.levelsectit{
  color: #83B4FF;
  font-size: 25px;
  font-weight: bold;
}
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th {
    background-color: #83B4FF;
    color: #FFFFFF;
    padding: 12px;
    font-size: 1rem;
  }
  
  td {
    padding: 12px;
    text-align: center;
    font-size: 18px;
    font-size: 18px;


  }
  
   th, td {
    border: 1px solid #83B4FF;

  }
  
  .footer-summary {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

  }
  
  .comments {
    padding: 10px;
    text-align: start;
    font-size: 16px;

  }
  .obs-comm{
    font-weight: bold;
    font-size: 16.5px;
  }
  
  .final-grade {
    border: 1px solid #83B4FF;
    padding: 10px;
    width: 25%;
    text-align: center;
    font-weight: bold;
    color: #7FA1C3;
  }
  
  .comments, .final-grade {
    border-radius: 5px;
  }
  
  .final-grade.approved {
    background-color: #DFF0D8;
    color: #3C763D;
    border-color: #D6E9C6;
    display: flex;
    align-items: center;
    max-height: 30px;
  }
  
  .final-grade.not-approved {
    background-color: #F2DEDE;
    color: #A94442;
    border-color: #EBCCD1;
    display: flex;
    align-items: center;
    max-height: 30px;

  }

  
  </style>
  