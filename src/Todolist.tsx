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
    removeTask:(id:string)=>void,
    changeFilter:(value:FiltrType)=>void,
    addTask:(title:string)=>void,

}

export const Todolist = (props: PropsTitle) => {
   let [title, setTitle]=useState('')
    let addTaskT=()=>{
       props.addTask(title)
        setTitle('')
    }
    let onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
       setTitle(e.currentTarget.value)
    }
    let onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.charCode===13){
            addTaskT()
        }
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={(onKeyPressHandler)}/>
                <button onClick={addTaskT}>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <button onClick={()=>props.removeTask(t.id)}>X</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={()=> props.changeFilter('All')}>All</button>
                <button onClick={()=> props.changeFilter('Active')}>Active</button>
                <button onClick={()=> props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}