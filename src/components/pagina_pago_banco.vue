<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
    
    <header_sin_login/>
    <body>
        <div class="container_pagos_banco">
            <img src="../components/img/logoRacadi.png" alt="" class="logo_pagos_banco">
            <div class="sub_racadi">
                <h1>PAGO</h1>
            </div>
            <div>
                
                <h1 class="subtitulo_pago_banco">VALOR A PAGAR</h1>
                <input type="number" id="numero_pago" name="numero" placeholder="$500.000">
                <div class="radio_pago">
                    <input type="radio" id="opcion1" name="opciones" value="cuota">
                    <label for="opcion1">Pagar cuota</label>
                    <input type="radio" id="opcion2" name="opciones" value="total">
                    <label for="opcion2">Pago total</label>
                </div>
                <div>
                    <input type="number" id="numero_pago" name="numero" placeholder="Digite el valor...">
                </div>
                
                    <h1 class="subtitulo_pago_banco">Tipo de identificacion</h1>
                    <select>
                        <option value="seleccione">Medios de Pago</option>
                        <option value="Banacolombia">Bancolombia</option>
                        <option value="Davivienda">Davivienda</option>
                        <option value="Nequi">Nequi</option>
                    </select>
                <div>
                    <button class="cancelar_pagos_banco"> Pagar</button>
                </div>
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
.container_pagos_banco{
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.6);
    width: 500px;
    height: 840px;
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
.logo_pagos_banco{
    width: 330px;
    height: 350px;
}
.cancelar_pagos_banco {

    background-color: #2090c2;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}
.cancelar_pagos_banco:hover {
    background-color: #27789d;
}

select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #dcd7dc;
    margin-top: 10px;
    margin-bottom: 10px;
}

.subtitulo_pago_banco{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 24px;
    color: #dcd7dc;
}
#numero_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 20px;
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    background-color: #dcd7dc;
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.radio_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #dcd7dc;
}
</style>