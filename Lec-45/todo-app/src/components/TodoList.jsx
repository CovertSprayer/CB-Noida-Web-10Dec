import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, markTodo }) => {
    return (
        <div>
            {/* <Todo todo={{ id: 1, text: 'DO some coding 4', marked: false }} /> */}
            {/* <Todo todo={{ id: 2, text: 'DO some coding 5', marked: false }} /> */}
            {todos.map(todo => 
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    markTodo={markTodo}
                />)}
        </div>
    )
}

export default TodoList