<template>
    <div class="admin-profile-container">
      <header_sin_login />
    
      <main class="perfil-admin">
        <div class="profile-actions">
          <router-link to="/main_admin">
            <button class="back-button">
              <i class="fa fa-arrow-left"></i> Volver
            </button>
          </router-link>
      
          <button class="logout-button" @click="logout">
            <i class="fa fa-sign-out-alt"></i> Cerrar Sesión
          </button>
        </div>
  
        <h1 class="profile-title">Perfil Administrativo</h1>
        
        <section class="profile-header">
          <div class="profile-picture">
            <img src="../img/admin-icon.png" alt="Icono de administrador">
          </div>
      
          <div class="profile-info">
            <h2>Cuenta Administrativa</h2>
            <p class="profile-description">
              "Con gran poder viene gran responsabilidad. Usted tiene acceso completo al sistema académico."
            </p>
          </div>
        </section>
      
        <section class="profile-details">
          <article class="detail-card">
            <h3>Información de Acceso</h3>
            <div class="detail-item">
              <i class="fa fa-user"></i>
              <p><strong>Usuario:</strong> {{ usuario.usuario }}</p>
            </div>
          </article>
      
          <article class="detail-card">
            <h3>Privilegios</h3>
            <div class="detail-item">
              <i class="fa fa-shield-alt"></i>
              <p><strong>Nivel de acceso:</strong> Administrador Total</p>
            </div>
            <div class="detail-item">
              <i class="fa fa-cogs"></i>
              <p><strong>Permisos:</strong> Configuración completa del sistema</p>
            </div>
          </article>
        </section>
      
        <aside class="profile-notice">
          <i class="fa fa-exclamation-triangle"></i>
          <p>Recuerde que todas sus acciones quedan registradas en el sistema.</p>
        </aside>
      </main>
      
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import header_sin_login from '../Headers/header_sin_login.vue';
  import Footer from '../Footer_Login/Footer.vue';
  
  const usuario = ref({});
  const router = useRouter();
  
  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push("/login");
      return;
    }
    
    try {
      const response = await axios.get('https://apiracadipy-production.up.railway.app/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      usuario.value = response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      logout();
    }
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };
  
  onMounted(fetchUserProfile);
  </script>
  
  <style scoped>
  /* Paleta de colores azul vibrante */
  
  .admin-profile-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .perfil-admin {
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
    max-width: 800px;
    margin: 2rem auto;
    box-shadow: 0 5px 25px rgba(131, 180, 255, 0.2);
    font-family: 'Segoe UI', sans-serif;
    position: relative;
    flex: 1;
    border: 1px solid var(--accent-blue);
  }
  
  .profile-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  
  .profile-title {
    margin: 1rem 0 0.2rem;
    font-size: 2.2rem;
  color: #83b4ff;
    text-align: center;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(131, 180, 255, 0.2);
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
    background-color: var(--light-blue);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 5px solid var(--primary-blue);
  color: #83b4ff;

  }
  
  .profile-picture {
    flex: 0 0 auto;
  }
  
  .profile-picture img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
    border: 4px solid #83b4ff;
    box-shadow: 0 4px 15px rgba(131, 180, 255, 0.3);
    padding: 5px;
    background-color: var(--white);
    object-fit: contain;
  }
  
  .profile-info {
    flex: 1;
    min-width: 200px;
  }
  
  .profile-info h2 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
    font-weight: 600;
  }
  
  .profile-description {
    color: black;
    font-size: 1.15rem;
    line-height: 1.6;
    font-style: italic;
  }
  
  .profile-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .detail-card {
    background-color: var(--white);
    border-radius: 12px;
    padding: 1.8rem;
    box-shadow: 0 3px 15px rgba(131, 181, 255, 0.596);
    transition: var(--transition);
    border-top: 5px solid var(--primary-blue);
    border: 1px solid var(--accent-blue);
  }
  
  .detail-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(131, 181, 255, 0.644);
  }
  
  .detail-card h3 {
    color: #83b4ff;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid var(--accent-blue);
    padding-bottom: 0.5rem;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.9rem;
    font-size: 1.1rem;
    gap: 0.9rem;
    padding: 0.5rem;
    border-radius: 6px;
    transition: var(--transition);
  }
  
  .detail-item:hover {
    background-color: var(--light-blue);
  }
  
  .detail-item i {
    color: #7fa1c3;
    font-size: 1.3rem;
    min-width: 1.8rem;
    text-align: center;
  }
  
  .detail-item p {
    color: black;
    margin: 0;
  }
  
  .detail-item strong {
    color: #7fa1c3;
    font-weight: bold;
  }
  
  .profile-notice {
  background-color: #fff3cd;
    border: 1px solid var(--warning-border);
    color: var(--warning-text);
    padding: 1.2rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
  }
  
  .profile-notice i {
    font-size: 1.5rem;
    flex-shrink: 0;
    color: #ffc107;
  }
  
  .back-button, .logout-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.3rem;
    padding: 0.7rem 1.3rem;
    border-radius: 8px;
    transition: var(--transition);
    font-weight: 500;
  }
  
  .back-button {
    color:  #7fa1c3;
  }
  
  .back-button:hover {
    color: var(--white);
    background-color: var(--secondary-blue);
    transform: translateY(-2px);
  }
  
  .logout-button {
    color: red;
    border: 2px solid var(--error-color);
  }
  
  .logout-button:hover {
    color: rgb(201, 70, 70);
    transform: translateY(-2px);
  }


  @media (max-width: 768px) {
  .perfil-admin {
    margin: 1rem;
    padding: 1.5rem;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .profile-picture img {
    width: 120px;
    height: 120px;
  }

  .profile-title {
    font-size: 1.8rem;
  }

  .profile-info h2 {
    font-size: 1.4rem;
  }

  .profile-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .perfil-admin {
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 10px;
  }

  .profile-actions {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .back-button, .logout-button {
    justify-content: center;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .profile-title {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .profile-picture img {
    width: 100px;
    height: 100px;
  }

  .profile-description {
    font-size: 1rem;
  }

  .detail-card {
    padding: 1.2rem;
  }

  .detail-item {
    font-size: 1rem;
  }
}

@media (max-width: 320px) {
  .perfil-admin {
    padding: 0.8rem;
  }

  .profile-title {
    font-size: 1.3rem;
  }

  .profile-info h2 {
    font-size: 1.2rem;
  }

  .profile-picture img {
    width: 80px;
    height: 80px;
    border-width: 3px;
  }

  .detail-card {
    padding: 1rem;
  }

  .detail-item {
    font-size: 0.9rem;
    gap: 0.5rem;
  }

  .profile-notice {
    padding: 0.8rem;
    font-size: 0.9rem;
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 250px) {
  .perfil-admin {
    padding: 0.5rem;
  }

  .profile-title {
    font-size: 1.1rem;
    word-break: break-word;
  }

  .profile-picture img {
    width: 60px;
    height: 60px;
  }

  .profile-info  {
   margin-right: auto;
   margin-left: auto;
  }
  .profile-info h2 {
    font-size: 1rem;
  }

  .profile-description {
    font-size: 0.8rem;
  }

  .detail-card h3 {
    font-size: 1rem;
    word-break: break-word;
  }

  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    font-size: 0.8rem;
  }

  .detail-item i {
    font-size: 1rem;
  }

  .profile-notice {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .back-button, .logout-button {
    font-size: 0.8rem;
    padding: 0.3rem;
  }
}
 
  </style>