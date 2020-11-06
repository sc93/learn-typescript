import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type Todo ={
    id : number;
    text : string;
    done : boolean;
}
type TodoState = Todo[];

const TodosStateContext = createContext<TodoState |undefined>(undefined);

type Action = 
    | {type : 'CREATE'; text : string}
    | {type : 'TOGGLE'; id : number}
    | {type : 'REMOVE'; id : number};

type TodosDispatch = Dispatch<Action>;


const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

function todoReducer(state : TodoState, action : Action):TodoState {
    switch(action.type){
        

        case 'CREATE' : 
            const nextId = Math.max(...state.map(todo=>todo.id))+1;
            return state.concat(
                {
                    id : nextId,
                    text : action.text, 
                    done : false
                }
            );
        case 'TOGGLE' :
            return state.map(todo => 
                todo.id === action.id ? {...todo, done : !todo.done} : todo);
        case 'REMOVE' : 
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error("Unhandled Action");
    }
}

export function TodosContextProvider({children} : {children:React.ReactNode}){
    const [todos,dispatch] = useReducer(todoReducer,[
        {
            id : 1,
            text : 'Context Api 배우기',
            done : true,
        },
        {
            id : 2,
            text : 'TypeScript 배우기',
            done : true,
        },
        {
            id : 3,
            text : 'React 배우기',
            done : false,
        },
    ]);
    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

export function useTodosState(){
    const state = useContext(TodosStateContext);
    if(!state) throw new Error("TodosProvider not found!");
    return state;
}
export function useTodosDispatch(){
    const dispatch = useContext(TodosDispatchContext);
    if(!dispatch) throw new Error("TodosProvider not found!");
    return dispatch;
}