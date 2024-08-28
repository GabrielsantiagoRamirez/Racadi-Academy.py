<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
        <header class="container">
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
.container{
  background-color: #F7C4B4; /* updated background color */
  width: 1490px;
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

.boton button{
  margin-right: 20px;
  margin: 20px;
  background-color: #F6DA63; /* warm yellow-orange color */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #9D0B0B; /* deep red color */
  cursor: pointer;
}

.boton button:hover {
  background-color: #DA2D2D; /* bright red color */
  color: #FFFFFF; /* white text on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.texto {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #FFFFFF; /* updated text color */
  width: 800px;
  text-align: center;
  font-size: 40px; /* updated font size */
  line-height: 1.2; /* updated line height */
}


</style>