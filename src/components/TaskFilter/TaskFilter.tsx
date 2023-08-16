import React, { FC } from "react";
import { GreenInput } from "../UI/input/GreenInput";
import { GreenSelect } from "../UI/select/GreenSelect";
import { ITaskFilter } from "../../types/types";

export const TaskFilter: FC<ITaskFilter> = ({ filter, setFilter }) => {
    return <div>
        <GreenInput onChange={e => setFilter({ ...filter, query: e.target.value })} value={filter.query} placeholder='Поиск'/>
        <GreenSelect onChange={e => setFilter({ ...filter, sort: e.target.value })} value={filter.sort} defaultValue='Сортировать по' options={
            [
                { value: 'title', text: 'По заголовку' },
                { value: 'body', text: 'По тексту' }
            ]
        } />
    </div>
}