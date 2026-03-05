import { createMemoryHistory, createRouter } from 'vue-router';
import App from './界面.vue';
import HomePage from './views/HomePage.vue';
import CharacterSelect from './views/CharacterSelect.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/character-select', component: CharacterSelect },
    ],
});

$(() => {
    createApp(App).use(router).mount('#app');
});
