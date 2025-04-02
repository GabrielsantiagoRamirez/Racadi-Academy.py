<script setup>
import headerRacadi from '../Headers/headerRacadi.vue';
import Footer from '../Footer_Login/Footer.vue';
</script>

<template>

    <headerRacadi/>

    <div class="inicioMain">
        
         <h1 class="h1InicioMain">RACADI ACADEMI</h1>
         <p class="pInicioMain">Explora un mundo de conocimiento y aprendizaje con nosotros. Nuestra academia está diseñada para potenciar tu crecimiento con cursos innovadores y educación de calidad.</p>
        
    </div>
    




    <div class="accordion">
    <!-- Sección 1 -->
    <div class="accordion-item">
        <input type="checkbox" id="section1" class="accordion-input">
        <label for="section1" class="accordion-header">
            <h3>¿Quienes somos?</h3>
        </label>
        <div class="accordion-content">
            <p>En Racadi Academy, somos el enlace perfecto entre estudiantes y la academia de inglés, facilitando la gestión de horarios y reservas de manera rápida y sencilla. Nuestra plataforma está diseñada para optimizar tu tiempo, ofreciéndote una experiencia sin complicaciones al momento de programar tus clases de inglés.</p>
        </div>
    </div>

    <!-- Sección 2 -->
    <div class="accordion-item">
        <input type="checkbox" id="section2" class="accordion-input">
        <label for="section2" class="accordion-header">
            <h3>Mision</h3>
        </label>
        <div class="accordion-content">
            <p>Nuestro objetivo es simplificar la vida de estudiantes y academias al proporcionar una herramienta intuitiva y accesible para gestionar horarios y reservas. Queremos que te concentras en lo importante: aprender inglés, mientras nosotros nos encargamos de que tu agenda esté siempre organizada.</p>
        </div>
    </div>

    <!-- Sección 3 -->
    <div class="accordion-item">
        <input type="checkbox" id="section3" class="accordion-input">
        <label for="section3" class="accordion-header">
            <h3>Funcion</h3>
        </label>
        <div class="accordion-content">
            <p>Trabajamos de la mano con la academia para asegurarnos de que siempre tengas acceso a la disponibilidad actualizada de clases y profesores. Con nuestra plataforma, puedes revisar horarios, reservar y gestionar tus clases con facilidad, todo desde un solo lugar.</p>
        </div>
    </div>
</div>

    




<h1 class="titulosMain">Funciones que cumplimos</h1>
<p class="Maintextos">Por parte de nuestra pataforma para ofrecer una mejor comodidad y interactividad a nuestros estudiantes lo cua se lo ofrecemos con la versatilidad de nuestra plataforma y les aseguramos las siguientes funciones.  </p>




    <div class="card-container">
    <!-- Card 1 -->
    <div class="card">
        <img src="../img/reloj.png" alt="Descripción de la imagen 1" class="card-image">
        <h3 class="card-title">Gestión Académica</h3>
        <p class="card-text">Administre la información académica de sus estudiantes de principio a fin para mejorar procesos como: matrículas, programación de horarios, registro de notas y evaluación docente.</p>
    </div>

    <!-- Card 2 -->
    <div class="card">
        <img src="../img/dinero (1).png" alt="Descripción de la imagen 2" class="card-image">
        <h3 class="card-title">Gestión Administrativa</h3>
        <p class="card-text">Controle adecuadamente las cuentas por cobrar y los ingresos de sus estudiantes mediante órdenes de pago, recibos, facturas, créditos e informes, que faciliten tomar decisiones acertadamente.</p>
    </div>

    <!-- Card 3 -->
    <div class="card">
        <img src="../img/conversacion (1).png" alt="Descripción de la imagen 3" class="card-image">
        <h3 class="card-title">Comunidad en linea</h3>
        <p class="card-text">Aumente sus canales de comunicación entre los estudiantes, docentes y administrativos por medio del chat institucional , SMS mensajes de texto, la App móvil y las campañas de Mailing enviadas directamente desde su plataforma.</p>
    </div>

    <!-- Card 4 -->
    <div class="card">
        <img src="../img/bienestar.png" alt="Descripción de la imagen 4" class="card-image">
        <h3 class="card-title">Bienestar institucional</h3>
        <p class="card-text">Promueva la satisfacción de sus estudiantes por medio de encuestas, evaluación institucional y solicitudes en línea, además de tener accesos a una bolsa de empleo y gestionar las prácticas laborales en el mismo sistema.</p>
    </div>
</div>








    
   




    
    
  
    
    <div class="contMadre_niveles">
        <h1 class="titulosMain">Las certificaciones que te ofrecemos</h1>
            <a class="Maintextos">Te ofrecemos la certificacion de todos los niveles de ingles desde A1 hasta C2,iniciando desde el nivel que te encuentres hasta donde puedas llegar con nuestros planes.</a>
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
        <img src="../img/LogoRacadiLetras.png" class="logo_unete">
        <div class="texto_unete"><strong>Logra tu meta de aprender hablar ingles on nosotros.</strong></div>
    </div>
    
    
    <Footer/>


</template>

<style scoped>

