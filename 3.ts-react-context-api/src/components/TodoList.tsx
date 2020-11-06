import React from 'react';
import { useTodosState } from '../contexts/TodosContexts';
import TodoItem from "./TodoItem";
function TodoList() {
    const todos = useTodosState();
    return (
        <div>
            <ul>
                {todos.map((todo)=><TodoItem todo={todo} key={todo.id}/>)}
            </ul>
        </div>
    );
}

export default TodoList;