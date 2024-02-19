import { lazy } from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        redirectTo: '/index' // 自定义属性，重定向到目标页面 router.path
    },
    {
        path: 'index',
        component: lazy(() => import('@/views/index')),
        exact: true,
        meta: {
            title: '首页'
        }
    },
    {
        path: 'contacts',
        component: lazy(() => import('@/views/contacts')),
        exact: true,
        meta: {
            title: '联系人'
        }
    },
    {
        path: 'message',
        component: lazy(() => import('@/views/message')),
        exact: true,
        meta: {
            title: '消息'
        }
    },
    {
        path: 'mine',
        component: lazy(() => import('@/views/mine')),
        exact: true,
        meta: {
            title: '我的'
        }
    },
    {
        path: 'chat',
        component: lazy(() => import('@/views/chat')),
        exact: true,
        meta: {
            title: '聊天'
        }
    }
];
export default routes;
