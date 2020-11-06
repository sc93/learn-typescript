import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContexts';

function TodoForm() {
    const [value , setValue] = useState('');
    const dispatch = useTodosDispatch();
    const onSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        dispatch({type:'CREATE',text :value})
        setValue("");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value ={value} placeholder="할일?" onChange={(e)=>setValue(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default TodoForm;