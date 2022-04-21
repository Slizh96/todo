import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FiltrType='All' | 'Active' | 'Completed'

function App() {
    let [filter, setFilter] = useState<FiltrType>('Active')
    let [tasks1, setTask] = useState([
        {id: 1, title: 'React', isDone: true},
        {id: 2, title: 'Redux', isDone: false},
        {id: 3, title: 'Css', isDone: true},
    ])

    const removeTask = (id: number) => {
        setTask(tasks1.filter(t => t.id !== id))
    }

    let filtredTask=tasks1
    if (filter==='Active'){
        filtredTask=filtredTask.filter(f=>!f.isDone)
    }
    if (filter==='Completed'){
        filtredTask=filtredTask.filter(f=>f.isDone)
    }
const changeFilter=(value:FiltrType)=>{
        setFilter(value)
}
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={filtredTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
