<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">
    
    <Header_sin_login/>
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
    <Footer/>
</template>


<script setup>
import Header_sin_login from './Header_sin_login.vue';
import Footer from './Footer.vue';
</script>


<style>

.container_pagos_banco{
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.6);
    width: 70vh;
    height: auto;
    background-color: #7FA1C3; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 50px;
    padding: 20px;
}

.sub_racadi{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 50px;
    color: #ffffff; 
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
.logo_pagos_banco{
    width: 70px;
    height: 70px;
    display: flex;
    align-self: self-start;
}
.cancelar_pagos_banco {

    background-color: #4e70b5; 
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}
.cancelar_pagos_banco:hover {
    background-color: #52639b;
}

select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgb(83, 100, 155);
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
}

.subtitulo_pago_banco{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 24px;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
#numero_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-size: 20px;
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    background-color: rgb(83, 100, 155);
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
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
</style>