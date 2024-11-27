import { createRouter, createWebHistory } from 'vue-router';
import Main_estudiante from './Mains/Main_estudiante.vue';
import Main_profesor from './Mains/Main_profesor.vue';
import Main_admin from './Mains/Main_admin.vue';
import Login from './Footer_Login/Login.vue';
import Main from './Mains/Main.vue';
import Perfil_estudiante from './Perfiles/Perfil_estudiante.vue';
import Añadir_estudiante from './Creacion_Cuentas/Añadir_estudiante.vue';
import Añadir_profesor from './Creacion_Cuentas/Añadir_profesor.vue';
import Crear_cuentas from './Creacion_Cuentas/Crear_cuentas.vue';
import Editar_eliminar_cuentas from './Administracion_Cuentas/Editar_eliminar_cuentas.vue';
import Editar_eliminar_estudiantes from './Administracion_Cuentas/Editar_eliminar_estudiantes.vue';
import Editar_eliminar_profesores from './Administracion_Cuentas/Editar_eliminar_profesores.vue';
import Perfil_profesor from './Perfiles/Perfil_profesor.vue';
import informacion_pago from './Pagos_Cuenta/informacion_pago.vue';
import Agregar_pago from './Pagos_Cuenta/Agregar_pago.vue';
import Solicitudes from './Solicitudes/Solicitudes.vue';
import observador_estudiante from './Observador/observador_estudiante.vue';
import obserador_admin from './Observador/obserador_admin.vue';
import Añadir_clase from './Clases_Reserva_Clases/Añadir_clase.vue';
import Reserva_clase from './Clases_Reserva_Clases/Reserva_clase.vue';
import Asistencias from './Horarios/Asistencias.vue';
import solicitudes_admin from './Solicitudes/solicitudes_admin.vue';
import Crear_comunicados from './Comunicados/Crear_comunicados.vue';
import horario_estudiante from './Horarios/horario_estudiante.vue';
import horario_profesor from './Horarios/horario_profesor.vue';
import Crear_notas from './Notas_Evaluacion/Crear_notas.vue';
import Ver_comunicados from './Comunicados/Ver_comunicados.vue';
import obtener_notas from './Notas_Evaluacion/obtener_notas.vue';
import Formulario_edicion_est from './Administracion_Cuentas/Formulario_edicion_est.vue';
import Formulario_edicion_pro from './Administracion_Cuentas/Formulario_edicion_pro.vue';
import Info_estudiante from './Administracion_Cuentas/Info_estudiante.vue';
import Info_profesor from './Administracion_Cuentas/Info_profesor.vue';









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
    component: Perfil_profesor
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
        component:Editar_eliminar_estudiantes,
        children:[
          {
            path:"editar",
            component: Formulario_edicion_est
          },
          {
            path:"informacion",
            component: Info_estudiante            

          }

        ]
      },

      {
        path:"editar_eliminar_profesores",
        component:Editar_eliminar_profesores,
        children:[
          {
            path:"editar",
            component: Formulario_edicion_pro
          },
          {
            path:"informacion",
            component: Info_profesor
          },

        ]
      },


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
    path:'/agregar_pago',
    component: Agregar_pago,
  },

  {
    path: '/solicitudes',
    component: Solicitudes,
  },

  
  {
    path:'/solicitudes_admin',
    name:'solicitudes_admin',
    component: solicitudes_admin,
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
    component:horario_profesor,
    children:[
      {
        path:'asistencia',
        component:Asistencias
      }
    ]

  },
  {
    path:"/add_notes",
    component:Crear_notas

  },
  {
    path:"/ver_comunicados",
    component:Ver_comunicados

  },
  {
    path:"/obtener_notas",
    component:obtener_notas

  }



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;