import React, { FC } from "react";
import styles from './Task.module.css';
import { GreenButton } from "../../UI/button/GreenButton";
import { TaskProps } from "../../../types/types";
import { buttonStyle } from "./overrideStyles";
import { useNavigate } from "react-router-dom";

export const Task: FC<TaskProps> = ({ id, title, body, index, remove }) => {

    const router = useNavigate();

    return <div className={styles.container}>
        <div className={styles.postContent}>
            <strong>{index + 1}.   {title}</strong>
            <div>
                {body}
            </div>
        </div>
        <div>
            <GreenButton onClick={() => router(`/tasks/${id}`)} style={buttonStyle}>Открыть</GreenButton>
            <GreenButton onClick={() => remove(id)} style={buttonStyle}>Удалить</GreenButton>
        </div>
    </div>
}