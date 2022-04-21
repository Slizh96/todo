import React from "react";
import {FiltrType} from "./App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
export type PropsTitle = {
    title: string,
    tasks: TaskType[],
    removeTask:(id:number)=>void,
    changeFilter:(value:FiltrType)=>void
}

export const Todolist = (props: PropsTitle) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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