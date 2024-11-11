import React, { useState } from "react";
import "./TodoList.css";
import NewTask from "../NewTask/NewTask";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.taskInput.value;

    if (inputValue.trim()) {
      const newTask = {
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      e.target.reset();
    }
  };

  return (
    <div>
      <form className="new-task" onSubmit={handleSubmit}>
        <input
          className="newtask-input"
          type="text"
          name="taskInput"
          required
        />
        <button type="submit">+</button>
      </form>
      <ul className="newtask-input">
        <h3>Tasks for today</h3>
        {tasks.map((task) => (
          <NewTask id={task.id} text={task.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
