import { useSelector } from 'react-redux';
import {RootState} from '../modules/index';


export default function useTodos(){
    const {todos} = useSelector((state : RootState)=>({todos : state.todos}));
    return todos;
}