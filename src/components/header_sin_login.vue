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
                RACADI ACADEMY
            </h1>
        </div>
        <div id="redes"> 
            <img src="../components/img/icons8-instagram-96.png" alt="" class="redes">
            <img src="../components/img/icons8-facebook-30.png" alt="" class="redes">
            <img src="../components/img/icons8-twitterx-100.png" alt="" class="redes">
        </div>

        <div class="perfil_header">
          <img src="../components/img/91724249-perfil-del-círculo-para-avatar_preview_rev_1.png" alt="" class="perfil_header_img">
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

.perfil_header_img{
  width: 100px;
  
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
.redes {
  width: 50px;
  display: flex;
  justify-content: space-between;
}
.container{
    background-color: #EB8242;
    width: 1490px;
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#redes{
    width: 150px;
    display: flex;
    justify-content: end;
}
.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #3AACD9; /* updated text color */
  width: 800px;
  text-align: center;
  font-size: 40px; /* updated font size */
  line-height: 1.2; /* updated line height */
  text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
</style>