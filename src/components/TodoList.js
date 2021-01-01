import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

// 'rfce' keyboard shortcut to quickly insert new function
function TodoList() {
    // new state passing in empty array
    const [todos, setTodos] = useState([]);
    // functions to implement parameters of TodoForm
    const addTodo = todo => {
        // if statement for action to remain blank with char/text absence 
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos =[todo, ...todos]
        // set value of setTodos parameter
        setTodos(newTodos);
        // console.log(todo,...todos); // send paramters to console.log
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev =>prev.map(item => (item.id === todoId ? newValue : item))
        )
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    };

    return (
        // Pass in TodoForm and add input to console.log
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList
