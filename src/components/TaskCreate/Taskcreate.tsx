import React, { FC, useState } from "react";
import { GreenInput } from "../UI/input/GreenInput";
import { GreenButton } from "../UI/button/GreenButton";
import { ITaskCreate, TaskData } from "../../types/types";

export const TaskCreate: FC<ITaskCreate> = ({ addNewTask }) => {

    const [taskData, setTaskData] = useState<TaskData>({ title: '', body: '' });
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const addOnClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(taskData.title === '' || taskData.body === '') {
            setIsEmpty(true);
            return;
        } else {
            setIsEmpty(false);
        }
        setTaskData({ title: '', body: '' });
        addNewTask(taskData);
    }

    return <div>
        <form>
            <GreenInput onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} value={taskData.title} placeholder="Введите описание" style={{width: '90%'}} />
            <GreenInput onChange={(e) => setTaskData({ ...taskData, body: e.target.value })} value={taskData.body} placeholder="Введите текст" style={{width: '90%'}}/>
            <GreenButton onClick={addOnClick}>Добавить</GreenButton>
            <div>
                { isEmpty && <span>Заполните все поля</span> }
            </div>
        </form>
    </div>
}