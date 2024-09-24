<script setup>
import Footer from './Footer.vue';
 </script>

 <template>
    <div class="contenedorMadre_perfil">
    <div class="cont_titulo_foto">
      <div class="foto_perfil"></div>
      <h2 class="titulo_perfil"><strong>Perfil</strong></h2>
    </div>
    <div class="cont_informacion">
      <p><strong>Nombres:</strong> Juan</p>
      <p><strong>Apellidos:</strong> Pérez</p>
      <p><strong>Documento:</strong> 12345678</p>
      <p><strong>Telefono:</strong> 3245576567</p>
      <p><strong>Correo:</strong> sdfgffd@gmail.com</p>
      <p><strong>Sede:</strong> Mosquera</p>
    </div>
  </div>
  <Footer/>

 </template>

 <style>


body{
 background-color:  #E2DAD6;
}

.contenedorMadre_perfil {
  background-color: white;
  border-radius: 10px;
  width: 50%;
  padding: 40px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.cont_titulo_foto {
  margin-bottom: 20px;
  background-color: #0fd82000;
  ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}

.foto_perfil{
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #6bc8ec;
}

.titulo_perfil {
  font-size: 30px;
  color: #333;
  margin-top: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cont_informacion{
  text-align: left;
  color: black;
  padding-left: 20%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}.cont_informacion p {
  margin-bottom: 10px;
}.cont_informacion strong {
  color: #6bc8ec;
}

</style>