import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemType={
   addTask:(title:string)=>void
}

export const AddItemForm = (props:AddItemType)=>{
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    let addTaskT = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
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

    return(
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={(onKeyPressHandler)}/>
            <button onClick={addTaskT}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    )
}