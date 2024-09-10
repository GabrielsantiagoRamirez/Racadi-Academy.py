<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
        <header class="container_header_sin">
        <div>
            <img src="../components/img/logoRacadi.png" alt="" class="logo">
        
        </div>
        <div class="texto">
            <h1>
                PORTAL DE PAGOS
            </h1>
        </div>

        <div class="boton_pago">
          <button>NECESITAS AYUDA?</button>
        </div>
    </header>
    
</template>


<script setup>

</script>


<style>
/* Estilos para el header */

@media (min-width: 1200px) and (max-width: 1499px){
}

.perfil_header{
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #3AACD9;
  color: white;
  text-align: center;
  font-size: 30px;
  margin-right: 5vh;
}
.container_header_sin{
  background-color: #05080B;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 200px;
  display: flex;
  align-items: center;
}

.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #3AACD9;
  width: 800px;
  text-align: center;
  font-size: 40px; 
  line-height: 1.2; 
  text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}

.boton_pago button{
  margin-right: 20px;
  margin: 20px;
  background-color: #2090c2; 
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #DCD7DC; 
  cursor: pointer;
}

.boton_pago button:hover {
  background-color: #1d3d52; 
  color: #DCD7DC; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


</style>