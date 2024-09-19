import { createRouter, createWebHistory } from 'vue-router';
import Main_estudiante from './main_estudiante.vue';
import Main_profesor from './Main_profesor.vue';
import Main_admin from './Main_admin.vue';
import Login from './Login.vue';
import Main from './Main.vue';


const routes = [
    {path:'/',
    name:'main',
    component: Main
    },
    
  {
    path: '/main_estudiante',
    name: 'main_estudiante',
    component: Main_estudiante
  },
  {
    path: '/main_profesor',
    name: 'main_profesor',
    component: Main_profesor
  },
  {
    path: '/main_admin',
    name: 'main_admin',
    component: Main_admin
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;