import React from 'react'
import { IoTrashBin } from "react-icons/io5";

const Todo = ({ todo, deleteTodo, markTodo }) => {
    return (
        <li>
            <input onClick={() => { markTodo(todo.id) }} type="checkbox" defaultChecked={todo.marked}/>

            <p style={{ display: "inline", 
                        textDecoration: todo.marked ? 'line-through' : null
                        }}>{todo.text}</p>

            <span onClick={() => { deleteTodo(todo.id); }}><IoTrashBin /></span>
        </li>
    )
}

export default Todo