<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
    
    <Header_sin_login/>
    <body>
        <div class="container_pagos">
            <img src="../components/img/logoRacadi.png" alt="" class="logo_pagos">
            <div class="sub_racadi_pagos">
                <h1>PORTAL DE PAGOS</h1>
            </div>
            <div>
                <h1 class="subtitulo_pago">Tipo de identificacion</h1>
                <select>
                    <option value="seleccione">Seleccione</option>
                    <option value="T.I">Tarejta de identificacion</option>
                    <option value="C.C">Cedula de Ciudadania</option>
                    <option value="C.E">Cedula de Extranjero</option>
                </select>
                <h1 class="subtitulo_pago">Identificacion</h1>
                <div>
                    <textarea id="texto" name="texto" rows="2" cols="30" placeholder="Escribe aquí..."></textarea>
                </div>
                <button class="cancelar_pagos_pagos"> Cancelar</button>
                <button class="cancelar_pagos_pagos"> Ingresar</button>
            </div>
        </div>
    </body>
    <Footer/>
</template>


<script setup>
import Header_sin_login from './Header_sin_login.vue';
import Footer from './footer.vue';
</script>


<style>

.container_pagos{
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.6);
    width: 500px;
    height: 750px;
    background-color: #7FA1C3; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 50px;
}

.sub_racadi_pagos{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 50px;
    color: #fdfdfd; 
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
.logo_pagos{
    width: 330px;
    height: 350px;
}
.cancelar_pagos_pagos {

    background-color: #4e70b5; 
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}
.cancelar_pagos_pagos:hover {
    background-color: #52639b; 
}

select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.subtitulo_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    margin-top: 20px;
    font-size: 24px;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
</style>