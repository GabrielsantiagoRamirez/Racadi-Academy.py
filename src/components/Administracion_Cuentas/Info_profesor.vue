<template>
    <div class="perfil-estudiante">

      <h1 class="perfil_tittle">Informacion Profesor</h1>
      <div v-if="profesor" class="info-header">
        <div class="foto-perfil">
          <img v-if="profesor.foto_perfil" :src="`http://localhost:8000${profesor.foto_perfil}`" alt="Foto de perfil">
          <img v-else src="../img/defaultFoto.jpg" alt="Foto de perfil por defecto">
        </div>
  
        <div class="info-nombre">
          <h2>{{ profesor.nombre }} {{ profesor.apellido }}</h2>
        </div>
      </div>
  
      <div v-if="profesor">
        <div class="info-container">
          <div class="info-card">
            <h2>Información Básica</h2>
            <div class="info-item" v-for="(item, index) in basicInfo" :key="index">
              <i :class="item.icon"></i>
              <p><strong>{{ item.label }}:</strong> {{ item.value }}</p>
            </div>
          </div>
  
          <div class="info-card">
            <h2>Información Adicional</h2>
            <div class="info-item" v-for="(item, index) in additionalInfo" :key="index">
              <i :class="item.icon"></i>
              <p><strong>{{ item.label }}:</strong> {{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import {  computed } from 'vue';
  import {  useRoute} from 'vue-router';

  const route = useRoute();


const profesor = route.query.profesor
  ? JSON.parse(route.query.profesor)
  : null;
    
  // Define la información básica y adicional
  const basicInfo = computed(() => [
  { label: "Documento", value: profesor?.documento, icon: "fa fa-id-card" },
  { label: "Tipo de Documento", value: profesor?.tipo_de_documento, icon: "fa fa-file-alt" },
  { label: "Fecha de Nacimiento", value: profesor?.fecha_nacimiento, icon: "fa fa-calendar-alt" },
  { label: "Género", value: profesor?.genero, icon: "fa fa-venus-mars" },
  { label: "Celular", value: profesor?.celular, icon: "fa fa-phone" },
  { label: "Correo", value: profesor?.correo, icon: "fa fa-envelope" },
]);

const additionalInfo = computed(() => [
  { label: "Dirección", value: profesor?.direccion, icon: "fa fa-map-marker-alt" },
  { label: "Usuario", value: profesor?.usuario, icon: "fa fa-user-circle" },
  { label: "Fecha de Contratacion", value: profesor?.fecha_contratacion, icon: "fa fa-calendar-check" },
]);
  

  
  </script>
  
  <style scoped>
  .perfil_tittle{
    margin-top: 10px;
    font-size: 26px;
    color: #83b4ff;
    text-align: center;
  
  }
  .perfil-estudiante {
    background-color: #fffffff3;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    box-shadow: 0px 3px 8px rgba(129, 188, 243, 0.747);
    font-family: 'Arial', sans-serif;
    position: relative;
  }
  

  .info-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .foto-perfil {
    margin-right: 20px;
    margin-top: 10px;
  }
  
  .foto-perfil img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 3px solid #83b4ff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .info-card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #83b4ff;
    margin-bottom: 10px;
    font-size: 23px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 17px;
  }
  
  .info-item i {
    color: #83b4ff;
    margin-right: 10px;
    font-size: 17px;
  }
  
  p {
    color: #333;
  }
  
  strong {
    color: #7fa1c3;
  }
  
  @media (min-width: 481px) and (max-width: 1024px) {
  .perfil_tittle {
    font-size: 1.5em; /* 1.5em = 24px */
    margin-top: 30px;

  }

  .perfil-estudiante {
    padding: 1em; /* 1em = 16px */
    width: 94%; /* Ajuste de ancho para tablets */
    margin-left: auto;
    margin-right: auto;
  }

  .back-button,
  .logout-button {
    font-size: 1.1em; /* 1.1em = 17.6px */
  }

  .foto-perfil img {
    width: 8em; /* 8em = 128px */
    height: 8em; /* 8em = 128px */
  }

  .info-nombre h2 {
    font-size: 1.5em; /* 1.5em = 24px */
  }

  .nivel-descripcion {
    font-size: 1em; /* 1em = 16px */
  }

  .info-card h2 {
    font-size: 1.5em; /* 1.5em = 24px */
  }

  .info-item {
    font-size: 1em; /* 1em = 16px */
  }

  .info-aviso {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .perfil_tittle {
    font-size: 1.25em; /* 1.25em = 20px */
    margin-top: 30px;
  }

  .perfil-estudiante {
    padding: 0.75em; /* 0.75em = 12px */
    max-width: 90%; /* Ajuste de ancho para celulares */
    margin-left: auto;
    margin-right: auto;
  }
  .back-button,
  .logout-button {
    font-size: 1em; /* 1em = 16px */
    top: 0.5em; /* 0.5em = 8px */
  }

  .back-button {
    left: 0.5em; /* 0.5em = 8px */
  }

  .logout-button {
    right: 0.5em; /* 0.5em = 8px */
  }

  .info-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .foto-perfil {
    margin-right: 0;
    margin-top: 1em; /* 1em = 16px */
  }

  .foto-perfil img {
    width: 6em; /* 6em = 96px */
    height: 6em; /* 6em = 96px */
  }

  .info-nombre h2 {
    font-size: 1.25em; /* 1.25em = 20px */
  }

  .nivel-descripcion {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }

  .info-card h2 {
    font-size: 1.25em; /* 1.25em = 20px */
  }

  .info-item {
    font-size: 0.9em; /* 0.9em = 14.4px */
  }

  .info-aviso {
    font-size: 0.8em; /* 0.8em = 12.8px */
    flex-direction: column;
    text-align: center;
  }

  .info-aviso i {
    margin-bottom: 0.5em; /* 0.5em = 8px */
  }
}
  
  </style>
  