<script setup>
</script>

<template>
<div class="containerMadre_observadorEstudiante">
  <div class="cont_MostrarObservacionesEstudiante">
    <h2 class="titulos_observadorEstudiante ">Observaciones</h2>
    <div class="muestra_observacionesEstudiante">
      <!-- Aquí se mostrarán las observaciones -->
      <div class="observation-item">
        <p><strong>Fecha:</strong> 24/09/2024</p>
        <p>Texto de la observación aquí...</p>
      </div>
      <div class="observation-item">
        <p><strong>Fecha:</strong> 23/09/2024</p>
        <p>Otra observación de ejemplo...</p>
      </div>
      <!-- Más observaciones -->
    </div>

    <div class="seccion_Filtrar_ObservacionesEstudiante">
      <h2 class="titulos_observadorAdmnin ">Filtrar por fecha</h2>
      <input type="date" id="filter-date" placeholder="Ingrese fecha">
      <button class="btnFiltar_ObservacionesAdmin">Filtrar</button>
    </div>
  </div>
</div>

</template>

<style>
.containerMadre_observadorEstudiante {
  display: flex;
  gap: 30px;
  padding: 20px;
  width: 60%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}

.cont_MostrarObservacionesEstudiante  {
  width: 100%;
  background-color: #6bc7ec00;
}

.titulos_observadorEstudiante  {
  color:#6bc8ec;
  margin-bottom: 20px;
  font-weight: bold;
}

.muestra_observacionesEstudiante  {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.observation-item {
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.seccion_Filtrar_ObservacionesEstudiante  {
  margin-top: 20px;
  background-color: #6bc7ec00;
}

.seccion_Filtrar_ObservacionesEstudiante  input {
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.btnFiltar_ObservacionesEstudiante  {
  background-color:#6bc8ec;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

</style>