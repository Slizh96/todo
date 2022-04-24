import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FiltrType} from "./App";
import {AddItemForm} from "./AddItemForm";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type PropsTitle = {
    id: string,
    title: string,
    tasks: TaskType[],
    removeTask: (id: string, todolistID: string) => void,
    changeFilter: (value: FiltrType, todolistID: string) => void,
    addTask: (title: string, todolistID: string) => void,
    changeStatus: (id: string, isDone: boolean, todolistID: string) => void,
    filter: FiltrType,
    removeTodolist: (todolistID: string) => void,
}

export const Todolist = (props: PropsTitle) => {
   const addTask=(title:string)=>{
       props.addTask(title, props.id)
   }
    return (
        <div>
            <h3>
                <button onClick={() => props.removeTodolist(props.id)}>X</button>
                {props.title}</h3>
            <AddItemForm addTask={addTask}/>
            <ul>
                {props.tasks.map(t => {
                    let onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.changeStatus(t.id, newIsDone, props.id)
                    }
                    return (
                        <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                            <button onClick={() => props.removeTask(t.id, props.id)}>X</button>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeTaskStatus}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })
                }
            </ul>
            <div>
                <button className={props.filter === 'All' ? 'active-filter' : ''}
                        onClick={() => props.changeFilter('All', props.id)}>All
                </button>
                <button className={props.filter === 'Active' ? 'active-filter' : ''}
                        onClick={() => props.changeFilter('Active', props.id)}>Active
                </button>
                <button className={props.filter === 'Completed' ? 'active-filter' : ''}
                        onClick={() => props.changeFilter('Completed', props.id)}>Completed
                </button>
            </div>
        </div>
    )
}