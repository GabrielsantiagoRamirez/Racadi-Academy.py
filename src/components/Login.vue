<template>
    <Header_sin_login/>
    <div class="wrapper">
        <form action="" class="form">
            <div class="txt_container">
            <h1 class="title">LOGIN</h1>
            </div>
            <div class="inp">
                <input type="text" class="input" placeholder="usuario">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="inp">
                <input type="password" class="input" placeholder="contraseña">
                <i class="fa-solid fa-lock"></i>
            </div>
            <button class="submit">iniciar sesion</button>
        <p class="footer">¿olvidaste tu contraseña?<a href="" class="link"> haz click aqui</a></p>
        <p class="para2"> <a href="index.html"> <b>Volver</b></a> </p>  

        </form>

        <div class="banner">
            <img src="../components/img/logoRacadi.png" alt="" class="logo_login">
      
        </div>
    </div>
    


</template>

<script setup>
import Header_sin_login from './header_sin_login.vue';
</script>


<style>
/* Global Styles */
::-webkit-input-placeholder {
    color: #eee;
}

a {
    text-decoration: none;
}

b {
    color: aqua;
}

/* Wrapper */
.wrapper {
    position: relative;
    width: 800px;
    height: 65vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid  #3AACD9;
    box-shadow: 0 0 50px 0 #00a6b6;
    margin-top: 7vh;
    margin-left: auto;
    margin-right: auto;
    background-color: #05080B;
}

/* Form */
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left
}

.title {
    font-size: 40px;
    margin-top: 30px;
    color: #3AACD9;
}

.inp {
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

.input {
    border: none;
    outline: none;
    background: none;
    width: 260px;
    margin-top: 40px;
    padding-right: 10px;
    font-size: 17px;
    color: #0ef;
}

.submit {
    border: none;
    outline: none;
    width: 288px;
    margin-top: 25px;
    padding: 10px 0;
    font-size: 20px;
    border-radius: 40px;
    letter-spacing: 1px;
    cursor: pointer;
    background: linear-gradient(45deg, #46cefc, #04364A);
}

.footer {
    margin: 35px;
    letter-spacing: 0.5px;
    font-size: 18px;
    color: white;
}

.link {
    color: #3AACD9;
    text-decoration: none;
}


.banner {
    position: absolute;
    top: 0;
    right: 0;
    width: 80vh;
    height: 100%;
    background: linear-gradient(to right, #3AACD9, #04364A);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
    display: flex;
    justify-content: right;
}

.wel_text {
    font-size: 40px;
    margin-top: -50px;
    line-height: 50px;
}

.para {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
}

.para2 {
    margin-top: 0;
    font-size: 0;
    line-height: 24px;
    letter-spacing: 1px;
}
.logo_login{
height: 55vh;
width:55vh;
}
.txt_container{
    text-align: left;
    width: 100%;
    padding-left: 35vh;
}




</style>


