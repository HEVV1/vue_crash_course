import {createApp} from 'vue';
import App from './App';
import components from '@/components/UI';
import directives from '@/directives';
import router from '@/router/router';
import store from '@/store';

const app = createApp(App);

components.forEach(comp => {
    app.component(comp.name, comp);
});

directives.forEach(dir => {
    app.directive(dir.name, dir);
});

app.use(router).use(store).mount('#app');