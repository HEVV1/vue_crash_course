import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import Scroll from '@/pages/InfinityScroll';


const routes = [{
    path: '/', component: Main
}, {
    path: '/posts', component: PostPage
}, {
    path: '/scroll', component: Scroll
}

];

const router = createRouter({
    routes, history: createWebHistory(process.env.BASE_URL)
});

export default router;