import React, { FC, useEffect, useRef, useState } from 'react';
import { TaskList } from '../components/TaskList/TaskList';
import { IFilter, ITask, TaskData } from '../types/types';
import { TaskCreate } from '../components/TaskCreate/Taskcreate';
import { TaskFilter } from '../components/TaskFilter/TaskFilter';
import { Modal } from '../components/UI/modal/Modal';
import { GreenButton } from '../components/UI/button/GreenButton';
import { useTasks } from '../hooks/useTasks';
import { TaskServise } from '../API/TaskServise';
import { Loader } from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import { Pagination } from '../components/UI/pagination/Pagination';
import { GreenSelect } from '../components/UI/select/GreenSelect';

const Tasks: FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([]);

    const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' });
    const [modal, setModal] = useState<boolean>(false);

    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    
    const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);

    const [fetchTasks, isLoading, error] = useFetching(async () => {
        const response = await TaskServise.getAll(limit, page);
        setTasks([...tasks, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const addNewTask = (data: TaskData) => {
        setTasks([...tasks, { userId: Date.now(), id: Date.now(), title: data.title, body: data.body }]);
        setModal(false);
    }

    const removeTask = (id: number) => {
        setTasks([...tasks].filter(task => task.id !== id));
    }

    useEffect(() => {
        (fetchTasks as () => Promise<void>)();
    }, [page, limit]);

    const changePage = (page: number) => {
        setPage(page);
    }

    return <div className='tasks'>
        <GreenButton onClick={e => setModal(true)} style={{ marginTop: 15 }}>Создать запись</GreenButton>
        <Modal visible={modal} setVisible={setModal}>
            <TaskCreate addNewTask={addNewTask} />
        </Modal>
        <TaskFilter filter={filter} setFilter={setFilter} />

        {error && <h1>Произошла ошибка</h1>}
        
        {isLoading 
                    &&
                    <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
                        <Loader />
                    </div> }

        { tasks.length === 0 && !isLoading && <h1>Записи не найдены</h1> }

        <TaskList removeTask={removeTask} tasks={sortedAndSearchedTasks} />
        <GreenButton onClick={() => setPage(prev => prev + 1)} style={{ marginLeft: '50%', transform: 'translate(-50%, 0)', width: 150 }}>
            Показать ещё
        </GreenButton>
        <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
}

export default Tasks;
