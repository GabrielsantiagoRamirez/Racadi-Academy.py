<template>
 <div class="footer">
       
        
        <div class="footer-menu">
           <img class="logo_footer" src="..//components/img/logoRacadi.png" alt="">
            <div class="cont_a_footer">
                <a href="#">Incio</a>
                <a href="#">Paquetes</a>
                <a href="#">Incio secion</a>
            </div>
            <div>
                <a href="#">Contacto</a>
                <a href="#">Servicios</a>
            </div>
            <div>
                <a href="#">Mision </a>
                <a href="#">Vision</a>
                <a href="#">Quines somos?</a>
            </div>
           
        </div>
        <div class="linea_footer"></div>
        <div class="social-icons_footer">
            <img class="icono_footer" src="..//components/img/icons8-facebook-30.png" alt="">
            <img class="icono_footer" src="..//components/img/icons8-instagram-48.png" alt="">
            <img class="icono_footer" src="..//components/img/icons8-twitterx-50.png" alt="">
            
        </div>
        <div class="copyright">©Copyright. All rights reserved.</div>
    </div>
</template>

<script setup> </script>

<style>
.footer {
            background-color: #0a0a0a;
            padding: 40px 0;
            text-align: center;
        }

         .logo_footer {
            max-width: 20%;
            height: auto; /* Mantiene la proporción del logo */
            margin-top: -4%;
            
        }

         

        .footer-menu {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            justify-content:space-around;
            margin-top: 4%;
        }

       

        .footer-menu a {
            color: white;
            text-decoration: none;
            font-size: 120%;
            display: block;
            margin-bottom: 5px;
            display: flex;
            justify-content: flex-start;
            
        }

        

        .social-icons_footer {
            width: 30%;
            display: flex;
            justify-content:space-evenly;
            margin-left: auto;
            margin-right: auto;
            margin-top: 6%;
            
        }

        

       

        .footer .copyright {
            font-size: 16px;
            color: #aaaaaa;
            margin-top: 1%;
        }

        .linea_footer {
            border: 0;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            height: 2px;
            background: #d6d4d4;
            margin-top: 4%;
            
        }
        .icono_footer{
            width: 12%;
            height: 12%;
        }

</style>