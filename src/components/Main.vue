<script setup>
import headerRacadi from './headerRacadi.vue';
import Footer from './Footer.vue';
</script>

<template>
    <headerRacadi/>

   
    
    <div class="MainCont_titulo">
        <h1 class="MainTitulos">¿Quienes somos?</h1>
        <div class="MainTextos">En Racadi Academy, somos el enlace perfecto entre estudiantes y la academia de inglés, facilitando la gestión de horarios y reservas de manera rápida y sencilla. Nuestra plataforma está diseñada para optimizar tu tiempo, ofreciéndote una experiencia sin complicaciones al momento de programar tus clases de inglés.</div>
   
        
            <h1 class="MainTitulos">Mision</h1>
            <a class="MainTextos">Nuestro objetivo es simplificar la vida de estudiantes y academias al proporcionar una herramienta intuitiva y accesible para gestionar horarios y reservas. Queremos que te concentres en lo importante: aprender inglés, mientras nosotros nos encargamos de que tu agenda esté siempre organizada.</a>
    
            <h1 class="MainTitulos">Como funcionamos</h1>
            <a class="MainTextos">Trabajamos de la mano con la academia para asegurarnos de que siempre tengas acceso a la disponibilidad actualizada de clases y profesores. Con nuestra plataforma, puedes revisar horarios, reservar sesiones, y gestionar tus clases con facilidad, todo desde un solo lugar.</a>
        
    </div>




    
    <div class="Maincont_Ofrecemos">
        <h1 class="MainTitulos_Ofrecemos">Te ofrecemos</h1>
            
      <div class="Maincont_cardOfrcemos">
        <div class="Maincard_Ofrecemos">
            <img src="..//components/img/reloj.png" class="Mainicono">
            <h2><strong>Gestión Académica</strong></h2>
            <p>Administre la información académica de sus estudiantes de principio a fin para mejorar procesos como: matrículas, programación de horarios, registro de notas y evaluación docente.</p>
        </div>
        <div class="Maincard_Ofrecemos">
            <img src="..//components/img/dinero (1).png" class="Mainicono">
            <h2><strong>Gestión Administrativa</strong></h2>
            <p>Controle adecuadamente las cuentas por cobrar y los ingresos de sus estudiantes mediante órdenes de pago, recibos, facturas, créditos e informes, que faciliten tomar decisiones acertadamente.</p>
        </div>
        <div class="Maincard_Ofrecemos">
            <img src="..//components/img/conversacion (1).png" class="Mainicono">
            <h2><strong>Comunidad en Línea</strong></h2>
            <p>Aumente sus canales de comunicación entre los estudiantes, docentes y administrativos por medio del chat institucional , SMS mensajes de texto, la App móvil y las campañas de Mailing enviadas directamente desde su plataforma.</p>
        </div>
        <div class="Maincard_Ofrecemos">
            <img src="..//components/img/bienestar.png" class="Mainicono">
            <h2><strong>Bienestar Institucional</strong></h2>
            <p>Promueva la satisfacción de sus estudiantes por medio de encuestas, evaluación institucional y solicitudes en línea, además de tener accesos a una bolsa de empleo y gestionar las prácticas laborales en el mismo sistema.</p>
        </div>

      </div>
    </div>
  
    
    <div class="contMadre_niveles">
        <h1 class="tituloNiveles">Las certificaciones que te ofrecemos</h1>
            <a class="MainTextos">Te ofrecemos la certificacion de todos los niveles de ingles desde A1 hasta C2,iniciando desde el nivel que te encuentres hasta donde puedas llegar con nuestros planes.</a>
       <div class="contNiveles">
            <div class="niveles"><strong>A1</strong></div>
            <div class="niveles2"><strong>A2</strong></div>
            <div class="niveles3"><strong>B1</strong></div>
            <div class="niveles4"><STRong>B2</STRong></div>
            <div class="niveles5"><strong>C1</strong></div>
            <div class="niveles6"><Strong>C2</Strong></div>
       </div>


    </div>



    <div class="contNiveles_unete">
        <img src="..//components/img/LogoRacadiLetras.png" class="logo_unete">
        <div class="texto_unete"><strong>Logra tu meta de aprender hablar ingles on nosotros.</strong></div>
    </div>
    
    
    <Footer/>


</template>

<style>

