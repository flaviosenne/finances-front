import React from 'react'
import Home from './pages/Home'

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Home/>
    }
])
