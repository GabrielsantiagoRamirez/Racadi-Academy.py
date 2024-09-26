<script setup>
</script>

<template>

<div class="containerMadre_observadorAdmin">
    <div class="cont_MostrarObservacionesAdmin">
      <h2 class="titulos_observadorAdmnin ">Observaciones</h2>
      <div class="muestra_observacionesAdmin">
        <!-- Aquí se mostrarán las observaciones -->
        <div class="observation-item">
          <p><strong>Fecha:</strong> 24/09/2024</p>
          <p><strong>Documento:</strong> 12345678</p>
          <p>Texto de la observación aquí...</p>
        </div>
        <div class="observation-item">
          <p><strong>Fecha:</strong> 23/09/2024</p>
          <p><strong>Documento:</strong> 87654321</p>
          <p>Otra observación de ejemplo...</p>
        </div>
        <!-- Más observaciones -->
      </div>

      <div class="seccion_Filtrar_ObservacionesAdmin">
        <h2 class="titulos_observadorAdmnin ">Filtrar por documento</h2>
        <input type="text" id="filter-doc" placeholder="Ingrese documento">
        <button class="btnFiltar_ObservacionesAdmin">Filtrar</button>
      </div>
    </div>

    <div class="cont_AgregarObservador">
      <h2 class="titulos_observadorAdmnin ">Agregar Observación</h2>
      <form class="Form_Agregarobservacion">
        

        <div class="contTitulo_seccionesAgregrarObservaciones">
          <label for="document">Documento:</label>
          <input type="text" id="document" name="document">
        </div>

        <div class="contTitulo_seccionesAgregrarObservaciones">
          <label for="text">Observación:</label>
          <textarea id="text" name="text" rows="4" placeholder="Escribe la observación..."></textarea>
        </div>

        <button type="submit" class="btn_AgregarObseracionAdmin">Agregar Observación</button>
      </form>
    </div>
  </div>

</template>

<style>


.containerMadre_observadorAdmin {
  display: flex;
  gap: 30px;
  padding: 20px;
  width: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}

.cont_MostrarObservacionesAdmin{
  width: 50%;
  background-color: #6bc7ec00;
}

.titulos_observadorAdmnin {
  color:#6bc8ec;
  margin-bottom: 20px;
  font-weight: bold;
}

.muestra_observacionesAdmin{
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

.seccion_Filtrar_ObservacionesAdmin {
  margin-top: 20px;
  background-color: #6bc7ec00;
}

.seccion_Filtrar_ObservacionesAdmin input {
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.btnFiltar_ObservacionesAdmin{
  background-color:#6bc8ec;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.cont_AgregarObservador {
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-bottom: 15px;
  
}   .Form_Agregarobservacion label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

     .Form_Agregarobservacion input {
       width: 100%;
       padding: 10px;
       border: 1px solid #ccc;
       border-radius: 5px;
     }
     .Form_Agregarobservacion textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }


.contTitulo_seccionesAgregrarObservaciones {
  margin-bottom: 15px;
  
}      
.btn_AgregarObseracionAdmin {
  background-color: #6bc8ec;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}



</style>