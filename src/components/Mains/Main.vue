<script setup>
import { ref, onMounted , onUnmounted } from 'vue';
import headerRacadi from '../Headers/headerRacadi.vue';
import Footer from '../Footer_Login/Footer.vue';

const plans = ref([
  {
    name: "Bronze",
    hours: "4 horas/semana",
    price: "$2.500.000",
    monthly: "$208.333/mes",
    duration: "12 meses",
    features: [
      "Clases grupales interactivas",
      "Material digital completo",
      "Acceso a plataforma 24/7",
      "Certificación opcional ($150.000 adicional)"
    ],
    idealFor: "Principiantes (A1-A2)",
    color: "bronze",
    icon: "https://antshum.com/wp-content/uploads/2020/11/01-bronze-plan.png",
    shadow: "0 10px 20px rgba(205, 127, 50, 0.3)"
  },
  {
    name: "Silver",
    hours: "6 horas/semana",
    price: "$3.200.000",
    monthly: "$266.666/mes",
    duration: "12 meses",
    features: [
      "Grupos reducidos (máx 8 estudiantes)",
      "Sesiones de feedback personalizado",
      "Certificación incluida",
      "Talleres mensuales"
    ],
    idealFor: "Intermedios (B1-B2)",
    color: "silver",
    icon: "https://www.tpsnewengland.com/wp-content/uploads/2017/05/Silver-Icon.png",
    shadow: "0 10px 20px rgba(192, 192, 192, 0.4)"
  },
  {
    name: "Gold",
    hours: "8 horas/semana",
    price: "$4.100.000",
    monthly: "$341.666/mes",
    duration: "12 meses",
    features: [
      "Clases personalizadas 1:1",
      "Talleres exclusivos con nativos",
      "Certificación MET + Nacional",
      "Preparación para exámenes internacionales"
    ],
    idealFor: "Avanzados (C1-C2)",
    color: "gold",
    icon: "https://img77.uenicdn.com/image/upload/v1577441036/business/wight-shine/a5ee82be-74b2-44f4-8d01-349253ba660c.png",
    shadow: "0 10px 20px rgba(255, 215, 0, 0.4)"
  }
]);

const paymentMethods = ref([
  "https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo-2014.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png",
  "https://images.seeklogo.com/logo-png/40/2/nequi-logo-png_seeklogo-404357.png",
  "https://cdn.worldvectorlogo.com/logos/daviplata.svg",
  "https://www.credisoat.com.co/sistecredito.png",
  "https://ml.globenewswire.com/Resource/Download/e5821d92-28d1-41e3-a149-24377c2ad046"
]);

const locations = ref([
  {
    name: "Bogotá",
    address: "Calle 18 # 6-30 piso 2 y 3",
    image: "https://www.ciencuadras.com/blog/wp-content/uploads/2022/06/Destacado_Que-tanto-sabes-de-tu-barrio.jpg",
    maps: "https://www.google.com/maps/place/Cl.+18+%236-30,+Soacha,+Cundinamarca/@4.5825114,-74.2174038,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9fd7004ee1f5:0x8483538d596e7280!8m2!3d4.5825061!4d-74.2148289!16s%2Fg%2F11j6yn35qk?entry=tts&g_ep=EgoyMDI1MDMzMC.0wIPu8ASoASAFQAw%3D%3D&skid=e1840096-b770-4b15-b299-dedf1541a7fb"
  },
  {
    name: "Madrid",
    address: "Carrera 6 # 8-39 Piso 2",
    image: "https://www.ciencuadras.com/blog/wp-content/uploads/2024/01/1200x630_MADRID_2.jpg",
    maps: "https://www.google.com/maps/place/Cra.+6+%238-39,+Madrid,+Cundinamarca/@4.7338249,-74.2620162,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f784b0743dddf:0x3309ae3552b070ec!8m2!3d4.7338249!4d-74.2620162!16s%2Fg%2F11fpbkpyv8?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Mosquera",
    address: "Carrera 3 # 17-26 piso 2",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/MRFWGL24ZNC73KLRF64S7K7TPY.jpg",
    maps: "https://www.google.com/maps/place/Cra.+3+%2317-26,+Mosquera,+Cundinamarca/@4.7121766,-74.223608,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f7801ac86bf39:0x69e7cf918df46676!8m2!3d4.7121713!4d-74.2210331!16s%2Fg%2F11s7ds1q26?entry=tts&g_ep=EgoyMDI1MDMzMC4wIPu8ASoASAFQAw%3D%3D&skid=54320a03-3fbf-4988-b778-c327194e9299"
  },
  {
    name: "Facatativá",
    address: "Calle 7 # 2-33 Piso 2 y 3",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Catedraldefaca.jpg",
    maps: "https://www.google.com/maps/place/Cl.+7+%23+12-3,+Ch%C3%ADa,+Cundinamarca/@4.8590949,-74.0641978,19z/data=!4m6!3m5!1s0x8e3f878fa56eb27d:0x58d8fb8aa78a36d6!8m2!3d4.8583052!4d-74.0631276!16s%2Fg%2F11h_cr8_g1?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Funza",
    address: "Calle 12 # 12-71 piso 2",
    image: "https://viajandox.com.co/uploads/Funza_1.jpg",
    maps: "https://www.google.com/maps/place/Cl.+7+%23+12-3,+Ch%C3%ADa,+Cundinamarca/@4.8583105,-74.0657025,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f878fa56eb27d:0x58d8fb8aa78a36d6!8m2!3d4.8583052!4d-74.0631276!16s%2Fg%2F11h_cr8_g1?entry=tts&g_ep=EgoyMDI1MDMyNC4wIPu8ASoASAFQAw%3D%3D&skid=53b25381-0b26-401f-9f18-c19f4a4d5798"
  }
]);

