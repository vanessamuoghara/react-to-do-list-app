
import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';

const ListContainer = () => {
    const [Tasks, setTasks] = useState ([]);
    const addNewTask = (task) => {
        setTasks([...Tasks, task]);
        console.log(task)
        

    };
    return (
        <div>
            <TodoList addNewTask = {addNewTask} tasks={Tasks}/>
        </div>
    )
}

export default ListContainer;
   

// list container: new task at the top, to do component and completed task
        