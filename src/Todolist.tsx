import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FiltrType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type PropsTitle = {
    title: string,
    tasks: TaskType[],
    removeTask: (id: string) => void,
    changeFilter: (value: FiltrType) => void,
    addTask: (title: string) => void,
    changeStatus: (id: string, isDone: boolean) => void,
filter:FiltrType
}

export const Todolist = (props: PropsTitle) => {
    let [title, setTitle] = useState('')
    let [error, setError]=useState<string|null>(null)
    let addTaskT = () => {
        if (title.trim()!==''){
        props.addTask(title)
        setTitle('')
    }
    else{
        setError('Title is required!')
        }
    }
    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
       setError(null)
        if (e.charCode === 13) {
            addTaskT()
        }
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={(onKeyPressHandler)}/>
                <button onClick={addTaskT}>+</button>
                {error && <div className={'error-message'}>{error}</div> }
            </div>
            <ul>
                {props.tasks.map(t => {
                    let onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.changeStatus(t.id, newIsDone)
                    }
                    return (
                        <li key={t.id} className={t.isDone? 'is-done':''}>
                            <button onClick={() => props.removeTask(t.id)}>X</button>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeTaskStatus}/>
                            <span>{t.title}</span>
                        </li>
                    )})
                }
            </ul>
            <div>
                <button className={props.filter==='All'? 'active-filter' : ''} onClick={() => props.changeFilter('All')}>All</button>
                <button className={props.filter==='Active'? 'active-filter' : ''} onClick={() => props.changeFilter('Active')}>Active</button>
                <button className={props.filter==='Completed'? 'active-filter' : ''} onClick={() => props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}