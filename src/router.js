// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Views/Home.vue';
import About from './Views/About.vue';
import SelectProfLevel from './Views/SelectProfLevel.vue'

const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },
  { path: '/SelectProfLevel', component: SelectProfLevel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
