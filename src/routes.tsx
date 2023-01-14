import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/',  element: <Home/>,
    },
    {
        path: '/login', element: <Login/>
    }
])
