// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Views/Home.vue';
import About from './Views/About.vue';
import SelectProfLevel from './Views/SelectProfLevel.vue'
import ModuleSelection from './Views/ModuleSelection.vue'
import SelectBasicGrammarLessons from './Views/SelectBasicGrammarLessons.vue'
import BasicGrammarLesson1_1 from './Views/BasicGrammarLesson1_1.vue'
import BasicGrammarLesson2_1 from './Views/BasicGrammarLesson2_1.vue'
import BasicGrammarLesson3_1 from './Views/BasicGrammarLesson3_1.vue'
import BasicGrammarLesson4_1 from './Views/BasicGrammarLesson4_1.vue'




import Test from './Views/Test.vue'

const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },
  { path: '/SelectProfLevel', component: SelectProfLevel },
  { path: '/ModuleSelection', component: ModuleSelection },
  { path: '/SelectBasicGrammarLessons', component: SelectBasicGrammarLessons },
  { path: '/Basic/Grammar/lesson1', component: BasicGrammarLesson1_1 },
  { path: '/Basic/Grammar/lesson2', component: BasicGrammarLesson2_1 },
  { path: '/Basic/Grammar/lesson3', component: BasicGrammarLesson3_1 },
  { path: '/Basic/Grammar/lesson4', component: BasicGrammarLesson4_1 },





  { path: '/Test', component: Test }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
