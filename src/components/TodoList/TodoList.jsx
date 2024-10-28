import React, { useState } from 'react';
import './TodoList.css'

function TodoList() {
  const [Tasks, setTasks] = useState([]);
  const [InputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (InputValue.trim()) {
      setTasks([...Tasks, { text: InputValue, completed: false }]);
      setInputValue('');
    }
  };

  function toggleCompletion(index) {
    setTasks(Tasks.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    )));
  }

  return (
    <div>
      <form className="New-task" onSubmit={handleSubmit}>
        <input
          className="Newtask-input"
          type="text"
          value={InputValue}
          onChange={handleChange}
        />
        <button type="submit">Add task</button>
      </form>
      <ul className='Newtask-input'>
        <h3> Tasks for today</h3>
        {Tasks.map((Tasks, index) => (
          <li key={index} className={Tasks.completed ? 'completed' : ''} >
            {/* classnames */}
            <input
            className='Newtask-input' 
              type="checkbox"
              checked={Tasks.completed}
              onChange={() => toggleCompletion(index)}
            />
            {Tasks.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

    

