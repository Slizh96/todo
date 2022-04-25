import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FiltrType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
    updateTaskName: (todolistID: string, id: string, title: string) => void,
    updateTodolistName: (todolistID: string, title: string) => void,
}

export const Todolist = (props: PropsTitle) => {
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const updateTaskNameHandler = (tID: string, title: string) =>
        props.updateTaskName(props.id, tID, title)
    const updateTodolistName = (title: string) => {
        props.updateTodolistName(props.id, title)
    }
    return (
        <div>
            <h3>
                <IconButton onClick={() => props.removeTodolist(props.id)}><Delete/></IconButton>
                <EditableSpan title={props.title} updateTaskName={updateTodolistName}/>
            </h3>
            <AddItemForm addTask={addTask}/>
            <div>
                {props.tasks.map(t => {
                    let onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.changeStatus(t.id, newIsDone, props.id)
                    }
                    return (
                        <div key={t.id} className={t.isDone ? 'is-done' : ''}>
                            <IconButton onClick={() => props.removeTask(t.id, props.id)}><Delete/></IconButton>
                            <Checkbox
                                checked={t.isDone}
                                onChange={onChangeTaskStatus}
                                color='secondary'
                            />
                            <EditableSpan title={t.title}
                                          updateTaskName={(title) => updateTaskNameHandler(t.id, title)}/>
                        </div>
                    )
                })
                }
            </div>
            <div>
                <Button
                    variant={props.filter === 'All' ? 'outlined' : 'text'}
                    onClick={() => props.changeFilter('All', props.id)}
                    color='default'
                    size='small'
                >All
                </Button>
                <Button variant={props.filter === 'Active' ? 'outlined' : 'text'}
                        onClick={() => props.changeFilter('Active', props.id)}
                        color='secondary'
                        size='small'
                >Active
                </Button>
                <Button variant={props.filter === 'Completed' ? 'outlined' : 'text'}
                        onClick={() => props.changeFilter('Completed', props.id)}
                        color='primary'
                        size='small'
                >Completed
                </Button>
            </div>
        </div>
    )
}