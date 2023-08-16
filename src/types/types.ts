import React, { Dispatch, SetStateAction } from "react"

export interface ITask {
    [key: string]: any
    userId: number
    id: number
    title: string
    body: string
}

export interface TaskListProps {
    tasks: ITask[]
    removeTask: (id: number) => void
}

export interface IGreenButton extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export interface TaskProps {
    userId: number
    id: number
    title: string
    body: string
    index: number
    remove: (id: number) => void
}

export interface IGreenInput extends React.InputHTMLAttributes<HTMLInputElement> {

}

export interface TaskData {
    title: string
    body: string
}

export interface ITaskCreate {
    addNewTask: (task: TaskData) => void
}

export interface IOption {
    value: string | number
    text: string
}

export interface IGreenSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: IOption[]
    defaultValue: string
}

export interface IFilter {
    sort: string
    query: string
}

export interface ITaskFilter {
    filter: IFilter
    setFilter: (filter: IFilter) => void
}

export interface IModal {
    children: React.ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}