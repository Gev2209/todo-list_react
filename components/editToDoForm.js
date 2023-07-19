import React, {useState} from "react";

export const EditToDoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)

    const handleSumbit = (e) => {
        e.preventDefault()

        editTodo(value,task.id)

        setValue('')
    }
    return (
        <form className="TodoForm" onSubmit={handleSumbit}>
            <input type="text" className="todo-input" value={value} 
            placeholder="Update task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}