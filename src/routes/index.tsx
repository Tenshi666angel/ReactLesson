import React from "react";
import Tasks from "../pages/Tasks";
import { TaskPage } from "../pages/TaskPage";
import { About } from "../pages/About";
import { Error404 } from "../pages/Error";
import { Login } from "../pages/Login";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    { path: '/tasks', element: <Tasks /> },
    { path: '/tasks/:id', element: <TaskPage /> },
    { path: '/about', element: <About /> },
    { path: '/error', element: <Error404 /> },
    { path: '/login', element: <Navigate to='/tasks' /> },
    { path: '*', element: <Navigate to='/error' /> }
]

export const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Navigate to='/login' /> }
]