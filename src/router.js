// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
