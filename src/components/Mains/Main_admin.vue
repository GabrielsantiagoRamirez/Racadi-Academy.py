<template>
    <Header_sin_login/>
    
    <h1 class="h1_portal">Portal Administrativo</h1>
  
    <div class="cards-scroll-container">
      <div class="cards-wrapper">
        <RouterLink 
          v-for="card in cards" 
          :key="card.text" 
          :to="card.link" 
          class="feature-card"
        >
          <div class="icon-circle">
            <i :class="card.icon"></i>
          </div>
          <div class="card-label">{{ card.text }}</div>
        </RouterLink>
      </div>
    </div>
  
  
    <!-- Línea Divisoria -->
    <div class="divider-line"></div>
  
   <!-- Sección "Mejora tu inglés" -->
  <h2 class="section-title">Mejora tu inglés</h2>
  <div class="english-container">
  
  
  
    <div class="english-grid">
      <div class="english-card">
        <div class="card-image">
          <img src="https://iiischools.com/wp-content/uploads/2020/01/listening-post.jpg" alt="Listening">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Listening</h3>
          <p>Improve your listening skills with interactive exercises.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/listening/a1/" target="_blank" class="level-button beginner">Beginner</a>
            <a href="https://test-english.com/listening/a2/" target="_blank" class="level-button basic1">Basic 1</a>
            <a href="https://test-english.com/listening/b1/" target="_blank" class="level-button basic2">Basic 2</a>
            <a href="https://test-english.com/listening/b1-b2/" target="_blank" class="level-button intermediate">Intermediate</a>
            <a href="https://test-english.com/listening/b2/" target="_blank" class="level-button advanced">Advanced</a>
          </div>
        </div>
      </div>
  
      <div class="english-card">
        <div class="card-image">
          <img src="https://img.freepik.com/free-photo/notebook-with-grammar-word-school-suplies_23-2149436698.jpg" alt="Grammar">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Grammar</h3>
          <p>Master English grammar from basic to advanced levels.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/grammar-points/a1/" target="_blank" class="level-button beginner">Beginner</a>
            <a href="https://test-english.com/grammar-points/a2/" target="_blank" class="level-button basic1">Basic 1</a>
            <a href="https://test-english.com/grammar-points/b1/" target="_blank" class="level-button basic2">Basic 2</a>
            <a href="https://test-english.com/grammar-points/b1-b2/" target="_blank" class="level-button intermediate">Intermediate</a>
            <a href="https://test-english.com/grammar-points/b2/" target="_blank" class="level-button advanced">Advanced</a>
          </div>
        </div>
      </div>
  
      <div class="english-card">
        <div class="card-image">
          <img src="https://epe.brightspotcdn.com/dims4/default/de2095e/2147483647/strip/true/crop/7062x4792+34+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fb9%2Fd3%2F8a6831fc4711b36f463f6dc720b1%2Freading-struggles-102025-1819843065.jpg" alt="Reading">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Reading</h3>
          <p>Enhance your reading comprehension skills.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/reading/a1/" target="_blank" class="level-button beginner">Beginner</a>
            <a href="https://test-english.com/reading/a2/" target="_blank" class="level-button basic1">Basic 1</a>
            <a href="https://test-english.com/reading/b1/" target="_blank" class="level-button basic2">Basic 2</a>
            <a href="https://test-english.com/reading/b1-b2/" target="_blank" class="level-button intermediate">Intermediate</a>
            <a href="https://test-english.com/reading/b2/" target="_blank" class="level-button advanced">Advanced</a>
          </div>
        </div>
      </div>
  
  
      <div class="english-card">
        <div class="card-image">
          <img src="https://collegeprep.uworld.com/wp-content/uploads/2024/01/CP_Blog_Top-100-Vocabulary-Words-You-Need-for-DSAT-Reading-and-Writing.webp" alt="Vocabulary">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Vocabulary</h3>
          <p>Expand your English vocabulary with themed lessons.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/vocabulary/a1/" target="_blank" class="level-button beginner">Beginner</a>
            <a href="https://test-english.com/vocabulary/a2/" target="_blank" class="level-button basic1">Basic 1</a>
            <a href="https://test-english.com/vocabulary/b1/" target="_blank" class="level-button basic2">Basic 2</a>
            <a href="https://test-english.com/vocabulary/b1-b2/" target="_blank" class="level-button intermediate">Intermediate</a>
            <a href="https://test-english.com/vocabulary/b2/" target="_blank" class="level-button advanced">Advanced</a>
          </div>
        </div>
      </div>
  
      <div class="english-card">
        <div class="card-image">
          <img src="https://pp-blog.paperpal.com/wp-content/uploads/2024/06/2150171388-1.jpg" alt="Writing">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Writing</h3>
          <p>Learn to write effectively in different contexts.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/writing/a1/" target="_blank" class="level-button beginner">Beginner</a>
            <a href="https://test-english.com/writing/a2/" target="_blank" class="level-button basic1">Basic 1</a>
            <a href="https://test-english.com/writing/b1/" target="_blank" class="level-button basic2">Basic 2</a>
            <a href="https://test-english.com/writing/b1-b2/" target="_blank" class="level-button intermediate">Intermediate</a>
            <a href="https://test-english.com/writing/b2/" target="_blank" class="level-button advanced">Advanced</a>
          </div>
        </div>
      </div>
  
      <div class="english-card">
        <div class="card-image">
          <img src="https://www.studying-in-uk.org/wp-content/uploads/2018/07/exam-1068x709.jpg" alt="Practice Exams">
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <h3>Practice Exams</h3>
          <p>Practice with exam-style questions and tests.</p>
          <div class="level-buttons">
            <a href="https://test-english.com/exams/a2-key/" target="_blank" class="level-button beginner">Key (KET)</a>
            <a href="https://test-english.com/exams/b1-preliminary/" target="_blank" class="level-button basic1">Preliminary (PET)</a>
            <a href="https://test-english.com/exams/b2-first/" target="_blank" class="level-button basic2">First (FCE)</a>
            <a href="https://test-english.com/exams/ielts/" target="_blank" class="level-button intermediate">IELTS</a>
            <a href="https://test-english.com/exams/toefl-ibt/" target="_blank" class="level-button advanced">TOEFL IBT</a>
          </div>
        </div>
      </div>
    </div>
  
  
  
    </div>
  
  
  <!-- Sección "Comprueba tu nivel" -->
  <div class="level-test-section">
    <div class="level-test-container">
      <div class="level-test-content">
        <div class="level-test-info">
          <h3>¿No conoces tu nivel de inglés?</h3>
          <p>Realiza este test gratuito y descubre cual es tu nivel de dominio real del inglés.</p>
          <a href="https://test-english.com/level-test/" target="_blank" class="test-button">Realizar Test de Nivel</a>
        </div>
        <div class="level-test-image">
          <img src="../img/niveles.png" alt="Test de Nivel">
        </div>
      </div>
    </div>
  </div>
  
  
  <button 
    class="scroll-to-top" 
    @click="scrollToTop"
    :class="{ 'visible': showScrollButton }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
    </svg>
  </button>
    <Footer />
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Footer from '../Footer_Login/Footer.vue'
  import Header_sin_login from '../Headers/header_sin_login.vue'
  
  const cards = [
    { icon: 'fa fa-user-plus', text: 'Creacion de usuarios', link: '/crear_cuentas' },
    { icon: 'fa fa-cog', text: 'Administrar Cuentas', link: '/editar_eliminar_cuentas' },
    { icon: 'fa fa-credit-card', text: 'Registrar Pagos', link: '/agregar_pago' },
    { icon: 'fa fa-calendar-plus', text: 'Crear clases', link: '/anadir_clase' },
    { icon: 'fa fa-book', text: 'Agregar Calificaciones', link: '/add_notes' },
    { icon: 'fa fa-pencil-square', text: 'Agregar Observaciones', link: '/agregarobservacion' },
    { icon: 'fa fa-check-square', text: 'Contestar Solicitudes', link: '/solicitudes_admin' },
    { icon: 'fa fa-comments', text: 'Enviar Comunicados', link: '/crear_comunicados' },
    { icon: 'fa fa-newspaper', text: 'Comunicados', link: '/ver_comunicados' },
  ]
  
  // Scroll to top (mantenemos esta funcionalidad)
  const showScrollButton = ref(false)
  
  const checkScroll = () => {
    showScrollButton.value = window.scrollY > 300
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScroll)
  })
  </script>
  
  <style scoped>
  
  
  /* Base Styles */
  .h1_portal {
    text-align: center;
      font-size: 40px;
      color: #6bc8ec;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      margin-top: 3%;
      margin-bottom: 2%;
  }
  
  /* Botón de scroll to top */
  .scroll-to-top {
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    background-color: #3a86ff;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    z-index: 999;
  }
  
  .scroll-to-top.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .scroll-to-top:hover {
    background-color: #2667cc;
    transform: translateY(-3px) scale(1.05);
  }
  
  .scroll-to-top svg {
    width: 24px;
    height: 24px;
  }
  
  
  .cards-scroll-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 40px;
    position: relative;
    padding: 20px ;
    padding-left: 3vw;
  
  }
  
  .cards-scroll-container::before,
  .cards-scroll-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 1;
  }
  
  .cards-scroll-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(109, 195, 235, 0.623) 0%, rgba(255,255,255,0) 100%);
  }
  
  .cards-scroll-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(109, 195, 235, 0.623) 0%, rgba(255,255,255,0) 100%);
  }
  
  .cards-wrapper {
    display: flex;
    gap: 30px;
    padding: 10px 20px;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; /* Para scroll suave en iOS */
    scrollbar-width: none; /* Ocultar scrollbar en Firefox */
  }
  
  .cards-wrapper::-webkit-scrollbar {
    display: none; /* Ocultar scrollbar en Chrome/Safari */
  }
  
  .feature-card {
    flex: 0 0 auto;
    width: 170px;
    height: 170px;
    background-color: #5ecbfb;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(17, 30, 146, 0.329);
    transition: all 0.3s ease;
    scroll-snap-align: start;
    text-decoration: none;
  }
  
  .feature-card:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 4px 12px rgba(17, 30, 146, 0.329);
    background-color: #48b4e0;
  }
  
  .icon-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    color: white;
    font-size: 55px;
    transition: all 0.3s ease;
  }
  
  .feature-card:hover .icon-circle {
    transform: scale(1.1);
  }
  
  .card-label {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
  }
  
  /* Divider Line */
  .divider-line {
  height: 4px;
  background: linear-gradient(to right, transparent, #83B4FF, transparent);
  margin: 10px auto;
  width: 100%;
  }
  
  /* Estilos para "Mejora tu inglés" */
  .section-title {
    text-align: center;
    font-size: 40px;
    color: #6bc8ec;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  
  .english-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 3rem;
    padding: 0 20px;
  }
  
  .english-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 30px;
  }
  
  .english-card {
    flex: 1;
    min-width: 0;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(35, 151, 245, 0.322);
    transition: all 0.3s ease;
  }
  
  .english-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(35, 151, 245, 0.322);
  }
  
  .card-image {
    position: relative;
    height: 180px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .english-card:hover .card-image img {
    transform: scale(1.05);
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-content h3 {
    color: #1976d2;
    margin-bottom: 12px;
    font-size: 1.4rem;
  }
  
  .card-content p {
    color: #000000;
    margin-bottom: 20px;
    line-height: 1.5;
    font-size: 1.3rem;
  
  }
  
  .level-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .level-button {
    padding: 8px 12px;
    border-radius: 6px;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .level-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  /* Colores de botones */
  .beginner { background-color: #e3f2fd; color: #0d47a1; }
  .basic1 { background-color: #bbdefb; color: #1565c0; }
  .basic2 { background-color: #90caf9; color: #1976d2; }
  .intermediate { background-color: #64b5f6; color: white; }
  .advanced { background-color: #42a5f5; color: white; }
  .exam { background-color: #e1f5fe; color: #0277bd; }
  
  /* Estilos para "Comprueba tu nivel" */
  .level-test-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .level-test-content {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(35, 151, 245, 0.322)
  }
  
  .level-test-info {
    flex: 1;
    padding: 40px;
  }
  
  .level-test-info h3 {
    font-size: 2rem;
    color: #1976d2;
    margin-bottom: 15px;
  }
  
  .level-test-info p {
    color: #000000;
    font-size: 1.3rem;
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  .test-button {
    display: inline-block;
    background: #42a5f5;
    color: white;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  
  .test-button:hover {
    background: #1e88e5;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .level-test-image {
    flex: 1;
    min-height: 300px;
  }
  
  .level-test-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
  /* Estilos Responsivos */
  @media (max-width: 1200px) {
    .english-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .level-test-content {
      flex-direction: column;
    }
  
    .level-test-image {
      width: 100%;
      order: -1;
    }
  }
  
  @media (max-width: 992px) {
    .h1_portal {
      font-size: 36px;
      margin-top: 2%;
      margin-bottom: 1%;
    }
  
    .section-title {
      font-size: 36px;
      margin-top: 2%;
      margin-bottom: 2%;
    }
  
    .feature-card {
      width: 160px;
      height: 160px;
    }
  
    .icon-circle {
      width: 60px;
      height: 60px;
      font-size: 45px;
    }
  
    .card-label {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 768px) {
    .h1_portal, .section-title {
      font-size: 32px;
    }
  
    .cards-scroll-container {
      width: 95%;
      padding: 15px 0;
    }
  
    .cards-wrapper {
      gap: 15px;
      padding: 10px 15px;
    }
  
    .feature-card {
      width: 150px;
      height: 150px;
      padding: 15px;
    }
  
    .icon-circle {
      width: 55px;
      height: 55px;
      font-size: 40px;
      margin-bottom: 10px;
    }
  
    .card-label {
      font-size: 1.1rem;
    }
  
    .english-container {
      width: 90%;
    }
  
    .english-grid {
      gap: 20px;
    }
  
    .card-content h3 {
      font-size: 1.3rem;
    }
  
    .card-content p {
      font-size: 1.1rem;
    }
  
    .level-test-info {
      padding: 30px;
    }
  
    .level-test-info h3 {
      font-size: 1.8rem;
    }
  
    .level-test-info p {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 576px) {
    .h1_portal, .section-title {
      font-size: 30px;
      margin-top: 6vh;
      margin-bottom: 1.5%;
      font-weight: bold;
    }
    
    .section-title {
      margin-bottom: 7vh;
    }
    .cards-scroll-container::before,
    .cards-scroll-container::after {
      width: 30px;
    }
  
    .feature-card {
      width: 140px;
      height: 140px;
    }
  
    .icon-circle {
      width: 50px;
      height: 50px;
      font-size: 35px;
    }
  
    .card-label {
      font-size: 1rem;
    }
  
    .english-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  
    .card-image {
      height: 160px;
    }
  
    .level-test-info {
      padding: 20px;
    }
  
    .level-test-info h3 {
      font-size: 1.5rem;
    }
  
    .level-test-info p {
      font-size: 1rem;
    }
  
    .test-button {
      padding: 10px 20px;
      font-size: 1rem;
    }
  
    .scroll-to-top {
      width: 50px;
      height: 50px;
      bottom: 20px;
      right: 20px;
    }
  
    .scroll-to-top svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 480px) {
  
    .h1_portal, .section-title {
      font-size: 30px;
      margin-top: 6vh;
      margin-bottom: 1.5%;
      font-weight: bold;
    }
    
    .section-title {
      margin-bottom: 7vh;
  
  
    }
    .feature-card {
      width: 130px;
      height: 130px;
      padding: 12px;
    }
  
    .icon-circle {
      width: 45px;
      height: 45px;
      font-size: 30px;
      margin-bottom: 8px;
    }
  
    .card-label {
      font-size: 0.9rem;
    }
  
    .cards-wrapper {
      gap: 12px;
      padding: 10px;
    }
  
    .divider-line {
      height: 3px;
    }
  }
  
  
  
  @media (max-width: 400px ){
    .feature-card {
      width: 120px;
      height: 120px;
    }
  
    .english-container{
      padding: 0;
    }
  
    .card-label {
      font-size: 0.85rem;
    }
  
    .h1_portal, .section-title {
      font-size: 27px;
      margin-top: 6vh;
      margin-bottom: 1.5%;
      font-weight: bold;
    }
    
    .section-title {
      margin-bottom: 7vh;
    }
  
  }
  
  
  
  </style>