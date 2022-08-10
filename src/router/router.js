import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import Scroll from '@/pages/InfinityScroll';
import PostIdPage from '@/pages/PostIdPage';
import postPageVueX from '@/pages/PostPageVueX';
import PostPageCompositionAPI from '@/pages/PostPageCompositionAPI';


const routes = [{
    path: '/', component: Main
}, {
    path: '/posts', component: PostPage
}, {
    path: '/scroll', component: Scroll
}, {
    path: '/posts/:id', component: PostIdPage
}, {
    path: '/postsvuex', component: postPageVueX
}, {
    path: '/composition', component: PostPageCompositionAPI
}

];

const router = createRouter({
    routes, history: createWebHistory(process.env.BASE_URL)
});

export default router;