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
import informacion_pago from './informacion_pago.vue';
import Pagina_pago_banco from './pagina_pago_banco.vue';
import Solicitudes from './Solicitudes.vue';
import observador_estudiante from './observador_estudiante.vue';
import obserador_admin from './obserador_admin.vue';
import Añadir_clase from './Añadir_clase.vue';
import Reserva_clase from './Reserva_clase.vue';
import Añadir_solicitud from './añadir_solicitud.vue';
import Editar_solicitud from './editar_solicitud.vue';
import Eliminar_solicitud from './eliminar_solicitud.vue';

import Solicitudes_admin from './solicitudes_admin.vue';
import Editar_solicitud_admin from './editar_solicitud_admin.vue';
import Crear_comunicados from './Crear_comunicados.vue';
import horario_estudiante from './horario_estudiante.vue';
import horario_profesor from './horario_profesor.vue';
import Crear_notas from './Crear_notas.vue';
import Ver_comunicados from './Ver_comunicados.vue';








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
      {
        path:"editar_eliminar_estudiantes",
        component:Editar_eliminar_estudiantes
      }
    ]
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
    path: '/solicitudes',
    component: Solicitudes,
    children:
    [
      {      
        path : 'anadir_solicitud',
        component: Añadir_solicitud
      },
      {      
        path : 'editar_solicitud',
        name: 'editar_solicitud',
        component: Editar_solicitud
      },
      {      
        path : 'eliminar_solicitud',
        name: 'eliminarr_solicitud',
        component: Eliminar_solicitud
      }
      
    ]
  },

  
  {
    path:'/solicitudes_admin',
    name:'solicitudes_admin',
    component: Solicitudes_admin,
    children:
    [
      {      
        path : 'editar_solicitud_admin',
        component: Editar_solicitud_admin
      }
    ]
  },
  
  {
    path:'/crear_comunicados',
    component: Crear_comunicados,
  },  

  

  {
    path:"/HorarioEstudiante",
    component:horario_estudiante

  },
  {
    path:"/HorarioProfesor",
    component:horario_profesor

  },
  {
    path:"/add_notes",
    component:Crear_notas

  },
  {
    path:"/ver_comunicados",
    component:Ver_comunicados

  }



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;