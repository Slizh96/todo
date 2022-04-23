import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FiltrType = 'All' | 'Active' | 'Completed'

function App() {
    let [filter, setFilter] = useState<FiltrType>('All')
    let [tasks1, setTask] = useState([
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Css', isDone: true},
    ])

    const removeTask = (id: string) => {
        setTask(tasks1.filter(t => t.id !== id))
    }

    let filtredTask = tasks1
    if (filter === 'Active') {
        filtredTask = filtredTask.filter(f => !f.isDone)
    }
    if (filter === 'Completed') {
        filtredTask = filtredTask.filter(f => f.isDone)
    }
    const changeFilter = (value: FiltrType) => {
        setFilter(value)
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTask([newTask, ...tasks1])
    }
    const changeStatus = (id: string, isDone: boolean) => {
        let task = tasks1.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTask([...tasks1])
        }
    }
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={filtredTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
