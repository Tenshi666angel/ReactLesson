import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = {
    isAuth: boolean
    setIsAuth : Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({ isAuth: false, setIsAuth: () => {} });