const certifications = ref([
  { level: "Beginner (A1)", national: true, international: false, duration: "3 meses" },
  { level: "Basic 1 (A2)", national: true, international: false, duration: "3 meses" },
  { level: "Basic 2 (B1)", national: true, international: true, duration: "6 meses" },
  { level: "Intermediate (B2)", national: true, international: true, duration: "6 meses" },
  { level: "Advanced (C1)", national: true, international: true, duration: "12 meses" }
]);

let currentSlide = ref(0);

onMounted(() => {
  // Animación del carrusel de pagos
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % paymentMethods.value.length;
  }, 3000);
  
  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  document.querySelectorAll('.scroll-animation').forEach(el => {
    observer.observe(el);
  });
});


const showScrollButton = ref(false);

const checkScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  // Animación del carrusel de pagos
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % paymentMethods.value.length;
  }, 3000);
  
  // Event listener para el botón de scroll
  window.addEventListener('scroll', checkScroll);
  
  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  document.querySelectorAll('.scroll-animation').forEach(el => {
    observer.observe(el);
  });
});

// Limpiar el event listener cuando el componente se desmonte
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <div class="div-header">
    <headerRacadi/>
  </div>


  <!-- Hero Section con animación de entrada -->
  <div class="inicioMain scroll-animation">
    <h1 class="h1InicioMain">RACADI ACADEMY</h1>
    <p class="pInicioMain">Transforma tu futuro con el poder del inglés. Más de 5,000 estudiantes confían en nosotros.</p>
    <router-link to="/login"><button class="hero-button pulse" >¡Inscríbete ahora!</button></router-link>
  </div>

  <!-- Quiénes Somos -->
  <section class="about-section scroll-animation">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="about-cards">
        <div class="about-card">
          <div class="card-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" alt="Misión">
          </div>
          <h3>Misión</h3>
          <p>En RACADI ACADEMY democratizamos el aprendizaje del inglés mediante metodologías innovadoras y tecnología de punta, rompiendo barreras económicas y geográficas para ofrecer educación de calidad accesible a todos los colombianos.</p>
        </div>
        
        <div class="about-card">
          <div class="card-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281306.png" alt="Visión">
          </div>
          <h3>Visión</h3>
          <p>Para 2025 seremos la academia líder en educación digital de inglés en Colombia, con presencia en 10 departamentos y reconocimiento internacional por nuestra metodología blended learning que combina lo mejor de la enseñanza presencial y virtual.</p>
        </div>
        
        <div class="about-card">
          <div class="card-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281334.png" alt="Valores">
          </div>
          <h3>Valores</h3>
          <ul>
            <li><strong>Excelencia:</strong> Buscamos la perfección en cada detalle de nuestra enseñanza.</li>
            <li><strong>Innovación:</strong> Constantemente actualizamos nuestros métodos pedagógicos.</li>
            <li><strong>Integridad:</strong> Transparencia en todos nuestros procesos académicos y administrativos.</li>
            <li><strong>Pasión:</strong> Amamos enseñar y ver crecer a nuestros estudiantes.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Funciones que cumplimos - Mejorado con hover effects -->
  <section class="functions-section scroll-animation">
    <div class="content-wrapper">
      <h2 class="section-title">Funciones que cumplimos</h2>
      <p class="section-subtitle">Una plataforma diseñada para tu éxito académico</p>
      
      <div class="card-container">
        <div class="card hover-3d">
          <div class="card-image-container">
            <img src="../img/reloj.png" alt="Gestión Académica" class="card-image" />
          </div>
          <h3 class="card-title">Gestión Académica Integral</h3>
          <p class="card-text">Sistema centralizado que automatiza el seguimiento académico, desde reservas de clases hasta evaluaciones finales, con actualización en tiempo real del observador estudiantil.</p>
          <ul class="card-features">
            <li>Reportes de progreso detallados</li>
            <li>Observador automático </li>
            <li>Horarios dinámicos según reservas estudiantiles</li>
          </ul>
        </div>

        <div class="card hover-3d">
          <div class="card-image-container">
            <img src="../img/dinero (1).png" alt="Gestión Administrativa" class="card-image" />
          </div>
          <h3 class="card-title">Gestión Administrativa</h3>
          <p class="card-text">Módulo financiero integrado con el sistema académico que automatiza el control de pagos y estados de cuenta en tiempo real.</p>
          <ul class="card-features">
            <li>Visualización de saldos</li>
            <li>Historial completo de transacciones</li>
            <li>Bloqueo automático por morosidad</li>
          </ul>
        </div>

        <div class="card hover-3d">
          <div class="card-image-container">
            <img src="../img/conversacion (1).png" alt="Comunidad en línea" class="card-image" />
          </div>
          <h3 class="card-title">Comunidad en Línea</h3>
          <p class="card-text">Espacios virtuales para interacción entre estudiantes, clubes de conversación, foros temáticos y eventos culturales en inglés.</p>
          <ul class="card-features">
            <li>Clubes de conversación 24/7</li>
            <li>Foros por niveles</li>
            <li>Eventos culturales mensuales</li>
          </ul>
        </div>

        <div class="card hover-3d">
          <div class="card-image-container">
            <img src="../img/bienestar.png" alt="Bienestar institucional" class="card-image" />
          </div>
          <h3 class="card-title">Bienestar Institucional</h3>
          <p class="card-text">Programas de acompañamiento psicológico, asesoría vocacional y actividades extracurriculares para desarrollo integral.</p>
          <ul class="card-features">
            <li>Acompañamiento psicológico</li>
            <li>Talleres de habilidades blandas</li>
            <li>Actividades culturales y deportivas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Nuestra Plataforma con animación de escalado -->
  <section class="platform-section scroll-animation">
    <div class="content-wrapper">
      <h2 class="section-title">Nuestra Plataforma</h2>
      <p class="section-subtitle">La mejor experiencia de aprendizaje digital</p>
      
      <div class="features-grid">
        <div class="feature-card scale-on-hover">
          <div class="feature-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/2858/2858416.png" alt="Gestión Inteligente" />
          </div>
          <h3>Gestión Inteligente</h3>
          <p>Programa, cancela o reagenda clases en 2 clics con nuestro sistema de gestión intuitivo que se adapta a tu disponibilidad.</p>
          <ul>
            <li>Reserva con tu nivel y sede</li>
            <li>Calendario integrado</li>
          </ul>
        </div>
        
        <div class="feature-card highlight pop-on-hover">
          <div class="feature-icon">
            <img src="https://certificates.cambridgeinstitute.net/wp-content/uploads/2024/11/certificado-online-en.png" alt="Certificación" />
          </div>
          <h3>Certificación MET</h3>
          <p>Doble validación (nacional + internacional) con certificados digitales verificables y opción a copia física.</p>
          <ul>
            <li>Válido para hoja de vida</li>
            <li>Reconocimiento internacional</li>
            <li>Verificación en línea</li>
          </ul>
        </div>
        
        <div class="feature-card scale-on-hover">
          <div class="feature-icon">
            <img src="https://thatscool.es/wp-content/uploads/2024/09/coexistence_9837176.png" alt="Comunidad" />
          </div>
          <h3>Comunidad Nacional</h3>
          <p>Conecta con estudiantes de todo el país en nuestros clubes de conversación y eventos interculturales exclusivos.</p>
          <ul>
            <li>Intercambios culturales</li>
            <li>Networking profesional</li>
            <li>Eventos con invitados especiales</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Planes con animación de flip -->
  <section class="plans-section scroll-animation">
    <div class="content-wrapper">
      <div class="plan-ct">
        <h2 class="plan-t">Elige tu Plan Ideal</h2>
        <p class="plan-t">Inversión con retorno garantizado</p>
      </div>

      
      <div class="plans-container">
        <div v-for="plan in plans" :key="plan.name" class="plan-card flip-on-hover" :class="plan.color" :style="{ boxShadow: plan.shadow }">
          <div class="plan-badge">Más Popular</div>
          <div class="plan-header">
            <div class="plan-icon-container">
              <img class="plan-icon" :src="plan.icon" :alt="plan.name">
            </div>
            <h3>{{ plan.name }}</h3>
          </div>
          
          <div class="plan-pricing">
            <div class="plan-price">{{ plan.price }}</div>
            <div class="plan-duration">Costo total {{ plan.duration }}</div>
            <div class="plan-monthly">{{ plan.monthly }}</div>
          </div>
          
          <div class="plan-hours">{{ plan.hours }}</div>
          
          <ul class="plan-features">
            <li v-for="(feature, index) in plan.features" :key="index">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          
          <div class="plan-ideal">✔ Ideal para: {{ plan.idealFor }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Certificaciones con animación de fade -->
  <section class="certifications-section scroll-animation">
    <div class="content-wrapper">
      <h2 class="section-title">Certificaciones Reconocidas</h2>
      <p class="section-subtitle">Avalan tu dominio del inglés a nivel nacional e internacional</p>
      
      <div class="certification-content">
        <div class="certification-levels">
          <div v-for="cert in certifications" :key="cert.level" class="certification-card fade-in">
            <h3>{{ cert.level }}</h3>
            <div class="cert-badges">
              <div v-if="cert.national" class="cert-badge national">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_Ministerio_de_Educaci%C3%B3n_de_Colombia_2022-2026.png" alt="Certificación Nacional">
                <span>Nacional</span>
              </div>
              <div v-if="cert.international" class="cert-badge international">
                <img src="https://bitts.ca/wp-content/uploads/2023/08/MICHIGAN.png" alt="Certificación Internacional">
                <span>Internacional</span>
              </div>
            </div>
            <div class="cert-duration">{{ cert.duration }}</div>
          </div>
        </div>
        
        <div class="certification-logos">
          <div class="logo-container slide-in-left">
            <img src="https://bitts.ca/wp-content/uploads/2023/08/MICHIGAN.png" alt="MET" />
            <p>Certificación Michigan English Test reconocida en más de 50 países</p>
          </div>
          <div class="logo-container slide-in-right">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_Ministerio_de_Educaci%C3%B3n_de_Colombia_2022-2026.png" alt="Ministerio Educación" />
            <p>Avalado por el Ministerio de Educación Nacional de Colombia</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sedes con animación de deslizamiento -->
  <section class="locations-section scroll-animation">
    <div class="content-wrapper">
      <h2 class="section-title">Nuestras Sedes</h2>      
      <div class="locations-carousel">
        <div v-for="(location, index) in locations" :key="index" class="location-card slide-up">
          <div class="location-image-container">
            <img :src="location.image" :alt="location.name" />
          </div>
          <div class="location-info">
            <h3>{{ location.name }}</h3>
            <p class="location-address">{{ location.address }}</p>
            <a :href="location.maps" class="maps-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.157 2.176a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.453 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd" />
              </svg>
              Ver en Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Métodos de pago con animación automática -->
  <section class="payment-section scroll-animation">
    <div class="content-wrapper">
      <h2 class="section-title">Aceptamos todos los pagos</h2>
      <p class="section-subtitle">Facilidades de pago para tu comodidad</p>
      
      <div class="payment-carousel">
        <div class="slide-track" :style="{ transform: `translateX(-${currentSlide * 100}px)` }">
          <div v-for="(method, index) in paymentMethods" :key="index" class="payment-method">
            <img :src="method" :alt="`Método de pago ${index+1}`" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección final mejorada -->
  <div class="contNiveles_unete scroll-animation">
    <div class="unete-overlay"></div>
    <div class="unete-content">
      <img src="../img/logoRacadi.png" class="logo_unete" />
      <div class="texto_unete">
        <h2>¿Listo para comenzar?</h2>
        <strong>Logra tu meta de aprender hablar inglés con nosotros.</strong>
      </div>
    </div>
  </div>

  <Footer />
  <button 
  class="scroll-to-top" 
  @click="scrollToTop"
  :class="{ 'visible': showScrollButton }"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
  </svg>
</button>
</template>

<style scoped>
:root {
  --primary: #83B4FF;
  --primary-dark: #7FA1C3;
  --primary-light: #e6f0ff;
  --secondary: #FFC107;
  --secondary-dark: #e6ac00;
  --dark: #333;
  --light: #f8f9fa;
  --gray: #6c757d;
  --light-gray: #e9ecef;
  --bronze: #cd7f32;
  --bronze-light: #f8e9dc;
  --silver: #c0c0c0;
  --silver-light: #f5f5f5;
  --gold: #ffd700;
  --gold-light: #fff9e6;
  --white: #fff;
  --black: #000;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(50px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes flip {
  0% { transform: perspective(400px) rotateY(0); }
  50% { transform: perspective(400px) rotateY(10deg); }
  100% { transform: perspective(400px) rotateY(0); }
}

@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}



