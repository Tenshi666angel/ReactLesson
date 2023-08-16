import React, { FC } from "react";
import styles from './Comment.module.css';

type CommentProps = {
    name: string
    email: string
    text: string
}

export const Comment: FC<CommentProps> = ({ name, email, text }) => {
    return <div className={styles.container}>
        <strong>Имя: { name }</strong>
        <p>Почта: { email }</p>
        <span>{ text }</span>
    </div>
}