import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export const Navbar: FC = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return <div className='navbar'>
        <NavLink to='/tasks' className='nav__links'>Tasks</NavLink>
        <NavLink to='/about' className='nav__links'>About</NavLink>
        <h4 onClick={logout} className='h4'>Выйти</h4>
</div>
}