/* Clases de animación */
.scroll-animation {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animation.animate {
  opacity: 1;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

.slide-up {
  animation: slideUp 0.8s ease-out;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.pulse {
  animation: pulse 2s infinite;
}

.flip-on-hover:hover {
  animation: flip 0.6s ease;
}

.pop-on-hover:hover {
  animation: pop 0.3s ease;
}

.scale-on-hover:hover {
  transform: scale(1.03);
  transition: transform 0.3s ease;
}

.hover-3d:hover {
  transform: translateY(-5px) perspective(1000px) rotateX(5deg);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.pulse-on-hover:hover {
  animation: pulse 0.5s;
}

/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: var(--light);
}



.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-dark);
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  font-weight: bold;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--secondary);
  margin: 0.5rem auto 1.5rem;
}

.section-subtitle {
  font-size: 1.5rem;
  color: var(--primary-dark);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;

}

/* Hero Section */
.inicioMain {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/imagenMain.jpg') no-repeat center center/cover;
  position: relative;
  padding: 0 20px;
  transform: translateY(20px);
  opacity: 0;
}
.inicioMain p {
  color: white;
}

.inicioMain.animate {
  transform: translateY(0);
  opacity: 1;
}

.h1InicioMain {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  color: white;
}

.pInicioMain {
  width: 100%;
  max-width: 600px;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--white);
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-button {
  background-color:#7FA1C3;
  color: rgb(235, 234, 234);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hero-button:hover {
  background-color: #83B4FF;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.hero-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
  z-index: -1;
}

.hero-button:hover::before {
  left: 100%;
}

/* About Section */
.about-section {
  padding: 6rem 0;
  position: relative;
  background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  transform: translateY(20px);
  opacity: 0.7;
}

.about-section.animate {
  transform: translateY(0);
  opacity: 0.7;
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.about-card {
  background-color: white;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(140, 156, 202, 0.822);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: solid 2px var(--primary);
  transform: translateY(20px);
  opacity: 0;
}

.about-section.animate .about-card {
  transform: translateY(0);
  opacity: 1;
}

.about-section.animate .about-card:nth-child(1) {
  transition-delay: 0.1s;
}
.about-section.animate .about-card:nth-child(2) {
  transition-delay: 0.2s;
}
.about-section.animate .about-card:nth-child(3) {
  transition-delay: 0.3s;
}

.about-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--primary);
}

