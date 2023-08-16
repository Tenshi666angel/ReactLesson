import React, { FC, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { AuthContext } from '../../context/AuthContext';

export const AppRouter: FC = () => {
    
    const { isAuth } = useContext(AuthContext);

    return <>
        <Routes>
            { isAuth 
              ?
              privateRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)
              :
              publicRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)
            } 
        </Routes>
    </>
}