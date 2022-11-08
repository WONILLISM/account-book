import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import MainLayout from './layouts/MainLayout';
import BankbookDetail from './pages/BankbookDetail';
import DashboardApp from './pages/DashboardApp';
import Login from './pages/Login';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to='/dashboard/app' replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'bankbook/:id', element: <BankbookDetail /> },
      ],
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '/', element: <Navigate to='login' /> },
      ],
    },
  ]);
}
