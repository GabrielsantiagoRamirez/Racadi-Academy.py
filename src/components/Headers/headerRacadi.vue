<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
  <header class="container_header">
      <div>
          <img src="../img/logoRacadi.png" alt="" class="logo">
      </div>
      <div class="texto">
          <h1>RACADI ACADEMY</h1>
      </div>
      <div class="container_redes"> 
          <a href="#"><i class="fa-brands fa-facebook-square redes"></i></a>
          <a href="#"><i class="fa-brands fa-instagram redes"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp redes"></i></a>
          <a href="#"><i class="fa-brands fa-github redes"></i></a>
      </div>
      <div class="boton">
          <router-link to="/login">
              <button>Login</button>
          </router-link>
      </div>
  </header>
</template>

<script setup>
</script>

<style>
.container_header{
  background-color: #7FA1C3;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px 0 #263d53; 
}

.container_redes{
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: space-between;
}

.redes{
  font-size: 35px;
  color: white;
}

.logo {
  width: 150px;
  display: flex;
  align-items: center;
  margin-left: 3vh;
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

.boton button{
  margin-right: 20px;
  margin: 20px;
  background-color: #4e70b5; 
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #DCD7DC; 
  cursor: pointer;
}

.boton button:hover {
  background-color: #52639b; 
  color: #DCD7DC; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .container_header {
      height: 120px;
      padding: 0 2%;
  }

  .logo {
      width: 100px;
      margin-left: 2vh;
  }

  .texto {
      font-size: 28px;
      width: 60%;
  }

  .container_redes {
      max-width: 120px;
  }

  .redes {
      font-size: 25px;
  }

  .boton button {
      padding: 8px 16px;
      font-size: 14px;
      margin: 10px;
  }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  .container_header {
      height: auto;
      flex-direction: column;
      padding: 15px 0;
      justify-content: center;
  }

  .logo {
      width: 80px;
      margin-left: 0;
      margin-bottom: 10px;
  }

  .texto {
      font-size: 20px;
      width: 100%;
      margin: 10px 0;
  }

  .container_redes {
      max-width: 140px;
      margin: 10px 0;
  }

  .redes {
      font-size: 22px;
  }

  .boton {
      margin: 10px 0;
  }

  .boton button {
      padding: 6px 12px;
      font-size: 12px;
      margin: 5px;
  }
}
</style>