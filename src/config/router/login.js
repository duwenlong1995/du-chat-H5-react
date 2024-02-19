import { lazy } from 'react';

const routes = [
    {
        path: 'login',
        component: lazy(() => import('@/views/login')),
        exact: true,
        meta: {
            title: '登录'
        }
    },
    {
        path: 'register',
        component: lazy(() => import('@/views/register')),
        exact: true,
        meta: {
            title: '注册'
        }
    }
];
export default routes;
