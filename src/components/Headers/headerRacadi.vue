<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../img/logoRacadi.png" alt="RACADI ACADEMY Logo" class="logo">
      </div>
      
      <div class="header__title">
        <h1>RACADI ACADEMY</h1>
        <p class="tagline">English Learning Platform</p>
      </div>
      
      <nav class="header__nav">
        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
        
        <router-link to="/login" class="login-btn">
          <button class="btn-primary">
            <i class="fas fa-sign-in-alt"></i> Login
          </button>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style>
:root {
  --primary-color: #4a6fa5;
  --secondary-color: #7FA1C3;
  --accent-color: #52639b;
  --text-light: #ffffff;
  --text-dark: #263d53;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

/* Base Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  width: 100%;
  padding: 1rem 0;
  box-shadow: var(--shadow);
  position: relative;
  z-index: 1000;
}

.header__content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.header__logo {
  flex: 0 0 auto;
}

.logo {
  width: 150px;
  height: auto;
  transition: var(--transition);
}

.header__title {
  text-align: center;
  flex: 1 1 auto;
  padding: 0 1rem;
}

.header__title h1 {
  font-family: "Anek Devanagari", "Poppins", sans-serif;
  font-weight: 700;
  color: var(--text-light);
  font-size: 2.5rem;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(1, 60, 90, 0.5);
  letter-spacing: 1px;
}

.tagline {
  font-family: "Poppins", sans-serif;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-top: 0.3rem;
  opacity: 0.9;
  font-weight: 400;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--text-light);
  font-size: 1.3rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.1);
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-primary {
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: darken(var(--accent-color), 10%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-primary i {
  font-size: 0.9rem;
}

/* Media Queries */
@media (max-width: 1024px) {
  .header__content {
    padding: 0 1.5rem;
  }
  
  .header__title h1 {
    font-size: 2rem;
  }
  
  .logo {
    width: 120px;
  }
  
  .btn-primary {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header__content {
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
  }
  
  .header__logo {
    order: 1;
  }
  
  .header__title {
    order: 3;
    width: 100%;
    padding: 0.5rem 0;
  }
  
  .header__nav {
    order: 2;
    gap: 1rem;
  }
  
  .tagline {
    display: none;
  }
}

@media (max-width: 480px) {
  .header__title h1 {
    font-size: 1.7rem;
  }
  
  .logo {
    width: 100px;
  }
  
  .social-links {
    gap: 0.7rem;
  }
  
  .social-links a {
    font-size: 1.1rem;
    width: 30px;
    height: 30px;
  }
  
  .btn-primary {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  .header__nav {
    gap: 0.8rem;
  }
}

@media (max-width: 360px) {
  .header__title h1 {
    font-size: 1.5rem;
  }
  
  .header__content {
    padding: 0.8rem;
  }
  
  .social-links {
    display: none;
  }
}
</style>