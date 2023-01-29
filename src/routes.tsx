import React from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

import { createBrowserRouter } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';

export const routes = createBrowserRouter([
    {
        path: '/',  element: <LandingPage/>,
    },
    {
        path: '/login', element: <Login/>
    },
    {
        path: '/cadastrar', element: <Register/>
    },
    {
        path: '/home', element: <Home/>
    }
])
