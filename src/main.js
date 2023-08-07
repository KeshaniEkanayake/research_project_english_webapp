import { createApp } from 'vue'
import App from './App.vue';
import router from './router'; // Import the router instance

// I use Native UI library to get components 
import native from "naive-ui";

// use(router)-> to add routing
// use(native)->to render componets taken from Native UI library
createApp(App).use(router).use(native).mount('#app');
