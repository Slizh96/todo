import React from "react";
import {TaskType} from "./Todolist";

export type TaskPropsType={
task:TaskType
}

export const Task =React.memo((props:TaskPropsType)=>{
    return <div>kuh</div>
})