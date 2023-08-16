import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/UI/navbar/Navbar';
import { AppRouter } from './components/AppRouter/AppRouter';
import { AuthContext } from './context/AuthContext';

const App: FC = () => {

    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    return <div>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    </div>
}

export default App;