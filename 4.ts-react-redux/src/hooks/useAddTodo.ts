import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {addTodo} from '../modules/todos';
export default function useAddTodos(){
    const dispatch = useDispatch();
    return useCallback((text)=>{
        dispatch(addTodo(text));
    },[dispatch]);
}