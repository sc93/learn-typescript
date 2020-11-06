import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

import {TodosContextProvider} from './contexts/TodosContexts'
function App() {
  return (
    <TodosContextProvider>
      <TodoForm/>
      <TodoList/>
    </TodosContextProvider>
  );
}

export default App;
