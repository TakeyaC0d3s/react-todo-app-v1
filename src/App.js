import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    // Input form from passing in TodoList
    <div className='todo-app'>
       <h1>Todo App</h1>
       
      <TodoList /> 
     
    
    </div>
  );
}

export default App;
