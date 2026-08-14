import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MenuComponent from '@/components/MenuComponent.vue';

const app = createApp(App).use(router).use(router);
app.component("MenuComponent",MenuComponent);
app.mount('#app');

export {app};