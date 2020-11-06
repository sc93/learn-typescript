import React from 'react';
import CounterContainer from './containers/CounterContainer'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <TodoInsert/>
      <TodoList/>
    </>
  );
}

export default App;
