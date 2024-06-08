import React, { useState } from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

    const dummyData = [
        { id: uuid(), text: 'DO some coding 1', marked: false },
        { id: uuid(), text: 'DO some coding 2', marked: true },
        { id: uuid(), text: 'DO some coding 3', marked: true },
        { id: uuid(), text: 'DO some coding 4', marked: false },
    ]
    const [todos, setTodos] = useState(dummyData);


    function addTodo(todo) {
        setTodos([...todos, todo]);
        // setTodos((prev)=> [...prev, todo])
    }

    function deleteTodo(id) {
        // const newTodos = todos.filter(todo => {
        //     if(todo.id == id) return false;
        //     else return true;
        // })
        const newTodos = todos.filter(todo => todo.id != id);
        setTodos(newTodos);

        // setTodos(prev => prev.filter(todo => todo.id != id));
    }

    function markTodo(id){
        setTodos(prev => prev.map(todo =>  {
            if(todo.id == id){
                if(todo.marked){
                    return {...todo, marked : false}
                }
                return {...todo, marked : true}
            }
            else{
                return todo;
            }
        }))
        // setTodos(prev => prev.map(todo => todo.id == id ? {...todo, marked: !marked} : todo))
    }

    return (
        <div>
            <InputForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} />

        </div>
    )
}

export default TodoApp