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
        <div id="redes"> 
            <img src="../components/img/icons8-instagram-48.png" alt="" class="redes">
            <img src="../components/img/icons8-facebook-30.png" alt="" class="redes">
            <img src="../components/img/icons8-twitterx-50.png" alt="" class="redes">
        </div>

        <div class="boton">
            <button>Login</button>
        </div>

    </header>
    
</template>


<script setup>

</script>


<style>
@media (min-width: 1200px) and (max-width: 1499px){


}
.container_header{
  background-color: #05080B; /* updated background color */
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
  justify-content:end;
}
#redes{
    width: 150px;
    display: flex;
    justify-content: end;
}

.boton button{
  margin-right: 20px;
  margin: 20px;
  background-color: #3AACD9; 
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #DCD7DC; 
  cursor: pointer;
}

.boton button:hover {
  background-color: #2090C2; 
  color: #DCD7DC; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #3AACD9; 
  width: 800px;
  text-align: center;
  font-size: 40px; 
  line-height: 1.2; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

</style>