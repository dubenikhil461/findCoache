import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/Coache/CoachDetails.vue';
import CoacheRegister from './pages/Coache/CoacheRegister.vue';
import CoachesList from './pages/Coache/CoachesList.vue';
import NotFound from './pages/NotFound/NotFound.vue';
import ContactCoach from './pages/Request/ContactCoach.vue'
import Request from './pages/Request/Request.vue'

// Define the routes array properly
const routes = [
  {
     path : '/' , redirect : '/coaches'
  },
  // Coaches List
  {
    path: '/coaches',
    name: 'CoachesList',
    component:CoachesList ,
    meta: { title: 'Coaches List' },
  },

  // Coache Register
  {
    path: '/register',
    name: 'Register',
    component:CoacheRegister ,
    meta: { title: 'Register' },
  },

  // Coach Details with Nested Route
  {
    path: '/coaches/:id',
    name: 'CoachDetails',
    component: CoachDetails,
    meta: { title: 'Coach Details' },
    children: [
      {
        path: 'contact',
        name: 'ContactCoach',
        component: ContactCoach,
        meta: { title: 'Contact Coach' },
      },
    ],
  },

  // Request
  {
    path: '/request',
    name: 'Request',
    component:Request ,
    meta: { title: 'Request Coach' },
  },

  // Catch-all 404
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component:NotFound , // make sure this exists
    meta: { title: 'Page Not Found' },
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
