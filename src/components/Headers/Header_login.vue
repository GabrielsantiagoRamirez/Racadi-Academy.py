<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <header class="login-header">
      <div class="login-header__content">
        <div class="login-header__logo">
          <img src="../img/logoRacadi.png" alt="RACADI ACADEMY Logo" class="login-logo">
        </div>
        
        <div class="login-header__title">
          <h1>RACADI ACADEMY</h1>
          <p class="login-tagline">English Learning Platform</p>
        </div>
        
        <div class="login-social">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style>
  :root {
    --login-primary: #4a6fa5;
    --login-secondary: #7FA1C3;
    --login-accent: #52639b;
    --login-text-light: #ffffff;
    --login-text-dark: #263d53;
    --login-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --login-transition: all 0.3s ease;
  }
  
  /* Base Styles */
  .login-header {
    background: linear-gradient(135deg, var(--login-secondary) 0%, var(--login-primary) 100%);
    width: 100%;
    padding: 1.5rem 0;
    box-shadow: var(--login-shadow);
    position: relative;
    z-index: 100;
  }
  
  .login-header__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  
  .login-header__logo {
    flex: 0 0 auto;
  }
  
  .login-logo {
    width: 140px;
    height: auto;
    transition: var(--login-transition);
  }
  
  .login-header__title {
    text-align: center;
    flex: 1 1 auto;
    padding: 0 1rem;
  }
  
  .login-header__title h1 {
    font-family: "Anek Devanagari", "Poppins", sans-serif;
    font-weight: 700;
    color: var(--login-text-light);
    font-size: 2.2rem;
    margin: 0;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
    letter-spacing: 0.5px;
  }
  
  .login-tagline {
    font-family: "Poppins", sans-serif;
    color: var(--login-text-light);
    font-size: 0.85rem;
    margin-top: 0.3rem;
    opacity: 0.9;
    font-weight: 400;
  }
  
  .login-social {
    display: flex;
    gap: 1.2rem;
  }
  
  .login-social a {
    color: var(--login-text-light);
    font-size: 1.25rem;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--login-transition);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .login-social a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  /* Media Queries */
  @media (max-width: 1024px) {
    .login-header__content {
      padding: 0 1.5rem;
    }
    
    .login-header__title h1 {
      font-size: 1.8rem;
    }
    
    .login-logo {
      width: 110px;
    }
    
    .login-social {
      gap: 1rem;
    }
    
    .login-social a {
      font-size: 1.1rem;
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 768px) {
    .login-header {
      padding: 1rem 0;
    }
    
    .login-header__content {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    
    .login-header__logo {
      order: 1;
    }
    
    .login-header__title {
      order: 3;
      width: 100%;
      padding: 0.5rem 0;
    }
    
    .login-social {
      order: 2;
      gap: 0.8rem;
    }
    
    .login-tagline {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    .login-header__title h1 {
      font-size: 1.5rem;
    }
    
    .login-logo {
      width: 90px;
    }
    
    .login-social {
      gap: 0.6rem;
    }
    
    .login-social a {
      font-size: 1rem;
      width: 28px;
      height: 28px;
    }
  }
  
  @media (max-width: 360px) {
    .login-header__title h1 {
      font-size: 1.3rem;
    }
    
    .login-header__content {
      padding: 0 1rem;
    }
    
    .login-social {
      display: none;
    }
  }
  </style>