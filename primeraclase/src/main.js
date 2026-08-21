import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MenuComponent from '@/components/MenuComponent.vue';
import MessageComponent from './components/MessageComponent.vue';
import CardComponent from './components/CardComponent.vue';

const app = createApp(App).use(router).use(router);
app.component("MenuComponent",MenuComponent);
app.component("MessageComponent",MessageComponent);
app.component("CardComponent",CardComponent);

app.mount('#app');

export {app};