.card-icon {
  width: 110px;
  height: 110px;
  margin: 0 auto 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  border-radius: 50%;
  padding: 15px;
  transition: all 0.3s ease;
}

.about-card:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
}

.card-icon img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.about-card h3 {
  color: #4f90f3;
  margin-bottom: 1.5rem;
  font-size: 1.9rem;
  position: relative;
  display: inline-block;
  font-weight: bold;
}

.about-card h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

.about-card:hover h3::after {
  width: 80px;
}

.about-card p, .about-card ul {
  text-align: left;
  color: var(--gray);
  font-size: 1.1rem;
  line-height: 1.7;
}

.about-card ul {
  list-style-type: none;
}

.about-card ul li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.about-card ul li::before {
  content: '•';
  color: var(--primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Functions Section */
.functions-section {
  padding: 6rem 0;
  background: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  position: relative;
  transform: translateY(20px);
  opacity: 0.7;
}

.functions-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.functions-section.animate {
  transform: translateY(0);
  opacity: 1;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
}

.card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(137, 159, 229, 0.795);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-gray);
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
}

.functions-section.animate .card {
  transform: translateY(0);
  opacity: 1;
}

.functions-section.animate .card:nth-child(1) {
  transition-delay: 0.1s;
}
.functions-section.animate .card:nth-child(2) {
  transition-delay: 0.2s;
}
.functions-section.animate .card:nth-child(3) {
  transition-delay: 0.3s;
}
.functions-section.animate .card:nth-child(4) {
  transition-delay: 0.4s;
}