.MainCont_titulo{
   
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7% ; /* Aplica 0 de padding arriba y abajo, y 20px a los lados */
    padding-bottom: 7%;
    background-color: white;
    border-radius: 4%;
    box-shadow: 10px 10px 20px rgba(0.842, 0.842, 0.842, 0.842);
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;
    
}
.Mainicono{
    height: 60%;
    width:40% ;
}
.MainTitulos{
    font-family: "Anek Devanagari", sans-serif;
  font-size:9vh;
  color: #3AACD9; 
  margin-top: 7%;
  
}
.MainTextos{
    font-family: "Anek Devanagari", sans-serif;
    
    color: black;
    font-size: 4vh;
    text-align:center;
}



.Maincont_Ofrecemos {
    text-align: center;
    height: auto;
    margin-top: 10%;
}

/* Estilos para los títulos principales */
.MainTitulos_Ofrecemos {
    font-family: "Anek Devanagari", sans-serif;
    font-size: 9vh;
    color: #3AACD9;
    margin-top: 7%;
}

/* Estilos para el contenedor de las tarjetas */
.Maincont_cardOfrcemos {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Divide en dos columnas iguales */
    justify-content: space-evenly; /* Espacio uniforme alrededor de los elementos */
    gap: 9% 3%; /* Espacio entre filas y columnas */
    padding: 4%;
    height: auto;
    background-color: white;
    padding-bottom: 9%;
    margin: 0 auto; /* Centra el contenedor principal */
    
}

/* Estilos para cada tarjeta */
.Maincard_Ofrecemos {
    background-color:  #E2DAD6;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 30px;
    text-align: center;
    width: 90%;
    margin: 0 auto; /* Centra cada tarjeta dentro de su columna */
    
}

/* Ajustes para los iconos */
.Mainicono {
    height: auto; /* Ajusta la altura automáticamente */
    max-width: 100%; /* Asegura que el ancho no exceda el contenedor */
}

/* Estilos para los títulos dentro de las tarjetas */
.Maincard_Ofrecemos h2 {
    font-size: 5vh;
    color: #6bc8ec;
    font-family: "Anek Devanagari", sans-serif;
}

/* Estilos para los párrafos dentro de las tarjetas */
.Maincard_Ofrecemos p {
    font-size: 3vh;
    color: black;
    font-family: "Anek Devanagari", sans-serif;
}

/* Media Query para pantallas pequeñas */
@media (max-width: 768px) {
    .Maincont_cardOfrcemos {
        grid-template-columns: 1fr; /* Cambia a una columna en pantallas pequeñas */
        gap: 5% 0; /* Reduce el espacio entre las tarjetas */
    }

    .Maincard_Ofrecemos {
        width: 100%; /* Ajusta el ancho para ocupar todo el espacio disponible */
    }
}



        



.contMadre_niveles {
    height: auto;
    width: 100%;
    background-color: #3aacd900;
    display: flex;
    justify-content:center; /* Centrar horizontalmente el contenedor de niveles */
    flex-direction: column;
    padding: 20px 0; /* Ajusta según necesites */
    margin-top: 6%;
    margin-bottom: 6%;
}.contMadre_niveles h1{
   margin-left: auto;
   margin-right: auto;
   font-family: "Anek Devanagari", sans-serif;
    font-size: 9vh;
    color: #3AACD9;
    margin-top: 7%;
}

.contNiveles {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
    gap: 4%; /* Espacio entre los cuadrados */
     height: auto;/* Espacio interno del contenedor */
    margin-top: 6%;
}

.niveles {
    background-color:rgba(255, 0, 0, 0.849);

    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}
.niveles2 {
    background-color:rgba(255, 166, 0, 0.836);

    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}
.niveles3 {
    background-color:rgba(40, 40, 252, 0.877);
  
    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}
.niveles4 {
    background-color:#3aacd9e5;
    
    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}
.niveles5 {
    background-color:rgba(255, 192, 203, 0.877);
   
    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}
.niveles6 {
    background-color:violet;
   
    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 320%;
    font-family: "Anek Devanagari", sans-serif;
    aspect-ratio: 1; /* Mantiene los divs cuadrados */
    border-radius: 10px; /* Bordes redondeados */
}     
     


.contNiveles_unete{
    background-color:white;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    margin-bottom: 7%;
}
.logo_unete{
    width: 35%;
    height: auto;
}
.texto_unete{
    width: 50%;
    font-size: 400%;
    font-family:cursive;
    color: #3AACD9;
    text-align: center;

}

</style>