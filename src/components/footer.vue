<template>
 <div class="footer">
       
        
        <div class="footer-menu">
            <div class="logo_footer">LOGO</div>
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
        <div class="social-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-rss"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-flickr"></i></a>
        </div>
        <div class="copyright">©Copyright. All rights reserved.</div>
    </div>
</template>

<script setup> </script>

<style>
.footer {
            background-color: #1c1c1c;
            padding: 40px 0;
            text-align: center;
        }

         .logo_footer {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
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
            font-size: 20px;
            display: block;
            margin-bottom: 5px;
            display: flex;
            justify-content: flex-start;
        }

        

        .social-icons {
            margin-bottom: 20px;
        }

        .social-icons a {
            color: white;
            text-decoration: none;
            font-size: 20px;
            margin: 0 10px;
        }

       

        .footer .copyright {
            font-size: 16px;
            color: #aaaaaa;
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
</style>