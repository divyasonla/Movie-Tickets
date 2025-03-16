import { createRouter, createWebHistory } from 'vue-router';
import { session } from './data/session'
import { userResource } from '@/data/user'
// import MovieList from '@/pages/MovieList.vue';

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'), // Home component
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: () => import('@/pages/MovieList.vue'),
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name:'MovieDetails',
    path:'/movies/:movieName',
    component: () => import('@/pages/MovieDetails.vue'),
    props:true,
  },
 
  
];
let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn;
  try {
    await userResource.promise;
  } catch (error) {
    isLoggedIn = false;
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' });
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });  // ✅ 'Login' ka name match hoga
  } else {
    next();
  }
});



export default router;
