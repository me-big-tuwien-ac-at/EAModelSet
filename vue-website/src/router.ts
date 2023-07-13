import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import Stats from '@/views/Stats.vue';
import ModelDetails from '@/views/ModelDetails.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/stats',
        name: 'Stats',
        component: Stats
    },
    {
        // TODO: adapt this to access model through its `identifier` property URL
        path: '/model/:id',
        name: 'Model Detail',
        component: ModelDetails
    }
];

// TODO: change this for live website
const router = createRouter({
    history: createWebHistory('/eamodelset/'),
    routes,
});

export default router;