.card-image-container {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.card-image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(131, 180, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.card:hover .card-image-container::before {
  transform: translateX(100%);
}

.card-image {
  width: auto;
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.3rem;
  color: #83B4FF;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

.card:hover .card-title::after {
  width: 80px;
}

.card-text {
  color: var(--gray);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-features {
  list-style-type: none;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}



/* Platform Section */

.platform-section {
  padding: 6rem 0;
  position: relative;
  transform: translateY(20px);
  background-color: rgba(245, 222, 179, 0.336);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.platform-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(245, 222, 179, 0.336);
}

.platform-section.animate {
  transform: translateY(0);
  opacity: 1;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
}

.feature-card {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(127, 209, 230, 0.548);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--primary-light);
  transform: translateY(20px);
  opacity: 0;
}

.platform-section.animate .feature-card {
  transform: translateY(0);
  opacity: 1;
}

.platform-section.animate .feature-card:nth-child(1) {
  transition-delay: 0.1s;
}
.platform-section.animate .feature-card:nth-child(2) {
  transition-delay: 0.2s;
}
.platform-section.animate .feature-card:nth-child(3) {
  transition-delay: 0.3s;
}

.feature-card.highlight {
  border: 2px solid var(--secondary);
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(127, 161, 235, 0.692);
}

.feature-card.highlight::after {
  position: absolute;
  top: 10px;
  right: -30px;
  background: var(--secondary);
  color: var(--dark);
  padding: 0.25rem 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(45deg);
  width: 120px;
  text-align: center;
}

.feature-icon {
  width: 110px;
  height: 110px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  border-radius: 50%;
  padding: 15px;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background-color: var(--primary);
}

.feature-icon img {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon img {
  transform: scale(1.1);
  /* Efecto más sutil que no hace desaparecer el icono */
  filter: brightness(1.1) contrast(1.1);
}

.feature-card h3 {
  color: var(--primary-dark);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  position: relative;
}

.feature-card h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

.feature-card:hover h3::after {
  width: 80px;
}

.feature-card p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.feature-card ul {
  list-style-type: none;
  text-align: left;
  margin-top: 1rem;
}

.feature-card ul li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
  color: var(--gray);
}

.feature-card ul li::before {
  content: '•';
  color: var(--primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}
/* Plans Section */


.plan-ct{
  background-color:#ffffff;
  text-align: center;
  width: auto;
  font-size: 30px;
  font-weight: bold;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius:10px;
  

}
.plan-t{
  color:black;
  text-align: center;
  width: auto;
  font-size: 30px;
  font-weight: bold;

}
.plans-section {
  padding: 6rem 0;
  background: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  background-attachment: fixed;
  transform: translateY(20px);
  opacity: 0.3;
}

.plans-section.animate {
  transform: translateY(0);
}

.plans-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
}

.plan-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(20px);
  opacity: 0;
  border: 1px solid var(--light-gray);
}

.plans-section.animate .plan-card {
  transform: translateY(0);
  opacity: 1;
}

.plans-section.animate .plan-card:nth-child(1) {
  transition-delay: 0.1s;
}
.plans-section.animate .plan-card:nth-child(2) {
  transition-delay: 0.2s;
}
.plans-section.animate .plan-card:nth-child(3) {
  transition-delay: 0.3s;
}

.plan-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

.plan-card.bronze::before {
  background: var(--bronze);
}
.plan-card.silver::before {
  background: var(--silver);
}
.plan-card.gold::before {
  background: var(--gold);
}

.plan-badge {
  position: absolute;
  top: 15px;
  right: -30px;
  background-color: var(--secondary);
  color: var(--dark);
  padding: 0.25rem 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(45deg);
  width: 120px;
  text-align: center;
}

.plan-header {
  margin-bottom: 1rem;
  width: 100%;
}

.plan-icon-container {
  width: 70px;
  height: 70px;
  margin: 0 auto 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  transition: all 0.3s ease;
}

.plan-card:hover .plan-icon-container {
  transform: scale(1.1);
}

.plan-card.bronze .plan-icon-container {
  background-color: var(--bronze-light);
}
.plan-card.silver .plan-icon-container {
  background-color: var(--silver-light);
}
.plan-card.gold .plan-icon-container {
  background-color: var(--gold-light);
}

.plan-icon {
  width: 85px;
  height: auto;
  object-fit: contain;
}

.plan-card h3 {
  font-size: 1.7rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
  position: relative;
}

.plan-card h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.plan-card:hover h3::after {
  width: 60px;
}

.plan-pricing {
  margin-bottom: 1rem;
  width: 100%;
}

.plan-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.25rem;
}

.plan-duration {
  font-size: 1.1rem;
  color: var(--gray);
  margin-bottom: 0.25rem;
}

.plan-monthly {
  font-size: 1.1rem;
  color: var(--primary-dark);
  font-weight: 600;
}

.plan-hours {
  font-size: 1.1rem;
  color: var(--primary-dark);
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-light);
  border-radius: 50px;
  width: fit-content;
}

