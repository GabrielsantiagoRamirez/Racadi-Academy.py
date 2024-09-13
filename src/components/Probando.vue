<script setup>import headerRacadi from './header-Racadi.vue';</script>
<template>
    <header class="header_prueba">
        <div>
        <img src="..//components/img/logoRacadi.png" alt=""  class="logo_taste">
        </div>
        <div class="textoPrueba">
            <h1>
                RACADI ACADEMY
            </h1>
        </div>
        <div id="redesPrueba"> 
          <img src="../components/img/icons8-instagram-96.png" alt="" class="redesPrueba">
            <img src="../components/img/icons8-facebook-30.png" alt="" class="redesPrueba">
            <img src="../components/img/icons8-twitterx-100.png" alt="" class="redesPrueba">
        </div>
        <div class="botonPrueba">
            <button> Login</button>
        </div>
    </header>
    
    <div class="MainCont_tituloP">
        <h1 class="MainTitulosP">¿Quienes somos?</h1>
        <div class="MainTextosP">En Racadi Academy, somos el enlace perfecto entre estudiantes y la academia de inglés, facilitando la gestión de horarios y reservas de manera rápida y sencilla. Nuestra plataforma está diseñada para optimizar tu tiempo, ofreciéndote una experiencia sin complicaciones al momento de programar tus clases de inglés.</div>
   
        
            <h1 class="MainTitulosP">Mision</h1>
            <a class="MainTextosP">Nuestro objetivo es simplificar la vida de estudiantes y academias al proporcionar una herramienta intuitiva y accesible para gestionar horarios y reservas. Queremos que te concentres en lo importante: aprender inglés, mientras nosotros nos encargamos de que tu agenda esté siempre organizada.</a>
    
            <h1 class="MainTitulosP">Como funcionamos</h1>
            <a class="MainTextosP">Trabajamos de la mano con la academia para asegurarnos de que siempre tengas acceso a la disponibilidad actualizada de clases y profesores. Con nuestra plataforma, puedes revisar horarios, reservar sesiones, y gestionar tus clases con facilidad, todo desde un solo lugar.</a>
        
    </div>

        
    <div class="Maincont_OfrecemosP">
        <h1 class="MainTitulos_OfrecemosP">Te ofrecemos</h1>
            
      <div class="Maincont_cardOfrcemosP">
        <div class="Maincard_OfrecemosP">
            <img src="..//components/img/reloj.png" class="Mainicono">
            <h2>Gestión Académica</h2>
            <p>Administre la información académica de sus estudiantes de principio a fin para mejorar procesos como: matrículas, programación de horarios, registro de notas y evaluación docente.</p>
        </div>
        <div class="Maincard_OfrecemosP">
            <img src="..//components/img/dinero (1).png" class="MainiconoP">
            <h2>Gestión Administrativa</h2>
            <p>Controle adecuadamente las cuentas por cobrar y los ingresos de sus estudiantes mediante órdenes de pago, recibos, facturas, créditos e informes, que faciliten tomar decisiones acertadamente.</p>
        </div>
        <div class="Maincard_OfrecemosP">
            <img src="..//components/img/conversacion (1).png" class="MainiconoP">
            <h2>Comunidad en Línea</h2>
            <p>Aumente sus canales de comunicación entre los estudiantes, docentes y administrativos por medio del chat institucional , SMS mensajes de texto, la App móvil y las campañas de Mailing enviadas directamente desde su plataforma.</p>
        </div>
        <div class="Maincard_OfrecemosP">
            <img src="..//components/img/bienestar.png" class="MainiconoP">
            <h2>Bienestar Institucional</h2>
            <p>Promueva la satisfacción de sus estudiantes por medio de encuestas, evaluación institucional y solicitudes en línea, además de tener accesos a una bolsa de empleo y gestionar las prácticas laborales en el mismo sistema.</p>
        </div>

      </div>
    </div>




</template>













<style scoped> 

.header_prueba{
    background-color: #0a0a0a;
    height: 35vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo_taste{
  width: 200px;
  display: flex;
  align-items: center;
}
.redesPrueba {
  width: 50px;
  display: flex;
  justify-content:end;
}
#redesPrueba{
    width: 150px;
    display: flex;
    justify-content: end;
}

.botonPrueba button{
  margin-right: 20px;
  margin: 20px;
  background-color:  #229799; 
  border: none;
  border-radius : 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #DCD7DC; 
  cursor: pointer;
}
.botonPrueba button:hover {
  background-color: #066896; 
  color: #DCD7DC; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.textoPrueba {
  font-family: "Anek Devanagari", sans-serif;
  font-optical-sizing: auto;
  color: #229799; 
  width: 800px;
  text-align: center;
  font-size: 40px; 
  line-height: 1.2; 
  text-shadow: 0 0 2px #229799, 0 0 0.8px #229799;}


  .MainCont_tituloP{
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 7% ; /* Aplica 0 de padding arriba y abajo, y 20px a los lados */
   padding-bottom: 7%;
   background-color: #0a0a0a;
   border-radius: 4%;
   box-shadow: 10px 10px 20px #48CFCB ;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   margin-top: 5%;
   border: solid 2px #48CFCB;
   
}
.MainiconoP{
   height: 60%;
   width:40% ;
}
.MainTitulosP{
   font-family: "Anek Devanagari", sans-serif;
 font-size:9vh;
 color: #229799; 
 margin-top: 7%;
 
}
.MainTextosP{
   font-family: "Anek Devanagari", sans-serif; 
   color: #F5F5F5;
   font-size: 4vh;
   text-align:center;
}




.Maincont_OfrecemosP {
    text-align: center;
    height: auto;
}



/* Estilos para los títulos principales */
.MainTitulos_OfrecemosP {
    font-family: "Anek Devanagari", sans-serif;
    font-size: 9vh;
    color: #229799;
    margin-top: 7%;
}

/* Estilos para el contenedor de las tarjetas */
.Maincont_cardOfrcemosP {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Divide en dos columnas iguales */
    justify-content: space-evenly; /* Espacio uniforme alrededor de los elementos */
    gap: 9% 3%; /* Espacio entre filas y columnas */
    padding: 4%;
    height: auto;  
    padding-bottom: 9%;
    margin: 0 auto; /* Centra el contenedor principal */
}

/* Estilos para cada tarjeta */
.Maincard_OfrecemosP {
    background-color: #0a0a0a;
    border-radius: 10px;
    border: solid 1px #48CFCB;
    box-shadow: 5px 5px 10px #48CFCB ;
    padding: 30px;
    text-align: center;
    width: 90%;
    margin: 0 auto; /* Centra cada tarjeta dentro de su columna */
}

/* Ajustes para los iconos */
.MainiconoP {
    height: auto; /* Ajusta la altura automáticamente */
    max-width: 100%; /* Asegura que el ancho no exceda el contenedor */
}

/* Estilos para los títulos dentro de las tarjetas */
.Maincard_OfrecemosP h2 {
    font-size: 5vh;
    color: #229799;
    font-family: "Anek Devanagari", sans-serif;
}

/* Estilos para los párrafos dentro de las tarjetas */
.Maincard_OfrecemosP p {
    font-size: 3vh;
    color: #F5F5F5;
    font-family: "Anek Devanagari", sans-serif;
}



















</style>