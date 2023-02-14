import React from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

import { createBrowserRouter } from "react-router-dom";
import Register from './pages/Register';
import Report from './pages/Report';
import FlowCash from './pages/FlowCash';
import NewRelease from './pages/ReleaseDetails';
import Bank from './pages/Bank';
import Category from './pages/Category';

export const routes = createBrowserRouter([
    {
        path: '/', element: <LandingPage />,
    },
    {
        path: '/login', element: <Login />
    },
    {
        path: '/cadastrar', element: <Register />
    },
    {
        path: '/fluxo-de-caixa', element: <FlowCash />
    },
    {
        path: '/fluxo-de-caixa/novo', element: <NewRelease />
    },
    {
        path: '/fluxo-de-caixa/detalhes/:id', element: <NewRelease />
    },
    {
        path: '/banco', element: <Bank />
    },
    {
        path: '/categoria', element: <Category />
    },
    {
        path: '/relatorio', element: <Report />
    }
])
