<template>
    <footer class="footer-distributed">
        <div class="footer-left">
            <h3>Racadi<span>Academy</span></h3>
            <p class="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">About</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
            </p>
            <p class="footer-company-name">Racadi Academy © 2024</p>
        </div>
    
        <div class="footer-center">
            <div>
                <i class="fa fa-globe"></i>
                <p> Colombia <span>Cundinamarca</span></p>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <p>+57 311 412 2265</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="">RacadiAcademy@gmail.com</a></p>
            </div>
        </div>
    
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                En Racadi Academy facilitamos la gestión de horarios y reservas, optimizando tu tiempo para que programes tus clases de inglés de manera rápida y sencilla.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
            </div>

        </div>
    </footer>
    
    
    </template>
    
    <script setup> </script>
    
    <style scoped>
    .footer-distributed{
        background-color: #7FA1C3;
        box-shadow: 0 0 15px 0 #43607c;
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        font: bold 16px sans-serif;
        padding: 55px 50px;
        margin-top: 80px;
    }
    
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right{
        display: inline-block;
        vertical-align: top;
    }
    
    .footer-distributed .footer-left{
        width: 40%;
    }
    
    .footer-distributed h3{
        color: #ffffff;
        font: normal 36px 'Cookie', cursive;
        margin: 0;
    }
    
    .footer-distributed h3 span{
        color:  #43607c;
    }
    
    .footer-distributed .footer-links{
        color:  #ffffff;
        margin: 20px 0 12px;
        padding: 0;
    }
    
    .footer-distributed .footer-links a{
        display:inline-block;
        line-height: 1.8;
        text-decoration: none;
        color:  inherit;
    }
    
    .footer-distributed .footer-company-name{
        color:  white;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
    }
    
    .footer-distributed .footer-center{
        width: 35%;
    }
    
    .footer-distributed .footer-center i{
        background-color: #43607c;
        color: #ffffff;
        font-size: 25px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 42px;
        margin: 10px 15px;
        vertical-align: middle;
    }
    
    .footer-distributed .footer-center i.fa-envelope{
        font-size: 17px;
        line-height: 38px;
    }
    
    .footer-distributed .footer-center p{
        display: inline-block;
        color: #ffffff;
        vertical-align: middle;
        margin:0;
    }
    
    .footer-distributed .footer-center p span{
        display:block;
        font-weight: normal;
        font-size:14px;
        line-height:2;
    }
    
    .footer-distributed .footer-center p a{
        color:  #ffffff;
        text-decoration: none;;
    }
    
    .footer-distributed .footer-right{
        width: 20%;
    }
    
    .footer-distributed .footer-company-about{
        line-height: 20px;
        color:  #ffffff;
        font-size: 15px;
        font-weight: normal;
        margin: 0;
    }
    
    .footer-distributed .footer-company-about span{
        display: block;
        color:  #43607c;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
    .footer-distributed .footer-icons{
        margin-top: 25px;
    }
    
    .footer-distributed .footer-icons a{
        display: inline-block;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background-color:  #43607c;
        border-radius: 2px;
    
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 35px;
    
        margin-right: 3px;
        margin-bottom: 5px;
    }

/* Media Queries para Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
    .footer-distributed {
        padding: 4% 3%; /* Padding relativo */
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        width: 100%;
        text-align: center;
        margin-bottom: 2em; /* 2em = 32px */
    }

    .footer-distributed .footer-center i {
        margin: 0.625em 0.625em; /* 0.625em = 10px */
    }

    .footer-distributed .footer-icons {
        margin-top: 1.25em; /* 1.25em = 20px */
    }
}

/* Media Queries para Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
    .footer-distributed {
        padding: 3% 2%; /* Padding relativo */
        margin-top: 5%; /* Margen superior relativo */
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        width: 100%;
        text-align: center;
        margin-bottom: 1.25em; /* 1.25em = 20px */
    }

    .footer-distributed h3 {
        font-size: 1.75em; /* 1.75em = 28px */
    }

    .footer-distributed .footer-links a {
        line-height: 1.6;
    }

    .footer-distributed .footer-center i {
        margin: 0.625em 0.3125em; /* 0.625em = 10px, 0.3125em = 5px */
        font-size: 1.25em; /* 1.25em = 20px */
        width: 1.875em; /* 1.875em = 30px */
        height: 1.875em; /* 1.875em = 30px */
        line-height: 1.875em; /* 1.875em = 30px */
    }

    .footer-distributed .footer-center p {
        font-size: 0.875em; /* 0.875em = 14px */
    }

    .footer-distributed .footer-company-about {
        font-size: 0.875em; /* 0.875em = 14px */
    }

    .footer-distributed .footer-icons a {
        width: 1.875em; /* 1.875em = 30px */
        height: 1.875em; /* 1.875em = 30px */
        font-size: 1.125em; /* 1.125em = 18px */
        line-height: 1.875em; /* 1.875em = 30px */
    }
}






  
    
    
</style>