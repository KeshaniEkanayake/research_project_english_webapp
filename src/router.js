// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Views/Home.vue';
import About from './Views/About.vue';
import SelectProfLevel from './Views/SelectProfLevel.vue'
import ModuleSelection from './Views/ModuleSelection.vue'

import SelectGrammarLessons from './Views/Basic/Grammar/SelectGrammarLessons.vue'

import Lesson1_1 from './Views/Basic/Grammar/Lesson1/Lesson1_1.vue'
import Lesson1_2 from './Views/Basic/Grammar/Lesson1/Lesson1_2.vue'
import Lesson1_3 from './Views/Basic/Grammar/Lesson1/Lesson1_3.vue'
import Lesson1_4 from './Views/Basic/Grammar/Lesson1/Lesson1_4.vue'
import Lesson1_5 from './Views/Basic/Grammar/Lesson1/Lesson1_5.vue'

import Lesson2_1 from './Views/Basic/Grammar/Lesson2/Lesson2_1.vue'
import Lesson2_2 from './Views/Basic/Grammar/Lesson2/Lesson2_2.vue'
import Lesson2_3 from './Views/Basic/Grammar/Lesson2/Lesson2_3.vue'
import Lesson2_4 from './Views/Basic/Grammar/Lesson2/Lesson2_4.vue'
import Lesson2_5 from './Views/Basic/Grammar/Lesson2/Lesson2_5.vue'

import Lesson3_1 from './Views/Basic/Grammar/Lesson3/Lesson3_1.vue'
import Lesson4_1 from './Views/Basic/Grammar/Lesson4/Lesson4_1.vue'
import Lesson4_2 from './Views/Basic/Grammar/Lesson4/Lesson4_2.vue'
import Lesson4_3 from './Views/Basic/Grammar/Lesson4/Lesson4_3.vue'
import Lesson5_1 from './Views/Basic/Grammar/Lesson5/Lesson5_1.vue'
import Lesson5_2 from './Views/Basic/Grammar/Lesson5/Lesson5_2.vue'


import ReadingText1 from './Views/Basic/Reading/ReadingText1.vue'



import Test from './Views/Test.vue'

// type the path given in 'path:' in the browser to display the page
const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },
  { path: '/SelectProfLevel', component: SelectProfLevel },
  { path: '/ModuleSelection', component: ModuleSelection },

  { path: '/Basic/SelectGrammarLessons', component: SelectGrammarLessons },

  { path: '/Basic/Grammar/Lesson1_1', component: Lesson1_1 },
  { path: '/Basic/Grammar/Lesson1_2', component: Lesson1_2 },
  { path: '/Basic/Grammar/Lesson1_3', component: Lesson1_3 },
  { path: '/Basic/Grammar/Lesson1_4', component: Lesson1_4 },
  { path: '/Basic/Grammar/Lesson1_5', component: Lesson1_5 },

  { path: '/Basic/Grammar/Lesson2_1', component: Lesson2_1 },
  { path: '/Basic/Grammar/Lesson2_2', component: Lesson2_2 },
  { path: '/Basic/Grammar/Lesson2_3', component: Lesson2_3 },
  { path: '/Basic/Grammar/Lesson2_4', component: Lesson2_4 },
  { path: '/Basic/Grammar/Lesson2_5', component: Lesson2_5 },

  { path: '/Basic/Grammar/Lesson3_1', component: Lesson3_1 },
  { path: '/Basic/Grammar/lesson4_1', component: Lesson4_1 },
  { path: '/Basic/Grammar/lesson4_2', component: Lesson4_2 },
  { path: '/Basic/Grammar/lesson4_3', component: Lesson4_3 },
  { path: '/Basic/Grammar/lesson5_1', component: Lesson5_1 },
  { path: '/Basic/Grammar/lesson5_2', component: Lesson5_2 },


  { path: '/Basic/Reading/ReadingText1', component: ReadingText1 },




  { path: '/Test', component: Test }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
