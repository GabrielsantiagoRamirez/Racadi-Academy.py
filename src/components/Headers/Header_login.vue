<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
      <header class="container_header_login">
      <div>
          <img src="../img/logoRacadi.png" alt="" class="logo_h_login">
      
      </div>
      <div class="texto_login">
          <h1>
              RACADI ACADEMY
          </h1>
      </div>
      <div class="container_redes_login"> 
              <a href="#"><i class="fa-brands fa-facebook-square redes_login"></i></a>
              <a href="#"><i class="fa-brands fa-instagram redes_login"></i></a>
              <a href="#"><i class="fa-brands fa-whatsapp redes_login"></i></a>
              <a href="#"><i class="fa-brands fa-github redes_login"></i></a>
      </div>
  </header>
</template>

<script setup>
</script>

<style>
/* Estilos para el header */
.container_header_login{
background-color: #7FA1C3;
width: 100%;
height: 170px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 15px 0 #263d53; 
}

.logo_h_login {
width: 150px;
display: flex;
align-items: center;
margin-left: 3vh;
}

.redes_login{
font-size: 35px;
color: white;
}

.container_redes_login{
width: 100%;
max-width: 160px;
display: flex;
justify-content: space-between;
margin-right: 6vh;
}

.texto_login {
font-family: "Anek Devanagari", sans-serif;
font-optical-sizing: auto;
color: white;
width: 800px;
text-align: center;
font-size: 40px; 
line-height: 1.2; 
text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .container_header_login {
      height: 120px;
      padding: 0 2%;
  }

  .logo_h_login {
      width: 100px;
      margin-left: 2vh;
  }

  .texto_login {
      font-size: 28px;
      width: 60%;
  }

  .container_redes_login {
      max-width: 120px;
      margin-right: 2vh;
  }

  .redes_login {
      font-size: 25px;
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .container_header_login {
      height: 80px;
      flex-direction: column;
      padding: 10px 0;
      justify-content: center;
  }

  .logo_h_login {
      width: 70px;
      margin-left: 0;
      margin-bottom: 5px;
  }

  .texto_login {
      font-size: 18px;
      width: 100%;
      margin: 5px 0;
  }

  .container_redes_login {
      max-width: 120px;
      margin-right: 0;
      margin-top: 5px;
  }

  .redes_login {
      font-size: 20px;
  }
}
</style>