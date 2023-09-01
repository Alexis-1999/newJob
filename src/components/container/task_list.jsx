import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
    const defaulTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const [loading, setLoading] = useState(true);

    // Estado del componente
    const [tasks, setTasks] = useState([defaulTask]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    const changeCompleted = (id)=>{
        console.log('TODO: Cambiar estado de una tarea');
    }


    return (
        <div>
            <h1>
                Your Tasks:
            </h1>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaulTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
