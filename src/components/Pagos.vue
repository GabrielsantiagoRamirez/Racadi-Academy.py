<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
    
    <header_sin_login/>
    <body>
        <div class="container_pagos">
            <img src="../components/img/logoRacadi.png" alt="" class="logo_pagos">
            <div class="sub_racadi">
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
                <button class="cancelar_pagos"> Cancelar</button>
                <button class="cancelar_pagos"> Ingresar</button>
            </div>
        </div>
    </body>
</template>


<script setup>
import header_sin_login from './header_sin_login.vue';
</script>


<style>
body{
    background-color: #454f53; 
}
.container_pagos{
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.6);
    width: 500px;
    height: 750px;
    background-color: #081326; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 50px;
}

.sub_racadi{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 50px;
    color: #3aacd9; 
}
.logo_pagos{
    width: 330px;
    height: 350px;
}
.cancelar_pagos {

    background-color: #2090c2;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}
.cancelar_pagos:hover {
    background-color: #27789d;
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
    color: #3aacd9;
}
</style>