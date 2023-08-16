import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { TaskServise } from "../API/TaskServise";
import { ITask } from "../types/types";
import styles from './css/TaskPage.module.css'
import { Loader } from "../components/UI/loader/Loader";
import { Comment } from "../components/UI/comment/Comment";

type Params = {
    id: string
}

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const TaskPage: FC = () => {

    const [task, setTask] = useState<ITask>();
    const [comments, setComments] = useState<Comment[]>([]);

    const params = useParams<Params>();

    const [fetchTaskById, isTaskLoading, taskError] = useFetching(async () => {
        const response = await TaskServise.getById(params.id);
        setTask(response.data);
    });

    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await TaskServise.getComments(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        (fetchTaskById as () => Promise<void>)();
        (fetchCommentsById as () => Promise<void>)();
    }, []);

    return <div className={styles.wrapper}>

        <div className={styles.header}>
            <h1>Страница поста</h1>
        </div>
        { !isTaskLoading 
        ? <div className={styles.container}>
              <strong>{task?.title}</strong>
            <div>
                {task?.body}
            </div>
          </div>
        : <Loader /> }

        <h1>Комментарии</h1>

        { !isCommentsLoading 
          ? comments.map(comment => 
                    <Comment name={comment.name} 
                             email={comment.email} 
                             text={comment.body}
                             key={comment.id} />)
          : <Loader /> }
    </div>
}