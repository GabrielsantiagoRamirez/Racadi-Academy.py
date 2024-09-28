<template>
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul v-if="students.length">
        <li v-for="student in students" :key="student.documento">{{ student.nombre}}</li>
      </ul>
      <p v-else>No hay estudiantes disponibles.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        students: []
      };
    },
    mounted() {
      this.fetchStudents();
    },
    methods: {
      async fetchStudents() {
        try {
          const response = await axios.get('http://localhost:8000/obtenerestudiantes');
          this.students = response.data;
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  