.plan-features {
  list-style: none;
  margin-bottom: 1.5rem;
  text-align: left;
  width: 100%;
  flex-grow: 1;
}

.plan-features li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.8rem;
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.5;
}

.plan-features li svg {
  position: absolute;
  left: 0;
  top: 0.25rem;
  width: 1.2rem;
  height: 1.2rem;
  color: var(--primary);
}

.plan-ideal {
  font-size: 0.85rem;
  color: var(--gray);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.plan-card.bronze .plan-button {
  background: var(--bronze);
}
.plan-card.silver .plan-button {
  background: var(--silver);
  color: var(--dark);
}
.plan-card.gold .plan-button {
  background: var(--gold);
  color: var(--dark);
}


/* Certifications Section */
.certifications-section {
  padding: 6rem 0;
  position: relative;
  transform: translateY(20px);
}

.certifications-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.certifications-section.animate {
  transform: translateY(0);

}

.certification-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
}

.certification-levels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.certification-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(121, 187, 248, 0.589);
  border: 1px solid var(--primary-light);
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.certification-card h3 {
  color: var(--primary-dark);
  margin-bottom: 1rem;
  font-size: 1.4rem;
  position: relative;
}

.certification-card h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

.certification-card:hover h3::after {
  width: 60px;
}

.cert-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cert-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.cert-badge.national span {
  color: var(--primary-dark);
}
.cert-badge.international span {
  color: var(--gold);
}

.cert-badge img {
  width: 90px;
  height: auto;
  transition: transform 0.3s ease;
}

.cert-badge:hover img {
  transform: scale(1.1);
}

.cert-duration {
  font-size: 1.1rem;
  color: var(--gray);
  font-weight: 500;
}

.certification-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  text-align: center;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(122, 168, 206, 0.63);
  transition: all 0.3s ease;
}

