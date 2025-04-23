<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <header class="main-header">
      <div class="header-container">
        <div class="header-logo">
          <img src="../img/logoRacadi.png" alt="RACADI ACADEMY Logo" class="logo-img">
        </div>
        
        <div class="header-title">
          <h1>RACADI ACADEMY</h1>
          <p class="header-subtitle">English Learning Platform</p>
        </div>
        
        <div class="header-social">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
        
        <router-link :to="perfilRuta" class="profile-link">
          <div class="profile-container">
            <i class="fas fa-user-circle profile-icon"></i>
            <span class="profile-text">Perfil</span>
          </div>
        </router-link>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { jwtDecode } from "jwt-decode";
  
  const perfilRuta = ref('/perfil_estudiante');
  
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const token_decodificado = jwtDecode(token);
      const rol = token_decodificado.rol;
      
      if (rol === 'profesor') {
        perfilRuta.value = '/perfil_profesor';
      }
      if (rol =='administrador'){
        perfilRuta.value= '/perfil_admin'
      }
    } catch (error) {
      perfilRuta.value = '/login';
    }
  }
  </script>
  
  <style>
  :root {
    --header-bg: linear-gradient(135deg, #7FA1C3 0%, #4a6fa5 100%);
    --header-shadow: 0 4px 12px rgba(38, 61, 83, 0.15);
    --text-white: #ffffff;
    --text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
    --social-icon-size: 1.4rem;
    --transition: all 0.3s ease;
  }
  
  /* Base Styles */
  .main-header {
    background: var(--header-bg);
    width: 100%;
    padding: 1rem 0;
    box-shadow: var(--header-shadow);
    position: relative;
    z-index: 100;
  }
  
  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    gap: 1.5rem;
  }
  
  .header-logo {
    flex: 0 0 auto;
  }
  
  .logo-img {
    width: 140px;
    height: auto;
    transition: var(--transition);
  }
  
  .header-title {
    text-align: center;
    flex: 1 1 auto;
    padding: 0 1rem;
  }
  
  .header-title h1 {
    font-family: "Anek Devanagari", "Poppins", sans-serif;
    font-weight: 700;
    color: var(--text-white);
    font-size: 2.2rem;
    margin: 0;
    line-height: 1.2;
    text-shadow: var(--text-shadow);
    letter-spacing: 0.5px;
  }
  
  .header-subtitle {
    font-family: "Poppins", sans-serif;
    color: var(--text-white);
    font-size: 0.85rem;
    margin-top: 0.3rem;
    opacity: 0.9;
    font-weight: 400;
  }
  
  .header-social {
    display: flex;
    gap: 1.2rem;
    margin-right: 1rem;
  }
  
  .header-social a {
    color: var(--text-white);
    font-size: var(--social-icon-size);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--transition);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .header-social a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  .profile-link {
    text-decoration: none;
  }
  
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition);
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
  }
  
  .profile-container:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .profile-icon {
    color: var(--text-white);
    font-size: 50px;
    transition: var(--transition);
  }
  
  .profile-container:hover .profile-icon {
    transform: scale(1.1);
  }
  
  .profile-text {
    font-family: "Poppins", sans-serif;
    color: var(--text-white);
    font-size: 1rem;
    font-weight: 500;
    margin-top: -0.2rem;
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .header-container {
      padding: 0 1.5rem;
    }
    
    .header-title h1 {
      font-size: 2rem;
    }
    
    .logo-img {
      width: 120px;
    }
  }
  
  @media (max-width: 992px) {
    .header-title h1 {
      font-size: 1.8rem;
    }
    
    .header-subtitle {
      display: none;
    }
    
    .profile-icon {
    font-size: 50px;
     
    }
    
    .profile-text {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .header-logo, .header-title, .profile-link {
    order: 1;
    flex: 0 0 auto;
  }

  .header-container > .header-social {
    order: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.1rem;
  }

  .header-title {
    padding: 0 0.5rem;
    text-align: center;
  }

  .header-title h1 {
    font-size: 1.8rem;
  }

  .logo-img {
    width: 90px;
  }

  .profile-container {
    gap: 0.3rem;
  }

  .profile-icon {
    font-size: 40px;
  }

  .profile-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .header-title h1 {
    font-size: 1.2rem;
  }

  .logo-img {
    width: 20vw;
  }

  .profile-icon {
    font-size: 8vh;
  }

  .header-social a {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
  .header-container {
    gap: 0rem;
  }
}

@media (max-width: 402px) {
  .header-title h1 {
    font-size: 1.3rem;
  }

  .logo-img {
    width: 70px;
  }

  .profile-icon {
    font-size: 40px;
  }
}



@media (max-width: 399px) {
  .header-title h1 {
    font-size: 6vw; /* Tamaño basado en el ancho */
    margin: 0.5rem 0; /* Espaciado relativo */
  }

  .logo-img {
    width: 15vw; /* Ya está en vw (correcto) */
    max-width: 100px; /* Opcional: límite máximo */
  }

  .profile-icon {
    font-size: 9vw; /* Icono escalable por ancho */
  }

  .profile-text {
    font-size: 3vw; /* Texto proporcional al ancho */
  }

  .header-social a {
    width: 10vw; /* Botones sociales escalables */
    height: 10vw;
    min-width: 24px; /* Límite mínimo para legibilidad */
    min-height: 24px;
    font-size: 5vw; /* Icono interno escalable */
  }


  .header-container {
    gap: 1vw; /* Espacio entre elementos ajustable */
  }
}



  </style>