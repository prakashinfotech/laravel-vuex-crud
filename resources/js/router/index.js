import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import Subjects from '../components/Subjects';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'subjects',
        path: '/subjects',
        component: Subjects
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
