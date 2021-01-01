import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
// Array to store value of state and function to update value
const[input, setInput] = useState('');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus() //focus value used as ref (set cursor inside inout box automatically )
})

const handleChange = e => {
    setInput(e.target.value); //set to input from keyboard
};

const handleSubmit = e => {
    e.preventDefault();
     // function for storing user text input with random id number (up to 10000) for view in
     // ... console.log
     props.onSubmit({
      id:Math.floor(Math.random() * 10000), //random number generator
        text: input //value from keyboard
     });

setInput('');
};

    return (
    // Form for input with sumbit function
     <form className='todo-form' onSubmit={handleSubmit}>
         <input 
         type='text'
         placeholder='Add a todo task' 
         value={input}
         name='text' 
         className='todo-input'
         onChange={handleChange}
         ref={inputRef}
         />
         <button className='todo-button'>Add todo</button>
     </form>  
     );
}

export default TodoForm