.titulosMain{
    width: 70%;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    color: #3AACD9;
    font-weight: bold;
    font-family: "Anek Devanagari", sans-serif;
    margin-top: 100px;
    text-align: center;
}

.Maintextos{
    width: 35%;
    margin-left: auto;
    margin-right: auto;
    font-size:20px ;
    color: black;
    text-align: center;
    margin-top: 40px;
    font-family: "Anek Devanagari", sans-serif;
}


.inicioMain {
    width: 100%;
    height: 400px; /* Ajusta la altura según necesites */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    background: url('../img/imagenMain.jpg') no-repeat center center/cover;
    position: relative; /* Necesario para posicionar el pseudo-elemento */
}

/* Capa oscura semitransparente */
.inicioMain::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Negro con 50% de opacidad */
    z-index: 1; /* Coloca la capa sobre la imagen */
}

                .h1InicioMain {
            font-size: 42px;
            font-weight: 600;
            margin-bottom: 15px;
            letter-spacing: 1px;
            z-index: 2;
        }

        .pInicioMain {
            width: 30%;
            font-size: 18px;
            font-weight: 300;
            line-height: 1.6;
            color: #f0f0f0;
            z-index: 2;
        }






/* Estilos para el contenedor del acordeón */
.accordion {
    width: 100%;
    
    
 
    border-radius: 8px;
    
}

/* Estilos para cada ítem del acordeón */
.accordion-item {
    border-bottom: 5px solid #ddd;
    
}

/* Último ítem sin borde inferior */

/* Ocultar el input checkbox */
.accordion-input {
    display: none;
}

/* Estilos para el encabezado del acordeón */
.accordion-header {
    display: block;
    padding: 15px;
    background-color: #3AACD9;
    cursor: pointer;
    text-align: center; /* Centrar el texto */
    transition: background-color 0.3s ease;
}

.accordion-header:hover {
    background-color: #2c81a3;
}

.accordion-header h3 {
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 40px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

/* Estilos para el contenido del acordeón */
.accordion-content {
    padding: 0 50px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background-color: #ddd;
    text-align: center; /* Centrar el texto */
    font-size: 20px;
    font-family: "Anek Devanagari", sans-serif;
}

/* Cuando el input está checked, mostrar el contenido */
.accordion-input:checked ~ .accordion-content {
    max-height: 200px; /* Ajusta según el contenido */
    padding: 15px;
}







        .card-container {
     width: 100%;
     gap: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
  padding-top: 30px;
  padding-bottom: 30px;
    
   
    
    
    
}

/* Estilos para cada card */
.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.76);
    width: calc(20% - 15px); /* Ancho de cada card (4 cards por fila) */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px); /* Efecto de levantar la card al pasar el mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Estilos para la imagen de la card */
.card-image {
    width: 70%;
    height: auto;
    object-fit: cover; /* Ajusta la imagen sin distorsionarla */
}

/* Estilos para el título de la card */

.card-title {
    font-size: 1.5rem;
    margin: 15px 0 10px;
    /*color:  #4e70b5;*/
    color: #6bc8ec;
    font-weight: bold;
    font-family: "Anek Devanagari", sans-serif;
}

/* Estilos para el texto de la card */
.card-text {
    font-size: 1rem;
    color: #666;
    padding: 0 15px 20px;
    margin: 0;
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





@media (min-width: 481px) and (max-width: 1024px) {
    /* Estilos para tablets */
    .inicioMain {
        padding: 2% 5%;
    }

    .h1InicioMain {
        font-size: 3rem;
    }

    .pInicioMain {
        font-size: 1.5rem;
        width: 50%;
    }

    .accordion-header h3 {
        font-size: 2rem;
    }

    .accordion-content p {
        font-size: 1.2rem;
    }

    .card {
        width: 48%;
        margin: 1%;
    }

    .titulosMain {
        font-size: 2.5rem;
        width: 80%;
    }

    .Maintextos {
        font-size: 1.2rem;
        width: 70%;
    }

    .niveles, .niveles2, .niveles3, .niveles4, .niveles5, .niveles6 {
        width: 15%;
        font-size: 1.5rem;
    }

    .logo_unete {
        width: 40%;
    }

    .texto_unete {
        font-size: 1.5rem;
        width: 60%;
    }
}

@media (min-width: 100px) and (max-width: 480px) {
    /* Estilos para celulares */
    .inicioMain {
        padding: 5% 2%;
    }

    .h1InicioMain {
        font-size: 2.5rem;
    }

    .pInicioMain {
        font-size: 1.2rem;
        width: 80%;
    }

    .accordion-header h3 {
        font-size: 1.5rem;
    }

    .accordion-content p {
        font-size: 1rem;
    }

    .card {
        width: 100%;
        margin: 2% 0;
    }

    .titulosMain {
        font-size: 2rem;
        width: 90%;
    }

    .Maintextos {
        font-size: 1rem;
        width: 90%;
    }

    .niveles, .niveles2, .niveles3, .niveles4, .niveles5, .niveles6 {
        width: 100%;
        font-size: 1.2rem;
    }

    .logo_unete {
        width: 50%;
    }

    .texto_unete {
        font-size: 1.2rem;
        width: 70%;
    }
}

</style>