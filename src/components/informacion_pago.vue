<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" rel="stylesheet">




<body>
    <Header_sin_login/>
    <div class="contenedor_tabla_pago">
        <table class="tabla_pago">
            <thead class="contenedor_informacion_pago_header">
                <th colspan="10" class="cabeza_tabla_pagos">
                    Creditos activos
                </th>
                <tr>
                    <td class="cabeza_tabla_pagos">
                        Periodo
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Descripción
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Fecha Vencimiento
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Valor Inicial
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Capital
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Saldo Interes Corriente
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Saldo Interes Mora
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Deuda total
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Valor Pago Sugerido
                    </td>
                    <td class="cabeza_tabla_pagos">
                        Valor a pagar
                    </td>
                </tr>
            </thead>
            <tbody class="fondo_pago">
                <tr>
                    <td class="informacion_pago">
                        Ejemplo1
                    </td>
                    <td class="informacion_pago">
                        Descripción1
                    </td>
                    <td class="informacion_pago">
                        01/01/2024
                    </td>
                    <td class="informacion_pago">
                        1000
                    </td>
                    <td class="informacion_pago">
                        500
                    </td>
                    <td class="informacion_pago">
                        50
                    </td>
                    <td class="informacion_pago">
                        10
                    </td>
                    <td class="informacion_pago">
                        560
                    </td>
                    <td class="informacion_pago">
                        100
                    </td>
                    <td class="informacion_pago">
                        660
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="cancelar_pagos_info"> Confirmar para pago</button>
    <button class="cancelar_pagos_ing"> cancelar </button> 
</body>
<Footer/>
</template>


<script setup>
import Footer from './Footer.vue';
import Header_sin_login from './Header_sin_login.vue';
</script>


<style>
@media (min-width: 1200px) and (max-width: 1499px){

}

.contenedor_tabla_pago{
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
}
.contenedor_informacion_pago_header{
    background-color: #4e70b5;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);  
}
.cabeza_tabla_pagos{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    border: 2px solid #2090c2;
    font-size: 20px;
    padding: 15PX;
}
.informacion_pago{
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    text-align: center;
    border: 2px solid #53649b;
    font-size: 20px;
    padding: 8PX;
    color: white;
}

.fondo_pago{
    background-color: #53649b;
}

.tabla_pago{
    border: 2px solid #53649b;
    text-align: center;
}

.cancelar_pagos_info {
font-family: "Anek Devanagari", sans-serif;
font-optical-sizing: auto;
background-color: #4e70b5; 
color: #ffffff;
padding: 12px 20px;
border-radius: 10px;
cursor: pointer;
margin-top: 10px;
margin-left: 10px;
font-size: 20px;
}
.cancelar_pagos_info:hover {
    background-color: #52639b; 
}

.cancelar_pagos_ing {
font-family: "Anek Devanagari", sans-serif;
font-optical-sizing: auto;
background-color: #4e70b5; 
color: #ffffff;
padding: 12px 20px;
border-radius: 10px;
cursor: pointer;
margin-top: 10px;
margin-left: 10px;
font-size: 20px;
}

.cancelar_pagos_ing:hover {
    background-color: #52639b; 
}



</style>