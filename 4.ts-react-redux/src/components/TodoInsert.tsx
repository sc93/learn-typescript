import React, { useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';
function TodoInsert() {
    const [value,setValue] = useState("");
    const addTodo = useAddTodo();
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                value={value}
                placeholder="할일?"
                onChange={onChange}
                />
            <button>등록</button>
        </form>
    );
}

export default TodoInsert;