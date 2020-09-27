import Vue from 'vue';
import VueRouter from 'vue-router';
import Films from '../views/Films.vue';
import FilmDetails from '../views/FilmDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films,
  },
  {
    path: '/films/:id',
    name: 'FilmDetails',
    component: FilmDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
