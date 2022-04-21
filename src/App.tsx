import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
const tasks1=[
    {id:1, title:'React', isDone:true},
    {id:2, title:'Redux', isDone:false},
    {id:3, title:'Css', isDone:true},
]
    const tasks2=[
    {id:1, title:'React2', isDone:true},
    {id:2, title:'Redux2', isDone:false},
    {id:3, title:'Css2', isDone:true},
]
    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasks1}/>
            <Todolist title={'What to bye'} tasks={tasks2}/>
        </div>
    );
}

export default App;
