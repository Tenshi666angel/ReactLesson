import React, { FC } from "react";
import { Task } from "./Task/Task";
import { TaskListProps } from "../../types/types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from './TaskList.module.css';

export const TaskList: FC<TaskListProps> = ({ tasks, removeTask }) => {
    return <div>
        <TransitionGroup>
            {tasks.map((elem, index) =>
                <CSSTransition key={elem.id} timeout={200} classNames={{
                    enter: styles.itemEnter,
                    enterActive: styles.itemEnterActive,
                    exit: styles.itemExit,
                    exitActive: styles.itemExitActive
                }}>
                    <Task remove={removeTask} index={index} userId={elem.userId} id={elem.id} title={elem.title} body={elem.body} />
                </CSSTransition>)
            }
        </TransitionGroup>
    </div>
}