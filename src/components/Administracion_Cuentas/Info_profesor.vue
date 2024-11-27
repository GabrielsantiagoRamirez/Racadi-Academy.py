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
  
  
  
  </style>
  