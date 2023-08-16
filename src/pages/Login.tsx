import React, { FC, useContext } from "react";
import { GreenInput } from "../components/UI/input/GreenInput";
import { GreenButton } from "../components/UI/button/GreenButton";
import styles from './css/Login.module.css';
import { AuthContext } from "../context/AuthContext";

export const Login: FC = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return <div className={styles.wrapper}>
        <h1>Вход в систему</h1>

        <form onSubmit={login}>
            <GreenInput placeholder="Имя пользователя" />
            <GreenInput placeholder="Пароль" />
            <GreenButton>Войти</GreenButton>
        </form>
    </div>
}