.logo-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.logo-container img {
  height: 60px;
  width: auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

.logo-container p {
  font-size: 0.9rem;
  color: var(--gray);
}

/* Locations Section */
/* Locations Section */
.locations-section {
  padding: 6rem 0;
  position: relative;
  background: url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  background-attachment: fixed;
  transform: translateY(20px);
  opacity: 0;
}

.locations-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.356); /* Fondo blanco semitransparente */
}

.locations-section.animate {
  transform: translateY(0);
  opacity: 1;
}

.locations-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 1rem; /* Más padding para mejor espaciado */
  scroll-snap-type: x mandatory;
  margin-top: 1rem;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--light-gray);
  position: relative;
  z-index: 1; /* Asegura que esté sobre el fondo */
}

.locations-carousel::-webkit-scrollbar {
  height: 8px;
}

.locations-carousel::-webkit-scrollbar-track {
  background: var(--light-gray);
  border-radius: 10px;
}

.locations-carousel::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 10px;
}

.location-card {
  min-width: 280px;
  scroll-snap-align: start;
  background: white; /* Fondo blanco sólido */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
  transition: all 0.4s ease;
  transform: translateY(20px);
  opacity: 0;
  border: 1px solid rgba(0, 0, 0, 0.1); /* Borde sutil */
}

.locations-section.animate .location-card {
  transform: translateY(0);
  opacity: 1;
}

.locations-section.animate .location-card:nth-child(1) {
  transition-delay: 0.1s;
}
.locations-section.animate .location-card:nth-child(2) {
  transition-delay: 0.2s;
}
.locations-section.animate .location-card:nth-child(3) {
  transition-delay: 0.3s;
}
.locations-section.animate .location-card:nth-child(4) {
  transition-delay: 0.4s;
}
.locations-section.animate .location-card:nth-child(5) {
  transition-delay: 0.5s;
}

.location-card:hover {
  transform: translateY(-10px) scale(1.03); /* Efecto hover más pronunciado */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.location-image-container {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
}

.location-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.location-card:hover .location-image-container img {
  transform: scale(1.1);
}

.location-info {
  padding: 1.5rem;
  background: white; /* Fondo blanco adicional para consistencia */
}

.location-info h3 {
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 0.5rem;
  position: relative;
  font-weight: 600; /* Texto más grueso */
}

.location-info h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

.location-card:hover .location-info h3::after {
  width: 80px;
}

.location-address {
  font-size: 0.9rem;
  color: var(--gray);
  margin-bottom: 1rem;
  line-height: 1.6; /* Mejor espaciado de línea */
}

.maps-link {
  display: inline-flex; /* Mejor alineación */
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: #266baf;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  font-weight: 500; /* Peso medio para mejor legibilidad */
}

.maps-link:hover {
  color: #83B4FF;
  text-decoration: underline; /* Subrayado al hover */
}

.maps-link svg {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.maps-link:hover svg {
  transform: translateX(5px);
}

.location-button {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 0.8rem 1.5rem; /* Más padding vertical */
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: auto; /* Para alinear botones si hay alturas diferentes */
  display: block; /* Asegura el ancho completo */
}

.location-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.5s;
  z-index: -1;
}

.location-button:hover::before {
  left: 100%;
}

.location-button:hover {
  background: var(--primary-dark);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Sombra al hover */
}

/* Payment Section */
.payment-section {
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  margin-top: 7vh;
}

.payment-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.payment-section.animate {
  transform: translateY(0);
  opacity: 1;
}

.payment-carousel {
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}

.slide-track {
  display: flex;
  gap: 3rem;
  transition: transform 0.5s ease;
}

.payment-method {
  flex: 0 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.payment-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.payment-method img {
  width: 210px;
  height: 130px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.payment-method:hover img {
  transform: scale(1.05);
}

/* Footer Banner mejorado */
.contNiveles_unete {
  height: 300px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://media.istockphoto.com/id/1358219886/es/foto/educaci%C3%B3n-y-estudios-del-reino-unido-colegio-rollo-de-diploma-universitario-en-escritorio-de.jpg?s=612x612&w=0&k=20&c=n3hrP04DIHNuyBGV4Zu5Cc_m_TFFg7jJ3AUxsNoQuTg=') no-repeat center center/cover;
  background-attachment: fixed; /* Efecto parallax */
  margin-top: 6rem;
  transform: translateY(20px);
  opacity: 0;
  overflow: hidden;
}

.contNiveles_unete.animate {
  transform: translateY(0);
  opacity: 1;
}

.unete-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Overlay oscuro para mejor contraste */
  z-index: 0;
}

.unete-content {
  position: relative;
  z-index: 1; /* Asegura que el contenido esté sobre el overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
}

.logo_unete {
  width: 170px;
  height: auto;
  margin-right: 3rem;
  animation: pulse 2s infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)); /* Sombra para destacar logo */
}

.texto_unete {
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra de texto mejorada */
}

.texto_unete h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.texto_unete strong {
  font-size: 2rem;
  font-weight: 400;
  display: block;
}

/* Animación de pulso para el logo */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}



/* Botón de scroll to top */
.scroll-to-top {
  width: 70px;
  height: 70px;
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

/* Tablets (481px - 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  /* Ajustes generales */
  .content-wrapper {
    padding: 0 20px;
  }
  .scroll-to-top {
  width: 60px;
  height: 60px;
  }
  
  .section-title {
    font-size: 2.2rem;
    padding: 0 15px;
    word-break: break-word;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
    padding: 0 20px;
  }

  /* Hero Section */
  .inicioMain {
    height: 60vh;
  }
  
  .h1InicioMain {
    font-size: 2.5rem;
    padding: 0 15px;
  }
  
  .pInicioMain {
    font-size: 1.2rem;
    max-width: 90%;
  }

  /* About Section */
  .about-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 10px;
  }
  
  .about-card {
    padding: 1.8rem 1.2rem;
  }

  /* Functions Section */
  .card-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 10px;
  }
  
  .card {
    min-width: 0;
  }

  /* Platform Section */
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Plans Section */
  .plans-container {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .plan-ct {
    width: 100%;
    max-width: 450px;
    margin: 0 auto 2rem;
    padding: 15px;
  }
  
  .plan-t {
    font-size: 1.8rem;
  }

  /* Certifications */
  .certification-levels {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 10px;
  }
  
  .certification-logos {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .logo-container {
    max-width: 100%;
  }

  /* Locations */
  .locations-carousel {
    padding: 1rem;
  }
  
  .location-card {
    min-width: 280px;
    flex: 0 0 calc(50% - 1rem);
  }

  /* Payment Section */
  .payment-method {
    flex: 0 0 110px;
  }
  
  .payment-method img {
    width: 180px;
    height: 110px;
  }

  /* Footer Banner */
  .texto_unete h2 {
    font-size: 2rem;
  }
  
  .texto_unete strong {
    font-size: 1.3rem;
  }
  
  .logo_unete {
    width: 140px;
    margin-right: 2rem;
  }

  /* Ajustes específicos para tablets pequeñas (menos de 768px) */
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
      max-width: 450px;
      margin: 0 auto;
    }
    
    .location-card {
      flex: 0 0 85%;
    }
    
    .certification-levels {
      grid-template-columns: 1fr;
    }
  }
}

