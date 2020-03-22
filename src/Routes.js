import React from 'react';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Main as MainLayout, Auth as AuthLayout } from 'layouts';

const AuthRoutes = [
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login')),
      },
    ],
  },
];
const HomeRoutes = [
  {
    route: '/',
    component: MainLayout,
    routes: [
      {
        path: '/anasayfa',
        exact: true,
        component: lazy(() => import('views/Home')),
      },
      {
        path: '/puantaj',
        exact: true,
        component: lazy(() => import('views/Puantaj')),
      },
      {
        path: '/tanimlar/kurum-islemleri',
        exact: true,
        component: lazy(() => import('views/KurumIslemleri')),
      },
      {
        path: '/personelkarti/kisikarti',
        exact: true,
        component: lazy(() => import('views/PersonelKarti/KisiKarti')),
      },
      {
        path: '/kisi/',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
      {
        path: '/kisi/:id',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
      {
        path: '/kisi/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
    ],
  },
];

const routes = logged => {
  console.log(logged);
  if (logged) {
    return [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="/anasayfa" />,
      },
      ...HomeRoutes,
    ];
  } else {
    return [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="/auth/logins" />,
      },
      ...AuthRoutes,
    ];
  }
};

export default routes;
