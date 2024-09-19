<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
        <header class="container_header_sin">
        <div>
            <img src="../components/img/LogoRacadi.png" alt="" class="logo">
        
        </div>
        <div class="texto">
            <h1>
                RACADI ACADEMY
            </h1>
        </div>
        <div class="container_redes"> 
                <a href="#"><i class="fa-brands fa-facebook-square redes"></i></a>
                <a href="#"><i class="fa-brands fa-instagram redes"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp redes"></i></a>
                <a href="#"><i class="fa-brands fa-github redes"></i></a>
        </div>

        <div class="perfil_header">
          <i class="fa fa-user-circle perfil_sin" aria-hidden="true"></i>
          <h1>Perfil</h1>
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
  color: white;
  text-align: center;
  font-size: 30px;
  margin-right: 5vh;
}

.container_header_sin{
  background-color: #7FA1C3;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px 0 #263d53; 
}

.logo {
  width: 150px;
  display: flex;
  align-items: center;
  margin-left: 3vh;
}

.redes{
  font-size: 35px;
  color: white;
}

.perfil_sin{
  font-size: 50px;
}

.container_redes{
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: space-between;
}

.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: white;
  width: 800px;
  text-align: center;
  font-size: 40px; 
  line-height: 1.2; 
  text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
</style>