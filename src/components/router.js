import { createRouter, createWebHistory } from 'vue-router';
import Main_estudiante from './Main_estudiante.vue';
import Main_profesor from './Main_profesor.vue';
import Main_admin from './Main_admin.vue';
import Login from './Login.vue';
import Main from './Main.vue';
import Perfil_estudiante from './Perfil_estudiante.vue';
import Añadir_estudiante from './Añadir_estudiante.vue';
import Añadir_profesor from './Añadir_profesor.vue';
import Crear_cuentas from './Crear_cuentas.vue';
import Editar_eliminar_cuentas from './Editar_eliminar_cuentas.vue';
import Editar_eliminar_estudiantes from './Editar_eliminar_estudiantes.vue';
import perfil_profesor from './Perfil_profesor.vue';
import Pagos from './Pagos.vue';
import informacion_pago from './informacion_pago.vue';
import Pagina_pago_banco from './pagina_pago_banco.vue';
import obserador_admin from '@/obserador_admin.vue';
import observador_estudiante from '@/observador_estudiante.vue';
import Añadir_clase from './Añadir_clase.vue';
import Reserva_clase from './Reserva_clase.vue';


const routes = [
    {
      path:'/',
    name:'main',
    component: Main
    },

    {path:'/login',
        name:'login',
        component:Login
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
  {
    path: '/perfil_estudiante',
    name: 'perfil_estudiante',
    component: Perfil_estudiante
  },
  {
    path: '/perfil_profesor',
    component: perfil_profesor
  },

  {
    path: '/crear_cuentas',
    component: Crear_cuentas,
    children: [
      {
        path: 'add_estudiante',
        component: Añadir_estudiante
      },
      {
        path: 'add_profesor', 
        component: Añadir_profesor 
      }
    ]
  },

  {
    path: '/anadir_clase',
    component: Añadir_clase
  },

  {
    path:"/editar_eliminar_cuentas",
    component:Editar_eliminar_cuentas,
    children:[
      {path:"editar_eliminar_estudiantes",
        component:Editar_eliminar_estudiantes
      }
    ]
  },

  {
    path: '/portal_pagos',
    name:'portal_pagos',
    component: Pagos,
  },
  {path:"/reserva_clase",
    component:Reserva_clase
  },

  {
    path:"/agregarobservacion",
    component:obserador_admin
  },
  {
    path:"/observacionEstudiante",
    component:observador_estudiante
  },

  {
    path:'/info_pago',
    name:'Informacion_pagos',
    component: informacion_pago,
  },

  {
    path:'/pagina_pago',
    name:'Pagina_pago_banco',
    component: Pagina_pago_banco,
  },  
  {
    path: '/portal_pagos',
    name: 'portal_de_pagos',
    component: Pagos
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;