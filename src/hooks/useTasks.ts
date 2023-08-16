import { useMemo } from "react";
import { ITask } from "../types/types";

export const useSortedTasks = (tasks: ITask[], sort: string) => {
    const sortedTasks = useMemo(() => {
        if (sort) {
            return [...tasks].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return tasks;
    }, [sort, tasks]);

    return sortedTasks;
}

export const useTasks = (tasks: ITask[], sort: string, query: string) => {
    const sortedTasks = useSortedTasks(tasks, sort);

    const sortedAndSortedTasks = useMemo(() => {
        return sortedTasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedTasks]);

    return sortedAndSortedTasks;
}