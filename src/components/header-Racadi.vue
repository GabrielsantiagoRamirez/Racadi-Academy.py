<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
        <header class="container_header">
        <div>
            <img src="../components/img/logoRacadi.png" alt="" class="logo">
        
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
@media (min-width: 1200px) and (max-width: 1499px){


}
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


</style>