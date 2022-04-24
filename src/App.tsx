import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FiltrType = 'All' | 'Active' | 'Completed'
export type TodolistType = {
    id: string,
    title: string,
    filter: FiltrType
}
type TaskStateType={
    [key:string]:TaskType[]
}
function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let [todolists, setTodolists] = useState<TodolistType[]>([
        {
            id: todolistId1,
            title: 'What to learn',
            filter: 'All'
        },
        {
            id: todolistId2,
            title: 'What to buy',
            filter: 'All'
        },
    ])

    let [tasks, setTask] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'Redux', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'React22', isDone: true},
            {id: v1(), title: 'Redux22', isDone: false},
        ],
    })
    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(t => t.id !== todolistID))
        delete tasks[todolistID]
        setTask({...tasks})
    }
    const removeTask = (id: string, todolistID: string) => {
        tasks[todolistID] = tasks[todolistID].filter(t => t.id !== id)
        setTask({...tasks})
    }
    const changeFilter = (value: FiltrType, todolistID: string) => {
        let todolist = todolists.find(t => t.id === todolistID)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    const addTask = (title: string, todolistID: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        tasks[todolistID] = [newTask, ...tasks[todolistID]]
        setTask({...tasks})
    }
    const changeStatus = (id: string, isDone: boolean, todolistID: string) => {
        let task = tasks[todolistID].find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTask({...tasks})
        }
    }
    return (
        <div className="App">
            {
                todolists.map(tl => {
                    let filtredTask = tasks[tl.id]
                    if (tl.filter === 'Active') {
                        filtredTask = filtredTask.filter(f => !f.isDone)
                    }
                    if (tl.filter === 'Completed') {
                        filtredTask = filtredTask.filter(f => f.isDone)
                    }
                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={filtredTask}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }
        </div>
    );
}

export default App;