/* Celulares (150px - 480px) */
@media (min-width: 150px) and (max-width: 480px) {
  /* Ajustes generales */
  .content-wrapper {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
    padding: 0 10px;
  }
  .scroll-to-top {
  width: 55px;
  height: 55px;
  }
  
  
  .section-title::after {
    width: 60px;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    padding: 0 15px;
  }
  
  /* Hero Section */
  .h1InicioMain {
    font-size: 2rem;
    line-height: 1.2;
    padding: 0 10px;
  }
  
  .pInicioMain {
    font-size: 1rem;
    padding: 0 15px;
  }
  
  .hero-button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
  
  /* About Section */
  .about-cards {
    grid-template-columns: 1fr;
  }
  
  .about-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    width: 80px;
    height: 80px;
  }
  
  /* Functions Section */
  .card-container {
    grid-template-columns: 1fr;
  }
  
  .card {
    max-width: 100%;
  }
  
  /* Platform Section */
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .feature-icon {
    width: 80px;
    height: 80px;
  }
  
  /* Plans Section */
  .plans-container {
    grid-template-columns: 1fr;
  }
  
  .plan-ct {
    width: 95%;
    padding: 10px;
  }
  
  .plan-t {
    font-size: 1.5rem;
  }
  
  .plan-card {
    padding: 1.2rem;
  }
  
  /* Certifications */
  .certification-levels {
    grid-template-columns: 1fr;
  }
  
  .certification-logos {
    flex-direction: column;
  }
  
  .logo-container {
    max-width: 100%;
  }
  
  /* Locations */
  .locations-carousel {
    padding: 1rem 0.5rem;
  }
  
  .location-card {
    min-width: 85%;
  }
  
  /* Payment Section */
  .payment-method {
    flex: 0 0 100px;
  }
  
  .payment-method img {
    width: 180px;
    height: 100px;
  }
  
  /* Footer Banner */
  .contNiveles_unete {
    height: 250px;
    padding: 0 15px;
  }
  
  .unete-content {
    flex-direction: column;
    text-align: center;
  }
  
  .logo_unete {
    width: 100px;
    margin: 0 0 1rem 0;
  }
  
  .texto_unete h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  
  .texto_unete strong {
    font-size: 1rem;
  }
  
  /* Ajustes específicos para pantallas muy pequeñas */
  @media (max-width: 350px) {
    .h1InicioMain {
      font-size: 1.7rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .plan-icon {
      width: 70px;
    }
    
    .plan-features li {
      font-size: 0.9rem;
    }
  }
}
</style>