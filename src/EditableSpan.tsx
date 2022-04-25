import React, {ChangeEvent, KeyboardEvent, useState} from "react";

export type EditableSpanPropsType = {
    title: string,
    updateTaskName:(title:string)=>void,
 }

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [edit, setEdid] = useState(false)
    let [title, setTitle] = useState(props.title)
    const onDoubleClickHandler= () => {
        setEdid(true)

    }

    const onBlurHandler = () => {
        setEdid(false)
        props.updateTaskName(title)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>{
            edit
                ? <input value={title} onChange={changeTitle} autoFocus onBlur={onBlurHandler}/>
                : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
        }
        </>
    )
}